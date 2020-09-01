import React from "react";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
      />

      {/* product id, key, title, price, rating, image */}
      <div className="home_row">
        <Product
          id={1612020100}
          key={1}
          title="Paper Craft: lorem external -content. duckduckgo.com"
          price={11.26}
          rating={5}
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Lod0StyO1YKop-XnMT3a4AHaL0%26pid%3DApi&f=1"
        />
        <Product
          id={1612020103}
          key={2}
          title="Iphone X: lorem external -content. duckduckgo.com"
          price={12.26}
          rating={4}
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.dhD58VU4PaEln-tnmc-WPgHaHa%26pid%3DApi&f=1"
        />
      </div>

      <div className="home_row">
        <Product
          id={1712020106}
          key={3}
          title="Macbook Cover: lorem external -content. duckduckgo.com"
          price={13.26}
          rating={3}
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zeklw2xSB79jyigO_rUCkwHaHa%26pid%3DApi&f=1"
        />
        <Product
          id={1812020100}
          key={4}
          title="Canon 70D: lorem external -content. duckduckgo.com"
          price={14.26}
          rating={5}
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.UbpuCUpvp0swFPi1-3ESJwHaFE%26pid%3DApi&f=1"
        />
        <Product
          id={2112020109}
          key={5}
          title="Samsun Gear 3: lorem external -content. duckduckgo.com"
          price={15.26}
          rating={4}
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.iOXhw59wZSKm0JEholQ4IQHaE9%26pid%3DApi&f=1"
        />
      </div>

      {/* Product  */}
    </div>
  );
}

export default Home;
