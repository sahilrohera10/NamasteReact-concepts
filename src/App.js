import logo from "./logo.svg";
import "./App.css";
import CardsPage from "./Components/CardsPage";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <CardsPage />
      </div>
    </Provider>
  );
}

export default App;
