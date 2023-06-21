import Button from "../components/Button";

 const UserCard= (props:any) => {
  
  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="team_member">
          <div className="image_holder">
            <img src={props.image} alt="Team_Image" />
          </div>
          <div className="basic_info">
            <h4>{props.name}</h4>
            <p>{props.email}</p>
          </div>
          <Button
            btnId="loginUser"
            refText= {props.url}
            buttonText="View More"
            anyOtherXlass="readMore"
          />
        </div>
      </div>
    </>
  );
}

export default UserCard;