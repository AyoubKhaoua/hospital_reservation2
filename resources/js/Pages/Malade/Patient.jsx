import TilteHeader from './Header';

import { Link, usePage } from "@inertiajs/react";
import TableClient from './TableClient';

const Patient = ({ users, appointment }) => {
  const { props } = usePage();
  let params= new URLSearchParams(window.location.search);
  const page= parseInt(params.get('page')) || 1;
  


  

  

  return (

   
    
    
    <div className="bg-[#131619] min-h-screen">
      <div className="flex flex-col gap-12 p-12 w-full font-plus font-medium">
        <TilteHeader
          title={`bienvenue ${users.name}`}
          description="Start day with managing new appointments"
        />

        <Link
          method='get'
          href="/Appointement"
          className="p-10 w-[300px] font-plus border-neutral-800 border hover:border-green-300 cursor-pointer bg-[#1a1d21] rounded-md flex flex-col gap-2 text-white"
        >
          <span className="flex items-center gap-2">
            <i className="hgi hgi-stroke hgi-add-square text-2xl text-[#A5E9B8]"></i>
            <span>Rendez-vous</span>
          </span>
          <p className="text-sm text-white/65 font-plus">
            Prendre un rendez-vous avec votre medecin
          </p>
        </Link>

        <TableClient appointments={appointment.data} page={page} links={appointment.links} />

       
         
        
      </div>
    </div>
  );
};

export default Patient;