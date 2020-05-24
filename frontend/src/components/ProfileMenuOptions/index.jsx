import React from "react";
import "./styles.css";

// Assets
import profilePhoto from "../../assets/profile_photo.png";

// Icons
import { Notifications } from "@material-ui/icons";

// Components
import SquareButton from "../SquareButton";

function ProfileMenuOptions() {
  return (
    <div className="profile-menu-options">
      <SquareButton innerIcon={() => <Notifications />} mr />
      <SquareButton innerImg={profilePhoto} />
    </div>
  );
}

export default ProfileMenuOptions;
