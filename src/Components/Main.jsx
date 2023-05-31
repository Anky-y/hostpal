import '../Css/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <div id="main_text__container">
      <h1 id="main_header">
        <div>
          <span class="char" style={{ animationDelay: '0s' }}>
            W
          </span>
          <span class="char" style={{ animationDelay: '0.05s' }}>
            E
          </span>
          <span class="char" style={{ animationDelay: '0.1s' }}>
            L
          </span>
          <span class="char" style={{ animationDelay: '0.15s' }}>
            C
          </span>
          <span class="char" style={{ animationDelay: '0.2s' }}>
            O
          </span>
          <span class="char" style={{ animationDelay: '0.25s' }}>
            M
          </span>
          <span class="char" style={{ animationDelay: '0.3s' }}>
            E
          </span>
        </div>
        <div>
          <span class="char" style={{ animationDelay: '0.35s' }}>
            T
          </span>
          <span class="char" style={{ animationDelay: '0.4s' }}>
            O
          </span>
        </div>
        <div>
          <span class="char" style={{ animationDelay: '0.45s' }}>
            H
          </span>
          <span class="char" style={{ animationDelay: '0.5s' }}>
            O
          </span>
          <span class="char" style={{ animationDelay: '0.55s' }}>
            S
          </span>
          <span class="char" style={{ animationDelay: '0.6s' }}>
            T
          </span>
          <span class="char" style={{ animationDelay: '0.65s' }}>
            P
          </span>
          <span class="char" style={{ animationDelay: '0.7s' }}>
            A
          </span>
          <span class="char" style={{ animationDelay: '0.75s' }}>
            L
          </span>
        </div>
      </h1>
      <div id="main_content">
        <p data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="800">
          Your Gateway to Change At Hostpal, we help Airbnb hosts maximize their
        </p>{' '}
        <p data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1000">
          bookings by leveraging the power of social media marketing.
        </p>{' '}
        <p data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1200">
          With our innovative solutions, you'll get more bookings than ever before.
        </p>
      </div>
    </div>
  );
}

export default Main;
