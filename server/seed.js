require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
  { name: 'Yoyo Herbal Growth Oil', ingredients: 'Coconut, Castor, Rosemary', usage: 'Massage into scalp 2x daily', price: 400, image: 'oil1.jpg', category: 'Growth', description: 'Stimulates dormant hair follicles and boosts blood circulation to accelerate hair growth naturally.' },
  { name: 'Yoyo Strengthening Oil', ingredients: 'Argan, Jojoba, Vitamin E', usage: 'Apply to hair tips daily', price: 400, image: 'oil2.jpg', category: 'Strengthening', description: 'Fortifies each hair strand from root to tip, reducing breakage and making hair resilient and strong.' },
  { name: 'Yoyo Scalp Repair Oil', ingredients: 'Tea Tree, Peppermint, Aloe Vera', usage: 'Apply to scalp, leave 30 mins', price: 400, image: 'oil3.jpg', category: 'Repair', description: 'Heals dry, irritated scalp, removes buildup and restores a healthy balanced scalp environment.' },
  { name: 'Yoyo Moisture Boost Oil', ingredients: 'Avocado, Sweet Almond, Shea', usage: 'Apply from roots to tips weekly', price: 400, image: 'oil4.jpg', category: 'Moisture', description: 'Deeply hydrates dry and brittle hair, locking in moisture for soft, silky and manageable hair.' },
  { name: 'Yoyo Anti-Breakage Oil', ingredients: 'Biotin, Keratin, Olive Oil', usage: 'Apply to ends every other day', price: 400, image: 'oil5.jpg', category: 'Strengthening', description: 'Rebuilds the hair protein structure to prevent snapping, split ends and excessive shedding.' },
  { name: 'Yoyo Shine & Glow Oil', ingredients: 'Argan, Marula, Vitamin C', usage: 'Apply small amount to dry hair', price: 400, image: 'oil6.jpg', category: 'Shine', description: 'Adds brilliant shine and smooths the hair cuticle for a glossy, healthy-looking glow every day.' },
  { name: 'Yoyo Deep Root Oil', ingredients: 'Black Seed, Neem, Fenugreek', usage: 'Massage into scalp overnight', price: 400, image: 'oil7.jpg', category: 'Growth', description: 'Penetrates deep into hair roots to nourish follicles, fight thinning and promote dense hair growth.' },
  { name: 'Yoyo Curl Defining Oil', ingredients: 'Flaxseed, Coconut, Glycerin', usage: 'Apply to damp hair before styling', price: 400, image: 'oil8.jpg', category: 'Styling', description: 'Defines and enhances natural curls while reducing frizz and keeping curls bouncy and moisturized.' },
  { name: 'Yoyo Dandruff Control Oil', ingredients: 'Tea Tree, Eucalyptus, Zinc', usage: 'Apply to scalp 3x per week', price: 400, image: 'oil9.jpg', category: 'Repair', description: 'Eliminates dandruff, soothes itchy scalp and prevents flakes from returning with regular use.' },
  { name: 'Yoyo Silk Smooth Oil', ingredients: 'Silk Protein, Camellia, Rose Hip', usage: 'Apply to hair before blow-drying', price: 400, image: 'oil10.jpg', category: 'Shine', description: 'Coats each strand with silk proteins for ultra-smooth, frizz-free hair with a luxurious soft feel.' },
  { name: 'Yoyo Complete Hair Combo', ingredients: 'All 10 oils mixed', usage: 'Use as needed for full hair care', price: 600, image: 'combo.jpg', category: 'Combo', description: 'The ultimate all-in-one hair care solution combining all 10 oils for complete growth, repair and shine.' },
];

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/yoyos-hair')
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('✅ Seeded 11 products successfully!');
    process.exit(0);
  })
  .catch((err) => { console.error(err); process.exit(1); });
