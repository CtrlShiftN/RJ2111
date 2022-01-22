import { useNavigate } from "react-router-dom";
const Category = () => {
    const navigate = useNavigate();
    const handleChange = (e) => {
        navigate(`/product/${e.target.value}`);
    }
    return (
        <select onChange={handleChange}>
            <option value="Honda">Honda</option>
            <option value="Suzuki">Suzuki</option>
            <option value="Yamaha">Yamaha</option>
        </select>
    )
}
export default Category;