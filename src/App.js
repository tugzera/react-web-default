import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./config/ReactotronConfig";
import Routes from "./routes";
import history from "./services/history";
//import { persistor, store } from "./store";
//import GlobalStyle from "./styles/global";

const App = () => {
  return (
    //store={store}
    <Router history={history}>
      <Routes />
    </Router>
  );
};

export default App;
