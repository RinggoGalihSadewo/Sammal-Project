<?php

namespace App\Http\Controllers;

use App\Models\biaya_jemput;
use Illuminate\Http\Request;

class BiayaJemputController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // echo "<h1> Ini adalah index </h1>";
        $data = biaya_jemput::all();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //

        $this->validate($request, [
            'jumlah_biaya' => 'required | numeric|min:1000|max:100000'
        ]);
        $biaya_jemput = biaya_jemput::create($request->all());
        return response()->json($biaya_jemput);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\biaya_jemput  $biaya_jemput
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $data = biaya_jemput::where('jumlah_biaya', $id)->get();
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\biaya_jemput  $biaya_jemput
     * @return \Illuminate\Http\Response
     */
    public function edit(biaya_jemput $biaya_jemput)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\biaya_jemput  $biaya_jemput
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        biaya_jemput::where('jumlah_biaya', $id)->update($request->all());
        return response()->json("Data berhasil diupdate");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\biaya_jemput  $biaya_jemput
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        biaya_jemput::where('jumlah_biaya', $id)->delete();
        return response()->json("Data sudah dihapus");
    }
}
