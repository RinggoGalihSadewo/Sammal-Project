<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    //
    protected $fillable = ['user_name', 'password', 'email', 'email_verified_at', 'foto_profil', 'remember_token', 'kecamatan'];
    // public function buang_sampah()
    // {
    //     return $this->hasMany(buang_sampah::class, 'user_id');
    // }
}
