import React from "react";
import "../assets/styles/components/Empty.scss";
import emptyImage from "../assets/static/images/empty.png";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="empty">
    <img className="empty-img" src={emptyImage} alt="Rick" />
    <span className="empty-text">
      404: URL Not Found
      <br />
      Go and select you favorite Characters.
    </span>

    <Link className="buttonPrimary" to="/">
      <Button variant="contained" color="primary">
        Go
      </Button>
    </Link>
  </div>
);

export default NotFound;
