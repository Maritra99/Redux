import "./App.css";
import { Provider } from "react-redux";
import CakeContainer from "./Component/CakeContainer";
import store from "./Redux/store";
import HooksCakeContainer from "./Component/HooksCakeContainer";
import IceCreamContainer from "./Component/IceCreamContainer";
import NewCakeContainer from "./Component/NewCakeContainer";
import ItemContainer from "./Component/ItemContainer";
import UserContainer from "./Component/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HooksCakeContainer />
        <ItemContainer cakes />
        <ItemContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
