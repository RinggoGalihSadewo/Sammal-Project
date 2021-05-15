<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class barang_amal extends Model
{
    protected $fillable = ['user_id', 'harga_barang', 'jumlah_barang', 'nama_barang'];
}
