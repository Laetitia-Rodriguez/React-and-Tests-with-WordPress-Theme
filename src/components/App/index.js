import React from 'react';

// Components
import Header from '../Header';
import Footer from '../Footer';

// Import images
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';

// Import style
import './app.scss';

// Import data
import data from '../../data/data.js';


function App() {
  return (
      <div className="App">
        <Header menu={data.menu} />
        <main className="main">
            <div className="main__top">
                <p className="main__top__tagline">App company motivation</p>
                <p className="main__top__p">After motivation and inspiration for web you're about</p>
                <div className="main__top__line"></div>
            </div>
            <div className="main__section">
                <img className="main__section__small-img" src={image1} alt="" />
                <img className="main__section__small-img" src={image2} alt="" />
                <img className="main__section__big-img" src={image3} alt="" />
                <img className="main__section__small-img" src={image4} alt="" />
                <img className="main__section__small-img" src={image5} alt="" />
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default App;
