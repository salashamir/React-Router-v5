import { Link } from "react-router-dom";
import ChipsImg from "./chips.jpg";

const Chips = () => {
  return (
    <div>
      <img src={ChipsImg} alt="Chips" />
      <h1>Chips</h1>
      <p>
        <Link to="/">RETURN TO VENDING MACHINE</Link>
      </p>
    </div>
  );
};

export default Chips;
