import React from 'react';
import { FaRocket, FaDownload, FaLightbulb, FaBoxOpen, FaCode, FaHeart } from 'react-icons/fa';

const Features = () => {
  const featuresData = [
    { title: 'Fresh new layout', description: 'With Bootstrap 5, we’ve created a fresh new layout.' },
    { title: 'Free to download', description: 'As always, Start Bootstrap has been a free resource.' },
    { title: 'Jumbotron hero header', description: 'The heroic part of the website is the jumbotron hero header.' },
    { title: 'Feature boxes', description: 'We’ve created feature boxes that can be used to showcase services.' },
    { title: 'Simple clean code', description: 'We keep the code as simple and clean as possible.' },
    { title: 'A name you trust', description: 'Start Bootstrap is a name that you can trust.' }
  ];


  return (
    <section className="py-5">
      <div className="container px-5 my-5">
        <div className="row gx-5">
          {featuresData.map((feature, index) => (
            <div className="col-lg-4 mb-5 " key={index}>
              <div className="card h-100 shadow border-0 bg-light">
                <div className="card-body p-4 text-center bg-light">
                  <h5 className="card-title mb-3">{feature.title}</h5>
                  <p className="card-text mb-0">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

