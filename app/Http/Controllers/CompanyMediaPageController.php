<?php

namespace App\Http\Controllers;

use App\Models\News;
use Inertia\Inertia;

class CompanyMediaPageController extends Controller
{
    public function index()
    {
        return Inertia::render('Media/Media', [
            'title' => 'Media & Informasi'
        ]);
    }

    public function newsIndex()
    {
        return Inertia::render('Media/News/News', [
            'title' => 'Berita',
            'news' => News::where('hidden', false)->latest()->filter(request(['search']))->paginate(9),
        ]);
    }

    public function newsRead(News $news)
    {
        $recommends = News::where('hidden', false)->latest()->limit(3)->get();
        return Inertia::render('Media/News/ReadNews', [
            'title' => $news->title,
            'news' => $news,
            'recommends' => $recommends
        ]);
    }
}
