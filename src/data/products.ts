import { Product } from '../types';

export const WHATSAPP_NUMBER = '917680802942';
export const WHATSAPP_DISPLAY = '+91 76808 02942';
export const WHATSAPP_CATALOG_URL = 'https://wa.me/c/7680802942';
export const FLAT_SHIPPING_CHARGE = 70;

export const PRODUCTS: Product[] = [
  {
    id: 'saffron-skin-oil',
    name: 'Saffron Skin Oil',
    subtitle: '16 Herbal Ingredients Infused in Pure Cold-Pressed Oils',
    category: 'Skin',
    primarySize: '50 ml',
    primaryPrice: 490,
    imageFile: 'WhatsApp Image 2026-10-11 at 2.14.33 PM.jpeg',
    realPhotoLabel: 'Amber bottles in batch production on newspaper with 16 Ingredients label',
    variants: [
      { size: '50 ml', price: 490 },
      { size: '100 ml', price: 900 },
    ],
    tagline: 'Deep glow and natural complexion nourishment without synthetic chemicals.',
    labelCount: '16 Ingredients',
    ingredients: [
      'Kashmiri Saffron (Kumkumadi strands)',
      'Pure Cold-Pressed Virgin Coconut Oil',
      'Sweet Almond Oil',
      'Extra Virgin Olive Oil',
      'Thulasi (Holy Basil)',
      'Carrot Root Extract',
      'Beetroot Extract',
      'Kasthuri Turmeric (Wild Kasturi Pasupu)',
      'Gandhakachoralu (Fragrant Spikenard)',
      'Athimadhuram (Licorice root)',
      'Manjistha (Indian Madder)',
      'Vetiver root',
      'Pure essential plant lipids'
    ],
    benefits: [
      'Imparts a natural radiant morning glow and evens skin tone',
      'Noticeable improvement in skin softness and texture within 7 days',
      'Fades dark spots, sun tan, and post-blemish pigmentation',
      'Gentle and chemical-free for babies after bath as well as adults'
    ],
    howToUse: [
      'For Adults: After shower or evening face wash, dispense 3 to 4 drops onto fingertips and gently press into damp face and neck.',
      'For Babies: After bath, warm 3 to 4 drops in clean palms and gently massage over cheeks and limbs.',
      'Use consistently morning or night. No greasy residue.'
    ],
    shelfLife: '12 months from packing (Batch Exp: 2027)',
    storage: 'Store in a cool, dry place away from direct sunlight. Seal cap tightly.',
    farmOrigin: 'Farm-grown Kasturi turmeric & tulsi blended with cold-pressed oils',
    packagingType: 'Bottle',
    accentColor: '#D97706',
    isBestseller: true
  },
  {
    id: 'face-bath-powder',
    name: 'Face Pack & Bath Powder',
    subtitle: 'Traditional Ubtan with 20 Herbal Botanicals',
    category: 'Skin',
    primarySize: '200 g',
    primaryPrice: 350,
    imageFile: 'WhatsApp Image 2026-10-11 at 2.05.57 PM.jpeg',
    realPhotoLabel: 'Green stand-up zip pouch with 20 Herbal Ingredients label',
    variants: [
      { size: '200 g', price: 350 },
      { size: '500 g', price: 850 },
      { size: '1 kg', price: 1600 }
    ],
    tagline: 'Ancient soap-free herbal bath and face pack for blemish-free, refreshed skin.',
    labelCount: '20 Herbal Ingredients',
    ingredients: [
      'Senna Flowers',
      'Damask Rose Petals',
      'Vetiver (Khus root)',
      'Licorice (Athimadhuram)',
      'Thungagaddalu (Nut grass root)',
      'Bavanchalu (Bakuchi seeds)',
      'Gandhakachoralu',
      'Green Gram (Moong)',
      'Red Lentils (Masoor dal)',
      'Neem Leaves',
      'Holy Basil (Tulsi)',
      'Raw Rice',
      'Desi Chickpeas (Chana)',
      'Wild Amla',
      'Sundried Orange Peel',
      'Kasthuri Turmeric',
      'Multani Mitti (Fuller\'s Earth)',
      'Sweet Almonds',
      'Methi (Fenugreek)',
      'Manjistha'
    ],
    benefits: [
      'Deeply cleanses clogged pores and removes excess sebum without stripping moisture',
      'Replaces harsh chemical body soaps for daily soothing bath routines',
      'Clears dullness, dead skin cells, and stubborn sun tanning naturally',
      'Infuses skin with earthy, cooling botanical fragrance throughout the day'
    ],
    howToUse: [
      'As a Daily Bath Powder: Mix 2–3 tablespoons with plain water to form a soft paste. Rub gently over body in place of commercial soap and rinse off.',
      'As a Face Pack: Mix 1 tablespoon with raw milk, curd, or rose water. Apply evenly, leave for 15 minutes, and gently rinse with lukewarm water.'
    ],
    shelfLife: '12 months from packing (Batch Exp: 2027)',
    storage: 'Keep in an airtight container or keep ziplock pouch tightly zipped away from moisture.',
    farmOrigin: 'Formulated with farm-dried rose, neem, tulsi, and turmeric',
    packagingType: 'Pouch',
    accentColor: '#166534',
    isBestseller: true
  },
  {
    id: 'bhringraj-blue-hair-oil',
    name: 'Bhringraj Blue Hair Oil',
    subtitle: 'Hand-Crafted Herbal Elixir with 29 Powerful Botanicals',
    category: 'Hair',
    primarySize: '200 ml',
    primaryPrice: 400,
    imageFile: 'WhatsApp Image 2026-10-11 at 2.12.43 PM.jpeg',
    realPhotoLabel: 'Tall clear bottle with green flip-cap and 29 Powerful Ingredients label',
    variants: [
      { size: '200 ml', price: 400 },
      { size: '500 ml', price: 1100 },
      { size: '1 L', price: 2100 }
    ],
    tagline: 'Slow-infused herbal blue oil that feeds hair roots and calms your nervous system.',
    labelCount: '29 Powerful Ingredients',
    ingredients: [
      'Fresh Bhringraj (False Daisy)',
      'Neelambari / Indigo leaves (gives natural botanical blue hue)',
      'Brahmi (Bacopa monnieri)',
      'Hibiscus flowers & leaves',
      'Wild Amla (Indian Gooseberry)',
      'Cold-Pressed Virgin Coconut Oil',
      'Sweet Almond Oil',
      'Kalonji (Black Seed oil)',
      'Fenugreek (Mentulu)',
      'Vetiver roots (Khus)',
      'Neem leaves',
      'Curry leaves',
      'Holy Basil (Tulsi)',
      'Rosemary leaves',
      'Bael fruit & seeds',
      'Flax seeds',
      'Chia seeds',
      'Nagarmotha (Nut Grass)',
      'Zero Mineral Oil',
      'Zero Liquid Paraffin',
      'Zero Artificial Fragrance'
    ],
    benefits: [
      'Arrests hair thinning by nourishing dormant follicles with botanical nutrients',
      'Distinctive natural deep blue hue derived from whole indigo and herb infusion (no dyes)',
      'Deeply conditions dry scalp, controls flaky dandruff, and delays premature greying',
      'Provides a deeply calming, cooling sensation that promotes restful sleep'
    ],
    howToUse: [
      'Warm a small quantity of oil between clean palms.',
      'Part hair in sections and gently massage oil directly into scalp using circular fingertip motions for 10 minutes.',
      'Apply lightly along hair lengths and split ends.',
      'Leave on for at least 1 hour or overnight before washing with Krithveda herbal shampoo.'
    ],
    shelfLife: '18 months from packing (Batch Exp: 2027)',
    storage: 'Store in a cool place away from direct heat. Natural herbal sediment may settle at the base.',
    farmOrigin: 'Farm-grown fresh Bhringraj, curry leaves, and hibiscus slow-steeped at low temperature',
    packagingType: 'Bottle',
    accentColor: '#1E40AF',
    isBestseller: true
  },
  {
    id: 'hair-pack-powder',
    name: 'Hair Pack Powder',
    subtitle: 'Intense Scalp & Follicle Therapy with 16 Natural Ingredients',
    category: 'Hair',
    primarySize: '200 g',
    primaryPrice: 350,
    imageFile: 'WhatsApp Image 2026-10-11 at 2.12.13 PM.jpeg',
    realPhotoLabel: 'Gold foil stand-up zip pouch with 16 Natural Ingredients label',
    variants: [
      { size: '200 g', price: 350 },
      { size: '500 g', price: 850 },
      { size: '1 kg', price: 1600 }
    ],
    tagline: 'Nutrient-dense weekly hair food for thicker strands and strong root anchoring.',
    labelCount: '16 Natural Ingredients',
    ingredients: [
      'Senna Leaves & Flowers',
      'Hibiscus Flower & Leaves',
      'Pure Indigo',
      'Bhringraj',
      'Brahmi',
      'Kalonji (Black Cumin)',
      'Amla (Wild Gooseberry)',
      'Mentulu (Fenugreek seeds)',
      'Chia Seeds',
      'Flax Seeds',
      'Thulasi (Holy Basil)',
      'Neem Leaves',
      'Curry Leaves',
      'Farm Henna Leaves',
      'Zero Preservatives',
      'Zero Fillers'
    ],
    benefits: [
      'Strengthens weakened hair shafts from root to tip, preventing breakage',
      'Eliminates stubborn dry scalp itching and dandruff build-up',
      'Binds plant mucilage (flax + chia + hibiscus) for glossy, manageable hair without silicone',
      'Restores volume and bouncy texture to chemically damaged hair'
    ],
    howToUse: [
      'Take 2–4 tablespoons of powder based on hair length.',
      'Mix with warm water, curd, or rice starch water to make a smooth paste. Let sit for 15 minutes so the seeds release their natural conditioning gel.',
      'Apply generously onto scalp and hair lengths.',
      'Wear a shower cap, leave on for 30–45 minutes, and rinse thoroughly with plain water or herbal shampoo.'
    ],
    shelfLife: '12 months from packing (Batch Exp: 2027)',
    storage: 'Keep sealed in moisture-proof zip pouch.',
    farmOrigin: 'Hand-picked curry leaves, hibiscus, and neem from our own agricultural plots',
    packagingType: 'Pouch',
    accentColor: '#15803D'
  },
  {
    id: 'liquid-shampoo',
    name: 'Liquid Herbal Shampoo',
    subtitle: 'Zero-Chemical Cleanser Brewed with 16 Natural Botanicals',
    category: 'Hair',
    primarySize: '200 ml',
    primaryPrice: 300,
    imageFile: 'WhatsApp Image 2026-10-11 at 2.13.14 PM.jpeg',
    realPhotoLabel: 'Amber bottle with 16 Natural Ingredients decoction shampoo label',
    variants: [
      { size: '200 ml', price: 300 },
      { size: '500 ml', price: 750 },
      { size: '1 L', price: 1400 }
    ],
    tagline: 'Gentle, natural botanical foam that cleanses without stripping natural scalp oils.',
    labelCount: '16 Natural Ingredients',
    ingredients: [
      'Reetha (Soapnut extract)',
      'Shikakai (Acacia concinna)',
      'Hibiscus Flower extract',
      'Rose Petals',
      'Vetiver (Khus root)',
      'Wild Amla extract',
      'Fenugreek seed mucilage',
      'Flax Seeds',
      'Rosemary extract',
      'Nut Grass (Nagarmotha)',
      'Bael Fruit & Seeds',
      'Neem leaf decoction',
      'Holy Basil (Tulsi)',
      'Purified Spring Water',
      'No SLS / SLES',
      'No Parabens'
    ],
    benefits: [
      'Mild natural saponins from Reetha produce gentle, non-stripping lather',
      'Maintains healthy scalp pH and leaves hair silky without chemical conditioners',
      'Safe for regular washes and sensitive scalps prone to chemical irritation',
      'Pure herbal botanical fragrance—no synthetic perfumes'
    ],
    howToUse: [
      'Wet hair thoroughly with water.',
      'Pour 10–15 ml of liquid shampoo into palm and gently massage into wet scalp.',
      'Work into a gentle herbal lather for 2 minutes, then rinse completely.',
      'For oiled hair, repeat wash once more for complete scalp clarity.'
    ],
    shelfLife: '12 months from packing (Batch Exp: 2027)',
    storage: 'Store in shower shelf away from extreme heat. Shake gently before use.',
    farmOrigin: 'Slow-simmered herbal decoction made fresh in small batches at our home facility',
    packagingType: 'Bottle',
    accentColor: '#854D0E',
    isBestseller: true
  },
  {
    id: 'shampoo-powder',
    name: 'Shampoo Powder',
    subtitle: 'Centuries-Old Head-Bath Herbal Wash with 16 Botanicals',
    category: 'Hair',
    primarySize: '200 g',
    primaryPrice: 300,
    imageFile: 'WhatsApp Image 2026-10-11 at 2.15.02 PM.jpeg',
    realPhotoLabel: 'Matte black zip pouch photographed on grass with 16 Ingredients label',
    variants: [
      { size: '200 g', price: 300 },
      { size: '500 g', price: 750 },
      { size: '1 kg', price: 1450 }
    ],
    tagline: 'The timeless Andhra head-bath powder that strengthens hair roots naturally.',
    labelCount: '16 Ingredients',
    ingredients: [
      'Kunkudukoi (Soapnut / Reetha)',
      'Shikakai',
      'Flaxseeds',
      'Menthulu (Fenugreek)',
      'Rosemary',
      'Amla',
      'Kalonji (Black Seed)',
      'Vattiveru (Vetiver)',
      'Damask Rose Petals',
      'Thungagaddalu (Nut grass)',
      'Bavanchalu',
      'Ganthakachoralu',
      'Neem leaf powder',
      'Thulasi',
      'Curry Leaf powder',
      'Hibiscus Flower'
    ],
    benefits: [
      '100% dry botanical blend with zero chemical preservatives or liquid binders',
      'Cleanses heavy oiled hair effortlessly while preserving root strength',
      'Boosts hair thickness, builds natural density, and reduces breakage',
      'Cooling and invigorating sensation during weekly head baths'
    ],
    howToUse: [
      'Take 2 spoonfuls of shampoo powder for men / short hair; take 3–4 spoonfuls for longer hair.',
      'Add water to mix into a smooth, thin paste.',
      'Let the paste rest for 30 minutes before use so herbs activate.',
      'Gently massage paste onto scalp and hair, just like a regular shampoo.',
      'Rinse thoroughly with clean water during head bath. Avoid heavy hair oils immediately before washing.'
    ],
    shelfLife: '12 months from packing (Batch Exp: 2027)',
    storage: 'Keep in dry airtight container. Do not introduce wet spoons.',
    farmOrigin: 'Sun-dried herbs and wild shikakai stone-ground at low friction speed',
    packagingType: 'Pouch',
    accentColor: '#065F46'
  },
  {
    id: 'organic-moringa-powder',
    name: 'Organic Moringa Powder',
    subtitle: 'Organically Grown & Shade-Dried Pure Moringa Leaf Powder',
    category: 'Pantry',
    primarySize: '200 g',
    primaryPrice: 300,
    imageFile: 'WhatsApp Image 2026-10-11 at 2.13.44 PM.jpeg',
    realPhotoLabel: 'Blue metallic pouch with clear window, nutrition table and Wife of Vamsi mark',
    variants: [
      { size: '200 g', price: 300 }
    ],
    tagline: 'Organically prepared from leaves grown on our own farm. Carefully dried to preserve nutrients.',
    labelCount: '100% Farm Grown',
    ingredients: [
      '100% Pure Organic Moringa oleifera Leaves (No fillers, no colors, no preservatives)'
    ],
    benefits: [
      'Naturally rich in vitamins, plant protein, minerals, and polyphenols',
      'Provides ~27g Protein, ~17mg Vitamin C, ~440mg Calcium, ~300mg Magnesium per 100g',
      'Supports daily energy, vitality, gut digestion, and overall immune resilience',
      'Strengthens hemoglobin count and promotes hormonal balance'
    ],
    howToUse: [
      'Mix 1 teaspoon (3–5g) in warm water, buttermilk, morning smoothie, or dal.',
      'Can be sprinkled into roti dough, dosa batter, or daily soups.',
      'Enjoy daily as part of a wholesome family diet.'
    ],
    shelfLife: '12 months from packing (Batch Exp: 2027)',
    storage: 'Store in a cool, dry place. Keep pouch tightly zipped.',
    farmOrigin: 'Harvested directly from our own certified chemical-free moringa grove',
    packagingType: 'Pouch',
    accentColor: '#15803D',
    isBestseller: true
  },
  {
    id: 'amla-powder',
    name: 'Pure Wild Amla Powder',
    subtitle: 'Sun-Dried Indian Gooseberry Stone-Ground for High Vitamin C',
    category: 'Pantry',
    primarySize: '250 g',
    primaryPrice: 300,
    variants: [
      { size: '250 g', price: 300 }
    ],
    tagline: 'Nature\'s richest source of bioavailable Vitamin C and rejuvenating tannins.',
    labelCount: '100% Pure Amla',
    ingredients: [
      '100% Desi Wild Amla (Phyllanthus emblica) Fruit'
    ],
    benefits: [
      'Powerful antioxidant that supports collagen synthesis and radiant skin',
      'Consistently strengthens hair follicles when ingested or applied as scalp pack',
      'Aids healthy digestion, gut acidity balance, and eye health',
      'Zero bitterness enhancers or artificial acidity adjusters'
    ],
    howToUse: [
      'For Wellness: Drink 1 teaspoon with lukewarm water and a spoonful of raw honey every morning on an empty stomach.',
      'For Hair: Mix with water or curd and apply as a conditioning hair root pack for 30 minutes before washing.'
    ],
    shelfLife: '12 months from packing',
    storage: 'Store in an airtight jar in a cool, shaded pantry cupboard.',
    farmOrigin: 'Sourced from chemical-free growers and sun-dried on clean hygienic beds',
    packagingType: 'Pouch',
    accentColor: '#4D7C0F'
  },
  {
    id: 'henna-powder',
    name: 'Pure Rajasthani Henna Powder',
    subtitle: 'Triple-Sifted Natural Lawsonia Leaves for Cooling & Rich Conditioning',
    category: 'Hair',
    primarySize: '250 g',
    primaryPrice: 300,
    variants: [
      { size: '250 g', price: 300 }
    ],
    tagline: 'Micro-fine triple-sifted leaf powder that coats hair with conditioning goodness.',
    labelCount: '100% Pure Henna',
    ingredients: [
      '100% Pure Lawsonia inermis (Henna) Dried Leaf Powder'
    ],
    benefits: [
      'Natural rich auburn tint that bonds with hair keratin without damaging the cuticle',
      'Provides deep scalp cooling, relieves stress headaches, and calms excessive heat',
      'Natural remedy against dandruff and flaky scalp conditions',
      'Zero PPD, zero chemical dye accelerators, zero ammonia'
    ],
    howToUse: [
      'Soak required powder in black tea or plain warm water overnight in an iron vessel for best color release.',
      'Next morning, add a tablespoon of curd or lemon juice.',
      'Apply thoroughly from root to tip, cover with a shower cap for 2–3 hours, and rinse with plain water.'
    ],
    shelfLife: '12 months from packing',
    storage: 'Keep sealed away from sunlight and moisture.',
    farmOrigin: 'Organically grown, shade-dried, and cloth-sifted for micro-fine texture',
    packagingType: 'Pouch',
    accentColor: '#9A3412'
  },
  {
    id: 'indigo-powder',
    name: 'Pure Indigo Leaf Powder',
    subtitle: 'Chemical-Free Natural Plant Dye for Deep Black Hair Coverage',
    category: 'Hair',
    primarySize: '250 g',
    primaryPrice: 400,
    variants: [
      { size: '250 g', price: 400 }
    ],
    tagline: 'Pair with henna for chemical-free jet black coverage without toxic hair dyes.',
    labelCount: '100% Pure Indigo',
    ingredients: [
      '100% Pure Indigofera tinctoria (True Indigo) Leaf Powder'
    ],
    benefits: [
      'Enables safe, permanent gray hair coverage from brown to deep jet black',
      'Protects scalp from harsh allergies caused by chemical PPD hair dyes',
      'Imparts a natural glossy dark sheen to dull gray strands',
      'Non-irritating, plant-based, and completely vegan'
    ],
    howToUse: [
      'Step 1: First dye hair with Krithveda Henna, wash with water and let dry (hair will turn copper-auburn).',
      'Step 2: Mix Indigo powder with lukewarm water and a pinch of salt to form a paste. Let rest for 15 minutes only (indigo activates rapidly).',
      'Step 3: Apply immediately to hair, leave on for 60–90 minutes, and rinse thoroughly with plain water. Do not shampoo for 48 hours for oxidation to complete black.'
    ],
    shelfLife: '12 months from packing',
    storage: 'Keep in an airtight bag away from air and humidity.',
    farmOrigin: 'Grown sustainably in South Indian fields without chemical pesticides',
    packagingType: 'Pouch',
    accentColor: '#1E3A8A'
  },
  {
    id: 'turmeric-powder',
    name: 'Farm-Grown Turmeric Powder',
    subtitle: 'Curcumin-Rich Golden Turmeric from Our Own Agricultural Beds',
    category: 'Pantry',
    primarySize: '250 g',
    primaryPrice: 250,
    imageFile: 'WhatsApp Image 2026-10-11 at 2.11.00 PM.jpeg',
    realPhotoLabel: 'Red metallic pouch with window showing vibrant golden turmeric and round tree logo',
    variants: [
      { size: '250 g', price: 250 }
    ],
    tagline: 'Fresh earthy aroma, rich natural oils, and unadulterated high curcumin.',
    labelCount: 'Own Farm Harvest',
    ingredients: [
      '100% Pure Curcuma longa Rhizome Powder (Grown without synthetic urea or pesticides)'
    ],
    benefits: [
      'Retains natural essential turmeric oils often removed in commercial processing',
      'High natural curcumin content for anti-inflammatory immunity and joint health',
      'Ideal for golden milk (haldi doodh), authentic cooking, and soothing skincare pastes',
      'Zero lead chromate, zero starch fillers, zero artificial color pigments'
    ],
    howToUse: [
      'In Cooking: Use 1/4 to 1/2 teaspoon in curries, rasam, and vegetable gravies.',
      'Golden Milk: Simmer 1/2 teaspoon in warm milk with a pinch of black pepper and jaggery before bed.',
      'Skin Care: Mix with raw milk or honey as an antiseptic blemish face mask.'
    ],
    shelfLife: '12 months from packing',
    storage: 'Store in a dark glass container or sealed pouch away from sunlight to preserve curcumin potency.',
    farmOrigin: 'Planted, harvested, boiled, sun-dried, and ground on our own farm in Andhra Pradesh',
    packagingType: 'Pouch',
    accentColor: '#D97706',
    isBestseller: true
  },
  {
    id: 'sprouted-ragi-powder',
    name: 'Sprouted Ragi Powder',
    subtitle: 'Traditional Sprouted & Stone-Milled Finger Millet for Family Nutrition',
    category: 'Pantry',
    primarySize: '1 kg',
    primaryPrice: 400,
    variants: [
      { size: '1 kg', price: 400 }
    ],
    tagline: 'Slow-sprouted for superior calcium and iron absorption. Wholesome baby & family food.',
    labelCount: 'Sprouted & Roasted',
    ingredients: [
      '100% Pure Sprouted Desi Finger Millet (Eleusine coracana / Nachni)'
    ],
    benefits: [
      'Sprouting process dramatically increases bioavailability of calcium, iron, and dietary fiber',
      'Gentle on infant digestive systems—ideal first food for babies from 6 months onwards',
      'Provides slow-release complex carbs that sustain stamina for school children and adults',
      'Lightly roasted for a nutty traditional aroma and easy digestion'
    ],
    howToUse: [
      'Ragi Porridge / Malt: Mix 2 tablespoons of sprouted ragi powder in 1 glass of water or milk with zero lumps.',
      'Cook on medium flame for 5–7 minutes, stirring continuously until thickened.',
      'Add jaggery and a pinch of cardamom for sweet porridge, or add buttermilk and salt for a cooling summer drink.'
    ],
    shelfLife: '6 months from packing for peak freshness',
    storage: 'Store in an airtight container in a dry pantry cupboard.',
    farmOrigin: 'Procured from organic dryland farmers, washed, slow-sprouted, sun-dried, and roasted at home',
    packagingType: 'Pouch',
    accentColor: '#78350F'
  }
];

export function buildWhatsAppProductUrl(product: Product, variant?: { size: string; price: number }): string {
  const chosenSize = variant ? variant.size : product.primarySize;
  const chosenPrice = variant ? variant.price : product.primaryPrice;
  const text = `Hi Krithveda Naturals, I'd like to order: ${product.name} ${chosenSize} (₹${chosenPrice}). Please share the next steps and payment details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppMultiOrderUrl(items: { name: string; size: string; price: number; quantity: number }[]): string {
  if (items.length === 0) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Krithveda Naturals, I'd like to place an order.")}`;
  }

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + FLAT_SHIPPING_CHARGE;

  let message = `Hi Krithveda Naturals, I would like to place an order:\n\n`;
  items.forEach((item, index) => {
    message += `${index + 1}. ${item.name} (${item.size}) × ${item.quantity} = ₹${item.price * item.quantity}\n`;
  });
  message += `\nSubtotal: ₹${subtotal}\nFlat Shipping: ₹${FLAT_SHIPPING_CHARGE}\nTotal Payable: ₹${total}\n\nPlease confirm availability and share your UPI / bank payment details so I can transfer and share my delivery address.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
