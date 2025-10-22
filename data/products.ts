
export interface Product {
  id: string;
  name: string;
  category: 'honey' | 'farm';
  price: number;
  unit: string;
  description: string;
  details: string;
  image: string;
  inStock: boolean;
  features?: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Wildflower Honey',
    category: 'honey',
    price: 12.99,
    unit: '500g jar',
    description: 'Pure raw honey from wildflowers',
    details: 'Our wildflower honey is harvested from bees that forage on a diverse range of wildflowers in our organic meadows. This creates a complex, rich flavor profile that changes subtly with the seasons. Raw and unfiltered to preserve all natural enzymes and nutrients.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784acc?w=800',
    inStock: true,
    features: [
      'Raw & Unfiltered',
      'No Added Sugar',
      'Rich in Antioxidants',
      'Locally Sourced',
      'Organic Wildflowers'
    ]
  },
  {
    id: '2',
    name: 'Acacia Honey',
    category: 'honey',
    price: 15.99,
    unit: '500g jar',
    description: 'Light, delicate honey from acacia blossoms',
    details: 'Acacia honey is known for its light color and mild, sweet taste. It has a low sucrose content and high fructose level, making it ideal for diabetics. This honey remains liquid longer than other varieties and is perfect for sweetening beverages.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800',
    inStock: true,
    features: [
      'Light & Delicate',
      'Low Glycemic Index',
      'Stays Liquid Longer',
      'Perfect for Tea',
      'Mild Flavor'
    ]
  },
  {
    id: '3',
    name: 'Manuka Honey',
    category: 'honey',
    price: 34.99,
    unit: '250g jar',
    description: 'Premium medicinal honey from New Zealand',
    details: 'Authentic Manuka honey with verified MGO rating. Known for its unique antibacterial properties and health benefits. Sourced from the nectar of the Manuka bush, this honey has been used for centuries for its healing properties.',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=800',
    inStock: true,
    features: [
      'MGO 400+ Certified',
      'Antibacterial Properties',
      'Supports Immunity',
      'Premium Quality',
      'Authentic NZ Source'
    ]
  },
  {
    id: '4',
    name: 'Fresh Eggs',
    category: 'farm',
    price: 6.99,
    unit: 'dozen',
    description: 'Free-range organic eggs',
    details: 'Our chickens roam freely on pasture, eating a natural diet of grass, insects, and organic feed. This results in eggs with deep orange yolks, rich flavor, and superior nutritional content. Collected daily for maximum freshness.',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800',
    inStock: true,
    features: [
      'Free-Range',
      'Organic Feed',
      'Rich Orange Yolks',
      'Collected Daily',
      'No Antibiotics'
    ]
  },
  {
    id: '5',
    name: 'Organic Tomatoes',
    category: 'farm',
    price: 4.99,
    unit: 'per lb',
    description: 'Vine-ripened heirloom tomatoes',
    details: 'Heritage variety tomatoes grown using organic farming methods. Allowed to ripen fully on the vine for maximum flavor and nutrition. No pesticides or synthetic fertilizers used. Perfect for salads, sauces, or eating fresh.',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=800',
    inStock: true,
    features: [
      'Heirloom Varieties',
      'Vine-Ripened',
      'No Pesticides',
      'Full Flavor',
      'Organic Certified'
    ]
  },
  {
    id: '6',
    name: 'Raw Honeycomb',
    category: 'honey',
    price: 18.99,
    unit: '300g piece',
    description: 'Pure honeycomb straight from the hive',
    details: 'Experience honey in its most natural form. Our honeycomb is cut fresh from the hive, containing pure honey sealed in edible beeswax cells. Rich in enzymes, pollen, and propolis. Can be eaten as is or used to naturally sweeten foods.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800',
    inStock: true,
    features: [
      'Edible Beeswax',
      'Contains Pollen',
      'Natural Propolis',
      'Unprocessed',
      'Unique Texture'
    ]
  },
  {
    id: '7',
    name: 'Fresh Herbs Bundle',
    category: 'farm',
    price: 8.99,
    unit: 'bundle',
    description: 'Mixed fresh herbs from our garden',
    details: 'A selection of fresh-cut herbs including basil, rosemary, thyme, and parsley. Grown without chemicals in our herb garden. Perfect for cooking, garnishing, or making herbal teas. Harvested the morning of delivery.',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800',
    inStock: true,
    features: [
      'Freshly Cut',
      'Variety Pack',
      'No Chemicals',
      'Aromatic',
      'Same-Day Harvest'
    ]
  },
  {
    id: '8',
    name: 'Lavender Honey',
    category: 'honey',
    price: 16.99,
    unit: '500g jar',
    description: 'Aromatic honey from lavender fields',
    details: 'This specialty honey is produced when our bees forage exclusively on lavender blossoms. It has a distinctive floral aroma and delicate flavor with subtle lavender notes. Perfect for desserts, tea, or as a unique gift.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784acc?w=800',
    inStock: false,
    features: [
      'Floral Aroma',
      'Delicate Flavor',
      'Single-Origin',
      'Limited Edition',
      'Seasonal Harvest'
    ]
  }
];
