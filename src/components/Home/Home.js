import React from "react";
import Product from "../Product/Product";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <img
        className="home__img"
        src="https://m.media-amazon.com/images/I/71nB472pZPL._SX3000_.jpg"
        alt="Prime video banner"
      />
      <div className="home__row">
        <Product 
        id = "1111"
        title="Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones"
        price={14.11}
        rating={6}
        image="https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg"/>

        <Product
         id = "1112"
         title="The Orthodox Church of Ethiopia: A History"
         price={22.40}
         rating={5}
         image="https://m.media-amazon.com/images/I/51jNdA27K7L._SX317_BO1,204,203,200_.jpg "
         />

        <Product 
         id = "1113"
         title="Left to Tell: Discovering God Amidst the Rwandan Holocaust"
         price={25.94}
         rating={5}
         image="https://m.media-amazon.com/images/I/81irGNCsTjL._AC_UY218_.jpg" 
         />
        <Product 
         id = "1114"
         title="Finding Me: A Memoir"
         price={18.48}
         rating={5}
         image="https://m.media-amazon.com/images/I/51PqjmXHepL.jpg" 
         />

      </div>
      <div className="home__row">
        <Product 
         id = "2221"
         title="Choiknbo Smart Watch, Fitness Tracker SmartWatch for Android/ iOS Phones, 1.69 Full Touch Screen with Heart Rate Monitor"
         price={19.89}
         rating={5}
         image="https://m.media-amazon.com/images/I/61c+OqsCQvL._AC_UL400_.jpg"
        />
        <Product
        id = "2222"
        title="Cecilio Size 4/4 (Full Size) Student Cello with Hard & Soft Case, Stand, Bow, Rosin, Bridge and Extra Set of Strings"
        price={399.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/815J5HQVrTL._AC_UL400_.jpg"
         />
        <Product
        id = "2223"
        title="Adidas Youth Soccer Arsenal 22/23 Home Jersey"
        price={84.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/61Fnf4qe0PL._AC_UL400_.jpg"
         />
      </div>
      <div className="home__row">
        <Product 
        id = "3331"
        title="SAMSUNG 75-Inch Class QLED Q60A Series - 4K UHD Dual LED Quantum HDR Smart TV 
        "
        price={959.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/715HnQnwSLL._AC_UL320_.jpg"
        />

        <Product 
        id = "3332"
        title="Frigidaire 11.6 Cu. Ft. Compact ADA Top Freezer Refrigerator 
        "
        price={740.10}
        rating={5}
        image="https://m.media-amazon.com/images/I/71pQnsqueML._AC_UL320_.jpg"
        />
        <Product 
        id = "3333"
        title="Kangaroo 36 Giant Teddy Bear Stuffed Animal | Valentines Day "
        price={29.5}
        rating={5}
        image="https://m.media-amazon.com/images/I/51b0wHIe0KS._AC_.jpg"/>
      </div>
      <div className="home__row">
        <Product 
        id = "4441"
        title="Cooler Master Caliber R3 Gaming Chair for Computer Game, Office, Comfy Ergonomic 360° Swivel"
        price={249.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/71sEUjcxRhL._AC_SR180,120_QL70_.jpg"
        />

        <Product 
        id = "4442"
        title="ZINUS Jackie Loveseat Sofa / Easy, Tool-Free Assembly, Soft Grey"
        price={306.36}
        rating={4}
        image="https://m.media-amazon.com/images/I/81Jc9XEhDCL._AC_UL320_.jpg"
        />
        
        <Product 
        id = "4443"
        title="SAMSUNG 75 inches Q60T QLED 4K UHD HDR Smart TV (2020)"
        price={1097.95}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/91zwQCLhIzL._AC_UL160_SR160,160_.jpg"
        />
      </div>
    </div>
    </div>
  );
}

export default Home;
