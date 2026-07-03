import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assets/style/style.css';
import img from "../assets/images/cocacola.png";

const EclipseCard = () => {
  const [isOpen, setIsOpen]     = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: false, easing: 'ease-out-cubic' });
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setTimeout(() => AOS.refresh(), 50);
  };

  const handleExport = (e) => {
    e.stopPropagation();
    setShowPopup(true);
  };

  const closePopup = (e) => {
    e.stopPropagation();
    setShowPopup(false);
  };

  return (
    <div className="container">
      <div
        className={`card-wrapper ${isOpen ? 'open' : ''}`}
        onClick={handleToggle}
      >
        {/* ── Red glow background ── */}
        <div className="glow-bg"></div>

        {/* ── All content ── */}
        <div className="card-content">

          {/* CLOSED: Eclipse circle */}
          <div className={`collapsed-view ${isOpen ? 'hide' : ''}`}>
            <span className="coca-cola-text">Coca-Cola</span>
          </div>

          {/* OPEN: Red card */}
          <div className={`expanded-view ${isOpen ? 'show' : ''}`}>

            {/* Left text */}
            <div
              className="text-section"
              key={isOpen ? 'open-text' : 'closed-text'}
              data-aos={isOpen ? 'fade-right' : ''}
              data-aos-delay="150"
              data-aos-duration="600"
            >
              <h2 className="title">COCACOLA</h2>
              <p className="description">
                Refresh your day with the iconic taste of Coca-Cola, made to brighten every moment.
                Enjoy the perfect balance of fizz and flavor with every chilled sip.
              </p>
              <button
                className="cta-button"
                onClick={handleExport}
              >
                Export more
              </button>
            </div>

            {/* Right image */}
            <div
              className="image-section"
              key={isOpen ? 'open-img' : 'closed-img'}
              data-aos={isOpen ? 'fade-left' : ''}
              data-aos-delay="250"
              data-aos-duration="700"
            >
              <img
                src={img}
                alt="Coca Cola"
                className="product-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Coca-Cola_bottle_capSCB.jpg/265px-Coca-Cola_bottle_capSCB.jpg';
                }}
              />
            </div>

          </div>
        </div>
      </div>

      {/* ════════ POPUP MODAL ════════ */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>

            {/* Animated checkmark */}
            <div className="popup-icon">
              <svg viewBox="0 0 52 52" className="checkmark-svg">
                <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark-tick" fill="none" d="M14 27 l8 8 l16 -16"/>
              </svg>
            </div>

            <h3 className="popup-title">Coming soon! 🎉</h3>
            <p className="popup-message">
             Get Ready for the Next Level of Coca-Cola Refreshment.
            </p>

            {/* Floating bubbles */}
            <span className="bubble b1">🥤</span>
            <span className="bubble b2">❄️</span>
            <span className="bubble b3">✨</span>
            <span className="bubble b4">🍾</span>

            <button className="popup-close-btn" onClick={closePopup}>
              Got it! ✓
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EclipseCard;