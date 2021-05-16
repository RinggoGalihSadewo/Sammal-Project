<?php

namespace Database\Seeders;

use App\Models\biaya_jemput;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BiayaJemputSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('biaya_jemputs')->insert([
            [
                'jumlah_biaya' => '20000',
                'jemput_id' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'jumlah_biaya' => '30000',
                'jemput_id' => 2,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'jumlah_biaya' => '40000',
                'jemput_id' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'jumlah_biaya' => '50000',
                'jemput_id' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ]);

        // biaya_jemput::create($data);
    }
}
