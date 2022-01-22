import { useNavigate } from 'react-router-dom';
export const Category = () => {
    const navigate = useNavigate();
    const handleChangeEvent = (e) => {
        navigate(`/product/${e.target.value}`);
    }
    return (
        <select onChange={handleChangeEvent}>
            <option>Choose an option</option>
            <option value='Honda'>Honda</option>
            <option value='Yamaha'>Yamaha</option>
            <option value='Suzuki'>Suzuki</option>
        </select>
    )
}
