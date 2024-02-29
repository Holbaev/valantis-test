import React, { useEffect, useState } from "react";
import "./ProductList.scss";
import ProductCard from "../../entites/ProductCard/ProductCard";
import CircleLoader from "react-spinners/CircleLoader";
import MoonLoader from "react-spinners/MoonLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductsIds,
  setProducts,
} from "../../shared/store/reducers/ProductSlice";
import {
  getProduct_Ids,
  getProducts,
} from "../../shared/service/ProductService";
import Pagination from "../../entites/Pagination/Pagination";

const ProductList = () => {
  // states
  const dispatch = useDispatch();
  const product_ids = useSelector((state) => state.products.products_ids);
  const products = useSelector((state) => state.products.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordPage, setRecordPage] = useState(50);
  const indexOfLastRecord = currentPage * recordPage;
  const indexOfFirstRecord = indexOfLastRecord - recordPage;
  const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(products.length / recordPage);

  // functions
  const getProductIds = async () => {
    try {
      const response = await getProduct_Ids();
      const readyArray = [...new Set(response.data.result)];
      dispatch(
        setProductsIds({
          products_ids: readyArray,
        })
      );
    } catch (err) {
      console.log(err.message);
      getProductIds();
    }
  };

  const getData = async () => {
    try {
      const response = await getProducts(product_ids);
      const products = response.data.result;
      const uniqueProducts = products.filter((product, index, arr) => {
        const firstIndex = arr.findIndex((p) => p.id === product.id);
        return index === firstIndex;
      });

      dispatch(
        setProducts({
          products: uniqueProducts,
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getProductIds();
  }, []);

  useEffect(() => {
    if (product_ids?.length !== 0) {
      getData();
    }
  }, [product_ids]);

  return (
    <div className="products">
      <h3 className="products_title">The new arrivals</h3>
      <div className="cards_wrapper">
        <div className="products_cards">
          {products.length !== 0 ? (
            <>
              {currentRecords?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </>
          ) : (
            <div className="loader">
              <MoonLoader
                color="#8798d4"
                loading={true}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          )}
        </div>
      </div>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;
