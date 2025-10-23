
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
    name: 'Royal Blend',
    category: 'honey',
    price: 8.500,
    unit: 'KWD',
    description: 'A premium mix of royal honey and natural bee pollen, known as "The King\'s Formula."',
    details: 'Royal Blend is our signature premium honey product, combining the finest royal honey with natural bee pollen. This exceptional blend has been crafted to deliver maximum nutritional benefits and a rich, complex flavor profile. Known traditionally as "The King\'s Formula," this honey has been treasured for generations for its superior quality and health-promoting properties. Perfect for those seeking the very best in natural honey products.',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784acc?w=800',
    inStock: true,
    features: [
      'Premium Quality',
      'Royal Honey & Bee Pollen',
      'The King\'s Formula',
      'Rich in Nutrients',
      'Traditional Recipe'
    ]
  },
  {
    id: '2',
    name: 'White Royal Honey',
    category: 'honey',
    price: 6.750,
    unit: 'KWD',
    description: '100% pure and natural royal white honey with a smooth, delicate flavor.',
    details: 'Our White Royal Honey is a rare and exquisite variety, prized for its pure white color and exceptionally smooth texture. This 100% natural honey is harvested from specific floral sources that produce this unique white honey. With its delicate, refined flavor and creamy consistency, it offers a luxurious honey experience. Completely pure with no additives or processing, preserving all the natural enzymes and beneficial properties.',
    image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800',
    inStock: true,
    features: [
      '100% Pure & Natural',
      'Smooth Texture',
      'Delicate Flavor',
      'Royal Quality',
      'No Additives'
    ]
  },
  {
    id: '3',
    name: 'Kids\' Honey',
    category: 'honey',
    price: 4.250,
    unit: 'KWD',
    description: 'Light and mild honey, perfect for children and daily use.',
    details: 'Specially selected for its light, mild flavor, our Kids\' Honey is perfect for introducing children to the wonderful world of natural honey. This gentle honey variety is easy to digest and has a pleasant, not-too-sweet taste that children love. Ideal for daily use in breakfast cereals, on toast, or mixed into milk. Pure and natural, with all the health benefits of honey in a child-friendly format.',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=800',
    inStock: true,
    features: [
      'Mild & Light',
      'Child-Friendly',
      'Perfect for Daily Use',
      'Easy to Digest',
      'Natural Sweetness'
    ]
  },
  {
    id: '4',
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
    id: '5',
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
    id: '6',
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
    id: '7',
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
    id: '8',
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
    id: '9',
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
