<?php

namespace Database\Seeders;

use App\Models\berita_sampah;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BeritaSampahSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('berita_sampahs')->insert([
            [
                'user_id' => 1,
                'deskripsi' => 'Sampah di Lampung menjadi emas semua!',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ]);

        // berita_sampah::create($data);
    }
}
