import React from "react";

const a = 10;
const b = 20;

const isAdmin = true;

const users = ["john", "david", "nora", "goldi"];

const product = [
  {
    id: 12,
    title: "product-1",
    Image: "https://picsum.photos/id/1/200/300",
    price: 45464,
  },
  {
    id: 123,
    title: "product-2",
    Image: "https://picsum.photos/id/1/200/300",
    price: 45464,
  },
];

const Ex3 = (props) => {
  return (
    <div>
      <h3> react const functional component</h3>

      <section>
        {product.map((item, index) => {
          return (
            <div key={index} className="card">
              <img src={item.Image} className="img-circle" alt="no image" />
              <h1>{item.title}</h1>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Ex3;
