<?php

namespace App\Http\Controllers;

use App\Models\penjemputan_sampah;
use Illuminate\Http\Request;

class PenjemputanSampahController extends Controller
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
        $data = penjemputan_sampah::all();
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
            'foto_driver' => 'required | mimes:jpeg,jpg,png | max:1000',
            'nama_driver' => 'required', 'string',
            'plat_nomor' => 'required | unique:penjemputan_sampahs',
        ]);

        $gambar = $request->file('foto_driver')->getClientOriginalName();
        $request->file('foto_driver')->move('upload', $gambar);

        $data = [
            'foto_driver' => $gambar,
            'nama_driver' => $request->input('nama_driver'),
            'plat_nomor' => $request->input('plat_nomor'),
        ];

        $penjemputan_sampah = penjemputan_sampah::create($data);
        return response()->json($data);

        $penjemputan_sampah = penjemputan_sampah::create($request->all());
        return response()->json($data);
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
     * @param  \App\Models\penjemputan_sampah  $penjemputan_sampah
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $data = penjemputan_sampah::where('driver_id', $id)->get();
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\penjemputan_sampah  $penjemputan_sampah
     * @return \Illuminate\Http\Response
     */
    public function edit(penjemputan_sampah $penjemputan_sampah)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\penjemputan_sampah  $penjemputan_sampah
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        penjemputan_sampah::where('driver_id', $id)->update($request->all());
        return response()->json("Data berhasil diupdate");
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\penjemputan_sampah  $penjemputan_sampah
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        penjemputan_sampah::where('driver_id', $id)->delete();
        return response()->json("Data sudah dihapus");
    }
}
