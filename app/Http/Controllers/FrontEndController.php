<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontEndController extends Controller
{
    public function  frontHome(){
       return view('frontend.home');
    }
    public function  mission(){
       return view('frontend.mission');
    }
    public function  companyGlance(){
       return view('frontend.company_glance');
    }

}
