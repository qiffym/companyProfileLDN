<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Home/Home', [
            'title' => 'Home',
            'companyLogo' => Storage::url('/img/companyLogo.png'),
        ]);
    }
}
