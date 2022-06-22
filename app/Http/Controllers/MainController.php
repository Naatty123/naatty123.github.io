<?php

namespace App\Http\Controllers;

use App\Models\Feedback;
use Illuminate\Http\Request;

class MainController extends Controller
{
    public function index()
    {
        
            return view('index');
    }
    public function main(){
      
        return view('main');

    }public function projects(){
      
        return view('projects');
    }
    public function feed(Request $request){

        Feedback::create([
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message,


        ]);

        return redirect('/');
    }
}
