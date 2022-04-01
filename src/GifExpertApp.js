import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const cat = ["one punch"];
  const [categories, setCategories] = useState(cat);
  //   const handleAdd = () => {
  //     setCategories([...categories, "parisyte"]);
  //   };
  //   console.log(categories);
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
