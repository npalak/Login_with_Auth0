import './App.css';
import LoginButton from "./components/LoginButton.js";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
function App() {
  return (
    <div>
      <div className="title">
      <h1>Hi! ,this page is only for authenticated user</h1>
      </div>
     <div className="boxSize">
    <LoginButton />&nbsp;&nbsp;
    <LogoutButton />
    </div> 
    <div className="profile">
    <Profile /></div>
    </div>
  );
}

export default App;
