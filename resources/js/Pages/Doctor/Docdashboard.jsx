import React from "react";
import TilteHeader from "../Malade/Header";
import AppointmentsTable from "./AppointmentsTable";
import Card from "./Card";

const Docdashboard = ({doctor, appointments,Countattente}) => {
  console.log(appointments);
  console.log(Countattente);
  
  
  return (
    
    <div className="flex flex-col p-12  w-full font-plus font-medium bg-[#13161a]">
      <TilteHeader title={`Bienvenue Dr.${doctor.name}`} description="Start day with managing new appointments"  />
      <div className="grid grid-cols-3 gap-12 mt-12 font-plus">
        <Card icon="hgi-calendar-03" color="text-[#ffd147]" count={94} text="Total number of scheduled appointments" />
        <Card icon="hgi-clock-03" color="text-blue-400" count={Countattente} text="Total number of pending appointments" />
        <Card icon="hgi-angry" color="text-red-500" count={32} text="Total number of cancelled appointments" />
      </div>
      <AppointmentsTable appointments={appointments} doctor={doctor}/>
    </div>
  );
};




  




export default Docdashboard;
