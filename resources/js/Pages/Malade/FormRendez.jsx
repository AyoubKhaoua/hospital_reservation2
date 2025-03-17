import React, { useEffect } from "react";
import { useForm } from '@inertiajs/react';

const AppointmentForm = ({ user, doctors }) => {
  const { data, setData, post,  errors, reset } = useForm({
    doctor: '',
    dateRendeVous: '',
    reason: '',
  });

  useEffect(() => {
    if (user?.role === 'doctor') {
      // Redirect or show a message if the user is a doctor
      Inertia.visit('/dashboard'); // Example redirect
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
   
   
   
    post(route('prendreRendez'), {
      onFinish: () => reset(),
    });
  };

  if (user?.role === 'doctor') {
    return <div className="text-white">You are a doctor and cannot book an appointment.</div>;
  }

  return (
    <div className="w-full flex bg-[#131619] text-white">
      <div className="flex-1 flex flex-col items-center justify-center gap-4 py-24">
        <Title title="Bienvenue" description="Prendre une rendez-vous avec votre médecin" />
        <form onSubmit={handleSubmit} className="w-1/2 space-y-1 font-plus">
          <div className="grid gap-2">
            <label className="flex flex-col gap-2 text-white/55">
              <span className="p-1 font-medium">Doctor</span>
              <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
                <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
                  <div className="relative rounded-md">
                    <select
                      name="doctor"
                      value={data.doctor}
                      onChange={(e) => setData('doctor', e.target.value)}
                      className="w-full px-2 text-white rounded-lg h-12 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
                    >
                      <option value="">Select doctor</option>
                      {doctors.map((doctor) => (
                        <option key={doctor.id} value={doctor.id}>DR.{doctor.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </label>

            <label className="flex flex-col gap-2 text-white/55">
              <span className="p-1 font-medium">Date de Rende-Vous</span>
              <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
                <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
                  <div className="relative rounded-md">
                    <input
                      type="date"
                      name="dateRendeVous"
                      value={data.dateRendeVous}
                      onChange={(e) => setData('dateRendeVous', e.target.value)}
                      className="w-full px-3 text-white rounded-lg uppercase h-12 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
                    />
                    <div className="absolute left-0 inset-y-0 h-12 flex items-center pl-4">
                      <i className="hgi hgi-stroke hgi-appointment-02 text-[#A5E9B8]"></i>
                    </div>
                  </div>
                </div>
              </div>
            </label>

            <label className="flex flex-col gap-2 text-white/55">
              <span className="p-1 font-medium">Raison du rendez-vous</span>
              <textarea
                name="reason"
                value={data.reason}
                onChange={(e) => setData('reason', e.target.value)}
                placeholder="Reason"
                className="w-full px-3 text-white rounded-lg h-24 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
              ></textarea>
            </label>
          </div>
          <label className="p-1 h-24 flex items-center">
            <button type="submit" className="w-full font-medium h-12 bg-[#24ad7b] rounded-lg">
              Prendre rendez-vous
            </button>
          </label>
        </form>
        {errors.length > 0 && (
          <div>
            {errors.map((error, index) => (
              <div key={index} className="text-red-500">{error}</div>
            ))} 
          </div>
        )}
      </div>
      <div className="w-3/12 hidden lg:block sticky top-0 h-screen">
        <img src="./assets/bg.png" className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
};

const Title = ({ title, description }) => (
  <div className="mb-6">
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default AppointmentForm;