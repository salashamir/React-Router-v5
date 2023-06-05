import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Pretzels from "./Pretzels";
import Haribo from "./Haribo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <VendingMachine />
          </Route>
          <Route exact path="/pretzels">
            <Pretzels />
          </Route>
          <Route exact path="/chips">
            <Chips />
          </Route>
          <Route exact path="/gummies">
            <Haribo />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
