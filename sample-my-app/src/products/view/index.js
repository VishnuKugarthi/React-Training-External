import { useState } from 'react';

const Products = ({ products, addNew }) => {
  const [newProductName, setNewProductName] = useState("");
  return (
    <div>
      <h3>Products</h3>
      <hr/>
      <label>Product Name : </label>
      <input
        type="text"
        onChange={evt => setNewProductName(evt.target.value)}
      />
      <input
        type="button"
        value="Add New"
        onClick={() => addNew(newProductName)}
      />
      <div>
        {products.map(product => (
          <span key={product.id}> [{product.name}] </span>
        ))}
      </div>
    </div>
  );
};

export default Products;