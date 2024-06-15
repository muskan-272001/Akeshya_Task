import React from 'react';
import styles from './features.module.css';

const Features = () => {
  const features = [
    {
      icon: <i className="fas fa-laptop-code"></i>,
      title: 'Web design',
    },
    {
      icon: <i className="fas fa-code"></i>,
      title: 'Development',
    },
    {
      icon: <i className="fas fa-users"></i>,
      title: 'Branding',
    },
    {
      icon: <i className="fas fa-play-circle"></i>,
      title: 'Media buying',
    },
    {
      icon: <i className="fas fa-search"></i>,
      title: 'Search engine',
    },
    {
      icon: <i className="fas fa-clipboard-list"></i>,
      title: 'Brand strategy',
    },
    {
      icon: <i className="fas fa-map-marker-alt"></i>,
      title: 'Local search marketing',
    },
    {
      icon: <i className="fas fa-chart-bar"></i>,
      title: 'Lead Tracking & Management',
    },
    {
      icon: <i className="fas fa-address-card"></i>,
      title: 'Contact management',
    },
    {
      icon: <i className="fas fa-bullhorn"></i>,
      title: 'Media management',
    },
    {
      icon: <i className="fas fa-calendar-alt"></i>,
      title: 'Social scheduling',
    },
    {
      icon: <i className="fas fa-ad"></i>,
      title: 'Ad retargeting',
    },
  ];

  return (
    <div className={styles.features}>
      <h2 className={styles.title}>Our Core Features</h2>
      <p className={styles.description}>
        Akeshya is a forward-thinking and intelligent design firm that is
        technically and creatively capable of transforming your brand into its
        best digital self. Our approach to design and development results in
        compelling, engaging branding and immersive digital experiences that
        provide a value for money.
      </p>
      <div className={styles.grid}>
        {features.map((feature) => (
          <div className={styles.feature} key={feature.title}>
            {feature.icon}
            <h3>{feature.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
