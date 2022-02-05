import React from "react";
import errorImage from "../assets/static/images/error.png";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
// const Error = () => {
//   return (
//     <div className="error">
//       <img className="error-img" src={errorImage} alt="Morty scared" />
//       <span className="error-text">Sorry, an error has ocurred.</span>
//     </div>
//   );
// };

// export default Error;
export default class ErorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      //   reload: false,
    };
  }

  refreshPage() {
    window.location.reload(true);
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
          <span className="error-text">somethings went wrong</span>
          <br />

          <Link className="buttonPrimary" to="#">
            <Button
              variant="contained"
              color="primary"
              //   onClick={this.refreshPage()}
            >
              Go Home
            </Button>
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}
