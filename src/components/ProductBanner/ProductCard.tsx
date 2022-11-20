import { FunctionComponent } from "react";

interface Props {
    product: Product;
}

type Product = {
    id: any;
    name: String;
    description: String;
    price: any;
    createdAt: Date;
    updatedAt: Date;
};

const ProductCard: FunctionComponent<Props> = ({ product }) => {
    const { name, description, price } = product;

    return (
        <div className="bg-neutral-300 w-[200px] h-[350px] p-5 rounded-lg shadow-lg bg-opacity-30">
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
};

export default ProductCard;
