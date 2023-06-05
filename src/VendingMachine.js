import { NavLink } from "react-router-dom";

const VendingMachine = () => {
  return (
    <nav>
      <div>
        <NavLink exact to="/pretzels">
          Pretzels
        </NavLink>
      </div>
      <div>
        <NavLink exact to="/chips">
          Chips
        </NavLink>
      </div>
      <div>
        <NavLink exact to="/haribo">
          Haribo Gummies
        </NavLink>
      </div>
    </nav>
  );
};

export default VendingMachine;
