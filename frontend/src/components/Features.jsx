const Features = () => {
  const features = [
    {
      icon: "🔍",
      title: "Find Resources",
      description: "Easily discover shelters, food banks, healthcare services, job training, and legal aid in your area with our resource database."
    },
    {
      icon: "🤝",
      title: "Connect & Volunteer",
      description: "Join a network of caring volunteers and organizations working together to strengthen our community and help those in need."
    },
    {
      icon: "📱",
      title: "Real-Time Updates",
      description: "Get up-to-date information on resource availability, hours of operation, and contact details to ensure you find the help you need."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">How Community Compass Works</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;