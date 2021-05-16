<?php

namespace App\Http\Controllers;

use App\Models\tukar_saldo;
use Illuminate\Http\Request;

class TukarSaldoController extends Controller
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
        $data = tukar_saldo::all();
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
            'jumlah_barang' => 'required|numeric|min:1|max:11',
        ]);
        $tukar_saldo = tukar_saldo::create($request->all());
        return response()->json($tukar_saldo);
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
     * @param  \App\Models\tukar_saldo  $tukar_saldo
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $data = tukar_saldo::where('transaksi_id', $id)->get();
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\tukar_saldo  $tukar_saldo
     * @return \Illuminate\Http\Response
     */
    public function edit(tukar_saldo $tukar_saldo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\tukar_saldo  $tukar_saldo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        tukar_saldo::where('transaksi_id', $id)->update($request->all());
        return response()->json("Data berhasil diupdate");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\tukar_saldo  $tukar_saldo
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        tukar_saldo::where('transaksi_id', $id)->delete();
        return response()->json("Data sudah dihapus");
    }
}
