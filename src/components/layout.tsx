import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";

const isActiveClassName =
  "underline underline-offset-8 decoration-1 decoration-lime-900 text-xl text-lime-900 font-semibold";
const isPendingClassName = "text-xl text-lime-900 font-semibold";

const LINKS = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Products",
    to: "/products",
  },
  {
    name: "About",
    to: "/about",
  },
];

const Layout = () => (
  <div className="w-screen h-screen bg-lime-200">
    <nav className="p-5 flex gap-6 items-center">
      <Link to="/">
        <p className="text-2xl font-semibold text-lime-900">React Store</p>
      </Link>
      {LINKS.map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          className={({ isActive }) =>
            isActive ? isActiveClassName : isPendingClassName
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
    <div className="container">
      <Outlet />
    </div>
  </div>
);

export default Layout;
