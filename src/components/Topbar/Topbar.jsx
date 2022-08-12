import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import avatar from "../../assets/Image/face.jpg"

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Maatr. Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsNone className="topbarIcon"/>
            <span className="topIconBadge">
              5
            </span>
          </div>
          <div className="topbarIconsContainer">
            <Language className="topbarIcon"/>
            <span className="topIconBadge">
              5
            </span>
          </div>
          <div className="topbarIconsContainer">
            <Settings className="topbarIcon"/>
          </div>
          <img src={avatar} className="topAvatar" alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
