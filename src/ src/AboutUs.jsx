import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1 className="about-title">About Paradise Nursery</h1>
        <p className="about-tagline">
          Bringing nature's beauty into your home, one plant at a time.
        </p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2018, Paradise Nursery began as a small backyard greenhouse
            with a big dream: to make plant ownership accessible, joyful, and
            sustainable for everyone. What started with just a handful of tropical
            varieties has grown into a thriving online plant shop offering over 100
            species of houseplants, succulents, and air-purifying plants.
          </p>
          <p>
            We believe that plants are more than decoration — they are living
            companions that improve air quality, reduce stress, and bring warmth
            to any space. Our mission is to help every customer find the perfect
            plant companion for their home or office.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At Paradise Nursery, our mission is to cultivate a greener world by
            connecting plant lovers with high-quality, sustainably grown plants.
            We are committed to responsible sourcing, eco-friendly packaging, and
            providing expert care guidance so that every plant thrives in its new
            home.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us?</h2>
          <ul className="about-list">
            <li>🌱 <strong>Premium Quality:</strong> Every plant is hand-selected and inspected before shipping.</li>
            <li>📦 <strong>Safe Delivery:</strong> Specially designed packaging ensures plants arrive healthy.</li>
            <li>💚 <strong>Expert Support:</strong> Our plant care team is available 7 days a week.</li>
            <li>🌍 <strong>Sustainable Sourcing:</strong> We partner with eco-conscious growers worldwide.</li>
            <li>🔄 <strong>Happiness Guarantee:</strong> Not satisfied? We'll replace your plant, no questions asked.</li>
          </ul>
        </section>

        <section className="about-section about-team">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">🌿</div>
              <h3>Sarah Green</h3>
              <p>Founder & Head Botanist</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">🌺</div>
              <h3>Marcus Bloom</h3>
              <p>Plant Sourcing Director</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">🪴</div>
              <h3>Lily Chen</h3>
              <p>Customer Experience Lead</p>
            </div>
          </div>
        </section>

        <section className="about-section about-contact">
          <h2>Get In Touch</h2>
          <p>We'd love to hear from you!</p>
          <div className="contact-info">
            <p>📧 <a href="mailto:hello@paradisenursery.com">hello@paradisenursery.com</a></p>
            <p>📞 +1 (800) 555-PLANT</p>
            <p>📍 123 Garden Lane, Green Valley, CA 94102</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
