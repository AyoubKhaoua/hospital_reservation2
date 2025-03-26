
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className="w-full h-screen flex bg-[#131619] text-white">
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <div className="w-1/2 font-plus space-y-2">
            <h1 className="text-4xl font-semibold">Hi there, ....</h1>
            <p className="text-white/45 font">Get Started with Appointments.</p>
          </div>
          <form onSubmit={submit} className="w-1/2 space-y-1 font-plus">
            {[
              { label: "name", name: "name", type: "text", placeholder: "Mohamed" },
              { label: "Email", name: "email", type: "email", placeholder: "example@gmail.com" },
              { label: "Password", name: "password", type: "password", placeholder: "e.g dsf08l2k" },
              {label:'password_confirmation',name:'password_confirmation',type:'password',placeholder:'e.g dsf08l2k'}

            ].map((field, index) => (
              <label key={index} className="flex flex-col gap-2 text-white/55">
                <span className="p-1 font-medium">{field.label}</span>
                <div className="bg-gradient-to-br p-1 focus-within:from-[#A5E9B8]/15 rounded-xl focus-within:to-[#8bdfe8]/15">
                  <div className="bg-gradient-to-br p-px focus-within:from-[#A5E9B8] rounded-lg focus-within:to-[#8bdfe8]">
                    <div className="relative rounded-md">
                      <input
                        id={field.name}
                        type={field.type}
                        name={field.name}
                        value={data[field.name]}
                        placeholder={field.placeholder}
                        onChange={(e) => setData(field.name, e.target.value)}
                        required
                        className="w-full pl-12 text-white rounded-lg h-12 outline-none bg-[#1a1d21] border-2 border-neutral-600/75 focus:border-none"
                      />
                    </div>
                  </div>
                </div>
              </label>
            ))}
            <label className="p-1 h-24 flex items-center">
              <button className="w-full h-12 bg-[#24ad7b] rounded-lg cursor-pointer font-semibold">
                Get Started
              </button>
            </label>
          </form>
        </div>
        <div className="flex-1 hidden lg:block">
          <img src="./assets/register.png" className="w-full h-full object-cover" alt="Illustration" />
        </div>
      </div>
    );
}
{/* <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                
               
            </form>
        </GuestLayout> */}
