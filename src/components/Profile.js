import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        
        <h1 style={{color:"white"}}>Congratulation! you have successfully log-In</h1>
        <div className="email-picture">
        <img src={user.picture} alt={user.name} style={{marginLeft:'20px'}} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        </div>
      </div>
    )
  );
};

export default Profile;