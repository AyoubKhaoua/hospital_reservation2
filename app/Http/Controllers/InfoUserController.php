<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\InfoUser;
use App\Models\Appointment;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class InfoUserController extends Controller
{
    public function create(Request $request){
        $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'phone' => 'required|string|max:15',
            'date_birth' => 'required|date',
            'adresse' => 'required|string|max:255',
            'job' => 'required|string|max:255',
            'sexe' => 'required|string|max:10',
            'insuranceProvider' => 'required|string|max:255',
            'insurancePolicy' => 'required|string|max:255',
            'allergies' => 'nullable|string|max:255',
            'currentMedications' => 'nullable|string|max:255',
            'familyMedicalHistory' => 'nullable|string|max:255',
            'pastMedicalHistory' => 'nullable|string|max:255',
            'indetificationType' => 'required|string|max:50',
            'indetificationNumber' => 'required|string|max:50',
            'file' => 'nullable|file|mimes:jpg,png,pdf|max:2048',
        ]);
        $infoUser = new InfoUser();
        $infoUser->full_name = $request->full_name;
        $infoUser->email = $request->email;
        $infoUser->phone = $request->phone;
        $infoUser->date_birth = $request->date_birth;
        $infoUser->adresse = $request->adresse;
        $infoUser->job = $request->job;
        $infoUser->sexe = $request->sexe;
        $infoUser->insuranceProvider = $request->insuranceProvider;
        $infoUser->insurancePolicy = $request->insurancePolicy;
        $infoUser->allergies = $request->allergies;
        $infoUser->currentMedications = $request->currentMedications;
        $infoUser->familyMedicalHistory = $request->familyMedicalHistory;
        $infoUser->pastMedicalHistory = $request->pastMedicalHistory;
        $infoUser->indetificationType = $request->indetificationType;
        $infoUser->indetificationNumber = $request->indetificationNumber;

        if ($request->hasFile('file')) {
            $infoUser->file = $request->file('file')->store('files', 'public');
        }

        $infoUser->save();
        return redirect('/Appointement')->with('success', 'InfoUser created successfully.');
        
    }
    public function Appointement(){
        $doctors = User::where('role','doctor')->get();
        return Inertia::render('Malade/FormRendez',['doctors'=>$doctors]);
    }
    public function dashboard(){
        $user = Auth::user();
        return Inertia::render('Malade/Dashboard',['user'=>$user]);
    }

    public function successPage(Request $request){
       
        $request->validate([

            'doctor' => 'required',
            'dateRendeVous' => 'required|date',
            'reason' => 'required|string|max:255',
        ]);
        $appointment = new Appointment();
        $appointment->user_id= Auth::user()->id;
        $appointment->doctor= $request->doctor;
        $appointment->dateRendezVous = $request->dateRendeVous;
        $appointment->reason = $request->reason;
        $appointment->save();
   

        return redirect('/success')->with('success', 'Appointment created successfully.');
    }
    public function Success(){
        $appointment=Appointment::select('users.name as doctor','appointments.dateRendezVous','appointments.reason')
        ->join('users','users.id','=','appointments.doctor')->get()->first();
        return Inertia::render('Malade/successPage',['appointment'=>$appointment]);
    }
}
