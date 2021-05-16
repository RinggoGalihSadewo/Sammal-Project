<?php

namespace App\Http\Controllers;

use App\Models\berita_sampah;
use Illuminate\Http\Request;

class BeritaSampahController extends Controller
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
        $data = berita_sampah::all();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // $gambar = $request->file('deskripsi')->getClientOriginalName();
        // $request->file('deskripsi')->move('upload', $gambar);
        // return response()->json($gambar);

        $this->validate($request, [
            'deskripsi' => 'required | mimes:jpeg,jpg,png | max:1000',
        ]);

        $gambar = $request->file('deskripsi')->getClientOriginalName();
        $request->file('deskripsi')->move('upload', $gambar);


        $data = [
            'deskripsi' => $request->input('deskripsi')
        ];

        $berita_sampah = berita_sampah::create($data);
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
     * @param  \App\Models\berita_sampah  $berita_sampah
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $data = berita_sampah::where('berita_id', $id)->get();
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\berita_sampah  $berita_sampah
     * @return \Illuminate\Http\Response
     */
    public function edit(berita_sampah $berita_sampah)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\berita_sampah  $berita_sampah
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        berita_sampah::where('berita_id', $id)->update($request->all());
        return response()->json("Data berhasil diupdate");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\berita_sampah  $berita_sampah
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        berita_sampah::where('berita_id', $id)->delete();
        return response()->json("Data sudah dihapus");
    }
}
