<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Test\Constraint\ResponseHeaderSame;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
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
        $data = User::all();
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
            'user_name' => 'required | unique:users',
            'password' => 'required', 'string', 'min:5', 'regex:/[a-z]/', 'regex:/[A-Z]/',
            'email' => 'required | unique:users',
        ]);

        $token = Str::random(40);
        User::where('email', $request->email)->update(['remember_token' => $token]);
        // 'email_verified_at' => 'required | date_format:Y-m-d H:i:s',
        // 'foto_profil' => 'required | mimes:jpeg,jpg,png | max:1000',
        // 'remember_token' => 'required',
        // 'kecamatan' => 'required'

        $gambar = $request->file('foto_profil')->getClientOriginalName();
        $request->file('foto_profil')->move('upload', $gambar);

        $data = [
            'user_name' => $request->input('user_name'),
            'password' => $request->input('password'),
            'email' => $request->input('email'),
            'email_verified_at' => $request->input('email_verified_at'),
            'foto_profil' => $gambar,
            'role' => $request->input('role'),
            'remember_token' => $request->input('remember_token'),
            'kecamatan' => $request->input('kecamatan')
        ];

        $user = User::create($data);
        return response()->json($data);


        // $User = User::create($request->all());
        // return response()->json($User);
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
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $data = User::where('user_id', $id)->get();
        return response()->json($data);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {

        $id = $request->input('user_id');

        $update = User::where('id', $id)->update([
            'user_name' => $request->input('user_name'),
            'password' => Hash::make($request->input('password')),
            'kecamatan' => $request->input('kecamatan'),
        ]);

        if ($update) {
            return response()->json([
                'status'    => true,
                'message'   => 'Berhasil Update Data',
                'data'      => $request->input('password')
            ], 201);
        } else {
            return response()->json([
                'status'    => false,
                'message'   => 'gagal Update Data',
                'data'      => $request->input('password')
            ], 201);
        }

        return response()->json("Data berhasil diupdate");
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        User::where('user_id', $id)->delete();
        return response()->json("Data sudah dihapus");
    }
}
