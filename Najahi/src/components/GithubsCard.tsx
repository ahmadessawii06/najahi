import React from 'react';

interface CardProps {
  name: string;
  role: string;
  github: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ 
  name, 
  role, 
  github, 
  image 
}) => {
  return (
    <div className="team-card">
      <div className="member-avatar">
        <img 
          src={image} 
          alt={name} 
          className="member-image"
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
    </div>
  );
};

export default Card;