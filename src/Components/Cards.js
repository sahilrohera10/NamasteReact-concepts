import React from "react";

export default function Cards(props) {
  const data = props.c_data;
  return (
    <div>
      <div
        style={{
          width: "30vw",
          height: "45vh",
          border: "1px solid black",
          display: "flex",
          margin: "2px",
        }}
      >
        <div>
          <p>{data.pname}</p>
          <p>{data.price}</p>
          <p>{data.rating}</p>
        </div>
        <div>
          <img style={{ objectFit: "contain" }} src={data.img} alt="" />
        </div>
      </div>
    </div>
  );
}

// now build a higher order component for promoted thing

// Higher order component -> takes Cards component as an input and returns a new component with a label
// on the card component
export const ifpromoted = (Cards) => {
  return (props) => {
    // this is a syntax for returning a component
    return (
      // returning the JSX of the new component
      <div>
        <label
          style={{
            position: "absolute",
            background: "black",
            color: "white",
            marginLeft: "10vw",
            padding: "2px",
          }}
        >
          {" "}
          Promoted{" "}
        </label>
        <Cards {...props} />
      </div>
    );
  };
};
