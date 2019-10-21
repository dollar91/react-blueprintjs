import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { FocusStyleManager } from "@blueprintjs/core";
import store from './store';
// import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
FocusStyleManager.onlyShowFocusOnTabs();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path = "/" component = { Home }></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
