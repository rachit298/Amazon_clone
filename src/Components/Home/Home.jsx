import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import { nanoid } from "nanoid";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://m.media-amazon.com/images/I/71qlKqpJnlL._SX3000_.jpg"
        alt="banner image"
      />
      <div className="home__row">
        <Product
          key={nanoid()}
          id={nanoid()}
          title="ASUS ROG Strix G17, 17.3-inch (43.94 cms) FHD 144Hz, AMD Ryzen 7 4800H, RTX 3050 Ti 4GB Graphics, Gaming Laptop (16GB/1TB SSD/Windows 11//Gray/2.4 kg), G713IE-HX040W"
          brand="Asus"
          price={"87,990"}
          rating={4}
          review={"92"}
          image="https://m.media-amazon.com/images/I/41ZN0vVuyUL._SY300_SX300_QL70_FMwebp_.jpg"
        />
        <Product
          key={nanoid()}
          id={nanoid()}
          title="WildHorn Brown RFID Blocking Leather Wallet for Men I Ultra Strong Stitching I 6 Credit Card Slots I 2 Currency Compartments I 1 Coin Pocket"
          brand="WildHorn"
          price={"299"}
          rating={4}
          review={"32,654"}
          image="https://images-eu.ssl-images-amazon.com/images/I/81IynUhxTHL._AC_UL450_SR450,320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          key={nanoid()}
          id={nanoid()}
          title="Asus ROG BP1501 39.62 cm (15.6-inch) Gaming Laptop Backpack (Black)"
          brand="Asus"
          price={"1,499"}
          rating={5}
          review={"844"}
          image="https://m.media-amazon.com/images/I/91Nde1bz2PL._SY679_.jpg"
        />
        <Product
          key={nanoid()}
          id={nanoid()}
          title="God Of War Ragnarök | Standard Edition | PS4 Game (PlayStation 4)
          "
          brand="Sony"
          price={"3,999"}
          rating={5}
          review={"384"}
          image="https://m.media-amazon.com/images/I/81LtrvOKYbL._SY500_.jpg"
        />
        <Product
          key={nanoid()}
          id={nanoid()}
          title="OnePlus Nord CE 2 Lite 5G (Blue Tide, 6GB RAM, 128GB Storage)"
          brand="OnePlus"
          price={"18,999"}
          rating={4}
          review={"109,187"}
          image="https://m.media-amazon.com/images/I/71AvQd3VzqL._SX425_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          key={nanoid()}
          id={nanoid()}
          title="boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with mic, 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming, ENx Tech, ASAP Charge, IWP, IPX4 Water Resistance (Bold Black)"
          brand="boAt"
          price={"1,299"}
          rating={4}
          review={"124,121"}
          image="https://images-eu.ssl-images-amazon.com/images/I/51HBom8xz7L._AC_UL600_SR600,400_.jpg"
        />
        <Product
          key={nanoid()}
          id={nanoid()}
          title="Fire-Boltt Phoenix Smart Watch with Bluetooth Calling 1.3 inches,120+ Sports Modes, 240*240 PX High Res with SpO2, Heart Rate Monitoring & IP67 Rating"
          brand="Fire-Boltt"
          price={"1,999"}
          rating={5}
          review={"33,234"}
          image="https://images-eu.ssl-images-amazon.com/images/I/61y2VVWcGBL._AC_UL600_SR600,400_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          key={nanoid()}
          id={nanoid()}
          title="Samsung 123.9cm (49 inches) Gaming Monitor with 32:9 Aspect Ratio Display and 240Hz Refresh Rate - LC49G95TSSWXXL"
          brand="Samsung"
          price={"135,000"}
          rating={5}
          review={"23,179"}
          image="https://m.media-amazon.com/images/I/41k-Y9vicZL._SX300_SY300_QL70_FMwebp_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
