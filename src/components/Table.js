import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TableData from "./TableData";
import FoodData from "../data/FoodData.json";

const Table = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  console.log(`id is ${id}`);
  const data = FoodData.data;

  const heading = [
    { title: "Name", key: "name" },
    { title: "Description", key: "description" },
    { title: "Price", key: "price" },
    { title: "Discounted Price", key: "discountedPrice" },
    { title: "Quantity", key: "quantity" },
    {
      title: "Image",
      key: "image",
      render: (images) =>
        images.length > 0 ? <li>{images[0].url}</li> : "---",
      //FIXME:
    },
    {
      title: "Actions",
      key: "_id",
      render: (row) => (
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => handleActionClick(row)}
        >
          Action
        </button>
      ),
    },
  ];

  const handleActionClick = (id) => {
    window.location.href = `/?id=${id}`;
  };

  return (
    <div className="p-4">
      <TableData header={heading} data={data} />
    </div>
  );
};

export default Table;
