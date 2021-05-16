<?php

namespace App\Http\Controllers;

use App\Models\barang_amal;
use Illuminate\Http\Request;

class BarangAmalController extends Controller
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
        $data = barang_amal::all();
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
            'harga_barang' => 'required | numeric|min:100|max:100000',
            'jumlah_barang' => 'required| numeric|min:1|max:20',
            'nama_barang' => 'required',
        ]);
        $barang_amal = barang_amal::create($request->all());
        return response()->json($barang_amal);
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
     * @param  \App\Models\barang_amal  $barang_amal
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $data = barang_amal::where('barang_id', $id)->get();
        return response()->json($data);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\barang_amal  $barang_amal
     * @return \Illuminate\Http\Response
     */
    public function edit(barang_amal $barang_amal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\barang_amal  $barang_amal
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        barang_amal::where('barang_id', $id)->update($request->all());
        return response()->json("Data berhasil diupdate");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\barang_amal  $barang_amal
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        barang_amal::where('barang_id', $id)->delete();
        return response()->json("Data sudah dihapus");
    }
}
