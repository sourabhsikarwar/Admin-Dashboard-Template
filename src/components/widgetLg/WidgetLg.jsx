import "./widgetLg.css"
import face from "../../assets/Image/face.jpg"

const WidgetLg = () => {

  const Button = ({type}) => {
    return <button className={"wlButton " + type}>{type}</button> 
  }

  return (
    <div className="widgetLg">
        <h3 className="wlTitle">
          Latest Transactions
        </h3>
        <table className="wlTable">
          <tr className="wlTr">
            <th className="wlTh">Customer</th>
            <th className="wlTh">Date</th>
            <th className="wlTh">Amount</th>
            <th className="wlTh">Status</th>
          </tr>
          <tr className="wlTr">
            <td className="wlUser">
              <img src={face} alt="avatar" className="wlImg" width="30"/>
              <span className="wlName">
                Sourabh Sikarwar
              </span>
            </td>
            <td className="wlDate">2 Jun 2021</td>
            <td className="wlAmount">Rs. 501</td>
            <td className="wlStatus"><Button type="Approved"/></td>
          </tr>
          <tr className="wlTr">
            <td className="wlUser">
              <img src={face} alt="avatar" className="wlImg" width="30"/>
              <span className="wlName">
                Sourabh Sikarwar
              </span>
            </td>
            <td className="wlDate">2 Jun 2021</td>
            <td className="wlAmount">Rs. 501</td>
            <td className="wlStatus"><Button type="Declined"/></td>
          </tr>
          <tr className="wlTr">
            <td className="wlUser">
              <img src={face} alt="avatar" className="wlImg" width="30"/>
              <span className="wlName">
                Sourabh Sikarwar
              </span>
            </td>
            <td className="wlDate">2 Jun 2021</td>
            <td className="wlAmount">Rs. 501</td>
            <td className="wlStatus"><Button type="Pending"/></td>
          </tr>
          <tr className="wlTr">
            <td className="wlUser">
              <img src={face} alt="avatar" className="wlImg" width="30"/>
              <span className="wlName">
                Sourabh Sikarwar
              </span>
            </td>
            <td className="wlDate">2 Jun 2021</td>
            <td className="wlAmount">Rs. 501</td>
            <td className="wlStatus"><Button type="Approved"/></td>
          </tr>
        </table>
    </div>
  )
}

export default WidgetLg