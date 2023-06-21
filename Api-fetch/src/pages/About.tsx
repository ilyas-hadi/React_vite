import { useEffect, useState } from 'react';
import Heading from "../components/Heading";
import UserCard from "../components/UserCard";
import axios from 'axios';
import { userType } from "../types/userTypes";
import team1 from "../assets/images/team/team-1.png";
import team2 from "../assets/images/team/team-2.png";
import team3 from "../assets/images/team/team-3.png";
import team4 from "../assets/images/team/team-4.png";
import team5 from "../assets/images/team/team-5.png";
import team6 from "../assets/images/team/team-6.png";
import team7 from "../assets/images/team/team-7.png";
import team8 from "../assets/images/team/team-8.png";
import team9 from "../assets/images/team/no-img_1.png";
import team10 from "../assets/images/team/no-img_2.png";


const apiURL = import.meta.env.VITE_BASE_API_URL as string;

function About() {
  const [users, setUsers] = useState<userType[]>([]);

  useEffect(() => {
    axios.get(`${apiURL}users`)
    .then(response => {
      const updatedUsers = response.data.map((user: userType, index: number) => ({
        ...user,
        image: usersImage[index]?.img,
      }));
      setUsers(updatedUsers);
    })
      .catch(error => {
        console.log(error);
      });
  }, [apiURL]);
 

/* images data */
const usersImage: Partial<userType>[] = [
  {
    img: team1 ,
  },
  {
    img: team2,
  },
  {
    img: team3,
  },
  {
    img: team4,
  },
  {
    img: team5,
  },
  {
    img: team6,
  },
  {
    img: team7,
  },
  {
    img: team8,
  },
  {
    img: team9,
  },
  {
    img: team10,
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
                  <UserCard key={index} user={user} image={user.image}  />
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