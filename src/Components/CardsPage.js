import React from "react";
import Cards, { ifpromoted } from "./Cards";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/Slices/Cart";

const data = [
  {
    id: 1,
    pname: "1-iPhone 15",
    price: "70000/-",
    rating: "⭐⭐⭐⭐⭐",
    img: "https://www.reliancedigital.in/medias/Apple-iPhone-15-512GB-Blue-493839322-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oNmUvaDQ1LzEwMDUyMDg0NzYwNjA2LmpwZ3w5MmViZjAwY2Y0OGYzNzhlODk1ODhlNjZlODdmZDYyNWE4NTBjMzljZmM5ZmNkZWRhZDk2M2I1YzQxOGY1OWIx",
    promoted: true,
  },
  {
    id: 2,
    pname: "2-iPhone 15",
    price: "70000/-",
    rating: "⭐⭐⭐⭐",
    img: "https://www.reliancedigital.in/medias/Apple-iPhone-15-512GB-Blue-493839322-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oNmUvaDQ1LzEwMDUyMDg0NzYwNjA2LmpwZ3w5MmViZjAwY2Y0OGYzNzhlODk1ODhlNjZlODdmZDYyNWE4NTBjMzljZmM5ZmNkZWRhZDk2M2I1YzQxOGY1OWIx",
    promoted: false,
  },
  {
    id: 3,
    pname: "3-iPhone 15",
    price: "70000/-",
    rating: "⭐⭐⭐⭐⭐",
    img: "https://www.reliancedigital.in/medias/Apple-iPhone-15-512GB-Blue-493839322-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oNmUvaDQ1LzEwMDUyMDg0NzYwNjA2LmpwZ3w5MmViZjAwY2Y0OGYzNzhlODk1ODhlNjZlODdmZDYyNWE4NTBjMzljZmM5ZmNkZWRhZDk2M2I1YzQxOGY1OWIx",
    promoted: true,
  },
  {
    id: 4,
    pname: "4-iPhone 15",
    price: "70000/-",
    rating: "⭐⭐⭐⭐",
    img: "https://www.reliancedigital.in/medias/Apple-iPhone-15-512GB-Blue-493839322-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oNmUvaDQ1LzEwMDUyMDg0NzYwNjA2LmpwZ3w5MmViZjAwY2Y0OGYzNzhlODk1ODhlNjZlODdmZDYyNWE4NTBjMzljZmM5ZmNkZWRhZDk2M2I1YzQxOGY1OWIx",
    promoted: false,
  },
];

export default function CardsPage() {
  const PromotedCompo = ifpromoted(Cards);

  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <p> {cartItems.length} - Phones selected</p>

      <br />
      <button onClick={() => handleClearCart()}>Clear it</button>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {data.map((d) => (
          // logic for promoted or not
          <div key={d.id}>
            {" "}
            {d.promoted ? <PromotedCompo c_data={d} /> : <Cards c_data={d} />}
          </div>
        ))}
      </div>
    </div>
  );
}
