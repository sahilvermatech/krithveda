export interface FarmCrop {
  name: string;
  season: string;
  practice: string;
  usedIn: string;
}

export interface SayAndDoItem {
  say: string;
  do: string;
  proofDetail: string;
}

export const SAY_AND_DO_ITEMS: SayAndDoItem[] = [
  {
    say: 'Zero Synthetic Chemicals',
    do: 'We brew indigenous cow Jeevamrutha and neem decoctions on-farm',
    proofDetail: 'No urea, synthetic NPK, or pesticide sprays touch our soil beds. Vermicompost and fermented biological cultures nurture the soil microbiology naturally.'
  },
  {
    say: 'Small-Batch Hand Crafted',
    do: 'We grind and bottle weekly in batches of under 50 units',
    proofDetail: 'No warehouse pallets gathering dust. Powders are fresh-milled every Monday and oils undergo 21-day slow sun-infusions.'
  },
  {
    say: 'Real Founders, Real Work',
    do: 'Two former software engineers in the soil every morning',
    proofDetail: 'We didn\'t hire a third-party contract manufacturer to slap a private label. We plant, weed, harvest, infuse, and pack every order ourselves.'
  },
  {
    say: '100% Ingredient Transparency',
    do: 'Every single botanical is listed clearly on the pouch',
    proofDetail: 'No "base Q.S.", no secret fragrance oils, no cheap mineral oil dilutions. What is on the label is what is inside the pouch.'
  }
];

export const CROPS_GROWN_ON_FARM: FarmCrop[] = [
  {
    name: 'Moringa (Drumstick tree leaves)',
    season: 'Perennial (Peak harvest July - March)',
    practice: 'Rain-fed organic grove, pruned every 45 days for tender high-nutrient green leaves',
    usedIn: 'Organic Moringa Powder, Hair Pack'
  },
  {
    name: 'Kasthuri & Curcumin Turmeric',
    season: 'Sown in June, Harvested in February',
    practice: 'Raised beds mulched with dry leaves; boiled and solar-dried on elevated mesh frames',
    usedIn: 'Farm-Grown Turmeric, Saffron Skin Oil, Face Pack'
  },
  {
    name: 'Desi Hibiscus & Damask Rose',
    season: 'Year-round flower harvesting at dawn',
    practice: 'Fresh blooms picked before 8 AM, hand-separated, and shade-dried to keep pigments vibrant',
    usedIn: 'Blue Hair Oil, Liquid Shampoo, Hair Pack'
  },
  {
    name: 'Fresh Bhringraj (False Daisy)',
    season: 'Monsoon and Winter beds',
    practice: 'Grown along moist farm ridges; whole herb including root and leaf harvested fresh for oil extraction',
    usedIn: 'Bhringraj Blue Hair Oil'
  },
  {
    name: 'Neem & Holy Basil (Tulsi)',
    season: 'Perennial border trees',
    practice: 'Natural farm pest barrier; sun-dried leaves retain natural antibacterial phytonutrients',
    usedIn: 'Face Pack, Liquid Shampoo, Hair Pack'
  },
  {
    name: 'True Indigo & Henna',
    season: 'Late Autumn harvest',
    practice: 'Hand-picked mature leaves, dried in shaded airflow rooms, and pulverized in stone mills',
    usedIn: 'Indigo Powder, Henna Powder, Blue Hair Oil'
  }
];

export const FOUNDER_STORY = {
  headline: 'Why We Traded Code for Soil and Clean Herbal Formulations',
  shortBio: 'We spent years in the IT software industry writing code and staring at glowing monitors. Today, our fingers have turmeric stains, our calendar follows monsoons, and every product we make is tested on ourselves and our families first.',
  paragraphs: [
    'For nearly a decade, both of us worked as software engineers. Like many urban professionals, we had long desk hours, chronic stress, and noticed early hair fall and skin fatigue. When we looked for authentic herbal remedies, we discovered a troubling pattern: bottles with lush botanical images on the front, but when you turned them over, the fine print read "Light Liquid Paraffin 70%", synthetic fragrance, SLS, and chemical parabens.',
    'We realized that modern commercial herbal products had become an exercise in marketing rather than honest agriculture. In 2021, we made the conscious decision to step away from tech cubicles and return to our native family agricultural land in Andhra Pradesh.',
    'The transition was humbling. In software, if a function fails, you debug and re-run in five seconds. In farming, if unseasonal rain drenches your drying turmeric on day five, you lose an entire week of labor. In our first year, our very first batch of herbal oil got overheated because the brass vessel base was too thin—the delicate volatile scents evaporated. We threw out the entire batch, consulted traditional elders, and switched to heavy-bottom copper vessels with low-temperature slow simmering and 21-day sun curing.',
    'You might notice that our packages feature "KritVeda Naturals" alongside "The product by Wife of Vamsi". That label is our origin story. Before we had fancy graphic templates, Vamsi\'s wife formulated and packaged these recipes for close friends, neighbors, and relatives who begged for refills. We keep that family spirit alive today: every single pouch is weighed, sealed, and inspected by our own hands before it is dispatched to your doorstep.'
  ],
  quote: 'We approach small-batch herbal crafting with the same intellectual honesty we once brought to engineering: no fake shortcuts, clean source inputs, and complete respect for the end user.'
};
