<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckAppointment
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();

        if ($user) {
            $existingAppointment = Appointment::where('user_id', $user->id)->first();

            if ($existingAppointment) {
                return redirect()->route('success');
            }
        }

        return $next($request);
    }
}
