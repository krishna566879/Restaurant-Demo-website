export interface MenuItem {
  name: string;
  description: string;
  price: string;
  dietary?: string[];
}

export interface MenuCategory {
  name: string;
  slug: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    name: 'Starters',
    slug: 'starters',
    items: [
      { name: 'Roasted Fig & Burrata', price: '₹780', description: 'Charred fig, burrata, pistachio, aged balsamic', dietary: ['V'] },
      { name: 'Tuna Tartare', price: '₹920', description: 'Yellowfin tuna, avocado, sesame, citrus ponzu', dietary: ['GF'] },
      { name: 'Forest Mushroom Velouté', price: '₹620', description: 'Wild mushrooms, thyme oil, toasted sourdough', dietary: ['V'] },
      { name: 'Beef Carpaccio', price: '₹880', description: 'Aged beef, truffle aioli, capers, rocket', dietary: ['GF'] },
      { name: 'Charred Octopus', price: '₹1,050', description: 'Grilled octopus, chorizo crumb, smoked paprika', dietary: ['GF'] }
    ]
  },
  {
    name: 'Small Plates',
    slug: 'small-plates',
    items: [
      { name: 'Burrata & Heirloom Tomato', price: '₹750', description: 'Stracciatella, basil oil, fleur de sel', dietary: ['V', 'GF'] },
      { name: 'Duck Liver Parfait', price: '₹850', description: 'Sauternes jelly, brioche, cornichons' },
      { name: 'Seared Scallops', price: '₹1,120', description: 'Cauliflower purée, brown butter, capers', dietary: ['GF'] },
      { name: 'Wild Mushroom Risotto', price: '₹980', description: 'Arborio rice, porcini, aged parmesan', dietary: ['V'] },
      { name: 'Hamachi Crudo', price: '₹1,050', description: 'Yuzu, jalapeño, olive oil, microgreens', dietary: ['GF'] }
    ]
  },
  {
    name: 'Mains',
    slug: 'mains',
    items: [
      { name: 'Truffle Tagliolini', price: '₹1,450', description: 'Hand-cut pasta, black truffle, parmesan, brown butter', dietary: ['V'] },
      { name: 'Herb-Crusted Sea Bass', price: '₹1,680', description: 'Seasonal greens, beurre blanc, lemon oil', dietary: ['GF'] },
      { name: 'Dry-Aged Ribeye', price: '₹2,200', description: '28-day aged, bone marrow jus, roasted shallots', dietary: ['GF'] },
      { name: 'Pan-Roasted Duck Breast', price: '₹1,580', description: 'Cherry reduction, parsnip purée, thyme' },
      { name: 'Lamb Rack', price: '₹1,850', description: 'Herb crust, ratatouille, rosemary jus', dietary: ['GF'] },
      { name: 'Wild Mushroom & Truffle Tart', price: '₹1,250', description: 'Porcini, gruyère, arugula', dietary: ['V'] }
    ]
  },
  {
    name: 'Desserts',
    slug: 'desserts',
    items: [
      { name: 'Midnight Chocolate Tarte', price: '₹720', description: 'Dark chocolate, sea salt, vanilla crème', dietary: ['V'] },
      { name: 'Crème Brûlée', price: '₹580', description: 'Madagascar vanilla, caramelized sugar', dietary: ['V', 'GF'] },
      { name: 'Lemon Posset', price: '₹620', description: 'Citrus curd, shortbread, seasonal berries', dietary: ['V'] },
      { name: 'Cheese Selection', price: '₹950', description: 'Artisanal cheeses, quince paste, walnut bread', dietary: ['V'] },
      { name: 'Tiramisu Reimagined', price: '₹680', description: 'Espresso, mascarpone, amaretto', dietary: ['V'] }
    ]
  },
  {
    name: 'Beverages',
    slug: 'beverages',
    items: [
      { name: 'Signature Noir Espresso Martini', price: '₹750', description: 'Vodka, fresh espresso, coffee liqueur' },
      { name: 'Sage Garden', price: '₹650', description: 'Gin, fresh sage, elderflower, tonic' },
      { name: 'The Willow', price: '₹700', description: 'Bourbon, honey, lemon, aromatic bitters' },
      { name: 'Sommelier\'s Wine Pairing', price: '₹2,800', description: 'Five-course curated wine journey' },
      { name: 'Non-Alcoholic Spritz', price: '₹450', description: 'Blood orange, rosemary, sparkling water' },
      { name: 'Artisan Tea Selection', price: '₹350', description: 'Darjeeling, chamomile, jasmine, or Earl Grey' }
    ]
  }
];

export const signatureDishes = [
  {
    name: 'Roasted Fig & Burrata',
    description: 'Charred fig, burrata, pistachio, aged balsamic',
    price: '₹780',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80'
  },
  {
    name: 'Truffle Tagliolini',
    description: 'Hand-cut pasta, black truffle, parmesan, brown butter',
    price: '₹1,450',
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80'
  },
  {
    name: 'Herb-Crusted Sea Bass',
    description: 'Seasonal greens, beurre blanc, lemon oil',
    price: '₹1,680',
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80'
  },
  {
    name: 'Midnight Chocolate Tarte',
    description: 'Dark chocolate, sea salt, vanilla crème',
    price: '₹720',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80'
  }
];
