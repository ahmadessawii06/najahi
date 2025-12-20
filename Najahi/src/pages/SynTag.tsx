

const teamMembers = [
  {
    name: 'Ahmad Essawii',
    role: 'Team Member',
    github: 'https://github.com/ahmadessawii06',
    image: 'https://github.com/ahmadessawii06.png',
    description: 'Specialist in building scalable web applications and intuitive user interfaces.'
  },
  {
    name: 'Leen Arafat',
    role: 'Team Member',
    github: 'https://github.com/LeenArafat',
    image: 'https://github.com/LeenArafat.png',
    description: 'Passionate about frontend development and creating seamless user experiences.'
  },
  {
    name: 'Yaqeen Ashour',
    role: 'Team Member',
    github: 'https://github.com/yaqeenashour',
    image: 'https://github.com/yaqeenashour.png',
    description: 'Dedicated to cleaner code, efficient algorithms, and creative design solutions.'
  },
  {
    name: 'Jawad Shahen',
    role: 'Team Member',
    github: 'https://github.com/jawadshahen28',
    image: 'https://github.com/jawadshahen28.png',
    description: 'Tech enthusiast focused on database management and backend architectures.'
  }
];

function SynTag() {
  return (
    <div className="page active">
      <div className="page-header">
        <h1 className="syntag-title">
          <span className="Syn">Syn</span>
          <span className="Tag">Tag</span> Team
        </h1>
        <p>Meet the brilliant minds behind the Najahi platform.</p>
      </div>

      <div className="team-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
             <div className="member-avatar">
              <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <a 
              href={member.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="github-btn"
            >
              <i className="fab fa-github"></i>
              GitHub Profile
            </a>
            <p className="member-desc">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SynTag;