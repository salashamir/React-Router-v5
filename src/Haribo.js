import { Link } from "react-router-dom";
import GummiesImg from "./gummies.jpg";

const Haribo = () => {
  return (
    <div>
      <img src={GummiesImg} alt="Gummies" />
      <h1>Haribo Gummies</h1>
      <p>
        <Link to="/">RETURN TO VENDING MACHINE</Link>
      </p>
    </div>
  );
};

export default Haribo;
