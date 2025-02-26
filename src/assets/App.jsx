import React, { useState } from "react";
import "../App.css";
import Carousel from "react-bootstrap/Carousel";
import PaymentSection from "./PaymentSection";

const App = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "Nike Air Max",
      price: 120,
      images: [
        "/images/nike2.png",
        "/images/nike3.png",
        "/images/nike4.png",
        "/images/nike9.png",
        "/images/nike12.png",
      ],
    },
    {
      id: 2,
      name: "Nike Air Force 1",
      price: 100,
      images: [
        "/images/img1-1.png",
        "/images/img1-2.png",
        "/images/img1-3.png",
        "/images/img1-4.png",
        "/images/img1-5.png",
      ],
    },
    {
      id: 3,
      name: "Nike React",
      price: 130,
      images: [
        "/images/img3-1.png",
        "/images/img3-2.png",
        "/images/img3-3.png",
        "/images/img3-4.png",
        "/images/img3-5.png",
      ],
    },
    {
      id: 5,
      name: "Nike Air Max 270",
      price: 150,
      images: [
        "/images/img4-1.png",
        "/images/img4-2.png",
        "/images/img4-3.png",
        "/images/img4-4.png",
        "/images/img4-5.png",
      ],
    },
    {
      id: 6,
      name: "Nike Air Max 97",
      price: 160,
      images: [
        "/images/img1-1.png",
        "/images/img1-2.png",
        "/images/img1-3.png",
        "/images/img1-4.png",
        "/images/img1-5.png",
      ],
    },
    {
      id: 7,
      name: "Nike Air Max 98",
      price: 170,
      images: [
        "/images/img2-1.png",
        "/images/img2-2.png",
        "/images/img2-3.png",
        "/images/img2-4.png",
        "/images/img2-5.png",
      ],
    },
    {
      id: 8,
      name: "Nike Air Max 2090",
      price: 180,
      images: [
        "/images/img5-1.png",
        "/images/img5-2.png",
        "/images/img5-3.png",
        "/images/img5-4.png",
        "/images/img5-5.png",
      ],
    },
    {
      id: 9,
      name: "Nike Air Max 720",
      price: 190,
      images: [
        "/images/img6-1.png",
        "/images/img6-2.png",
        "/images/img6-3.png",
        "/images/img6-4.png",
        "/images/img6-5.png",
      ],
    },
    {
      id: 10,
      name: "Nike Air Max 95",
      price: 200,
      image: "/images/nike11.png",
    },
    {
      id: 11,
      name: "Nike Air Max 1",
      price: 210,
      image: "/images/nike12.png",
    },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="/images/brand_logo3.jpeg" alt="logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">New Releases</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="#">Sale</a>
          </li>
        </ul>
        <div className="nav-icons">
          <a href="#">
            <i className="fas fa-search"></i>
          </a>
          <a href="#">
            <img src="/images/cartlogo.png" alt="cart" className="cart-logo" />
            <span className="cart-count">{cart.length}</span>
          </a>
          <a href="#">
            <i className="fas fa-user"></i>
          </a>
        </div>
      </nav>
      <div className="video-container">
        <video autoPlay muted loop className="brand-video">
          <source src="/images/nikevideo4.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {product.images ? (
              <Carousel>
                {product.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <img src={image} alt={`${product.name} ${index + 1}`} />
                  </Carousel.Item>
                ))}
              </Carousel>
            ) : (
              <img src={product.image} alt={product.name} />
            )}
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
      <PaymentSection cart={cart} />
    </div>
  );
};

export default App;
