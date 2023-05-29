<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CompanyProfilePageController extends Controller
{
    /**
     * Provision a new web server.
     */
    public function __invoke()
    {
        return inertia('Company/CompanyProfile', [
            'title' => 'Profil Perusahaan',
            'companyLogo' => Storage::disk('local')->url('img/companyLogo.png'),
            'aboutImg' => Storage::disk('local')->url('img/ptldnmockup.jpg'),
            'structural' => Storage::disk('local')->url('img/structural.jpg'),
            'structuralRotate' => Storage::disk('local')->url('img/structuralRotate.jpg'),
        ]);
    }
}
