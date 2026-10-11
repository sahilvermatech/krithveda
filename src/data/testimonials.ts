export interface Testimonial {
  id: string;
  name: string;
  location: string;
  productUsed: string;
  headline: string;
  story: string;
  verifiedOrder: boolean;
  durationUsed: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ananya-reddy',
    name: 'Ananya Reddy',
    location: 'Hyderabad, Telangana',
    productUsed: 'Bhringraj Blue Hair Oil',
    headline: 'Real baby hair filling in after postpartum hair thinning',
    story: 'After my pregnancy, I had severe hair thinning around my temples. Commercial herbal oils I bought had 70% light liquid paraffin listed in fine print and gave me scalp bumps. Krithveda’s blue oil feels completely different—deeply cooling, authentic botanical aroma, and within 6 weeks of weekly scalp massage, baby hair started growing back along my hairline.',
    verifiedOrder: true,
    durationUsed: '3 months regular use'
  },
  {
    id: 'haritha-v',
    name: 'Haritha V.',
    location: 'Vijayawada, Andhra Pradesh',
    productUsed: 'Face Pack & Bath Powder',
    headline: 'Completely replaced chemical body soaps with this ubtan',
    story: 'I stopped using commercial soap bars six months ago. Mixing 2 spoons of Krithveda face pack with water gives a smooth herbal cleanse that removes daily sun tan and stubborn blemishes without leaving skin dry or stretched. It smells like fresh vetiver, rose, and green gram.',
    verifiedOrder: true,
    durationUsed: '6 months regular use'
  },
  {
    id: 'dr-suresh-kumar',
    name: 'Dr. Suresh Kumar',
    location: 'Bengaluru, Karnataka',
    productUsed: 'Organic Moringa & Turmeric',
    headline: 'Vibrant emerald green powder—clearly shade-dried without heat',
    story: 'As a doctor, I look for bioavailable plant antioxidants. Most commercial moringa powders turn dull brown from high-speed frictional pulverizers that destroy heat-sensitive Vitamin C. Krithveda’s moringa powder is bright emerald green, dissolves smoothly in morning buttermilk, and keeps my sustained energy high through long hospital shifts.',
    verifiedOrder: true,
    durationUsed: '4 months daily staple'
  },
  {
    id: 'meera-swaminathan',
    name: 'Meera Swaminathan',
    location: 'Chennai, Tamil Nadu',
    productUsed: 'Henna & Pure Indigo Powder',
    headline: '100% natural black gray coverage without chemical dye allergies',
    story: 'I developed severe scalp redness and swelling from PPD in chemical salon hair dyes. Following Vamsi’s 2-step method—Henna on day 1 followed by Indigo on day 2—gave me rich, natural black hair with zero irritation. My scalp feels completely calm.',
    verifiedOrder: true,
    durationUsed: '5 months regular use'
  },
  {
    id: 'rajesh-varma',
    name: 'Rajesh Varma',
    location: 'Visakhapatnam, Andhra Pradesh',
    productUsed: 'Sprouted Ragi Powder',
    headline: 'Wholesome roasted aroma for our baby and elderly parents',
    story: 'You can immediately tell that the finger millet was sprouted and gently roasted before milling. We make daily morning porridge for our toddler and for my 72-year-old mother. It digests effortlessly without bloating.',
    verifiedOrder: true,
    durationUsed: '4 months daily staple'
  }
];
