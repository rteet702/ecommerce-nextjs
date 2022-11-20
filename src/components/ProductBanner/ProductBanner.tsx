import { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

type Product = {
    id: Number;
    name: String;
    description: String;
    price: Number;
    createdAt: Date;
    updatedAt: Date;
};

const ProductBanner: FunctionComponent = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/products").then((response) => {
            setProducts([...response.data]);
        });
    }, []);

    return (
        <div className="bg-green-500 py-3">
            {products.map((product, index) => {
                return <ProductCard product={product} key={index} />;
            })}
        </div>
    );
};

export default ProductBanner;
