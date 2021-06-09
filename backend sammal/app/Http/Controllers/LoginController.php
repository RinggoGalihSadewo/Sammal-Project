<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    // public function register(Request $request)
    // {
    //     $data = [
    //         // 'user_id' => $request->input('user_id'),
    //         'user_name' => $request->input('user_name'),
    //         'password' => $request->input('password'),
    //         'email' => $request->input('email'),
    //         'email_verified_at' => $request->input('email_verified_at'),
    //         'foto_profil' => 'foto_profil7.png',
    //         // 'remember_token' => $request->input('email'),
    //         'kecamatan' => $request->input('kecamatan'),
    //     ];

    // 'waktu_jemput' => 'required | date_format:Y-m-d H:i:s',
    //         'lokasi_jemput' => 'required', 'string',
    //         'estimasi_berat_sampah' => 'required|numeric|min:1|max:25',
    //         'kategori_sampah' => 'required', 'string',

    //     User::create($data);
    //     return response()->json($data);
    // }
    public function register(Request $input)
    {

        $user_name       = $input->input('user_name');
        $email      = $input->input('email');
        $email_verified_at     = $input->input('email_verified_at');
        $password       = Hash::make($input->input('password'));
        $role           = $input->input('role');
        // $foto_profil = 'foto_profil7.png';
        $kecamatan = $input->input('kecamatan');

        $register               = new User;
        $register->user_name         = $user_name;
        $register->email        = $email;
        $register->email_verified_at     = $email_verified_at;
        $register->password     = $password;
        $register->kecamatan     = $kecamatan;
        $register->role     = $role;
        // $register->foto_profil = $foto_profil;


        if ($register->save()) {
            return response()->json([
                'status'    => true,
                'message'   => 'Register Success',
            ], 201);
        } else {
            return response()->json([
                'status'    => false,
                'message'   => 'Register Failed',
            ], 400);
        }
    }





    public function loginAgung(Request $request)
    {
        $email = $request->input('email');
        $user_name = $request->input('user_name');
        $password = $request->input('password');

        $user = User::where('email', $email)->first();

        if ($user->password === $password) {
            $token = Str::random(40);

            User::where('email', $request->email)->update(['remember_token' => $token]);

            return response()->json([
                'pesan' => 'login berhasil',
                'token' => $token,
                'data' => $user
            ]);
        } else {
            return response()->json([
                'pesan' => 'login gagal',
                'data' => ''
            ]);
        }
    }

    public function login(Request $input)
    {

        $email      = $input->input('email');
        $password   = $input->input('password');

        $user = User::where('email', $email)->first();

        if (Hash::check($password, $user->password)) {
            $apiToken = base64_encode(Str::random(40));

            $user->update([
                'remember_token' => $apiToken
            ]);

            return response()->json([
                'success'   => true,
                'message'   => "Berhasil Login",
                'data'      => [
                    'user'  => $user,
                    'token' => $apiToken,
                ]
            ]);
        } else {
            return response()->json([
                'success'   => false,
                'message'   => "Tidak Bisa login. Silakan cek kembali Email dan Password",
                'data'      => ''
            ]);
        }
    }
}
