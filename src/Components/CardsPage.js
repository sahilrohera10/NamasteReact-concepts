import React from "react";
import Cards, { ifpromoted } from "./Cards";

const data = [
  {
    pname: "iPhone 15",
    price: "70000/-",
    rating: "⭐⭐⭐⭐⭐",
    img: "https://www.reliancedigital.in/medias/Apple-iPhone-15-512GB-Blue-493839322-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oNmUvaDQ1LzEwMDUyMDg0NzYwNjA2LmpwZ3w5MmViZjAwY2Y0OGYzNzhlODk1ODhlNjZlODdmZDYyNWE4NTBjMzljZmM5ZmNkZWRhZDk2M2I1YzQxOGY1OWIx",
    promoted: true,
  },
  {
    pname: "iPhone 15",
    price: "70000/-",
    rating: "⭐⭐⭐⭐",
    img: "https://www.reliancedigital.in/medias/Apple-iPhone-15-512GB-Blue-493839322-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oNmUvaDQ1LzEwMDUyMDg0NzYwNjA2LmpwZ3w5MmViZjAwY2Y0OGYzNzhlODk1ODhlNjZlODdmZDYyNWE4NTBjMzljZmM5ZmNkZWRhZDk2M2I1YzQxOGY1OWIx",
    promoted: false,
  },
  {
    pname: "iPhone 15",
    price: "70000/-",
    rating: "⭐⭐⭐⭐⭐",
    img: "https://www.reliancedigital.in/medias/Apple-iPhone-15-512GB-Blue-493839322-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oNmUvaDQ1LzEwMDUyMDg0NzYwNjA2LmpwZ3w5MmViZjAwY2Y0OGYzNzhlODk1ODhlNjZlODdmZDYyNWE4NTBjMzljZmM5ZmNkZWRhZDk2M2I1YzQxOGY1OWIx",
    promoted: true,
  },
  {
    pname: "iPhone 15",
    price: "70000/-",
    rating: "⭐⭐⭐⭐",
    img: "https://www.reliancedigital.in/medias/Apple-iPhone-15-512GB-Blue-493839322-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NjQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oNmUvaDQ1LzEwMDUyMDg0NzYwNjA2LmpwZ3w5MmViZjAwY2Y0OGYzNzhlODk1ODhlNjZlODdmZDYyNWE4NTBjMzljZmM5ZmNkZWRhZDk2M2I1YzQxOGY1OWIx",
    promoted: false,
  },
];

export default function CardsPage() {
  const PromotedCompo = ifpromoted(Cards);
  return (
    <div>
      <p>Phones</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {data.map((d) => (
          // logic for promoted or not
          <>
            {console.log(d)}
            {d.promoted ? <PromotedCompo c_data={d} /> : <Cards c_data={d} />}
          </>
        ))}
      </div>
    </div>
  );
}
