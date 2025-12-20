
import Card from '../components/GithubsCard'

const teamMembers = [
  {
    name: 'Ahmad Essawii',
    role: 'Team Leader',
    github: 'https://github.com/ahmadessawii06',
    image: 'https://github.com/ahmadessawii06.png',
    description: 'Specialist in building scalable web applications and intuitive user interfaces.'
  },
  {
    name: 'Leen Arafat',
    role: 'Team Co-Leader',
    github: 'https://github.com/LeenArafat',
    image: 'https://github.com/LeenArafat.png',
    description: 'Passionate about frontend development and creating seamless user experiences.'
  },
  {
    name: 'Yaqeen Ashour',
    role: 'FrontEnd Developer',
    github: 'https://github.com/yaqeenashour',
    image: 'https://github.com/yaqeenashour.png',
    description: 'Dedicated to cleaner code, efficient algorithms, and creative design solutions.'
  },
  {
    name: 'Jawad Shahen',
    role: 'BackEnd Developer',
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
          <Card
            key={index}
            name={member.name}
            role={member.role}
            github={member.github}
            image={member.image}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
}

export default SynTag;