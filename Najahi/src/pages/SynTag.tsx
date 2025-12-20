import { useEffect, useState } from 'react';
import Card from '../components/GithubsCard';

interface TeamMember {
  name: string;
  role: string;
  github: string;
  image: string;
}

function SynTag() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch('/data/team.json'); 
        if (!response.ok) {
          throw new Error('فشل في تحميل بيانات الفريق');
        }

        const data = await response.json();
        setTeamMembers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) return <p>Loading team...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="page2 active2 all">
      <div className="page-header">
        <h1 className="syntag-title">
          <span className="Syn">Syn</span>
          <span className="Tag">Tag</span> Team
        </h1>
      

<h2 className='page-header2' > <p >
We are four students from An-Najah National University, majoring in Computer Science as part of the Apprenticeship Program (CAP). Our goal is to help students improve their learning experience by providing useful resources and support. This section showcases our GitHub team members and highlights our collaborative work.
</p>
</h2>

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
