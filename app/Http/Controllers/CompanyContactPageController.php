<?php

namespace App\Http\Controllers;

use App\Models\FAQ;

class CompanyContactPageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        return inertia('Contact', [
            'title' => 'Kontak',
            'faqs' => FAQ::where('hidden', false)->get(),
        ]);
    }
}
