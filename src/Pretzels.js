import { Link } from "react-router-dom";
import PretzelsImg from "./pretzels.jpg";

const Pretzels = () => {
  return (
    <div>
      <img src={PretzelsImg} alt="Pretzels" />
      <h1>Pretzels</h1>
      <p>
        <Link to="/">RETURN TO VENDING MACHINE</Link>
      </p>
    </div>
  );
};

export default Pretzels;
