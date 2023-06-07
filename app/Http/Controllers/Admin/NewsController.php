<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\StoreNewsRequest;
use App\Http\Requests\UpdateNewsRequest;
use App\Models\News;
use App\Models\NewsCategory;
use Illuminate\Support\Facades\Storage;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $news = News::latest()->get();
        return inertia('Admin/News/IndexNews', [
            'title' => 'News',
            'items' => $news,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/News/CreateNews', [
            'title' => 'Edit News',
            'categories' => NewsCategory::select('id', 'name')->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreNewsRequest $request)
    {
        if ($request->hasFile('img')) {
            $file = $request->file('img');
            $filename = $request->slug . '.' . $file->getClientOriginalExtension();
            $path = $file->storeAs('news/images', $filename, 'public');
        }

        $validated = $request->validated();

        $validated['excerpt'] = str(strip_tags($request->content))->words(25);
        $validated['img'] = $path;

        News::create($validated);

        return to_route('news.index')->with('success', 'News successfully created');
    }

    /**
     * Display the specified resource.
     */
    public function show(News $news)
    {
        return inertia('Admin/News/ShowNews', [
            'title' => 'News Details',
            'news' => $news,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(News $news)
    {
        return inertia('Admin/News/EditNews', [
            'title' => 'Create News',
            'news' => $news,
            'categories' => NewsCategory::select('id', 'name')->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateNewsRequest $request, News $news)
    {
        $validated = $request->validated();
        $validated['excerpt'] = str(strip_tags($request->content))->words(25);

        $news->update($validated);

        return to_route('news.show', $news)->with('success', 'News successfully updated');
    }

    public function updateImage(Request $request, News $news)
    {
        $request->validate([
            'img' => 'required|image'
        ]);

        $file = $request->file('img');
        $filename =  $news->slug . '-updated.' . $file->getClientOriginalExtension();
        $path = $file->storeAs('news/images', $filename, 'public');
        Storage::disk('public')->delete($news->img);

        $news->img = $path;
        $news->save();

        return back()->with('success', 'The image is updated');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(News $news)
    {
        $news->img && Storage::disk('public')->delete($news->img);

        $news->delete();
        return to_route('news.index')->with('success', 'News successfully deleted');
    }
}
