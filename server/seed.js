require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  { name: 'Yoyo Herbal Growth Oil', ingredients: 'Coconut, Castor, Rosemary', usage: 'Massage into scalp 2x daily', price: 10, image: 'oil1.jpg', category: 'Growth' },
  { name: 'Yoyo Strengthening Oil', ingredients: 'Argan, Jojoba, Vitamin E', usage: 'Apply to hair tips daily', price: 12, image: 'oil2.jpg', category: 'Strengthening' },
  { name: 'Yoyo Scalp Repair Oil', ingredients: 'Tea Tree, Peppermint, Aloe Vera', usage: 'Apply to scalp, leave 30 mins', price: 11, image: 'oil3.jpg', category: 'Repair' },
  { name: 'Yoyo Moisture Boost Oil', ingredients: 'Avocado, Sweet Almond, Shea', usage: 'Apply from roots to tips weekly', price: 13, image: 'oil4.jpg', category: 'Moisture' },
  { name: 'Yoyo Anti-Breakage Oil', ingredients: 'Biotin, Keratin, Olive Oil', usage: 'Apply to ends every other day', price: 14, image: 'oil5.jpg', category: 'Strengthening' },
  { name: 'Yoyo Shine & Glow Oil', ingredients: 'Argan, Marula, Vitamin C', usage: 'Apply small amount to dry hair', price: 15, image: 'oil6.jpg', category: 'Shine' },
  { name: 'Yoyo Deep Root Oil', ingredients: 'Black Seed, Neem, Fenugreek', usage: 'Massage into scalp overnight', price: 12, image: 'oil7.jpg', category: 'Growth' },
  { name: 'Yoyo Curl Defining Oil', ingredients: 'Flaxseed, Coconut, Glycerin', usage: 'Apply to damp hair before styling', price: 13, image: 'oil8.jpg', category: 'Styling' },
  { name: 'Yoyo Dandruff Control Oil', ingredients: 'Tea Tree, Eucalyptus, Zinc', usage: 'Apply to scalp 3x per week', price: 11, image: 'oil9.jpg', category: 'Repair' },
  { name: 'Yoyo Silk Smooth Oil', ingredients: 'Silk Protein, Camellia, Rose Hip', usage: 'Apply to hair before blow-drying', price: 16, image: 'oil10.jpg', category: 'Shine' },
  { name: 'Yoyo Complete Hair Combo', ingredients: 'All 10 oils mixed', usage: 'Use as needed for full hair care', price: 80, image: 'combo.jpg', category: 'Combo' },
];

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/yoyos-hair')
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('✅ Seeded 11 products successfully!');
    process.exit(0);
  })
  .catch((err) => { console.error(err); process.exit(1); });
