import itemsForSale from "./Products";

import { Link } from "react-router-dom";

const ForSale = () => {
  return (
    <div className="App">
      <h2 className="for-sale--header">For Sale Items</h2>
      <div className="items">
        {itemsForSale.map((ele, i) => {
          return (
            <div className="item" key={i}>
              <Link to={`/productdetails/${itemsForSale[i].id}`}>
                <img className="itemImage" src={ele.currentImage} />
              </Link>
              <p className="itemName">{ele.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForSale;
