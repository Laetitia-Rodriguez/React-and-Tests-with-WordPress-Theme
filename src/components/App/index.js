// Import images
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';
import image7 from '../../assets/image7.jpg';
import image8 from '../../assets/image8.jpg';

// Import style
import './app.scss';

function App() {
  return (
      <div className="App">
        <header className="header">
            <div className="header__title">
                <p>Lp apptune</p>
            </div>
            <nav className="header__nav">
                <a className="header__nav__a" href="#">home</a>
                <a className="header__nav__a" href="#">introduce</a>
                <a className="header__nav__a" href="#">features</a>
                <a className="header__nav__a" href="#">portfolio</a>
                <a className="header__nav__a" href="#">blog</a>
                <a className="header__nav__a" href="#">woocommerce</a>
                <a className="header__nav__a" href="#">contact</a>
            </nav>
        </header>
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
        <footer className="footer">
            <div className="footer__section">
                <div className="footer__section__img-up">
                    <img className="footer__section__img-up__img" src={image6} alt="" />
                    <h2 className="footer__section__img-up__h2">High fidelity</h2>
                    <p className="footer__section__img-up__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam suscipit odio voluptatem dolorum sint.</p>
            </div>
                <div className="footer__section__img-down">
                    <h2 className="footer__section__img-down__h2">Ad-free listening</h2>
                    <p className="footer__section__img-down__p">Alias ad dolore delectus in cumque ea blanditiis dolores quod, modi eveniet, tempore ipsam optio.</p>
                    <img className="footer__section__img-down__img" src={image7} alt="" />
                </div>
                <div className="footer__section__img-up">
                    <img className="footer__section__img-up__img" src={image8} alt="" />
                    <h2 className="footer__section__img-up__h2">Offline mode</h2>
                    <p className="footer__section__img-up__p">Laboriosam modi illo fuga perspiciatis harum natus facere! Mollitia, sint sit natus accusantium fugit nobis.</p>
                </div>
            </div>
            <p className="footer__p">App company motivation</p>

            <div className="waves-wrapper1">
                <div className="waves-wrapper2">
                  <svg className="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                      <path fillOpacity="0.66" d="M-0.27,20.22 C84.93,81.41 172.96,-22.20 500.84,9.38 L500.00,150.00 L-1.41,150.48 Z">
                      </path>
                  </svg> 
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
