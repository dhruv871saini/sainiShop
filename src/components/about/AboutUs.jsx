import React from 'react';
import Nav from '../nav/Nav';

const AboutUs = () => {
  return (<>
      <div className="sticky-top-nav"><Nav /></div>

    <div className="container my-5">
      <div className="row">
      <h1 className='text-center mb-3 text-danger fw-bold '>About Us</h1>
        <div className="col-md-6">
          <h2>About Our E-Commerce Store</h2>
          <p>
            Welcome to MyShop, your number one source for all kinds Product Category. 
            We're dedicated to giving you the very best of Product, with a focus 
            on dependability, customer service, and uniqueness.
          </p>
          <p>
            Founded in 2004 by DHRUV SAINI, MyShop has come a long way from its beginnings 
            in a delhi . When  first started out, their passion for 
            cloth, drove them to action, so that MyShop can offer you competitive advantage. 
            We now serve customers all over place, and are thrilled that we're able to turn our 
            passion into our own website.
          </p>
          <p>
            We hope you enjoy our products as much as we enjoy offering them to you. If you have 
            any questions or comments, please don't hesitate to contact us.
          </p>
          <p><strong>Sincerely,</strong><br/>Dhruv saini</p>
        </div>
        <div className="col-md-6">
          <img 
            src="https://as2.ftcdn.net/v2/jpg/07/64/55/75/1000_F_764557526_HlwV6rYpIxrfhrmlpTzl74INFoMmJs9Z.jpg" 
            alt="About Us" 
            className="img-fluid rounded"
          />
        </div>
      </div>

      <hr className="my-5"/>

      <div className="row my-5">
        <div className="col-md-12 text-center">
          <h2>Our Features</h2>
        </div>
        <div className="col-md-4 text-center">
          <img 
            src="https://www.shutterstock.com/shutterstock/photos/238031749/display_1500/stock-vector-mobile-marketing-and-online-store-concept-flat-icons-full-circle-of-online-shopping-with-mail-menu-238031749.jpg" 
            alt="Feature 1" 
            className="img-fluid mb-3"
          />
          <h4>Wide Range of Products</h4>
          <p>We offer a diverse range of products, ensuring that you find exactly what you're looking for.</p>
        </div>
        <div className="col-md-4 text-center">
          <img 
            src="https://img.freepik.com/free-photo/red-delivery-car-deliver-express-shipping-fast-delivery-background-3d-rendering-illustration_56104-1910.jpg?w=740&t=st=1723269138~exp=1723269738~hmac=d6212bf78346ec588f3df7925084b5879647f2e17796a239673dd4800e1e7ed2" 
            alt="Feature 2" 
            className="img-fluid mb-3"
          />
          <h4>Fast Shipping</h4>
          <p>Our efficient shipping process guarantees that your products reach you quickly and safely.</p>
        </div>
        <div className="col-md-4 text-center">
          <img 
            src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=740&t=st=1723269260~exp=1723269860~hmac=e4e733cce3812b197e301ee3265fa983da90c47f6611bee6db8903b27d99f450" 
            alt="Feature 3" 
            className="img-fluid mb-3 w-75"
          />
          <h4>Customer Support</h4>
          <p>Our dedicated customer support team is here to assist you with any inquiries or issues.</p>
        </div>
      </div>

      <hr className="my-5"/>

      <div className="row my-5">
        <div className="col-md-6">
          <h2>Our Journey</h2>
          <p>
            Watch this video to learn more about how we started, our journey, and our commitment 
            to providing the best products and services to our customers.
          </p>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe 
              className="embed-responsive-item" 
              src="https://www.youtube.com/embed/VIDEO_ID" 
              allowFullScreen
              title="Our Journey"
            />
          </div>
        </div>
        <div className="col-md-6">
          <h2>Our Gallery</h2>
          <div className="row">
            <div className="col-md-6 mb-3">
              <img 
                src="https://wizzy.ai/blog/wp-content/uploads/2024/01/ecomm-.png" 
                alt="Gallery 1" 
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 mb-3">
              <img 
                src="https://cdn.prod.website-files.com/619e15d781b21202de206fb5/6548cdf5f79797112792b9f0_How-to-Succeed-at-E-commerce-Customer-Journey-Mapping-A-Comprehensive-Guide-p-1080.webp" 
                alt="Gallery 2" 
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 mb-3">
              <img 
                src="https://media.licdn.com/dms/image/D4D12AQECRF8sJ5OY8g/article-cover_image-shrink_720_1280/0/1675226684679?e=1728518400&v=beta&t=N5y3dT7AZrOb2pj59xyGYlIlC_a1ixt_VnIM37ULXgE" 
                alt="Gallery 3" 
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 mb-3">
              <img 
                src="https://miro.medium.com/v2/resize:fit:720/format:webp/0*vgPzn4W5QDea7RUO.png" 
                alt="Gallery 4" 
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default AboutUs;
