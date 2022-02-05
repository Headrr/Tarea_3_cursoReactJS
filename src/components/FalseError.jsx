import React from "react";

const FalseError = () => {
  throw new Error("Error Forzado");

  return (
    <div>
      <h1>Esta página tendrá el error que levanta error boundary</h1>
    </div>
  );
};

export default FalseError;
