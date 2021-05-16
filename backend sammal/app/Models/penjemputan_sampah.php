<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class penjemputan_sampah extends Model
{
    protected $fillable = ['jemput_id', 'foto_driver', 'nama_driver', 'plat_nomor'];
}
