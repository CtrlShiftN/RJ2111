import {useState} from "react";

function Stateless() {
    // khai bao gia tri su dung state
    let [count, setCount] = useState(0);
    // xu ly khi co su kien click
    const handleClick = () => {
        const newValue = count + 1;
        setCount(newValue);
    }
    // return components
    return (
        <div>
            Giá trị {count}.
            <div>
                <button onClick={handleClick}>Tăng :</button>
            </div>
        </div>
    );
}
export default Stateless;