import React, { useMemo } from "react";
import "./BlogPost.css";

// Queue Animation Component
const QueueAnimation = () => {
    const people = useMemo(() => Array.from({ length: 12 }, (_, i) => ({
        id: i,
        delay: `${i * 2.5}s`,
        duration: '75s',
        size: `${Math.floor(Math.random() * 6) + 12}px`,
        top: `${Math.random() * 100}vh`,
        color: i % 3 === 0 ? 'animation-dot-red' : (i % 3 === 1 ? 'animation-dot-gray' : 'animation-dot-red'),
        initialLeft: `calc(100vw + ${i * 200}px)`,
    })), []);

    return (
        <div className="animation-container">
            {people.map(person => (
                <div
                    key={person.id}
                    className={`animation-dot ${person.color}`}
                    style={{
                        width: person.size,
                        height: person.size,
                        top: person.top,
                        left: person.initialLeft,
                        animation: `queue-flow-visible ${person.duration} linear infinite`,
                        animationDelay: person.delay,
                    }}
                />
            ))}
        </div>
    );
};

function BlogPost() {
  return (
    <div className="blog-post-container">
      {/* Animation Background */}
      <QueueAnimation />
      
      {/* Main Content */}
      <section className="blog-post-content">
        <h1 className="blog-post-title">
          Introducing <span className="blog-post-accent">Fast Queue</span>
        </h1>

        <p className="blog-post-paragraph">
          In today's world, businesses, schools, hospitals, and even government 
          institutions face a common challenge: <strong className="blog-post-strong">managing queues</strong>. 
          Long waiting lines, chaotic lobbies, and frustrated customers can 
          negatively impact both user experience and organizational efficiency.
        </p>

        <h2 className="blog-post-heading">What is Fast Queue?</h2>
        <p className="blog-post-paragraph">
          Fast Queue is a modern <strong className="blog-post-strong">queue management app</strong> designed 
          to streamline the way organizations handle large volumes of customers. 
          Whether in banks, schools, hospitals, or corporate offices, Fast Queue 
          eliminates unnecessary stress by digitizing and automating queue 
          processes. Instead of waiting endlessly in line, customers can now 
          check in, receive a digital ticket, and be served in a structured, 
          organized, and timely manner.
        </p>

        <h2 className="blog-post-heading">Why Choose Fast Queue?</h2>
        <ul className="blog-post-list">
          <li className="blog-post-list-item"><strong className="blog-post-strong">Reduced Wait Times:</strong> Customers don't have to waste hours waiting in line.</li>
          <li className="blog-post-list-item"><strong className="blog-post-strong">No Crowded Lobbies:</strong> Create a calmer environment by managing traffic flow.</li>
          <li className="blog-post-list-item"><strong className="blog-post-strong">Improved Customer Satisfaction:</strong> Happy customers are loyal customers.</li>
          <li className="blog-post-list-item"><strong className="blog-post-strong">Real-time Updates:</strong> Staff can monitor queues and serve customers efficiently.</li>
          <li className="blog-post-list-item"><strong className="blog-post-strong">Scalable Solution:</strong> Works for small businesses, large enterprises, and institutions.</li>
        </ul>

        <h2 className="blog-post-heading">How Does It Work?</h2>
        <p className="blog-post-paragraph">
          Fast Queue provides a simple yet powerful workflow:
        </p>
        <ol className="blog-post-ordered-list">
          <li className="blog-post-list-item">Customers check in through the app or on-site kiosk.</li>
          <li className="blog-post-list-item">A digital ticket is generated and placed in the system.</li>
          <li className="blog-post-list-item">Customers can monitor their turn without physically waiting in line.</li>
          <li className="blog-post-list-item">Staff receive notifications and serve customers in order.</li>
          <li className="blog-post-list-item">Reports and analytics help businesses track performance.</li>
        </ol>

        <h2 className="blog-post-heading">Who Can Use Fast Queue?</h2>
        <p className="blog-post-paragraph">
          Fast Queue is versatile and suitable for:
        </p>
        <ul className="blog-post-list">
          <li className="blog-post-list-item">Hospitals and clinics managing patient appointments</li>
          <li className="blog-post-list-item">Banks and financial institutions handling customer services</li>
          <li className="blog-post-list-item">Schools and universities coordinating student queues</li>
          <li className="blog-post-list-item">Government offices reducing congestion</li>
          <li className="blog-post-list-item">Corporate offices for meetings and visitor check-ins</li>
        </ul>

        <h2 className="blog-post-heading">The Future of Queue Management</h2>
        <p className="blog-post-paragraph">
          The future of customer service lies in efficiency and convenience. Fast Queue 
          not only transforms how organizations manage their queues but also empowers 
          them with data-driven insights to improve operations. By adopting this 
          solution, businesses can stay ahead of the curve in today's competitive 
          environment.
        </p>

        <div className="blog-post-button-container">
          <a 
            href="/" 
            className="blog-post-button"
          >
            Back to Home
          </a>
        </div>
      </section>
    </div>
  );
}

export default BlogPost;