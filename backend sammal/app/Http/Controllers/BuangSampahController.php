<?php

namespace App\Http\Controllers;

use App\Models\buang_sampah;
use Faker\Provider\Base;
use Illuminate\Http\Request;

class BuangSampahController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $data = buang_sampah::all();
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
            'waktu_jemput' => 'required | date_format:Y-m-d H:i:s',
            'lokasi_jemput' => 'required', 'string',
            'estimasi_berat_sampah' => 'required|numeric|min:1|max:25',
            'kategori_sampah' => 'required', 'string',
        ]);
        $buang_sampah = buang_sampah::create($request->all());
        return response()->json($buang_sampah);
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
     * @param  \App\Models\buang_sampah  $buang_sampah
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $data = buang_sampah::where('jemput_id', $id)->get();
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\buang_sampah  $buang_sampah
     * @return \Illuminate\Http\Response
     */
    public function edit(buang_sampah $buang_sampah)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\buang_sampah  $buang_sampah
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        buang_sampah::where('jemput_id', $id)->update($request->all());
        return response()->json("Data berhasil diupdate");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\buang_sampah  $buang_sampah
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        buang_sampah::where('jemput_id', $id)->delete();
        return response()->json('Data berhasil dihapus');
    }
}
