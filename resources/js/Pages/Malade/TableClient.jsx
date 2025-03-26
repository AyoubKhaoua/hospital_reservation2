import { Link } from '@inertiajs/react';
import React from 'react';

const TableClient = ({ appointments,page,links}) => {
    const handlePrevious = () => {
        if(page > 1){
            page = window.location.href =`?page=${page - 1}`;
        }
      };
     const handleNext = () => {
        if(page < links.length-1){
            page = window.location.href =`?page=${page + 1}`;
        }
        
      }; 
  return (
    <div className="w-full border border-neutral-800 rounded-t-lg mt-12">
      <table className="w-full rounded-t-xl text-left">
        <thead>
          <tr className="bg-[#0d0f10] text-neutral-200">
            <td className="p-3 rounded-tl-lg">Doctor</td>
            <td>Date</td>
            <td>Status</td>
            <td className="rounded-tr-lg">Action</td>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index} className="text-neutral-200">
              <td className="p-4 flex items-center gap-3 text-xs">
                <span className="inline-flex size-10 rounded-full bg-white"></span>
                <span>{appointment.name}</span>
              </td>
              <td className="text-xs">{appointment.dateRendezVous}</td>
              <td className="text-xs">
                <span
                  className={`p-1 px-2 rounded-full flex items-center gap-1 w-fit ${
                    appointment.status === 'accepte'
                      ? 'text-green-500 bg-green-500/15'
                      : appointment.status === 'attente'
                      ? 'text-orange-500 bg-orange-500/15'
                      : 'text-red-500 bg-red-500/15'
                  }`}
                >
                  <span>
                    <i className="hgi hgi-stroke hgi-tick-02 text-sm"></i>
                  </span>
                  <span>{appointment.status}</span>
                </span>
              </td>
              <td className="space-x-2 font-bold">
                <button className="cursor-pointer"><Link href={`/delete/${appointment.id}`}>Cancel</Link></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between gap-2 p-4 border-t border-neutral-800 font-bold">
        <button className="cursor-pointer bg-[#1d2124] size-8 rounded disabled:opacity-35 disabled:cursor-not-allowed" onClick={handlePrevious} disabled={page <=1}>
          <i className="hgi hgi-stroke hgi-arrow-left-02 text-green-400"></i>
        </button>
        <button className="cursor-pointer bg-[#1d2124] size-8 rounded disabled:opacity-35 disabled:cursor-not-allowed" onClick={handleNext} disabled={page === links.length-1} >
          <i className="hgi hgi-stroke hgi-arrow-right-02 text-green-400"></i>
        </button>
      </div>
    </div>
  );
};

export default TableClient;