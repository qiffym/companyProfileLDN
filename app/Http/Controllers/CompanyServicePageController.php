<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CompanyServicePageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        return inertia('Services/Services', [
            'title' => 'Layanan Kami',
            // Contractor Image
            'bgContractor' => Storage::url('/img/bgContractor.jpg'),
            'contractorLandscape' => Storage::url('/img/contractorLandscape.jpg'),
            'contractorSeaport' => Storage::url('/img/contractorSeaport.jpg'),
            'contractorHospital' => Storage::url('/img/contractorHospital.jpg'),
            'contractorMako' => Storage::url('/img/contractorMako.jpg'),
            'contractorRestArea' => Storage::url('/img/contractorRestArea.jpg'),

            // Supplier Image
            'supplierImg' => Storage::url('/img/supplier.jpg'),
            'supplierPlumbing' => Storage::url('/img/supplierPlumbing.jpg'),
            'supplierMaterials' => Storage::url('/img/supplierMaterials.jpg'),
            'supplierElectrical' => Storage::url('/img/supplierElectrical.jpg'),

            // Tech image
            'bgTech' => Storage::url('/img/tech.jpg'),

        ]);
    }
}
