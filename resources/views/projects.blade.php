@extends('index')

@section('projects')
    <div class="bg-gray-300 w-full h-auto border border-black mt-26 py-28 ">
        <div class="p-3">
            <p class="text-blue-600 text-4xl">Projects</p>
            <hr class="w-1/2 m-1  border-blue-600">
        </div>
        <div class="p-5 grid grid-cols-3 gap-10">
            <div class=" rounded-2xl shadow-xl overflow-hidden transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-150 cursor-pointer">
                <div>
                    <img class="w-[80%] m-auto" src="http://zemaye.tk/logo.png" alt="">
                </div>
                <div class="bg-white p-3">
                    {{-- <hr class="w-2/3 m-auto"> --}}
                    <p class="text-center text-xl text-black">Zema</p>
                </div>
            </div>


            <div class=" rounded-2xl shadow-xl overflow-hidden transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-150 cursor-pointer">
                <div>
                    <img class="w-[80%] m-auto" src="http://zemaye.tk/logo.png" alt="">
                </div>
                <div class="bg-white p-3">
                    {{-- <hr class="w-2/3 m-auto"> --}}
                    <p class="text-center text-xl text-black">Zema</p>
                </div>
            </div>

            <div class=" rounded-2xl shadow-xl overflow-hidden transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-150 cursor-pointer">
                <div>
                    <img class="w-[80%] m-auto" src="http://zemaye.tk/logo.png" alt="">
                </div>
                <div class="bg-white p-3">
                    {{-- <hr class="w-2/3 m-auto"> --}}
                    <p class="text-center text-xl text-black">Zema</p>
                </div>
            </div>

            
        </div>
    </div>



@endsection