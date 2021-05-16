<?php

namespace Database\Seeders;

use App\Models\penjemputan_sampah;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PenjemputanSampahSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('penjemputan_sampahs')->insert([
            [
                'driver_id' => 1,
                'jemput_id' => 1,
                'foto_driver' => 'foto_driver.png',
                'nama_driver' => 'sutrisno',
                'plat_nomor' => 'BE2345AYO',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'driver_id' => 2,
                'jemput_id' => 2,
                'foto_driver' => 'foto_driver2.png',
                'nama_driver' => 'sulistyo',
                'plat_nomor' => 'BE2122AYO',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'driver_id' => 3,
                'jemput_id' => 3,
                'foto_driver' => 'foto_driver3.png',
                'nama_driver' => 'suparno',
                'plat_nomor' => 'BE2234AYO',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'driver_id' => 4,
                'jemput_id' => 4,
                'foto_driver' => 'foto_driver4.png',
                'nama_driver' => 'subandio',
                'plat_nomor' => 'BE2456AYO',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'driver_id' => 5,
                'jemput_id' => 4,
                'foto_driver' => 'foto_driver5.png',
                'nama_driver' => 'sugiyono',
                'plat_nomor' => 'BE2526AYO',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ]);

        // penjemputan_sampah::create($data);
    }
}
