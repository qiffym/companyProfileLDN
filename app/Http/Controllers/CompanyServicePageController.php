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
            'bgContractor' => Storage::disk('local')->url('img/bgContractor.jpg'),
            'contractorLandscape' => Storage::disk('local')->url('img/contractorLandscape.jpg'),
            'contractorSeaport' => Storage::disk('local')->url('img/contractorSeaport.jpg'),
            'contractorHospital' => Storage::disk('local')->url('img/contractorHospital.jpg'),
            'contractorMako' => Storage::disk('local')->url('img/contractorMako.jpg'),
            'contractorRestArea' => Storage::disk('local')->url('img/contractorRestArea.jpg'),

            // Supplier Image
            'supplierImg' => Storage::disk('local')->url('img/supplier.jpg'),
            'supplierPlumbing' => Storage::disk('local')->url('img/supplierPlumbing.jpg'),
            'supplierMaterials' => Storage::disk('local')->url('img/supplierMaterials.jpg'),
            'supplierElectrical' => Storage::disk('local')->url('img/supplierElectrical.jpg'),

            // Tech image
            'bgTech' => Storage::disk('local')->url('img/tech.jpg'),
            'techHardware' => Storage::disk('local')->url('img/techHardware.jpg'),
            'techSoftware' => Storage::disk('local')->url('img/techSoftware.jpg'),
            'techCyber' => Storage::disk('local')->url('img/techCyber.jpg'),
            'techPerbankan' => Storage::disk('local')->url('img/techBanking.jpg'),

            // trading image
            'tradingImg' => Storage::disk('local')->url('img/trading.jpg'),
            'tradMedical' => Storage::disk('local')->url('img/tradMedical.jpg'),
            'tradBlanket' => Storage::disk('local')->url('img/tradBlanket.jpg'),
            'tradTowel' => Storage::disk('local')->url('img/tradTowel.jpg'),
            'tradShoes' => Storage::disk('local')->url('img/tradShoes.jpg'),

        ]);
    }
}
