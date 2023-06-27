import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Footer = ({ length }) => {
  const year = new Date();

  return (
    <div>
      <h1 className="py-4 bg-dark text-white text-center">
        Copyright &copy; {year.getFullYear()} {length}
      </h1>
    </div>
  );
};
export default Footer;
