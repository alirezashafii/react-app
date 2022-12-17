import React from "react";

function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        height: "22px",
        display: "grid",
        placeContent: "center",
        background: "#ef4444",
      }}
    >
      <h5>
        <a style={{
          // color: "inherit",
          color: "#121314",
        }}
          href="https://github.com/alirezashafii"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alireza Shafii
        </a>
      </h5>
    </footer>
  );
}

export default Footer;
