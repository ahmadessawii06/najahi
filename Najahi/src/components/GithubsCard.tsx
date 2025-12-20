import React from 'react';

interface CardProps {
  name: string;
  role: string;
  github: string;
  image: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ name, role, github, image, description }) => {
  return (
    <div className="team-card">
      <div className="member-avatar">
        <img 
          src={image} 
          alt={name} 
          style={{ 
            width: '100%', 
            height: '100%', 
            borderRadius: '50%', 
            objectFit: 'cover' 
          }} 
        />
      </div>
      <h3 className="member-name">{name}</h3>
      <p className="member-role">{role}</p>
      <a 
        href={github} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="github-btn"
      >
        GitHub Profile
        <i className="fab fa-github"></i>
      </a>
      <p className="member-desc">{description}</p>
    </div>
  );
};

export default Card;