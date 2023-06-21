import {useEffect, useState} from 'react';
import Heading from "../components/Heading";
import UserCard from "../components/UserCard";
import axios from 'axios';
import { userType } from '../types/userTypes';
import avtor from "../assets/images/team/avtor.png";



const About = () => {
const [users, setUsers]= useState<userType[]>([]);
const apiUrl = import.meta.env.VITE_BASE_API_URL as string; 

useEffect(()=>{
axios.get(`${apiUrl}users`)
.then((response)=>{
    setUsers(response.data);
})
.catch((error)=>{
console.error(error);
})
},[])



    return (
        <div className="container">
            <div className="col-12">
                <div className="Main">
                    <div className="test-content">
                        <Heading upperHd="About us" innerHd="The Experts In Local"/>
                        <div className="container">
                            <div className="row">
                         {
                          users.map((user,index)=>{
                            return(
                            <UserCard 
                             key={index}
                             image={avtor}
                             name={user.name}
                             email={user.email}
                             url={`${user.id}`}
                           />
                           )
                          })
                         }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
