<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\FAQ;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FAQController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/FAQs/Index', [
            'title' => 'Frequently Asked Questions',
            'faqs' => FAQ::filter(request(['search']))->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/FAQs/Create', [
            'title' => 'Create FAQ',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'question' => 'required|unique:faqs,question',
            'answer' => 'required'
        ]);

        FAQ::create($validated);

        return to_route('faqs.index')->with('success', 'New FAQ Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(FAQ $faq)
    {
        return Inertia::render('Admin/FAQs/Show', [
            'title' => 'FAQ Details',
            'data' => $faq
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FAQ $faq)
    {
        return Inertia::render('Admin/FAQs/Edit', [
            'title' => 'Edit FAQ',
            'faq' => $faq
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FAQ $faq)
    {
        $validated = $request->validate([
            'question' => 'required|unique:faqs,question,' . $faq->id,
            'answer' => 'required'
        ]);

        $faq->update($validated);

        return to_route('faqs.show', $faq)->with('success', 'FAQ Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FAQ $faq)
    {
        $faq->delete();
        return back()->with('info', "FAQ ID:$faq->id Deleted Successfully");
    }
}
