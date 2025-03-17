import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col p-12 h-screen w-full font-plus font-medium">
      <Title title={`Bienvenue ${"Auth::user()->full_name"}`} description="Start day with managing new appointments" />
      <div className="grid grid-cols-3 gap-12 mt-12 font-plus">
        <Card icon="hgi-calendar-03" color="text-[#ffd147]" count={94} text="Total number of scheduled appointments" />
        <Card icon="hgi-clock-03" color="text-blue-400" count={32} text="Total number of pending appointments" />
        <Card icon="hgi-angry" color="text-red-500" count={32} text="Total number of cancelled appointments" />
      </div>
      <AppointmentsTable />
    </div>
  );
};

const Title = ({ title, description }) => (
  <div className="mb-6">
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Card = ({ icon, color, count, text }) => (
  <div className="p-12 bg-[#1a1d21] rounded-2xl  flex flex-col gap-4 text-white">
    <h1 className="text-4xl items-center flex gap-1">
      <span>
        <i className={`hgi hgi-stroke ${icon} ${color}`}></i>
      </span>
      <span>{count}</span>
    </h1>
    <p>{text}</p>
  </div>
);

const AppointmentsTable = () => (
  <div className="w-full border border-neutral-800 rounded-t-lg mt-12">
    <table className="w-full rounded-t-xl text-left">
      <thead>
        <tr className="bg-[#0d0f10] text-neutral-200">
          <td className="p-3 rounded-tl-lg">Patient</td>
          <td>Date</td>
          <td>Status</td>
          <td>Doctor</td>
          <td className="rounded-tr-lg">Action</td>
        </tr>
      </thead>
      <tbody>
        <tr className="text-neutral-200">
          <td className="p-4 flex items-center gap-3 text-xs">
            <span className="inline-flex size-10 rounded-full bg-white"></span>
            <span>John Doe</span>
          </td>
          <td className="text-xs">2022-01-01</td>
          <td className="text-xs">
            <span className="p-1 px-2 rounded-full flex items-center gap-1 w-fit text-green-500 bg-green-500/15">
              <i className="hgi hgi-stroke hgi-tick-02 text-sm"></i>
              <span>Completed</span>
            </span>
          </td>
          <td className="flex gap-3 items-center text-xs">
            <span className="inline-flex size-10 rounded-full bg-white"></span>
            <span>Dr. Smith</span>
          </td>
          <td className="w-44 space-x-2 font-bold">
            <button className="text-green-400 cursor-pointer">Schedule</button>
            <button className="cursor-pointer">Cancel</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div className="flex justify-between gap-2 p-4 border-t border-neutral-800 font-bold">
      <button className="cursor-pointer bg-[#1d2124] size-8 rounded">
        <i className="hgi hgi-stroke hgi-arrow-left-02 text-green-400"></i>
      </button>
      <button className="cursor-pointer bg-[#1d2124] size-8 rounded">
        <i className="hgi hgi-stroke hgi-arrow-right-02 text-green-400"></i>
      </button>
    </div>
  </div>
);

export default Dashboard;
