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
        $this->validate($request, [
            'waktu_jemput' => 'required ',
            'lokasi_jemput' => 'required',
            'estimasi_berat_sampah' => 'required',
            'kategori_sampah' => 'required',
        ]);

        $id = $request->input('user_id');
        $waktu_jemput = $request->input('waktu_jemput');
        $lokasi_jemput = $request->input('lokasi_jemput');
        $estimasi_berat_sampah = $request->input('estimasi_berat_sampah');
        $kategori_sampah = $request->input('kategori_sampah');

        $buang_sampah = new buang_sampah();
        $buang_sampah->user_id = $id;
        $buang_sampah->waktu_jemput = $waktu_jemput;
        $buang_sampah->lokasi_jemput = $lokasi_jemput;
        $buang_sampah->estimasi_berat_sampah = $estimasi_berat_sampah;
        $buang_sampah->kategori_sampah = $kategori_sampah;


        if ($buang_sampah->save()) {
            return response()->json([
                'status'    => true,
                'message'   => 'Buang Sampah Berhasil Diproses',
            ], 201);
        } else {
            return response()->json([
                'status'    => false,
                'message'   => 'Buang Sampah Gagal',
            ], 400);
        }
    }
    /**
     * 
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
