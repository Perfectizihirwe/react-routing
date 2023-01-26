import React from "react";
import NavigationBar from "../components/navigationBar.jsx";
import { ListingCard } from "../components/listingCard/listingCard.jsx"

const data = [
  {
    price: 576437,
    baths: 43,
    beds: 23,
    address: "KK 643 St",
    image: "https://d37ukvrrv3in12.cloudfront.net/listings/ade198b0-743a-4386-bc48-6fb1142903ea/xl/2.jpg"
  },
  {
    price: 200000,
    beds: 10,
    baths: 5,
    address: "KG 234 St",
    image: "https://d37ukvrrv3in12.cloudfront.net/listings/dc1e1b8b-a8a7-4ccf-808e-dc0018f33427/xl/2.jpg"
  }
]

export const PropertiesScreen = () => {
  return (
    <div>
      <NavigationBar />
      <div>
        <div>First Screen</div>
        <div>Image</div>
        {data.map((item) => {
          return (
            <ListingCard price={item.price} beds={item.beds} bath={item.baths} image={item.image} />
          )
        })}
        {/* <ListingCard price={ } beds={ } bath={ } address={ } image={ } /> */}
      </div>
    </div>
  );
};
