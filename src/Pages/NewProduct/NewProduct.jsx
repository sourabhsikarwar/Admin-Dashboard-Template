import { Publish } from "@material-ui/icons";
import "./newProduct.css";

const NewProduct = () => {
  return (
    <div className="newProduct">
      <h1 className="newProductTitle">New Product</h1>
      <form className="newProductForm">
        <div className="newProductItem">
          <label htmlFor="file">Image</label>
          <input type="file" id="file" style={{display : "none"}}/>
          <Publish className="newProductIcon"/>
        </div>
        <div className="newProductItem">
          <label htmlFor="">Product Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="newProductItem">
          <label htmlFor="">Stock</label>
          <input type="text" placeholder="125" />
        </div>
        <div className="newProductItem">
          <label>Active</label>
          <select name="active" id="active" className="newProductSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
      <button className="newProductButton">Create</button>
    </div>
  );
};

export default NewProduct;
