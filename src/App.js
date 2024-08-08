import React, { useState } from 'react';
import './App.css';
import List from './components/List/List';
import Product from './components/Product/Product';

const productsStorage = [
  {
      "id": 1,
      "imageUrl": "img.url",
      "name": "Product name",
      "count": 4,
      "size": {
          "width": 200,
          "height": 200
      },
      "weight": "200g",
      "comments": [
          {
              "id": 1,
              "productId": 1,
              "description": "some text",
              "date": "14:00 22.08.2021"
          }
      ]
  }
]

const App = () => {
  const [products, setProducts] = useState(productsStorage);
  const [listProducts, setListProducts] = useState(true);
  const [prodEdit, setProdEdit] = useState();

  const editProd = (key) => {
    setListProducts(false);
    const itemToRemove = products.find(prod => prod.id.toString() === key.toString());
    const index = products.indexOf(itemToRemove, 0);
    setProdEdit(products[index]);
  }

  const onEditSubmit = (id, edit) => {
    const prodToEdit = products.find(prod => prod.id.toString() === id.toString());
    const newData = products.map((prod) => {
        if (prod === prodToEdit) {
            return {"id": prod.id, "name": prod.name, "imageUrl": prod.imageUrl, "count": prod.count, "size": {"width": prod.size.width, "height": prod.size.height}, "weight": prod.weight, "comments": prod.comments};
        };
        return prod;
    });

    setProducts(newData);
};

  return (
    <>
      <h1>Inforce frontend task</h1>
      {listProducts ? <List data={products} setData={setProducts} setEdit={editProd} /> : <Product product={prodEdit} onEditSubmit={onEditSubmit} />}
    </>
  );
}

export default App;
