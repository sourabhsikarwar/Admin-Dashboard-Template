import "./widgetSm.css"
import face from "../../assets/Image/face.jpg"
import { Visibility } from "@material-ui/icons"

const WidgetSm = () => {
  return (
    <div className="widgetSm">
        <span className="wsTitle">
            New Joined Members
        </span>
        <ul className="wsList">
            <li className="wsListItem">
                <img src={face} alt="avatar" className="wsImg" width="30"/>
                <div className="wsUser">
                    <span className="wsUsername">Sourabh Sikarwar</span>
                    <span className="wsUserTitle">Software Engineer</span>
                </div>
                <button className="wsButton">
                    <Visibility className="wsIcon"/>
                    Display
                </button>
            </li>
            <li className="wsListItem">
                <img src={face} alt="avatar" className="wsImg" width="30"/>
                <div className="wsUser">
                    <span className="wsUsername">Sourabh Sikarwar</span>
                    <span className="wsUserTitle">Software Engineer</span>
                </div>
                <button className="wsButton">
                    <Visibility className="wsIcon"/>
                    Display
                </button>
            </li>
            <li className="wsListItem">
                <img src={face} alt="avatar" className="wsImg" width="30"/>
                <div className="wsUser">
                    <span className="wsUsername">Sourabh Sikarwar</span>
                    <span className="wsUserTitle">Software Engineer</span>
                </div>
                <button className="wsButton">
                    <Visibility className="wsIcon"/>
                    Display
                </button>
            </li>
            <li className="wsListItem">
                <img src={face} alt="avatar" className="wsImg" width="30"/>
                <div className="wsUser">
                    <span className="wsUsername">Sourabh Sikarwar</span>
                    <span className="wsUserTitle">Software Engineer</span>
                </div>
                <button className="wsButton">
                    <Visibility className="wsIcon"/>
                    Display
                </button>
            </li>
            <li className="wsListItem">
                <img src={face} alt="avatar" className="wsImg" width="30"/>
                <div className="wsUser">
                    <span className="wsUsername">Sourabh Sikarwar</span>
                    <span className="wsUserTitle">Software Engineer</span>
                </div>
                <button className="wsButton">
                    <Visibility className="wsIcon"/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm