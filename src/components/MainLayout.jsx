import React from "react";
import NavBar from "../components/NavBar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Header from "./Header.jsx";

export default function MainLayout() {
  return (
    <>
      <div className="bg-primary min-h-screen flex flex-col">
        <Header />


        <main className="flex-grow">
          <Outlet></Outlet>
        </main>

        <Footer></Footer>
      </div>

    </>
  );
}