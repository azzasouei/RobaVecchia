import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 4 },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

// Add a virtual 'timestamp' field to the schema
userSchema.virtual('timestamp').get(function () {
  return this.createdAt.getTime();
});

const User = mongoose.model('User', userSchema);
export default User;
