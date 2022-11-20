import { NextPage } from "next";
import ProductBanner from "../components/ProductBanner/ProductBanner";

interface Props {}

const Home: NextPage<Props> = () => {
    return (
        <div>
            <ProductBanner />
        </div>
    );
};

export default Home;
