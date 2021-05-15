<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class saldo_sampah extends Model
{
    protected $fillable = ['user_id', 'total_saldo', 'histori_berat_sampah', 'histori_kategori_sampah'];
}
