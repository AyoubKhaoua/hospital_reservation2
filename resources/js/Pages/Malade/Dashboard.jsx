



import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Form from './InfoUser';



export default function Dashboard({user}) {
    return (<>
        <AuthenticatedLayout
           
        >
            <Head title="Dashboard" />
               {/*  <PatientForm /> */}
                
                {console.log(user)}
              
               
          
    
        </AuthenticatedLayout>
        </>
    );
}
