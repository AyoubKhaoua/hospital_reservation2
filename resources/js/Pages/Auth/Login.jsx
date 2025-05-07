import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (<>
        
        <div className="w-full h-screen flex bg-[#131619] text-white">
   
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <div className="w-1/2 font-plus space-y-2">
          <h1 className="text-4xl font-semibold">👋Hi there, ....</h1>
          <p className="text-white/45 font">Get Started with Appointments.</p>
        </div>

    
        <form onSubmit={submit} className="w-1/2 space-y-4 font-plus">
      
          <label className="flex flex-col gap-2 text-white/70">
            <span className="p-1 font-medium">Email</span>
            <div className="bg-gradient-to-br p-1 rounded-xl from-[#A5E9B8]/15 to-[#8bdfe8]/15 focus-within:ring">
              <div className="relative rounded-md bg-[#1a1d21] p-1 border-2 border-neutral-600/75">
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  autoComplete="username"
                  isFocused={true}
                  onChange={(e) => setData('email', e.target.value)}
                  className="w-full pl-12 text-white rounded-lg h-12 outline-none bg-transparent"
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {errors.email && <p className="text-red-300 text-xs">{errors.email}</p>}
          </label>

         
          <label className="flex flex-col gap-2 text-white/70">
            <span className="p-1 font-medium">Mot de passe</span>
            <div className="bg-gradient-to-br p-1 rounded-xl from-[#A5E9B8]/15 to-[#8bdfe8]/15 focus-within:ring">
              <div className="relative rounded-md bg-[#1a1d21] p-1 border-2 border-neutral-600/75">
                <input
                   id="password"
                   type="password"
                   name="password"
                   value={data.password}
                   autoComplete="current-password"
                   onChange={(e) => setData('password', e.target.value)}
                  className="w-full pl-12 text-white rounded-lg h-12 outline-none bg-transparent"
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
                      d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {errors.password && <p className="text-red-300 text-xs">{errors.password}</p>}
          </label>

          <button
            type="submit"
            className="w-full font-bold h-12 bg-[#24ad7b] rounded-lg cursor-pointer hover:bg-[#1e9a6b]"
          >
            Connexion
          </button>
        </form>
      </div>

   
      <div className=" flex-1 hidden lg:block">
        <img src="./assets/login.jpg" alt="Illustration" className="w-full h-full object-cover" />
      </div>
    </div>
                
        </>
    );
}
