import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import AlertMessage from "../component/AlertMessage";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

const ProductProvider = ({ children }) => {
    const apiUrl = import.meta.env.VITE_apiUrl;

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${apiUrl}/product/getproducts`);
            return response.data.data;
        } catch (error) {
            return [];
        }
    };

    const fetchProductById = async (productId) => {
        try {
            const response = await axios.get(`${apiUrl}/product/${productId}`);
            return response.data.data;
        } catch (error) {
            return null;
        }
    };

    const fetchLatestPostsByCategory = async () => {
        try {
            const response = await axios.get(`${apiUrl}/product/pro/latest-posts`);
            return response.data.data;
        } catch (error) {
            return [];
        }
    };

    const fetchProductsByCategory = async (category) => {
        try {
            const response = await axios.get(`${apiUrl}/product/products/${category}`);
            return response.data.data;
        } catch (error) {
            return [];
        }
    };

    const values = {
        fetchProducts,
        fetchProductById,
        fetchLatestPostsByCategory,
        fetchProductsByCategory
    };

    return (
        <ProductContext.Provider value={values}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
