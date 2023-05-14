<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CompanyContactPageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia('Contact', [
            'title' => 'Kontak'
        ]);
    }
}
