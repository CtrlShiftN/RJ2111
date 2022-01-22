import { useParams } from "react-router-dom"

const Product = () => {
    const { categoryID } = useParams();
    return (
        <div>
            <h3>Id selected {categoryID} </h3>
        </div>
    );
}
export default Product;