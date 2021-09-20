// Import images
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';

// Import style
import './App.scss';

function App() {
  return (
      <div className="App">
        <header class="header">
            <div class="header__title">
                <p>Lp apptune</p>
            </div>
            <nav class="header__nav">
                <a class="header__nav__a" href="#">home</a>
                <a class="header__nav__a" href="#">introduce</a>
                <a class="header__nav__a" href="#">features</a>
                <a class="header__nav__a" href="#">portfolio</a>
                <a class="header__nav__a" href="#">blog</a>
                <a class="header__nav__a" href="#">woocommerce</a>
                <a class="header__nav__a" href="#">contact</a>
            </nav>
        </header>
        <main class="main">
            <div class="main__top">
                <p class="main__top__tagline">App company motivation</p>
                <p class="main__top__p">After motivation and inspiration for web you're about</p>
                <div class="main__top__line"></div>
            </div>
            <div class="main__section">
                <img class="main__section__small-img" src="img/image1.jpg" alt="" />
                <img class="main__section__small-img" src="img/image2.jpg" alt="" />
                <img class="main__section__big-img" src="img/image3.jpg" alt="" />
                <img class="main__section__small-img" src="img/image4.jpg" alt="" />
                <img class="main__section__small-img" src="img/image5.jpg" alt="" />
            </div>
        </main>
        <footer class="footer">
            <div class="footer__section">
                <div class="footer__section__img-up">
                    <img class="footer__section__img-up__img" src="img/image6.jpg" alt="" />
                    <h2 class="footer__section__img-up__h2">High fidelity</h2>
                    <p class="footer__section__img-up__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam suscipit odio voluptatem dolorum sint.</p>
            </div>
                <div class="footer__section__img-down">
                    <h2 class="footer__section__img-down__h2">Ad-free listening</h2>
                    <p class="footer__section__img-down__p">Alias ad dolore delectus in cumque ea blanditiis dolores quod, modi eveniet, tempore ipsam optio.</p>
                    <img class="footer__section__img-down__img" src="img/image7.jpg" alt="" />
                </div>
                <div class="footer__section__img-up">
                    <img class="footer__section__img-up__img" src="img/image8.jpg" alt="" />
                    <h2 class="footer__section__img-up__h2">Offline mode</h2>
                    <p class="footer__section__img-up__p">Laboriosam modi illo fuga perspiciatis harum natus facere! Mollitia, sint sit natus accusantium fugit nobis.</p>
                </div>
            </div>
            <p class="footer__p">App company motivation</p>

            <div class="waves-wrapper1">
                <div class="waves-wrapper2">
                  <svg class="wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                      <path fill-opacity="0.66" d="M-0.27,20.22 C84.93,81.41 172.96,-22.20 500.84,9.38 L500.00,150.00 L-1.41,150.48 Z">
                      </path>
                  </svg> 
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
