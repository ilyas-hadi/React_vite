import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { userType } from "../types/userTypes";
import Button from "../components/Button";
import mapImg from "../assets/images/map-img.jpg";
import avator from "../assets/images/team/avtor.png";
import Loader from "../components/Loader"

const apiUrl = import.meta.env.VITE_BASE_API_URL as string; 
const Detail = () => {
  const {userId}= useParams();
  const [users, setUsers] = useState<userType | null>();

  useEffect(()=>{
  axios.get(`${apiUrl}users/${userId}`)
   .then((response)=>{
    setUsers(response.data);
   })
   .catch((error)=>{
    console.log(error)
   })
  },[userId])

  if(!users){
    return <>
  <Loader />  
    </>
  }

  return (
    <div className="container">
      <div className="col-12 y-pad">
        <div className="Main op_Detail ">
          <div className="row justify-content-center align-items-center g-0">
            <div className="col-md-8">
              {/* iframe map */}
              <div className="map_holder">
                <img src={mapImg} alt="" />
              </div>
            </div>
            <div className="col-md-4">
              {/* content Detail */}
              <div className="test-content">
                <h4>About User</h4>
                <div className="dt-user_hodler">
                  <img src={avator} alt={users.name} />
                </div>
                {/* Render the user image */}
                <div className="usr_id"><p>User ID: {userId}</p></div>
                <div className="outerContent">
                  <p>Name: {users.name}</p>
                  <p>Email: {users.email}</p>
                  <p>Phone: {users.phone}</p>
                  <p>website: {users.website}</p>
                  <hr />

                  <strong>Company Detail</strong>
                  <p>Company Name: {users.company.name}</p>
                  <p>catchPhrase: {users.company.catchPhrase}</p>
                  <p>bs: {users.company.bs}</p>
                  <hr />
                  
                  <strong>Address</strong>
                  <p>street: {users.address.street}</p>
                  <p>suite: {users.address.suite}</p>
                  <p>city: {users.address.city}</p>
                  <p>Zipcode: {users.address.zipcode}</p>
                </div>
                <Button
                  btnId="BackToHome"
                  refText="/about-us"
                  buttonText="Go Back"
                  anyOtherXlass="readMore"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
