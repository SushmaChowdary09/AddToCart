import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList.js';
import React, { useState } from 'react';
import Footer from './component/Footer.js';
import AddItem from './component/AddItem.js'

function App() {
  const productListData = [
    {
      price: 100000,
      name: "Iphone 10S Max",
      quantity: 0,
    },
    {
      price: 30000,
      name: "Redmi Note",
      quantity: 0,
    },
  ];

  const [productList, setProductList] = useState(productListData); 
  const [totalAmount, setTotalAmount] = useState(0)

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const decrementQuantity = (index)=>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity > 0){
      newProductList[index].quantity--;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList)
  };

  const resetQuantity =()=>{
    let newProductList = [...productList];
    newProductList.map((productList)=>{
      productList.quantity= 0;
    })
    setProductList(newProductList)
    setTotalAmount(0);
      
}
const removeItem =(index) => {
  let newProductList = [...productList];
  let newTotalAmount = totalAmount;
  newTotalAmount -=
  newProductList[index].quantity * newProductList[index].price;
  newProductList.splice(index
    ,1);
  setProductList(newProductList)
  setTotalAmount(newTotalAmount);}

  const addItem = (name , price)=>{
    let newProductList = [...productList];
    newProductList.push({price:price,
    name:name,
    quantity:0});
   setProductList(newProductList)

  }
  return (
    <>
      <Navbar />
      <main className='container mt-5'>
        <AddItem addItem={addItem}/>
        <ProductList productList={productList} incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeItem={removeItem}
         />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>

    </>
  );
}

export default App;
