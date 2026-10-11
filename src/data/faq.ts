export interface FAQItem {
  question: string;
  answer: string;
  category: 'Orders' | 'Products' | 'Ingredients' | 'Shipping';
}

export const FAQS: FAQItem[] = [
  {
    category: 'Orders',
    question: 'Why do you not offer Cash on Delivery (COD)?',
    answer: 'We prepare fresh, small batches without chemical shelf-stabilizers or commercial warehouse hoarding. In India, e-commerce COD has a 25–35% fake refusal rate where couriers leave parcels in transit for weeks before returning them damaged. For a genuine small-scale farm producer, that loss is unsustainable. Operating on pre-paid WhatsApp orders via UPI (Google Pay, PhonePe, Paytm) or direct bank transfer allows us to keep our pricing honest and affordable for real customers without padding costs.'
  },
  {
    category: 'Shipping',
    question: 'What are the shipping charges and delivery timelines?',
    answer: 'We charge a flat ₹70 shipping fee per order anywhere in India, regardless of package weight. Once your payment is verified on WhatsApp, your order is dispatched within 24 to 48 hours via India Post or premium courier (DTDC / Blue Dart). Delivery typically takes 3 to 5 business days for major cities and 5 to 7 days for remote locations. We share your tracking link directly on your WhatsApp chat.'
  },
  {
    category: 'Products',
    question: 'Can the Saffron Skin Oil and Bhringraj Oil be used on children?',
    answer: 'Yes! Our Saffron Skin Oil is 100% natural cold-pressed oils and botanicals (almond, virgin coconut, carrot, saffron, tulsi) and is traditionally used for gentle infant baby massage after bath. For children aged 3 and above, our Bhringraj Blue Hair Oil is wonderfully cooling and safe. Because we never add mineral oils, chemical preservatives, or synthetic fragrances, it is gentle on young scalps.'
  },
  {
    category: 'Ingredients',
    question: 'How do you test your products?',
    answer: 'We test every formulation extensively on ourselves, our children, our parents, and our local community over several months before offering it to the public. We inspect microbial purity, check stability in different seasonal temperatures, and verify that our slow stone-grinding keeps volatile oils intact. We do not use animals or artificial laboratory synthetics.'
  },
  {
    category: 'Products',
    question: 'How long do the products last? What is the shelf life?',
    answer: 'Our powders (Face Pack, Hair Pack, Shampoo Powder, Moringa, Turmeric) have a shelf life of 12 months when kept in dry, airtight conditions. Our hair oils and saffron skin oil last 12 to 18 months. Because our products do not contain chemical antifungals, always use a clean, dry spoon and avoid introducing water into powder pouches or oil bottles.'
  },
  {
    category: 'Products',
    question: 'Why do some labels say "KritVeda" and "Product by Wife of Vamsi"?',
    answer: 'When we first transitioned from software engineering to farming, Vamsi\'s wife formulated and prepared these recipes at our kitchen table for friends and family. The initial batch labels were printed locally as "KritVeda Naturals - The product by Wife of Vamsi". As word-of-mouth grew, we kept both spellings and honors to our home roots. Whether the label reads Krithveda or KritVeda, the artisanal purity inside the package is 100% identical and farm-crafted.'
  },
  {
    category: 'Products',
    question: 'How does the 2-step Henna and Indigo hair dye process work?',
    answer: 'Chemical black dyes use PPD and peroxide which damage the hair cuticle. Natural Indigo and Henna work in synergy: on Day 1 (or Step 1), apply pure Henna paste and leave for 2 hours—this colors gray hair copper-orange. On Step 2, mix Indigo powder with warm water, apply immediately to the hennaed hair, and wash after 60–90 minutes. Over the next 24–48 hours, the indigo oxidizes into a rich, natural dark brown to jet black.'
  },
  {
    category: 'Orders',
    question: 'How do I pay and how do I place my order on WhatsApp?',
    answer: 'Ordering is as easy as sending a message! Click "Order on WhatsApp" on any product or use our WhatsApp Order Builder to select multiple items. A pre-filled WhatsApp message will open on your phone or computer. We will immediately confirm item availability, share our UPI QR code or bank details, and once you share your payment screenshot and delivery address, your parcel is packed and tracked.'
  },
  {
    category: 'Shipping',
    question: 'What happens if a bottle arrives leaking or damaged?',
    answer: 'We pack every bottle with multi-layer bubble cushioning and secure caps. In the rare event of damage in transit, simply send us a quick photo or unboxing video on WhatsApp (+91 76808 02942) within 24 hours of delivery. We will immediately ship a fresh replacement at zero additional cost to you.'
  }
];
