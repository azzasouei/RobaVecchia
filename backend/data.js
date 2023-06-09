import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'azza',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: true,
    },
    {
      name: 'rawaa',
      email: 'user@exemple.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: false,
    },
    
   
  ],
    products: [
      {
        //_id : '1',
        name: 'H&M-slim-fit-shirt',
        slug: 'H&M-slim-fit-shirt',
        category: 'Shirts',
        image: '/images/61ecbuT3TnL._UY550_.jpg', 
        price: 15 ,
        countInStock: 0,
        brand: 'H&M',
        numReviews: 10,
        description: 'high quality shirt',
      },
      {
        //_id : '2',
        name: 'H&M-shirt',
        slug: 'H&M-shirt',
        category: 'Shirts',
        image: '/images/pants.jpg', 
        price: 20,
        countInStock: 1,
        brand: 'H&M',
        numReviews: 10,
        description: 'high quality shirt',
      },
      {
        //_id : '3',
        name: 'vintage dress',
        slug: 'vintage dress',
        category: 'dress',
        image: '/images/pngegg (5).png', // 679px × 829px
        price: 80,
        countInStock: 1,
        brand: 'H&M',
        numReviews: 10,
        description: 'feminin dress',
      },
      {
        //_id : '4',
        name: 'short dress and shirt with stripes',
        slug: 'short dress and shirt with stripes',
        category: 'couples',
        image: '/images/419-Xw21ibL.jpg', // 679px × 829px
        price: 40,
        countInStock: 1,
        brand: 'H&M',
        numReviews: 10,
        description: 'feminin dress',
      },
      {
        //_id : '5',
        name: ' dress ',
        slug: ' dress',
        category: 'dress',
        image: '/images/pngegg (1).png', 
        price: 40,
        countInStock: 1,
        brand: 'H&M',
        numReviews: 10,
        description: 'feminin dress',
      },
      {
        //_id : '6',
        name: 'short dress ',
        slug: 'short dress',
        category: 'dress',
        image: '/images/pngegg (7).png', 
        price: 40,
        countInStock: 1,
        brand: 'H&M',
        numReviews: 10,
        description: 'feminin dress',
      },
      {
        //_id : '7',
      name: 'shirts',
      slug: 'shirts',
      category: 'package',
      image: '/images/Shirts.jpg', 
      price: 40,
      countInStock: 3,
      brand: 'zara',
      numReviews: 10,
      description: 'matching fit',
    },
    ],
  };
  export default data;