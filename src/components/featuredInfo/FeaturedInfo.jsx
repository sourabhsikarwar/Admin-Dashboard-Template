import "./featureInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

const FeaturedInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">
                Revenue
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    Rs. 50,00
                </span>
                <span className="featuredMoneyRate">
                    -11.4 <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">
                Compared to last month
            </span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Sales
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    Rs. 10,00
                </span>
                <span className="featuredMoneyRate">
                    -1.4 <ArrowDownward className="featuredIcon negative"/>
                </span>
            </div>
            <span className="featuredSub">
                Compared to last month
            </span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Cost
            </span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">
                    Rs. 25,00
                </span>
                <span className="featuredMoneyRate">
                    11.4 <ArrowUpward className="featuredIcon"/>
                </span>
            </div>
            <span className="featuredSub">
                Compared to last month
            </span>
        </div>
    </div>
  )
}

export default FeaturedInfo