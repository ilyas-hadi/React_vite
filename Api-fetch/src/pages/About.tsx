import Heading from "../components/Heading";
import UserCard from "../components/UserCard";
import team1 from '../assets/images/team/team-1.png';
import team2 from '../assets/images/team/team-2.png';
import team3 from '../assets/images/team/team-3.png';
import team4 from '../assets/images/team/team-4.png';
import team5 from '../assets/images/team/team-5.png';
import team6 from '../assets/images/team/team-6.png';
import team7 from '../assets/images/team/team-7.png';
import team8 from '../assets/images/team/team-8.png';

function About() {

  const users = [
    {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '123-456-7890',
      img: team1 ,
    },
    {
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      phone: '987-654-3210',
      img: team2,
    },
    {
      name: 'Alex Johnson',
      email: 'alexjohnson@example.com',
      phone: '555-123-4567',
      img: team3,
    },
    {
      name: 'Emma Wilson',
      email: 'emmawilson@example.com',
      phone: '111-222-3333',
      img: team4,
    },
    {
      name: 'Michael Brown',
      email: 'michaelbrown@example.com',
      phone: '999-888-7777',
      img: team5,
    },
    {
      name: 'Sophia Lee',
      email: 'sophialee@example.com',
      phone: '444-555-6666',
      img: team6,
    },
    {
      name: 'William Davis',
      email: 'williamdavis@example.com',
      phone: '777-888-9999',
      img: team7,
    },
    {
      name: 'Olivia Moore',
      email: 'oliviamoore@example.com',
      phone: '222-111-0000',
      img: team8,
    },
  ];
  

  return (
    <div className="container">
      <div className="col-12">
        <div className="Main">
          <div className="test-content">
            <Heading upperHd="About us" innerHd="The Experts In Local" />
            <div className="container">
              <div className="row">
              {users.map((user, index) => (
                  <UserCard  key={index} user={user} />
               ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
