<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class DoctorController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $Countattente =DB::select("call Countattent($user->id)");
        $Countrefuse =DB::select("call Countrefuse($user->id)");
        $Countaccepte =DB::select("call Countaccepte($user->id)");

       
        $appointments = Appointment::select('users.name as patient','appointments.*')
        ->join('users','users.id','=','appointments.user_id')->where('doctor', $user->id )->paginate(5);

        return Inertia::render('Doctor/Docdashboard', [
            'doctor' => $user,
            'appointments' => $appointments,
            'Countattente' => $Countattente[0]->attente
            , 'Countrefuse' => $Countrefuse[0]->refuse
            , 'Countaccepte' => $Countaccepte[0]->accepte
        ]);
    }
    public function accepet(Request $req){
        $appointment = Appointment::find($req->id);
        $appointment->status = 'accepte';
        $appointment->save();
        return redirect('/dashboard/doctor');
    }
    public function cancel(Request $req){
        $appointment = Appointment::find($req->id);
        $appointment->status = 'refuse';
        $appointment->save();
        return redirect('/dashboard/doctor');
    }
}
