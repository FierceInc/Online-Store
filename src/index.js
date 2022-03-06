import { App } from './App/App'
import ReactDOM from 'react-dom';
import store from "./App/Store";
import { Provider } from "react-redux";
import React from 'react';
import { AuthProvider } from './Contexts/Auth'
import { DatabaseProvider } from './Contexts/FirestoreContext';



ReactDOM.render(
   <React.StrictMode>
  <Provider store={store}>
    <AuthProvider>
      <DatabaseProvider>
          <App />
      </DatabaseProvider>
     
    </AuthProvider>
  </Provider>
   </React.StrictMode>,

  document.getElementById("root")
);
