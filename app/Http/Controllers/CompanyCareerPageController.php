<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CompanyCareerPageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia('Career/Career', [
            'title' => 'Karir'
        ]);
    }
}
