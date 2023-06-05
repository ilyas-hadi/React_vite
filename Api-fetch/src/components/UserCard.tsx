import Button from "../components/Button";
interface User {
  name: string;
  email: string;
  phone: string;
  img: string;
}
interface UserCardProps {
  user: User;
}
 const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="team_member">
          <div className="image_holder">
            <img src={user.img} alt="Team_Image" />
          </div>
          <div className="basic_info">
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
          <Button
            btnId="loginUser"
            refText="#"
            buttonText="View More"
            anyOtherXlass="readMore"
          />
        </div>
      </div>
    </>
  );
}

export default UserCard;