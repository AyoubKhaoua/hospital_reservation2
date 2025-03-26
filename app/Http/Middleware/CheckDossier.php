<?php

namespace App\Http\Middleware;

use App\Models\InfoUser;
use Closure;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckDossier
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
            $existingDossier = InfoUser::where('email', $user->email)->first();

            if ($existingDossier) {
                return redirect()->route('patient');
            }
        }

        return $next($request);
    }
}
