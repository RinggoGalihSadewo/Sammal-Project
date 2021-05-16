<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class LoginController extends Controller
{
    public function register(Request $request)
    {
        $data = [
            'user_id' => $request->input('user_id'),
            'user_name' => $request->input('user_name'),
            'password' => $request->input('password'),
            'email' => $request->input('email'),
            'email_verified_at' => $request->input('email_verified_at'),
            'foto_profil' => 'foto_profil7.jpg',
            'remember_token' => 'OTP432',
            'kecamatan' => 'kedaton'
        ];

        User::create($data);
        return response()->json($data);
    }

    public function login(Request $request)
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
}
