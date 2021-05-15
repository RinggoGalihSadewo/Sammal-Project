<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class buang_sampah extends Model
{
    //
    protected $fillable = ['user_id', 'waktu_jemput', 'lokasi_jemput', 'estimasi_berat_sampah', 'kategori_sampah'];

    // public function buang_sampah()
    // {
    //     //user id dimiliki oleh User
    //     return $this->belongsTo(User::class);
    //     // setiap buang sampah punya lebih dari satu user
    //     // return $this->hasMany(User::class,'user_id');
    // }
}
