// import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageList from "./components/ImageList/ImageList";
import searchImages from "./api";
import {useState} from "react";
import Carousel from './components/Carousel/Carousel';
import HomePage from './components/HomePage/HomePage';
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import LogIn from "./components/LogIn/LogIn";
import { useRoutes } from 'react-router-dom';
import ProductsDetail from "./components/ProductsDetail/ProductsDetail";
import ProductCatlog from "./components/ProductCatlog/ProductCatlog";
import KidsCollection from "./components/KidsCollection/KidsCollection";
import BoysCollections from "./components/BoysCollections/BoysCollections";
import HandloomCollection from "./components/HandloomCollection/HandloomCollection";


function App() {
  let routeElements = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          // path: "./",
        },
        {
          path: "/LogIn",
          element: <LogIn />
        },
        {
          path: "/ProductsDetail",
          element: <ProductsDetail />
        },
        {
          path: "/ProductCatlog",
          element: <ProductCatlog />
        },
        {
          path: "/KidsCollection",
          element: <KidsCollection />
        },
        {
          path: "/BoysCollections",
          element: <BoysCollections />
        },
        {
          path: "/HandloomCollection",
          element: <HandloomCollection />
        },
      ]
    }
  ])
  const [images,setImages]=useState([])
  const handleSubmit=async(userwish)=>{
    const result=await searchImages(userwish)
    setImages(result)
  }
  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      <ImageList image={images} />
      {routeElements}
      <Carousel />
      <HomePage />
      <ShoppingCart />
    </>
  )
}

export default App;
