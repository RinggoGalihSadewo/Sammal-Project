<?php

namespace Database\Seeders;

use App\Models\panduan_sampah;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PanduanSampahSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('panduan_sampahs')->insert([
            [
                'user_id' => 1,
                'nama_panduan' => 'Panduan Membuang Sampah berdasarkan Kategorinya',
                // 'deskripsi' => 'panduan.png',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ]);

        // panduan_sampah::create($data);
    }
}
