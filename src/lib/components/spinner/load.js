import React from "react";

import Loader from "react-loader-spinner";
export default class Spinner extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="TailSpin"
        color="#fd7e14"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}