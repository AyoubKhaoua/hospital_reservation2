<?php

use App\Models\Admin;
use App\Http\Middleware\CheckDossier;
use Illuminate\Foundation\Application;
use App\Http\Middleware\AdminMiddeleware;

use App\Http\Middleware\DoctorMiddeleware;

use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);
        $middleware->alias(
            [
                'admin'=>AdminMiddeleware::class,
                'doctor'=>DoctorMiddeleware::class,
                'check.dossier' => CheckDossier::class,
            ]
        );

        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
