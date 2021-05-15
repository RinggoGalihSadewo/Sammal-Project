<?php

namespace Database\Seeders;

use App\Models\buang_sampah;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BuangSampahSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('buang_sampahs')->insert([
            // $data = [
            [
                'user_id' => 1,
                'waktu_jemput' => '2021-05-09 00:22:25',
                'lokasi_jemput' => 'ITERA',
                'estimasi_berat_sampah' => '5',
                'kategori_sampah' => 'Anorganik',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'user_id' => 2,
                'waktu_jemput' => '2021-05-10 02:23:25',
                'lokasi_jemput' => 'UNILA',
                'estimasi_berat_sampah' => '10',
                'kategori_sampah' => 'Organik',
                'created_at' => date('Y-m-d H:i:s'),
                'upated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'user_id' => 3,
                'waktu_jemput' => '2021-05-09 00:22:25',
                'lokasi_jemput' => 'ITERA',
                'estimasi_berat_sampah' => '5',
                'kategori_sampah' => 'Anorganik',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'user_id' => 4,
                'waktu_jemput' => '2021-05-09 00:22:25',
                'lokasi_jemput' => 'ITERA',
                'estimasi_berat_sampah' => '5',
                'kategori_sampah' => 'Anorganik',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ]
        ]);

        // buang_sampah::create($data);
    }
}
