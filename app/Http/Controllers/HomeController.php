<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Home/Home', [
            'title' => 'Home',
            'companyLogo' => Storage::url('/img/companyLogo.png'),
            'news' => News::where('hidden', false)->latest()->limit(3)->get(),
        ]);
    }
}
