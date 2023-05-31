import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/help.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Help() {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <div>
      <div id="help_text">
        <h2 id="help_heading" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1500">
          How can we help YOU?
        </h2>
        <p id="help_content" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500">
          We are here to serve. Hostpal is a customer first institution that puts the needs of our clients at the forfront of everthing that we do. We want to know your specific needs and how we can work together to solve them. Hostpal is here for you.
        </p>
      </div>
    </div>
  );
}

export default Help;
