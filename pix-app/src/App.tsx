import React from 'react';
import './App.css';
import DropdownComponent from './DropdownComponent/DropdownComponent';
import { Provider } from 'react-redux';
import { store } from './ApiRequest/store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <DropdownComponent />
    </div>
    </Provider>
  );
}

export default App;
