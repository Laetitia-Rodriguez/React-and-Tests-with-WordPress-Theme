import React from 'react';

// Components
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';

// Import style
import './app.scss';

// Import data
import data from '../../data/data.js';


function App() {
  return (
      <div className="App">
        <Header menu={data.menu} />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
