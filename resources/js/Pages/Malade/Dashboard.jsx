



import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';





export default function Dashboard({user}) {
    return (<>
      <AuthenticatedLayout>
                <Head title="Dashboard" />

                <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold mb-4">
                        Welcome, {user.name}!
                    </h1>
                    <p className="text-lg mb-6">
                        Are you ready to take an appointment with your doctor?
                    </p>
                    <Link
                        href="/dossier"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition duration-300"
                    >
                        Take an Appointment
                    </Link>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
