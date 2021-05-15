<?php

namespace App\Http\Controllers;

use App\Models\panduan_sampah;
use Illuminate\Http\Request;

class PanduanSampahController extends Controller
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
        $data = panduan_sampah::all();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // //

        // $gambar = $request->file('deskripsi')->getClientOriginalName();
        // $request->file('deskripsi')->move('upload', $gambar);
        // return response()->json($gambar);

        $this->validate($request, [
            'nama_panduan' => 'required', 'string',
            'deskripsi' => 'required | mimes:jpeg,jpg,png | max:1000',
        ]);

        $gambar = $request->file('deskripsi')->getClientOriginalName();
        $request->file('deskripsi')->move('upload', $gambar);

        $data = [
            'nama_panduan' => $request->input('nama_panduan'),
            'deskripsi' => $gambar
        ];

        $panduan_sampah = panduan_sampah::create($data);
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
     * @param  \App\Models\panduan_sampah  $panduan_sampah
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $data = panduan_sampah::where('panduan_id', $id)->get();
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\panduan_sampah  $panduan_sampah
     * @return \Illuminate\Http\Response
     */
    public function edit(panduan_sampah $panduan_sampah)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\panduan_sampah  $panduan_sampah
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        panduan_sampah::where('panduan_id', $id)->update($request->all());
        return response()->json("Data berhasil diupdate");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\panduan_sampah  $panduan_sampah
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        panduan_sampah::where('panduan_id', $id)->delete();
        return response()->json("Data sudah dihapus");
    }
}
