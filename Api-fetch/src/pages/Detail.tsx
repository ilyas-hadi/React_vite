import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { userType } from "../types/userTypes";
import Button from "../components/Button";
import mapImg from "../assets/images/map-img.jpg";
import team9 from "../assets/images/team/no-img_1.png";
import Loader from "../components/Loader"
const apiURL = import.meta.env.VITE_BASE_API_URL as string;

const Detail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<userType | null>();

  useEffect(() => {
    axios
      .get(`${apiURL}users/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [apiURL, userId]);

  if (!user) {
    return (
      <>
        <Loader />
      </>
    );
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
                  <img src={team9} alt={user.name} />
                </div>
                {/* Render the user image */}
                <p>User ID: {userId}</p>
                <div className="outerContent">
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                </div>
                <Button
                  btnId="BackToHome"
                  refText="/about-us"
                  buttonText="Go Back"
                  anyOtherXlass="PrimeClass"
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
