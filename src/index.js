import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
//This delays the rendering of your app's UI until your persisted state has been retrieved and saved to redux. 
import store from "./store/ReduxStore";
import App from "./App";


ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);