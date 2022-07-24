import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getData } from "../../redux/action";
import Style from "./Fund.module.css";
const Fundraising = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getData());
    }
  }, [products.length, dispatch]);

  return (
    <div className={Style.main}>
      {products.length > 0 &&
        products.map((elem) => (
         
          <div key={elem.id}>
             <Link to={`/home/${elem.id}`}>
            <div className={Style.imgBox}>
              <img className={Style.img} src={elem.img_url} />
            </div>
            </Link>
            <p className={Style.desc}>{elem.desc}</p>
            <div className={Style.innerBox}>
              <div className={Style.innerBox2}>
                <div>
                  <p>{elem.per}</p>
                </div>
                <div className={Style.para}>
                  <p>{elem.para}</p>
                  <p>{elem.price}</p>
                </div>
                <div className={Style.para2}>
                  <p>{elem.para2}</p>
                  <p>{elem.desc2}</p>
                </div>
              </div>
              <div className={Style.desc3}>
                <p>{elem.desc3}</p>
              </div>
            </div>
         
          </div>
         
        ))}
    </div>
  );
};

export default Fundraising;
