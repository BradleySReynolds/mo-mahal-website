import soldItemsList from "./soldProducts";

import { Link } from "react-router-dom";

const SoldItems = () => {
  return (
    <div className="App">
      <h2 className="for-sale--header">Sold Items</h2>
      <div className="items">
        {soldItemsList.map((ele, i) => {
          return (
            <div className="item" key={i}>
              <Link to={`/soldproductdetails/${soldItemsList[i].id}`}>
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

export default SoldItems;
