<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CompanyProfilePageController extends Controller
{
    /**
     * Provision a new web server.
     */
    public function __invoke()
    {
        return inertia('Company/CompanyProfile', [
            'title' => 'Profil Perusahaan'
        ]);
    }
}
