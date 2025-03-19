import React from "react";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <nav className="navbar">
        <h1 className="logo">Pika Connect</h1>
        <ul className="nav-links">
          <li>
            <a href="./About.jsx">Know about us</a>
          </li>
          <li>
            <a href="./Reviews.jsx">Reviews</a>
          </li>
          <li>
            <a href="./Login.jsx">Login</a>
          </li>
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input placeholder="Search" type="search" class="input" />
          </div>
          <button className="search-btn">Search</button>
        </ul>
      </nav>
      <section className="menu">
        <h3>Popular Dishes</h3>
        <div className="menu-items">
          {[
            {
              img: "https://media.istockphoto.com/id/1148638351/photo/sunday-breakfast.jpg?s=612x612&w=0&k=20&c=QXiLI-lY6wSKFxIZ1VpS3OopD-842NzOlSsCWJ2pzYA=",
              name: "Pancakes",
              reviews: "1.8k Reviews",
            },
            {
              img: "https://media.istockphoto.com/id/592689852/photo/balti-dish-with-indian-chicken-biryani.jpg?s=612x612&w=0&k=20&c=KTUHu82hhEf1u1Y6wKpVlgTKJ9ZDnmjw61AMR22gOB0=",
              name: "Biryani",
              reviews: "2.5k Reviews",
            },
            {
              img: "https://images.aws.nestle.recipes/resized/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie_1080_850.jpg",
              name: "Chocolate chip cookies",
              reviews: "1.2k Reviews",
            },
          ].map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.reviews}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <p>We bring you the best reviews.Taste the difference today!</p>
            <p>&copy;2025 FoodHub | All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Homepage;
