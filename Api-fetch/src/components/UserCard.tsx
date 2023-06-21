import Button from "../components/Button";
import { userType } from "../types/userTypes";
interface UserCardProps {
  user: Partial<userType>;
  image: string;
}
 const UserCard: React.FC<UserCardProps> = ({ user, image }) => {
  const userRefUrl = `about-us/${user.id}`;
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="team_member">
          <div className="image_holder">
            <img src={image} alt="Team_Image" />
          </div>
          <div className="basic_info">
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
          <Button
            btnId="loginUser"
            refText= {userRefUrl}
            buttonText="View More"
            anyOtherXlass="readMore"
          />
        </div>
      </div>
    </>
  );
}

export default UserCard;