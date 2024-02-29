import React, { useState } from "react";
import "./Filters.scss";
import { Filter } from "../../shared/service/ProductService";
import { useDispatch, useSelector } from "react-redux";
import { setProductsIds } from "../../shared/store/reducers/ProductSlice";
import { toast } from "react-toastify";

const Filters = () => {
  // states
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  // functions
  const handleChange = (target, setState) => setState(target);
  
  const handleFilter = async (type , text) => {
    if(title === "" && brand === "" && price === ""){
        toast.warning("Пожалуйста, напишите значение фильтра.");
    }else{
        try {
          const response = await Filter(type , text);
          if(response.data.result?.length !== 0){
            const readyArray = [...new Set(response.data.result)];
            dispatch(
              setProductsIds({
                products_ids: readyArray,
              })
            );
            toast.success("Продукты успешно отфильтрованы.");
            setTitle("");
            setBrand("");
            setPrice("");
          }else {
            toast.warning("Извините, но у нас нет таких продуктов.");
            setTitle("");
            setBrand("");
            setPrice("");
          }
        } catch (err) {
            console.log(err.message);
        }
    }
};

  return (
    <div className="filter">
      <div className="filter_flex">
        <div className="filter_cards">
          <h3 className="title_name">Title</h3>
          <div className="checkboks_cards">
            <div className="filter_checkboks">
              <input
                type="text"
                className="checkboks_input"
                value={title}
                placeholder="Название продукта."
                onChange={(e) => handleChange(e.target.value, setTitle)}
              />
              <button className="checkboks_text" onClick={() => handleFilter("product" , title)}>Ok</button>
            </div>
          </div>
        </div>
        <div className="filter_cards">
          <h3 className="title_name">Price</h3>
          <div className="filter_checkboks">
            <input
              type="text"
              className="checkboks_input"
              onChange={(e) => handleChange(e.target.value, setPrice)}
              placeholder="Цена продукта."
              value={price}
            />
            <button className="checkboks_text" onClick={() => handleFilter("price" , Number(price))}>Ok</button>
          </div>
        </div>
        <div className="filter_cards">
          <h3 className="title_name">Brand</h3>
          <div className="filter_checkboks">
            <input
              type="text"
              className="checkboks_input"
              onChange={(e) => handleChange(e.target.value, setBrand)}
              placeholder="Бренд продукта."
              value={brand}
            />
            <button className="checkboks_text" onClick={() => handleFilter("brand" , brand)}>Ok</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
 