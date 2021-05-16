<?php

namespace App\Http\Controllers;

use App\Models\saldo_sampah;
use Illuminate\Http\Request;

class SaldoSampahController extends Controller
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
        $data = saldo_sampah::all();
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
            'total_saldo' => 'required|numeric|min:0|max:1000000',
            'histori_berat_sampah' => 'required|numeric|min:1',
            'histori_kategori_sampah' => 'required', 'string',
        ]);
        $saldo_sampah = saldo_sampah::create($request->all());
        return response()->json($saldo_sampah);
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
     * @param  \App\Models\saldo_sampah  $saldo_sampah
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $data = saldo_sampah::where('saldo_id', $id)->get();
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\saldo_sampah  $saldo_sampah
     * @return \Illuminate\Http\Response
     */
    public function edit(saldo_sampah $saldo_sampah)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\saldo_sampah  $saldo_sampah
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        saldo_sampah::where('saldo_id', $id)->update($request->all());
        return response()->json("Data berhasil diupdate");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\saldo_sampah  $saldo_sampah
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        saldo_sampah::where('saldo_id', $id)->delete();
        return response()->json("Data sudah dihapus");
    }
}
