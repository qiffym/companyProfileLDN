<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Career;
use App\Models\News;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return Inertia::render('Admin/Dashboard', [
            'total_users' => User::all()->count(),
            'total_news' => News::all()->count(),
            'total_careers' => Career::where('hidden', false)->count()
        ]);
    }
}
