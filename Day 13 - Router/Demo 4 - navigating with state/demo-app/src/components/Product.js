import { useParams, useNavigate } from "react-router-dom"

export const Product = () => {
    const { selectedID } = useParams();
    const navigate = useNavigate();
    return (
        <div className="productName">
            <p>{selectedID}</p>
            <button onClick={() => { navigate(-1) }}>Go back</button>
        </div>
    )
}