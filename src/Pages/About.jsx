import React from 'react';
import Navbar from '../Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/about.css';

function About() {
  return (
    <div>
      <Navbar />
      <div id="about_main">
        <h1 id="about_heading">ABOUT US</h1>
        <div id="about_content">
          Hostpal was founded by a group of super passionate creators from different fields. We recognized the challenges that Airbnb hosts like you face when it comes to getting quality bookings. We saw that many hosts invest a lot of time and money in their listings but struggle to get a
          consistent stream of bookings due to various reasons. We knew we had the skills and the expertise to help you Change that……. So we started brainstorming and here we are! Together, we harnessed our collective skills and expertise to develop an advanced system of expert funnels. These
          funnels seamlessly connect with different social media platforms, empowering you to secure more bookings each month. Our mission is to transform your business and revolutionize the industry as a whole. We are not driven by quick profits; rather, our success is tied to your success. Our
          long-term vision is to establish a global network where hosts can effortlessly tap into the funnels we've created, ensuring a steady stream of passive bookings month after month. We are thrilled to have you join us on this remarkable journey. Our purpose is to simplify the hosting
          experience, allowing you to enjoy the process while generating consistent and substantial revenue. As passionate professionals, our focus is on finding you the perfect match of guests every month. By being part of our mission, you contribute to reshaping the industry, making it more
          accessible and lucrative for every host. Let us guide you towards a future where hosting becomes an effortless and rewarding endeavor.
        </div>
      </div>
    </div>
  );
}

export default About;
