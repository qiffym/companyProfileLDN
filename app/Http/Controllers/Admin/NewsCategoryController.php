<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\NewsCategory;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/NewsCategories/Index', [
            'title' => 'News Categories',
            'items' => NewsCategory::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/NewsCategories/Create', [
            'title' => 'Create News Category'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'slug' => 'required|unique:news_categories,slug',
        ]);

        NewsCategory::create($validated);

        return to_route('news-categories.index')->with('success', 'New News Categories Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(NewsCategory $newsCategory)
    {
        return Inertia::render('Admin/NewsCategories/Show', [
            'title' => 'News Category Details',
            'data' => $newsCategory,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(NewsCategory $newsCategory)
    {
        return Inertia::render('Admin/NewsCategories/Edit', [
            'title' => 'Edit News Category',
            'item' => $newsCategory,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, NewsCategory $newsCategory)
    {
        $validated = $request->validate([
            'name' => 'required',
            'slug' => 'required|unique:news_categories,slug,' . $newsCategory->id,
        ]);

        $newsCategory->update($validated);

        return to_route('news-categories.show', $newsCategory)->with('success', 'Categories Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NewsCategory $newsCategory)
    {
        $newsCategory->delete();
        return back()->with('success', 'The category deleted successfully');
    }
}
