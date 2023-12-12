import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="h-100">
      <ul className="navigation">
        <li className="navItem active">
          <Link href="/" className="navLink">
            Home
          </Link>
        </li>
        <li className="navItem">
          <Link href="/" className="navLink">
            Products
          </Link>
        </li>
        <li className="navItem">
          <Link href="/" className="navLink">
            Services
          </Link>
        </li>
        <li className="navItem">
          <Link href="/" className="navLink">
            Contact
          </Link>
        </li>
        <li className="navItem">
          <Link href="/" className="navLink">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
