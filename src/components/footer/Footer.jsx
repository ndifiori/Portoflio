import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title"> Difiori </h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link"> About </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link"> Projects </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.facebook.com/nathan.difiori.3" className="footer__social-link" target={"_blank"}>
            <i class="bx bxl-facebook"></i>
          </a>

          <a href="https://www.instagram.com/nathandifiori/" className="footer__social-link" target={"_blank"}>
            <i class="bx bxl-instagram"></i>  
          </a>

          <a href="https://twitter.com/Chameleon_404" className="footer__social-link" target={"_blank"}>
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
