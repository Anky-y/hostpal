import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import marketLogo from '../images/market.png';
import seoLogo from '../images/seo.png';
import contentLogo from '../images/content.png';
import adLogo from '../images/bullhorn.png';

function Services() {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <div>
      <h2 id="services_heading">Our Services</h2>
      <div id="services_container">
        <Card key={'dark'} text={'dark'.toLowerCase() === 'light' ? 'dark' : 'white'} style={{ width: '18rem' }} className="mb-2 custom-card" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="600" data-aos-offset="0">
          <Card.Header>
            <div className="card_header">
              <p className="card_heading">Market Research</p>
              <img src={marketLogo} alt="" className="header_icon" />
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text className="card_content">Our expertise lies in market research, unveiling valuable insights and strategies customized for your business. We analyze market trends, consumer behavior, and competition to uncover hidden opportunities, enabling your growth.</Card.Text>
          </Card.Body>
        </Card>
        <Card key={'dark'} text={'dark'.toLowerCase() === 'light' ? 'dark' : 'white'} style={{ width: '18rem' }} className="mb-2 custom-card" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="900" data-aos-offset="0">
          <Card.Header>
            {' '}
            <div className="card_header">
              <p className="card_heading">Listing Optimization</p>
              <img src={seoLogo} alt="" className="header_icon" />
            </div>
          </Card.Header>
          <Card.Body>
            <div id="card_header"></div>
            <Card.Text className="card_content">
              Maximizing conversions with optimized listings. By fine-tuning your listings based on the Research about your target customer's.we ensure a higher conversion rate, increasing your chances of turning potential customers into satisfied Guests.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card key={'dark'} text={'dark'.toLowerCase() === 'light' ? 'dark' : 'white'} style={{ width: '18rem' }} className="mb-2 custom-card" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="1200" data-aos-offset="0">
          <Card.Header>
            {' '}
            <div className="card_header">
              <p className="card_heading">Content Creation</p>
              <img src={contentLogo} alt="" className="header_icon" />
            </div>
          </Card.Header>
          <Card.Body>
            <div id="card_header"></div>
            <Card.Text className="card_content">Driving conversions with authentic, organic content. Using in-depth research on your target customers, we create engaging content that attracts and converts customers, every month</Card.Text>
          </Card.Body>
        </Card>
        <Card key={'dark'} text={'dark'.toLowerCase() === 'light' ? 'dark' : 'white'} style={{ width: '18rem' }} className="mb-2 custom-card" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-delay="1500" data-aos-offset="0">
          <Card.Header>
            {' '}
            <div className="card_header">
              {' '}
              <p className="card_heading">Ad Campaign</p>
              <img src={adLogo} alt="" className="header_icon" />
            </div>
          </Card.Header>
          <Card.Body>
            <div id="card_header"></div>
            <Card.Text className="card_content">Captivate your target customers and convert them to valued guests. Our expertly crafted ad campaigns use strategic targeting and compelling messaging to drive measurable results for your business.</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Services;
