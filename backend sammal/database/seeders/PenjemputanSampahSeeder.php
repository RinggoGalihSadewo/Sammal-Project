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
                // 'driver_id' => 1,
                'jemput_id' => 1,
                // 'foto_driver' => 'foto_driver.png',
                'nama_driver' => 'sutrisno',
                'plat_nomor' => 'BE2345AYO',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                // 'driver_id' => 2,
                'jemput_id' => 2,
                // 'foto_driver' => 'foto_driver2.png',
                'nama_driver' => 'sulistyo',
                'plat_nomor' => 'BE2122AYO',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ]);

        // penjemputan_sampah::create($data);
    }
}
