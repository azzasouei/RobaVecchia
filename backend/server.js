import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import uploadRouter from './routes/uploadRoutes.js';

dotenv.config();
mongoose.set('strictQuery', true);

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err.message);
    process.exit(1); // Exit the process in case of a database connection error
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.use('/api/upload', uploadRouter);
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);

// Timestamp validation middleware
const isRequestFresh = (req) => {
  const allowedTimeDifference = 60 * 60 * 1000; // 1 hour in milliseconds
  const reportedTime = req.body.timestamp; // Assuming the timestamp is sent in the request body

  if (!reportedTime) {
    return false; // If timestamp is not provided, consider it stale
  }

  const currentTime = new Date().getTime();
  const timeDifference = currentTime - reportedTime;

  return timeDifference <= allowedTimeDifference;
};

app.use((req, res, next) => {
  if (!isRequestFresh(req)) {
    return res.status(400).json({ message: 'Stale request - reported time is too old' });
  }

  next();
});

// Handle 404 Not Found errors
app.use((req, res, next) => {
  res.status(404).send({ message: 'Not Found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err); // Log the error for debugging purposes
  res.status(500).send({ message: 'Internal Server Error' });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
