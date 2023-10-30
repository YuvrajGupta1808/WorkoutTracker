import userImage from "../Images/user.jpg";
import "./Navbar.css";
const items = [
  "Workout Logs",
  "Nutrition Tracker",
  "Activity Tracker",
  "Progress Photos",
];
//CREATE A NAVBAR
function Navbar() {
  return (
    <>
      <div className="navbar-wrapper">
        <h1> Fitness Tracker</h1>
        <ul>
          {items.map((items) => (
            <li>{items}</li>
          ))}
          <img className="profile-icon" src={userImage} alt="User" />
        </ul>
      </div>
    </>
  );
}
export default Navbar;
