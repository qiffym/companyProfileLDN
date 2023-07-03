<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Career;
use Illuminate\Http\Request;

class CareerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $careers = Career::latest()->filter(request(['search']))->paginate(15);
        return inertia('Admin/Careers/IndexCareer', [
            'title' => 'Manage Careers',
            'careers' => $careers,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Admin/Careers/CreateCareer', [
            'title' => 'Create Career'
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'position_name' => 'required|string',
            'department' => 'nullable|string',
            'description' => 'nullable',
            'requirement' => 'nullable',
            'phase' => 'nullable|string',
            'open_date' => 'nullable|date',
            'close_date' => 'nullable|date',
            'show' => 'boolean',
            'experience' => 'nullable',
            'ipk' => 'nullable'
        ]);

        Career::create($validatedData);

        return to_route('careers.index')->with('success', 'New Career Successfully Created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Career $career)
    {
        return inertia('Admin/Careers/ShowCareer', [
            'title' => 'Detail Career',
            'data' => $career
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Career $career)
    {
        return inertia('Admin/Careers/EditCareer', [
            'title' => 'Edit Career',
            'career' => $career
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Career $career)
    {
        $validatedData = $request->validate([
            'position_name' => 'required|string',
            'department' => 'nullable|string',
            'description' => 'nullable',
            'requirement' => 'nullable',
            'phase' => 'nullable|string',
            'open_date' => 'nullable|date',
            'close_date' => 'nullable|date',
            'show' => 'boolean',
            'experience' => 'nullable',
            'ipk' => 'nullable'
        ]);

        $career->update($validatedData);

        return to_route('careers.index')->with('success', 'Career Successfully Updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Career $career)
    {
        $career->delete();
        return back()->with('success', 'Career deleted successfully.');
    }
}
