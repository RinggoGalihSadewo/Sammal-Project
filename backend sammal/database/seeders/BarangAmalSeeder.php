<?php

namespace Database\Seeders;

use App\Models\barang_amal;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BarangAmalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('barang_amals')->insert([
            [
                'user_id' => 1,
                'harga_barang' => '15000',
                'jumlah_barang' => '10',
                'nama_barang' => 'Minyak Goreng Sania',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'user_id' => 2,
                'harga_barang' => '5000',
                'jumlah_barang' => '20',
                'nama_barang' => 'Mie Telor Sarimi',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ]);

        // barang_amal::create($data);
    }
}
