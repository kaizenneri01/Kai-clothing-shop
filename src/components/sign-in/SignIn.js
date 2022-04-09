import React from "react";

const SignIn = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div>
      <button onClick={onClose}>close</button>
      SignIn
    </div>
  );
};

export default SignIn;
