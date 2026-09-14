import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, selectCartCount, selectCartItems } from './CartSlice';
import './App.css';

// ── Plant Data ─────────────────────────────────────────────────────────────────
// Three categories with six unique houseplants each (18 total).
// Thumbnail images sourced from Unsplash (free-to-use).

const plantCategories = [
  {
    id: 'tropical',
    label: '🌴 Tropical Plants',
    plants: [
      {
        id: 'tp-1',
        name: 'Monstera Deliciosa',
        price: 24.99,
        image:
          'https://images.unsplash.com/photo-1614594895255-2e7b4e3c2b6b?w=400&q=70',
        description: 'Iconic split-leaf tropical plant.',
      },
      {
        id: 'tp-2',
        name: 'Bird of Paradise',
        price: 34.99,
        image:
          'https://images.unsplash.com/photo-1598880940952-6b03e3527bf9?w=400&q=70',
        description: 'Dramatic large leaves, statement plant.',
      },
      {
        id: 'tp-3',
        name: 'Fiddle Leaf Fig',
        price: 29.99,
        image:
          'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70',
        description: 'Tall, glossy-leaved tree for bright rooms.',
      },
      {
        id: 'tp-4',
        name: 'Anthurium',
        price: 19.99,
        image:
          'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400&q=70',
        description: 'Long-lasting waxy blooms in vibrant red.',
      },
      {
        id: 'tp-5',
        name: 'Heartleaf Philodendron',
        price: 14.99,
        image:
          'https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?w=400&q=70',
        description: 'Trailing vines with heart-shaped leaves.',
      },
      {
        id: 'tp-6',
        name: 'Heliconia',
        price: 22.99,
        image:
          'https://images.unsplash.com/photo-1589974733005-c0c33bf5d1e1?w=400&q=70',
        description: 'Bold tropical blooms in orange and red.',
      },
    ],
  },
  {
    id: 'succulents',
    label: '🌵 Succulents & Cacti',
    plants: [
      {
        id: 'sc-1',
        name: 'Aloe Vera',
        price: 9.99,
        image:
          'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=70',
        description: 'Medicinal gel-filled succulent, easy care.',
      },
      {
        id: 'sc-2',
        name: 'Jade Plant',
        price: 12.99,
        image:
          'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&q=70',
        description: 'Chubby oval leaves, symbolises good luck.',
      },
      {
        id: 'sc-3',
        name: 'Echeveria',
        price: 7.99,
        image:
          'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=70',
        description: 'Rose-shaped rosette succulent, pastel hues.',
      },
      {
        id: 'sc-4',
        name: 'Barrel Cactus',
        price: 11.99,
        image:
          'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=70',
        description: 'Classic globe-shaped cactus, low-maintenance.',
      },
      {
        id: 'sc-5',
        name: 'Haworthia',
        price: 8.99,
        image:
          'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&q=70',
        description: 'Tiny striped succulent, perfect for desks.',
      },
      {
        id: 'sc-6',
        name: 'Agave',
        price: 15.99,
        image:
          'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=400&q=70',
        description: 'Striking spiky rosette, drought-tolerant.',
      },
    ],
  },
  {
    id: 'air-purifying',
    label: '💨 Air Purifying Plants',
    plants: [
      {
        id: 'ap-1',
        name: 'Peace Lily',
        price: 16.99,
        image:
          'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&q=70',
        description: 'White blooms, top-rated air purifier.',
      },
      {
        id: 'ap-2',
        name: 'Spider Plant',
        price: 10.99,
        image:
          'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=400&q=70',
        description: 'Fast-growing, produces baby plantlets.',
      },
      {
        id: 'ap-3',
        name: 'Snake Plant',
        price: 13.99,
        image:
          'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=400&q=70',
        description: 'Near-indestructible, absorbs toxins overnight.',
      },
      {
        id: 'ap-4',
        name: 'Golden Pothos',
        price: 9.49,
        image:
          'https://images.unsplash.com/photo-1617957743089-70b30c5e0a49?w=400&q=70',
        description: 'Cascading vines, ideal for shelves.',
      },
      {
        id: 'ap-5',
        name: 'Rubber Plant',
        price: 21.99,
        image:
          'https://images.unsplash.com/photo-1611211232932-da3113c5b960?w=400&q=70',
        description: 'Dark glossy leaves, elegant statement tree.',
      },
      {
        id: 'ap-6',
        name: 'Boston Fern',
        price: 11.49,
        image:
          'https://images.unsplash.com/photo-1632088702085-e6b50ed43aba?w=400&q=70',
        description: 'Lush feathery fronds, natural humidifier.',
      },
    ],
  },
];

// ── Navbar Component ───────────────────────────────────────────────────────────
const Navbar = ({ onNavigateHome, onNavigateProducts, onNavigateCart, cartCount }) => (
  <nav className="navbar">
    <span
      className="navbar-brand"
      onClick={onNavigateHome}
      style={{ cursor: 'pointer' }}
    >
      🌿 Paradise Nursery
    </span>
    <ul className="navbar-links">
      <li>
        <a onClick={onNavigateHome} href="#home" style={{ cursor: 'pointer' }}>
          Home
        </a>
      </li>
      <li>
        <a
          onClick={onNavigateProducts}
          href="#plants"
          style={{ cursor: 'pointer' }}
        >
          Plants
        </a>
      </li>
      <li>
        <a
          onClick={onNavigateCart}
          href="#cart"
          className="cart-icon-wrapper"
          style={{ cursor: 'pointer', position: 'relative' }}
        >
          🛒 Cart
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </a>
      </li>
    </ul>
  </nav>
);

// ── PlantCard Component ────────────────────────────────────────────────────────
const PlantCard = ({ plant, isAdded, onAdd }) => (
  <div className="plant-card">
    <img src={plant.image} alt={plant.name} />
    <div className="plant-info">
      <p className="plant-name">{plant.name}</p>
      <p className="plant-price">${plant.price.toFixed(2)}</p>
      <button
        className="add-to-cart-btn"
        onClick={() => onAdd(plant)}
        disabled={isAdded}
      >
        {isAdded ? '✓ Added' : 'Add to Cart'}
      </button>
    </div>
  </div>
);

// ── ProductList Component ──────────────────────────────────────────────────────
const ProductList = ({ onNavigateCart, onNavigateHome }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);

  // Build a Set of already-added plant IDs to disable their buttons
  const addedIds = new Set(cartItems.map((item) => item.id));

  const handleAddToCart = (plant) => {
    dispatch(
      addItem({
        id: plant.id,
        name: plant.name,
        price: plant.price,
        image: plant.image,
      })
    );
  };

  return (
    <div className="product-page">
      <Navbar
        onNavigateHome={onNavigateHome}
        onNavigateProducts={() => {}}
        onNavigateCart={onNavigateCart}
        cartCount={cartCount}
      />

      <h2 className="product-page-title">🌱 Our Plant Collection</h2>

      {plantCategories.map((category) => (
        <section key={category.id} className="category-section">
          <h3 className="category-title">{category.label}</h3>
          <div className="plant-grid">
            {category.plants.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                isAdded={addedIds.has(plant.id)}
                onAdd={handleAddToCart}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductList;
