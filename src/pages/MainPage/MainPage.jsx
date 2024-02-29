import React, { useEffect, useState } from "react";
import "./MainPage.css";
import Header from "../../widgets/Header/Header";
import Filters from "../../widgets/Filters/Filters";
import ProductList from "../../widgets/ProductList/ProductList";
import Collapse from "rc-collapse";
import 'rc-collapse/assets/index.css';
import { toast } from "react-toastify";


const MainPage = () => {
  // states
  const [width, setWidth] = useState(window.innerWidth);
  const items = [
    {
      label: <span className="my-header-class">Filters</span>,
      children: <Filters/>,
      showArrow:false,
    },
  ];
  const myStyle = {
    backgroundColor: "#f0f0f0", // Замените на нужный цвет фона
  };
  // functions
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() =>{
    toast.success("Добро пожаловать.");
  }, []);

  return (
    <>
      <div className="main">
        <div className="main_header">
          <Header />
        </div>
        <div className="flex">
          {width > 600 ? (
            <div className="main_filters">
              <Filters />
            </div>
          ) : (
            <div className="collopse_filters">
            <Collapse style={{backgroundColor:"#8798d4"}} accordion={true}  items={items} showArrow={false}/>
            </div>
          )}
          <div className="main_content">
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
