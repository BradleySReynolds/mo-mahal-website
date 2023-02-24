import { useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import itemsForSale from "./Products";

const ProductDetails = () => {
  const { id } = useParams();
  const current = itemsForSale.find((ele) => ele.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(current.currentImage);
  const [imageList, setImageList] = useState([currentImage, ...current.images]);
  const changeCurrent = (e) => {
    current.currentImage = e.target.src;
    setCurrentImage(current.currentImage);
  };

  return (
    <div className="product-details App">
      <h2 className="product-name">Product Details - {current.name}</h2>
      <div className="infoAndImg">
        <img className="product-image" key={0} src={currentImage} />
        <div className="info">
          <p className="info-para">
            <span className="bold">Condition</span> - {current.condition}
          </p>
          <p className="info-para">
            <span className="bold">Color</span> - {current.color}
          </p>
          <p className="info-para">
            <span className="bold">Material</span> - {current.material}
          </p>
          <p className="info-para">
            <span className="bold">Brand/Decor</span> - {current.brand}
          </p>
          <p className="info-para">
            <span className="bold">Dimensions</span> - {current.dimensions}
          </p>
        </div>
      </div>
      <div className="otherImages">
        {imageList.map((ele, i) => {
          return (
            <img
              key={i + 1}
              onClick={changeCurrent}
              className="smallerImg"
              src={ele}
            />
          );
        })}
      </div>
      <Link to="/forsale" className="back">
        Go Back
      </Link>
    </div>
  );
};

export default ProductDetails;
