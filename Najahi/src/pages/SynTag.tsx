
import Card from '../components/GithubsCard'

const teamMembers = [
  {
    name: 'Ahmad Essawii',
    role: 'Team Leader',
    github: 'https://github.com/ahmadessawii06',
    image: 'https://github.com/ahmadessawii06.png'
  },
  {
    name: 'Leen Arafat',
    role: 'Team Co-Leader',
    github: 'https://github.com/LeenArafat',
    image: 'https://github.com/LeenArafat.png'
  },
  {
    name: 'Yaqeen Ashour',
    role: 'FrontEnd Developer',
    github: 'https://github.com/yaqeenashour',
    image: 'https://github.com/yaqeenashour.png'
  },
  {
    name: 'Jawad Shahen',
    role: 'BackEnd Developer',
    github: 'https://github.com/jawadshahen28',
    image: 'https://github.com/jawadshahen28.png'
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
        <p>Meet the brilliant minds behind the Najahi platform</p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            name={member.name}
            role={member.role}
            github={member.github}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
}

export default SynTag;