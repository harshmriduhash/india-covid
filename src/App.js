import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent' ;
import { ConfigureStore } from './redux/configureStore';
import { Provider } from 'react-redux';
import HeaderComponent from './components/HeaderComponent';

const store = ConfigureStore();

// store.subscribe(()=> console.log(store.getState()))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderComponent />
        <MainComponent />
      </div>
    </Provider>
  );
}

export default App;
