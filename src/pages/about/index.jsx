import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

const About = () => {
  return (
    <>
    <Navbar />
     <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>🛍️ About Us</h1>
      <p style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
        Welcome to <strong>ShopEase</strong> – your one-stop destination for a
        seamless online shopping experience. Our fake eCommerce platform is
        designed to showcase the power of modern web technologies by offering a
        realistic shopping flow with products, categories, cart, and checkout
        features.
      </p>

      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🌟 What We Offer</h2>
      <ul style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
        <li>A wide range of <strong>sample products</strong> across multiple categories.</li>
        <li>Fully functional <strong>cart and checkout</strong> process (demo only).</li>
        <li>Smooth <strong>search and filter</strong> options for better navigation.</li>
        <li>Responsive and modern UI for all screen sizes.</li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🎯 Our Goal</h2>
      <p style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
        This project was created as a <strong>practice eCommerce app</strong> to
        demonstrate frontend development, UI/UX design, and integration of core
        shopping functionalities. It’s not a real store, but it gives users a
        hands-on feel of how an online shopping platform works.
      </p>

      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>⚡ Tech Behind ShopEase</h2>
      <ul style={{ lineHeight: "1.6" }}>
        <li><strong>React / JavaScript</strong> for fast and dynamic UI</li>
        <li><strong>CSS / Styled Components</strong> for modern design</li>
        <li><strong>Fake Store API</strong> for product data</li>
        <li><strong>Local Storage / Firebase</strong> for managing cart and users</li>
      </ul>
    </div>
    <Footer /> 
    </>
  )
}

export default About
