import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Form from './InfoUser';

const Dossier = ({user}) => {
    return (<>
        <AuthenticatedLayout
           
        >
            <Head title="Dashboard" />
               {/*  <PatientForm /> */}
                <Form user={user}/>
                {console.log(user)}
              
               
          
    
        </AuthenticatedLayout>
        </>
    );
}

export default Dossier