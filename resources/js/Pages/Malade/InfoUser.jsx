import React from "react";
import { useForm } from "@inertiajs/react";
import { useEffect } from "react";


const Form = ({user}) => {
 
    const { data, setData, post, processing, errors, reset } = useForm({
        full_name: '',
        email: '',
        phone: '',
        date_birth: '',
        adresse: '',
        job: '',
        sexe: '',
        insuranceProvider: '',
        insurancePolicy: '',
        allergies: '',
        currentMedications: '',
        familyMedicalHistory: '',
        pastMedicalHistory: '',
        indetificationType: '',
        indetificationNumber: '',
        file: null,
      });
      const submit = (e) => {
        e.preventDefault();
    
        post(route('malade'), {
          onFinish: () => reset(),
        });
      };
   useEffect(() => {
    if(user){
      setData({
        full_name: user.name,
        email: user.email})}
   }, [user])
  
  return (
    <div className="w-screen h-full relative  justify-between bg-[#131619] text-white   flex ">
      <div className="w-full flex items-center justify-center  ">
      <form onSubmit={submit} className="w-full md:w-[65%] space-y-4 font-plus ">
      <h1 className="text-xl my-5 p-1 font-semibold">Personal Information</h1>
        <div clas sName="grid grid-cols-2 gap-2">
          <label className="flex flex-col gap-2 text-white/55">
            <span className="p-1 font-medium">Full Name</span>
            <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
              <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
                <div className="relative rounded-md">
                  <input
                    type="text"
                    name="full_name"
                    placeholder="John Doe"
                    value={data.full_name} 
                    onChange={(e) => setData('full_name', e.target.value)}
                    className="w-full pl-12 disabled:opacity-55 text-white rounded-lg h-12 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
                  />
                  <div className="absolute left-0 inset-y-0 h-12 flex items-center pl-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 text-[#A5E9B8]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </label>
          <label className="flex flex-col gap-2 text-white/55">
            <span className="p-1 font-medium">Email</span>
            <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
              <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
                <div className="relative rounded-md">
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={data.email }
                    onChange={(e) => setData('email', e.target.value)}
                    className="w-full pl-12 disabled:opacity-55 text-white rounded-lg h-12 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
                  />
                </div>
              </div>
            </div>
          </label>
          <label className="flex flex-col gap-2 text-white/55">
            <span className="p-1 font-medium">Phone</span>
            <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
              <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
                <div className="relative rounded-md">
                  <input
                    type="text"
                    name="phone"
                    placeholder="+1234567890"
                    value={data.phone}
                    onChange={(e) => setData('phone', e.target.value)}
                    className="w-full pl-12 disabled:opacity-55 text-white rounded-lg h-12 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
                  />
                </div>
              </div>
            </div>
          </label>
          <label className="flex flex-col gap-2 text-white/55">
            <span className="p-1 font-medium">Date de naissance</span>
            <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
              <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
                <div className="relative rounded-md">
                  <input
                    type="date"
                    name="date_birth"
                    value={data.date_birth}
                    onChange={(e) => setData('date_birth', e.target.value)}
                    className="w-full pl-12 disabled:opacity-55 text-white rounded-lg h-12 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
                  />
                </div>
              </div>
            </div>
          </label>
          <label className="flex flex-col gap-2 text-white/55">
            <span className="p-1 font-medium">Adresse</span>
            <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
              <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
                <div className="relative rounded-md">
                  <input
                    type="text"
                    name="adresse"
                    placeholder="123 Rue, Ville"
                    value={data.adresse}
                    onChange={(e) => setData('adresse', e.target.value)}
                    className="w-full pl-12 disabled:opacity-55 text-white rounded-lg h-12 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
                  />
                </div>
              </div>
            </div>
          </label>
          <label className="flex flex-col gap-2 text-white/55">
            <span className="p-1 font-medium">Travail</span>
            <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
              <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
                <div className="relative rounded-md">
                  <input
                    type="text"
                    name="job"
                    placeholder="Formateur"
                    value={data.job}
                    onChange={(e) => setData('job', e.target.value)}
                    className="w-full pl-12 disabled:opacity-55 text-white rounded-lg h-12 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
                  />
                </div>
              </div>
            </div>
          </label>

          <label className="flex flex-col gap-3 text-white/55">
            <span className="p-1 font-medium">Sexe</span>
            <div className="h-12 grid grid-cols-2 gap-2">
              <label className="flex items-center gap-2 px-2 h-full rounded-md border-2 border-dashed border-gray-200/45">
                <input type="radio" name="sexe" value="male" checked={data.sexe === 'male'}
                onChange={(e) => setData('sexe', e.target.value)} />
                <span>Homme</span>
              </label>
              <label className="flex items-center gap-2 px-2 h-full rounded-md border-2 border-dashed border-gray-200/45">
                <input type="radio" name="sexe" value="female" checked={data.sexe === 'female'}
                onChange={(e) => setData('sexe', e.target.value)} />
                <span>Femme</span>
              </label>
            </div>
          </label>
        </div>
        <h1 className="text-xl my-5 p-1 font-semibold">Medical Information</h1>
        <div className="grid grid-cols-2 gap-2">
        
        <label className="flex flex-col gap-2 text-white/55">
          <span className="p-1 font-medium">Insurance provider</span>
          <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
            <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
              <div className="relative rounded-md">
                <input
                  type="text"
                  name="insuranceProvider"
                  placeholder="Insurance provider"
                  value={data.insuranceProvider}
                  onChange={(e) => setData('insuranceProvider', e.target.value)}
                  className="w-full pl-12 text-white rounded-lg h-12 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
                />
                <div className="absolute left-0 inset-y-0 h-12 flex items-center pl-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#A5E9B8]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </label>

        <label className="flex flex-col gap-2 text-white/55">
          <span className="p-1 font-medium">Insurance policy number</span>
          <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
            <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
              <div className="relative rounded-md">
                <input
                  type="text"
                  name="insurancePolicy"
                  placeholder="Insurance policy number"
                  value={data.insurancePolicy}
                  onChange={(e) => setData('insurancePolicy', e.target.value)}
                  className="w-full pl-12 text-white rounded-lg h-12 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
                />
                <div className="absolute left-0 inset-y-0 h-12 flex items-center pl-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-[#A5E9B8]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </label>

        <label className="flex flex-col gap-2 text-white/55">
          <span className="p-1 font-medium">Allergies</span>
          <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
            <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
              <div className="relative rounded-md">
                <input
                  type="text"
                  name="allergies"
                  placeholder="Allergies"
                  value={data.allergies}
                  onChange={(e) => setData('allergies', e.target.value)}
                  className="w-full pl-12 text-white rounded-lg h-12 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
                />
                <div className="absolute left-0 inset-y-0 h-12 flex items-center pl-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </label>

        <label className="flex flex-col gap-2 text-white/55">
          <span className="p-1 font-medium">Current medications</span>
          <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
            <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
              <div className="relative rounded-md">
                <input
                  type="text"
                  name="currentMedications"
                  placeholder="Current medications"
                  value={data.currentMedications}
                  onChange={(e) => setData('currentMedications', e.target.value)}
                  className="w-full pl-12 text-white rounded-lg h-12 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
                />
                <div className="absolute left-0 inset-y-0 h-12 flex items-center pl-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </label>

        <label className="flex flex-col gap-2 text-white/55">
          <span className="p-1 font-medium">Family medical history</span>
          <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
            <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
              <div className="relative rounded-md">
                <input
                  type="text"
                  name="familyMedicalHistory"
                  placeholder="Family medical history"
                  value={data.familyMedicalHistory}
                  onChange={(e) => setData('familyMedicalHistory', e.target.value)}
                  className="w-full pl-12 text-white rounded-lg h-12 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
                />
                <div className="absolute left-0 inset-y-0 h-12 flex items-center pl-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </label>

        <label className="flex flex-col gap-2 text-white/55">
          <span className="p-1 font-medium">Past medical history</span>
          <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
            <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
              <div className="relative rounded-md">
                <input
                  type="text"
                  name="pastMedicalHistory"
                  placeholder="Past medical history"
                  value={data.pastMedicalHistory}
                  onChange={(e) => setData('pastMedicalHistory', e.target.value)}
                  className="w-full pl-12 text-white rounded-lg h-12 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
                />
                <div className="absolute left-0 inset-y-0 h-12 flex items-center pl-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
      <div>
          <h1 className="text-xl my-5 p-1 font-semibold">Identification and Verification</h1>
          <div className="grid">
            <label htmlFor="Adresse" className="flex flex-col gap-2 text-white/55">
              <span className="p-1 font-medium">Type de document</span>
              <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
                <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
                  <div className="relative rounded-md">
                    <select name="indetificationType" className="w-full h-12 rounded-md px-2 bg-[#1a1d21]" value={data.indetificationType} onChange={(e) => setData('indetificationType', e.target.value)}>
                      <option value="passport">Passport</option>
                      <option value="cart national">Cart national</option>
                    </select>
                  </div>
                </div>
              </div>
            </label>
            <label htmlFor="Adresse" className="flex flex-col gap-2 text-white/55">
              <span className="p-1 font-medium">Identification Number</span>
              <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
                <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
                  <div className="relative rounded-md">
                    <input
                      type="text"
                      name="indetificationNumber"
                      placeholder="formateur"
                      value={data.indetificationNumber}
                      onChange={(e) => setData('indetificationNumber', e.target.value)}
                      className="w-full pl-12 text-white rounded-lg h-12 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
                    />
                    <div className="absolute left-0 inset-y-0 h-12 flex items-center pl-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </label >
            <label htmlFor="file" className="flex flex-col items-center p-1 justify-center gap-2 text-white/55 mt-4">
              <div className="border-2 border-dashed border-neutral-50 h-44 w-full rounded-md flex flex-col items-center justify-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                  </svg>
                </span>
                <span className="text-green-700 font-bold">Appyez pour enregister</span>
                <span>jpg, png, pdf</span>
              </div>
              <input type="file" name="file" className="hidden font-bold" id="file" onChange={(e) => setData('file', e.target.files[0])} />
            </label>
          </div>
        </div>
        {/* Submit btn */}
        <div className="flex items-center justify-center mt-4 gap-4 ">
          <button className="bg-[#8bdfe8] hover:bg-[#A5E9B8] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enregister</button>
        </div>
    
      </form>
     
         
    </div>
    <div className="w-[30%]  top-0 right-0 h-screen hidden lg:block sticky ">
        <img src="./assets/infoUser.png" alt="Illustration" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Form;