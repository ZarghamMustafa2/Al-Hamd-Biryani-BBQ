import React from 'react';
import { Star, ShoppingBag, Flame, Award, ArrowRight, Utensils } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  category: 'bbq_biryani' | 'bbq' | 'rolls' | 'desserts_extras' | 'daig_pakwan';
  categoryLabel: string;
  price: string;
  rating: number;
  reviews: number;
  description: string;
  spiceLevel: 'Mild' | 'Medium' | 'Hot' | 'Fiery';
  isBestseller?: boolean;
  image: string;
}

interface MenuSectionProps {
  onOpenOrderModal: () => void;
  onOpenFullMenuPage?: () => void;
}

export const NEW_OFFICIAL_MENU: MenuItem[] = [
  // 1. BBQ BIRYANI / PULAO
  {
    id: 'bb1',
    name: 'Chicken Tikka Biryani / Pulao',
    category: 'bbq_biryani',
    categoryLabel: 'BBQ Biryani / Pulao',
    price: 'Rs 380',
    rating: 5.0,
    reviews: 1420,
    description: 'Aromatic Dum Basmati Biryani topped with flame-grilled smoky Chicken Tikka piece.',
    spiceLevel: 'Hot',
    isBestseller: true,
    image: './chicken_tikka_biryani.jpg',
  },
  {
    id: 'bb2',
    name: 'Malai Tikka Biryani / Pulao',
    category: 'bbq_biryani',
    categoryLabel: 'BBQ Biryani / Pulao',
    price: 'Rs 420',
    rating: 4.9,
    reviews: 980,
    description: 'Creamy cashew-marinated Malai Tikka served over fragrant saffron Basmati rice.',
    spiceLevel: 'Mild',
    isBestseller: true,
    image: './malai_tikka_biryani.jpg',
  },
  {
    id: 'bb3',
    name: 'Tikka Boti Biryani / Pulao',
    category: 'bbq_biryani',
    categoryLabel: 'BBQ Biryani / Pulao',
    price: 'Rs 400',
    rating: 4.9,
    reviews: 850,
    description: 'Juicy charcoal-grilled spicy Tikka Boti chunks mixed with spicy Dum Biryani.',
    spiceLevel: 'Hot',
    image: './tikka_boti_skewer.jpg',
  },
  {
    id: 'bb4',
    name: 'Malai Boti Biryani / Pulao',
    category: 'bbq_biryani',
    categoryLabel: 'BBQ Biryani / Pulao',
    price: 'Rs 440',
    rating: 5.0,
    reviews: 1120,
    description: 'Rich velvety Malai Boti boneless chicken pieces layered with Zafrani Biryani rice.',
    spiceLevel: 'Medium',
    isBestseller: true,
    image: './malai_tikka_biryani.jpg',
  },
  {
    id: 'bb5',
    name: 'Chicken Kabab Biryani / Pulao',
    category: 'bbq_biryani',
    categoryLabel: 'BBQ Biryani / Pulao',
    price: 'Rs 360',
    rating: 4.8,
    reviews: 670,
    description: 'Tandoori grilled Chicken Seekh Kabab slices served on spiced Basmati Pulao.',
    spiceLevel: 'Hot',
    image: './chicken_seekh_kabab.jpg',
  },
  {
    id: 'bb6',
    name: 'Pizza Kabab Biryani / Pulao',
    category: 'bbq_biryani',
    categoryLabel: 'BBQ Biryani / Pulao',
    price: 'Rs 450',
    rating: 4.9,
    reviews: 790,
    description: 'Al Hamd Special Cheese-stuffed Pizza Kababs paired with hot saffron Biryani.',
    spiceLevel: 'Hot',
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800&auto=format&fit=crop',
  },

  // 2. BBQ
  {
    id: 'bq1',
    name: 'Chicken Tikka (Leg)',
    category: 'bbq',
    categoryLabel: 'BBQ Specials',
    price: 'Rs 280',
    rating: 4.9,
    reviews: 1640,
    description: 'Classic spicy marinated Chicken Leg piece grilled over glowing charcoal embers.',
    spiceLevel: 'Hot',
    isBestseller: true,
    image: './chicken_tikka_leg.jpg',
  },
  {
    id: 'bq2',
    name: 'Chicken Tikka (Chest)',
    category: 'bbq',
    categoryLabel: 'BBQ Specials',
    price: 'Rs 300',
    rating: 4.9,
    reviews: 1520,
    description: 'Juicy whole breast chicken piece marinated in red chili, lemon & tandoori spices.',
    spiceLevel: 'Hot',
    image: './chicken_tikka_leg.jpg',
  },
  {
    id: 'bq3',
    name: 'Malai Tikka (Leg)',
    category: 'bbq',
    categoryLabel: 'BBQ Specials',
    price: 'Rs 320',
    rating: 4.8,
    reviews: 870,
    description: 'Creamy cashew & white pepper marinated leg piece grilled to tender perfection.',
    spiceLevel: 'Mild',
    image: './malai_tikka_biryani.jpg',
  },
  {
    id: 'bq4',
    name: 'Malai Tikka (Chest)',
    category: 'bbq',
    categoryLabel: 'BBQ Specials',
    price: 'Rs 340',
    rating: 4.9,
    reviews: 940,
    description: 'Succulent chicken breast marinated in cream, cardamom, cheese & white pepper.',
    spiceLevel: 'Mild',
    image: './malai_tikka_biryani.jpg',
  },
  {
    id: 'bq5',
    name: 'Tikka Boti',
    category: 'bbq',
    categoryLabel: 'BBQ Specials',
    price: 'Rs 380',
    rating: 4.9,
    reviews: 1100,
    description: 'Boneless chicken cubes coated in spicy red tandoori marinade, charcoal roasted.',
    spiceLevel: 'Hot',
    isBestseller: true,
    image: './tikka_boti_skewer.jpg',
  },
  {
    id: 'bq6',
    name: 'Malai Boti',
    category: 'bbq',
    categoryLabel: 'BBQ Specials',
    price: 'Rs 420',
    rating: 5.0,
    reviews: 1350,
    description: 'Melt-in-mouth creamy boneless chicken boti grilled over slow charcoal fire.',
    spiceLevel: 'Mild',
    isBestseller: true,
    image: './malai_tikka_biryani.jpg',
  },
  {
    id: 'bq7',
    name: 'Green Boti',
    category: 'bbq',
    categoryLabel: 'BBQ Specials',
    price: 'Rs 400',
    rating: 4.8,
    reviews: 620,
    description: 'Chicken boti marinated in fresh mint, coriander, green chili & lemon juice.',
    spiceLevel: 'Medium',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'bq8',
    name: 'Kastoori Boti',
    category: 'bbq',
    categoryLabel: 'BBQ Specials',
    price: 'Rs 440',
    rating: 4.9,
    reviews: 730,
    description: 'Special Kastoori fenugreek & egg-coated tender chicken boti grilled on skewers.',
    spiceLevel: 'Medium',
    image: './tikka_boti_skewer.jpg',
  },
  {
    id: 'bq9',
    name: 'Badami Cheese Boti',
    category: 'bbq',
    categoryLabel: 'BBQ Specials',
    price: 'Rs 480',
    rating: 5.0,
    reviews: 890,
    description: 'Rich almond paste & melted mozzarella cheese stuffed tender chicken boti.',
    spiceLevel: 'Mild',
    isBestseller: true,
    image: './chicken_cheese_roll.jpg',
  },
  {
    id: 'bq10',
    name: 'Kalmi Tikka',
    category: 'bbq',
    categoryLabel: 'BBQ Specials',
    price: 'Rs 390',
    rating: 4.8,
    reviews: 580,
    description: 'Richly marinated chicken drumsticks coated in saffron yogurt glaze.',
    spiceLevel: 'Medium',
    image: './chicken_tikka_leg.jpg',
  },
  {
    id: 'bq11',
    name: 'Chicken Kabab',
    category: 'bbq',
    categoryLabel: 'BBQ Specials',
    price: 'Rs 140',
    rating: 4.9,
    reviews: 1490,
    description: 'Freshly minced chicken seasoned with herbs, onions & green chilies on skewers.',
    spiceLevel: 'Hot',
    image: './chicken_seekh_kabab.jpg',
  },
  {
    id: 'bq12',
    name: 'Reshmi Kabab',
    category: 'bbq',
    categoryLabel: 'BBQ Specials',
    price: 'Rs 160',
    rating: 4.9,
    reviews: 1180,
    description: 'Silk-textured fine chicken mince blended with butter, cream & aromatic spices.',
    spiceLevel: 'Mild',
    image: './chicken_seekh_kabab.jpg',
  },
  {
    id: 'bq13',
    name: 'Pizza Kabab',
    category: 'bbq',
    categoryLabel: 'BBQ Specials',
    price: 'Rs 180',
    rating: 5.0,
    reviews: 1340,
    description: 'Signature Kabab stuffed with oregano, pizza herbs, capsicum & oozy cheese.',
    spiceLevel: 'Hot',
    isBestseller: true,
    image: './chicken_cheese_roll.jpg',
  },
  {
    id: 'bq14',
    name: 'Lebonani Kabab',
    category: 'bbq',
    categoryLabel: 'BBQ Specials',
    price: 'Rs 190',
    rating: 4.8,
    reviews: 620,
    description: 'Middle Eastern style aromatic herb chicken kabab grilled over open coals.',
    spiceLevel: 'Medium',
    image: './chicken_seekh_kabab.jpg',
  },
  {
    id: 'bq15',
    name: 'BBQ Platter (03 Person)',
    category: 'bbq',
    categoryLabel: 'BBQ Specials',
    price: 'Rs 1450',
    rating: 5.0,
    reviews: 1680,
    description: 'Royal feast featuring Tikka Boti, Malai Boti, Chicken Kabab, Tikka Leg & Puri Parathas.',
    spiceLevel: 'Hot',
    isBestseller: true,
    image: './bbq_platter_dish.jpg',
  },
  {
    id: 'bq16',
    name: 'BBQ Platter (05 Person)',
    category: 'bbq',
    categoryLabel: 'BBQ Specials',
    price: 'Rs 2350',
    rating: 5.0,
    reviews: 1920,
    description: 'Jumbo Family Platter with full assortment of Tikka, Malai Boti, Reshmi Kabab & Naan.',
    spiceLevel: 'Hot',
    isBestseller: true,
    image: './bbq_platter_dish.jpg',
  },

  // 3. ROLL
  {
    id: 'rl1',
    name: 'Chicken Chatni Roll',
    category: 'rolls',
    categoryLabel: 'Paratha Rolls',
    price: 'Rs 180',
    rating: 4.9,
    reviews: 1890,
    description: 'Crispy fried Paratha filled with smoky Tikka Boti, spicy green chatni & onions.',
    spiceLevel: 'Hot',
    isBestseller: true,
    image: './malai_chatni_roll.jpg',
  },
  {
    id: 'rl2',
    name: 'Malai Chatni Roll',
    category: 'rolls',
    categoryLabel: 'Paratha Rolls',
    price: 'Rs 210',
    rating: 4.9,
    reviews: 1420,
    description: 'Soft flaky Paratha wrapped around tender Malai Boti & garlic mayo chatni.',
    spiceLevel: 'Mild',
    isBestseller: true,
    image: './malai_chatni_roll.jpg',
  },
  {
    id: 'rl3',
    name: 'Chicken Kabab Chatni Roll',
    category: 'rolls',
    categoryLabel: 'Paratha Rolls',
    price: 'Rs 190',
    rating: 4.8,
    reviews: 950,
    description: 'Grilled Chicken Seekh Kabab wrapped in golden crisp Paratha with spicy sauce.',
    spiceLevel: 'Hot',
    image: './malai_chatni_roll.jpg',
  },
  {
    id: 'rl4',
    name: 'Pizza Kabab Chatni Roll',
    category: 'rolls',
    categoryLabel: 'Paratha Rolls',
    price: 'Rs 230',
    rating: 4.9,
    reviews: 1110,
    description: 'Cheesy Pizza Kabab wrapped in hot paratha with signature pizza mayo sauce.',
    spiceLevel: 'Hot',
    isBestseller: true,
    image: './chicken_cheese_roll.jpg',
  },
  {
    id: 'rl5',
    name: 'Green Boti Chatni Roll',
    category: 'rolls',
    categoryLabel: 'Paratha Rolls',
    price: 'Rs 210',
    rating: 4.8,
    reviews: 780,
    description: 'Fresh mint & herb Green Boti wrapped with mint raita in golden paratha.',
    spiceLevel: 'Medium',
    image: './malai_chatni_roll.jpg',
  },
  {
    id: 'rl6',
    name: 'Shami Chatni Roll',
    category: 'rolls',
    categoryLabel: 'Paratha Rolls',
    price: 'Rs 150',
    rating: 4.7,
    reviews: 840,
    description: 'Pan-fried spiced Shami Kebab mashed inside crispy paratha with chatni & salad.',
    spiceLevel: 'Medium',
    image: './malai_chatni_roll.jpg',
  },
  {
    id: 'rl7',
    name: 'Chicken Cheese Roll',
    category: 'rolls',
    categoryLabel: 'Paratha Rolls',
    price: 'Rs 240',
    rating: 5.0,
    reviews: 1650,
    description: 'Loaded with melted cheddar & mozzarella cheese over smoky Tikka boti chunks.',
    spiceLevel: 'Medium',
    isBestseller: true,
    image: './chicken_cheese_roll.jpg',
  },
  {
    id: 'rl8',
    name: 'Garlic Mayo Roll',
    category: 'rolls',
    categoryLabel: 'Paratha Rolls',
    price: 'Rs 220',
    rating: 4.9,
    reviews: 1290,
    description: 'Smoky chicken boti drenched in thick house-made garlic mayo sauce.',
    spiceLevel: 'Mild',
    image: './malai_chatni_roll.jpg',
  },
  {
    id: 'rl9',
    name: 'Al Hamd Special Roll',
    category: 'rolls',
    categoryLabel: 'Paratha Rolls',
    price: 'Rs 280',
    rating: 5.0,
    reviews: 2100,
    description: 'Jumbo Paratha loaded with Tikka Boti, Malai Boti, Seekh Kabab, Cheese & secret sauce.',
    spiceLevel: 'Hot',
    isBestseller: true,
    image: './chicken_cheese_roll.jpg',
  },

  // 4. DESSERT & EXTRAS / SALADS
  {
    id: 'ex1',
    name: 'Fresh Salad',
    category: 'desserts_extras',
    categoryLabel: 'Extras & Salads',
    price: 'Rs 50',
    rating: 4.8,
    reviews: 890,
    description: 'Crisp sliced cucumbers, tomatoes, onions, carrots & lemon slices.',
    spiceLevel: 'Mild',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ex2',
    name: 'Kachumar Salad',
    category: 'desserts_extras',
    categoryLabel: 'Extras & Salads',
    price: 'Rs 60',
    rating: 4.8,
    reviews: 740,
    description: 'Finely diced fresh salad with green chilies, coriander & lemon chat masala dressing.',
    spiceLevel: 'Medium',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ex3',
    name: 'Extra Raita',
    category: 'desserts_extras',
    categoryLabel: 'Extras & Salads',
    price: 'Rs 40',
    rating: 4.9,
    reviews: 1650,
    description: 'Chilled zeera mint yogurt raita made fresh daily.',
    spiceLevel: 'Mild',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ex4',
    name: 'BBQ Sauce',
    category: 'desserts_extras',
    categoryLabel: 'Extras & Salads',
    price: 'Rs 40',
    rating: 4.8,
    reviews: 910,
    description: 'Special smoky tamarind & spice blend dip for BBQ botis.',
    spiceLevel: 'Medium',
    image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ex5',
    name: 'Mayo Garlic Sauce',
    category: 'desserts_extras',
    categoryLabel: 'Extras & Salads',
    price: 'Rs 50',
    rating: 4.9,
    reviews: 1120,
    description: 'Thick, creamy garlic mayonnaise dipping sauce.',
    spiceLevel: 'Mild',
    image: 'https://images.unsplash.com/photo-1572448862527-d3c904757de6?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ex6',
    name: 'Roll Sauce',
    category: 'desserts_extras',
    categoryLabel: 'Extras & Salads',
    price: 'Rs 40',
    rating: 4.8,
    reviews: 820,
    description: 'Signature Al Hamd spicy chatni dip for paratha rolls.',
    spiceLevel: 'Hot',
    image: 'https://images.unsplash.com/photo-1582169505937-b9992bd01ed9?q=80&w=800&auto=format&fit=crop',
  },

  // 5. DAIG / PAKWAN
  {
    id: 'dg1',
    name: 'Chicken Biryani / Pulao (Daig)',
    category: 'daig_pakwan',
    categoryLabel: 'Daig & Pakwan',
    price: 'Rs 11,500',
    rating: 5.0,
    reviews: 2150,
    description: 'Full 12kg Royal Chicken Dum Biryani / Pulao Daig for weddings & events.',
    spiceLevel: 'Hot',
    isBestseller: true,
    image: './chicken_tikka_biryani.jpg',
  },
  {
    id: 'dg2',
    name: 'Chana Pulao (Daig)',
    category: 'daig_pakwan',
    categoryLabel: 'Daig & Pakwan',
    price: 'Rs 7,500',
    rating: 4.9,
    reviews: 940,
    description: 'Traditional aromatic Kabuli Chickpea Pulao Daig prepared in pure ghee.',
    spiceLevel: 'Medium',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'dg3',
    name: 'Chicken Qorma',
    category: 'daig_pakwan',
    categoryLabel: 'Daig & Pakwan',
    price: 'Rs 350',
    rating: 4.9,
    reviews: 1320,
    description: 'Rich Shahi Chicken Qorma with golden fried onions, yogurt & almonds.',
    spiceLevel: 'Hot',
    image: './chicken_qorma_curry.jpg',
  },
  {
    id: 'dg4',
    name: 'Beef Qorma',
    category: 'daig_pakwan',
    categoryLabel: 'Daig & Pakwan',
    price: 'Rs 420',
    rating: 4.9,
    reviews: 1100,
    description: 'Tender boneless beef slow-cooked in thick spicy nutmeg & mace gravy.',
    spiceLevel: 'Hot',
    image: './chicken_qorma_curry.jpg',
  },
  {
    id: 'dg5',
    name: 'Mutton Qorma',
    category: 'daig_pakwan',
    categoryLabel: 'Daig & Pakwan',
    price: 'Rs 650',
    rating: 5.0,
    reviews: 870,
    description: 'Succulent mutton cooked in royal copper handi with kewra saffron gravy.',
    spiceLevel: 'Fiery',
    isBestseller: true,
    image: './chicken_qorma_curry.jpg',
  },
  {
    id: 'dg6',
    name: 'Zarda',
    category: 'daig_pakwan',
    categoryLabel: 'Daig & Pakwan',
    price: 'Rs 220',
    rating: 4.8,
    reviews: 790,
    description: 'Traditional sweet yellow Basmati rice topped with almonds & raisins.',
    spiceLevel: 'Mild',
    image: './zarda_special_sweet.jpg',
  },
  {
    id: 'dg7',
    name: 'Zarda Special',
    category: 'daig_pakwan',
    categoryLabel: 'Daig & Pakwan',
    price: 'Rs 280',
    rating: 4.9,
    reviews: 950,
    description: 'Royal Zarda loaded with mini gulab jamun, khoya, cham cham & cashew nuts.',
    spiceLevel: 'Mild',
    isBestseller: true,
    image: './zarda_special_sweet.jpg',
  },
  {
    id: 'dg8',
    name: 'Lab-e-Shireen',
    category: 'daig_pakwan',
    categoryLabel: 'Daig & Pakwan',
    price: 'Rs 260',
    rating: 4.9,
    reviews: 1140,
    description: 'Rich custard dessert mixed with colorful vermicelli, fruit cocktail & cream.',
    spiceLevel: 'Mild',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'dg9',
    name: 'Kheer Special',
    category: 'daig_pakwan',
    categoryLabel: 'Daig & Pakwan',
    price: 'Rs 200',
    rating: 4.9,
    reviews: 1290,
    description: 'Clay-matka set slow-boiled rich milk kheer with silver leaf garnish.',
    spiceLevel: 'Mild',
    image: './shahi_kheer_matka.jpg',
  },
  {
    id: 'dg10',
    name: 'Extra Chicken',
    category: 'daig_pakwan',
    categoryLabel: 'Daig & Pakwan',
    price: 'Rs 160',
    rating: 4.9,
    reviews: 1450,
    description: 'Extra portion of juicy Dum cooked chicken piece.',
    spiceLevel: 'Hot',
    image: './chicken_tikka_leg.jpg',
  },
  {
    id: 'dg11',
    name: 'Extra Rice',
    category: 'daig_pakwan',
    categoryLabel: 'Daig & Pakwan',
    price: 'Rs 120',
    rating: 4.8,
    reviews: 1820,
    description: 'Extra plate of hot fragrant Dum Biryani / Pulao rice.',
    spiceLevel: 'Medium',
    image: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'dg12',
    name: 'Extra Beef',
    category: 'daig_pakwan',
    categoryLabel: 'Daig & Pakwan',
    price: 'Rs 220',
    rating: 4.9,
    reviews: 860,
    description: 'Extra portion of tender cooked spicy beef chunks.',
    spiceLevel: 'Hot',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
  },
];

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenOrderModal, onOpenFullMenuPage }) => {
  // Show only 4 top bestseller highlights on the Home Page to keep Home Page short & fast!
  const featuredHighlights = NEW_OFFICIAL_MENU.filter((item) => item.isBestseller).slice(0, 4);

  return (
    <section id="menu" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Short Home Page Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest badge-accent px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Featured Bestseller Highlights</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-heading uppercase tracking-tight">
            Popular Menu Items
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-body font-semibold">
            A small taste of our 40+ item menu. Click below to view the dedicated Full Menu Page with all 5 categories!
          </p>
        </div>

        {/* 4 Compact Bestseller Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHighlights.map((item) => (
            <div
              key={item.id}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group shadow-lg border border-slate-200 dark:border-slate-800"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-red-600 text-white text-[9px] font-extrabold uppercase tracking-wider rounded-md">
                    Bestseller
                  </div>

                  <div className="absolute top-3 right-3 px-2 py-0.5 bg-slate-900/90 backdrop-blur-md text-amber-400 text-[10px] font-bold rounded-md border border-amber-500/30 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-red-500 fill-red-500" />
                    <span>{item.spiceLevel}</span>
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/30">
                      {item.categoryLabel}
                    </span>
                    <span className="font-display font-extrabold text-heading text-base text-amber-500">{item.price}</span>
                  </div>

                  <h3 className="font-bold text-heading text-sm leading-snug group-hover:text-amber-500 transition-colors">
                    {item.name}
                  </h3>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={onOpenOrderModal}
                  className="w-full py-2 bg-gradient-to-r from-red-600 via-amber-600 to-orange-500 text-white font-extrabold text-[11px] uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Big Prominent Call-to-Action to Open Dedicated Full Menu Page */}
        <div className="text-center pt-4">
          <button
            onClick={onOpenFullMenuPage}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 hover:from-amber-600 hover:to-red-700 text-white font-display font-extrabold text-sm uppercase tracking-wider rounded-2xl shadow-2xl shadow-amber-500/30 hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-3"
          >
            <Utensils className="w-5 h-5" />
            <span>📖 VIEW FULL DEDICATED MENU PAGE (40+ ITEMS)</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
