import React, { useContext } from "react";
import "./MyCard.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Provider/Provider";
import { UPDATE_MOVIES_DETAILS } from "../../Provider/Actions";

export const MyCard = ({
  src,
  name,
  title1,
  title2,
  description,
  isTitle1Slice = true,
  isNameSlice = true,
  movieDetails,
}) => {
  const { dispatch } = useContext(GlobalContext);
  // console.log(dispatch);

  return (
    <Link
      to={"/details"}
      onClick={() =>
        dispatch({
          type: UPDATE_MOVIES_DETAILS,
          payload: {
            src,
            name,
            title1,
            title2,
            description,
            isTitle1Slice,
            isNameSlice,
            movieDetails,
          },
        })
      }
      style={{ cursor: "pointer" }}
    >
      <div className="a_top_card mt-5">
        <div className="a_movie_card a_cursor_pointer">
          <img src={src} alt="" />
        </div>
      </div>
      <div className="a_bottom_card mt-3 ps-2">
        <h5 className="a_h19 ">
          {name &&
            (name.length < 24 || !isNameSlice
              ? name
              : `${name.slice(0, 24)}...`)}
        </h5>
        <h6 className="roboto-regular a_h13 my-1 text-muted">
          {title1 &&
            (title1.length < 18 || !isTitle1Slice
              ? title1
              : `${title1.slice(0, 18)}...`)}
        </h6>
        {title2 && (
          <h6 className="roboto-regular a_h13 text-muted">{title2}</h6>
        )}
        <h6 className="roboto-regular a_h13 text-muted">{description}</h6>
      </div>
    </Link>
  );
};
