import "./style.css";
import userImage from '../../../../public/assets/user.png';
export const ProfilePage = (): JSX.Element => {
  return (
    <div className="profile-page">
      <div className="top-headings">
        <h1>Create your profile with best forms</h1>
        <h3 className="url-like">I will do this later</h3>
      </div>
      {/* input and image */}
      <div className="inputs-image">
        {/* inputs */}
        <div className="user-inputs">
          <div className="inner-input">
          <label>Name:</label>
          <input type="text" className="user-input" placeholder="Enter Your Name"/>
          </div>

          <div className="inner-input">
          <label>Email:</label>
          <input type="email" className="user-input" placeholder="Enter Your Email"/>
          </div>

          <div className="inner-input">
          <label>Username:</label>
          <input type="text" className="user-input" placeholder="9382949294@bestforms"/>
          </div>
        </div>
        {/* image */}
        <div>
          <img src={userImage} alt="user-image" className="user-image"/>
          <button className="user-image-btn">change photo</button>
        </div>
      </div>
      <div>
        <button className="update-profile-btn">Update Profile</button>
      </div>
    </div>
  );
};
