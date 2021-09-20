import React from 'react';

// Import images
import image6 from '../../assets/image6.jpg';
import image7 from '../../assets/image7.jpg';
import image8 from '../../assets/image8.jpg';

// Import style
import './footer.scss';

const Footer = () => (
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
);

export default Footer;
