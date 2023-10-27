import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[1px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Faça parte
  </button>
);

export default Button;
