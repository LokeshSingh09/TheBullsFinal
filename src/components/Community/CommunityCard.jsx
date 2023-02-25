import React from "react";

const CommunityCard = ({ item }) => {
  const { img, name } = item;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      <div
        className="img"
        style={{
          border: "2px solid black",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <img src={img} alt="" style={{ borderRadius: "10px" }} />
      </div>
      <div
        className="name"
        style={{ fontfamily: "Poppings", fontWeight: "600" }}
      >
        {name}
      </div>
    </div>
  );
};

export default CommunityCard;
