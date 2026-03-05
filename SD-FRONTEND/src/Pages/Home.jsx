import React from "react";
import Hero from "../Components/Hero/Hero";

import Specialist from "../Components/SpecialistCatagary/Specialist";
import Doctor from "../Components/Doctors/Doctor";
import MiddelHero from "../Components/MiddelHero/MiddelHero";
import Sidebar from "../Admin/Components/Sidebar/Sidebar";
import DoctorList from "../Admin/pages/DoctorList";
import Dashboard from "../Admin/Components/Hero/Hero";


const Home = () => {
  const admin =localStorage.getItem("role");

  return (
    <div className="min-h-screen bg-Zinc-400 ">
      
      {admin === "Admin" ? (
        <div className="flex">
          <main className="flex-1 p-6 bg-white">
            <Dashboard/>
          </main>
        </div>
      ) : (
        <div className="flex flex-col">
          <Hero/>
          <Specialist />
          <Doctor />
          <MiddelHero />
        </div>
      )}
    </div>
  );
};

export default Home;
