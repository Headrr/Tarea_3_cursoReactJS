import React from "react";
import errorImage from "../assets/static/images/error.png";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default class ErorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  render() {
    if (this.state.error) {
      return (
        <div className="error">
          <img
            className="error-img"
            src={errorImage}
            alt="Morty scared"
            height="10%"
            width="10%"
          />
          <span className="error-text">Somethings went wrong</span>
          <br />

          <Link className="buttonPrimary" to="#">
            <Button variant="contained" color="primary">
              Go Home
            </Button>
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}
