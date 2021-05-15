<?php

namespace Database\Seeders;

use App\Models\saldo_sampah;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SaldoSampahSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // $data = [
        DB::table('saldo_sampahs')->insert([
            [
                'user_id' => 1,
                'total_saldo' => '500000',
                'histori_berat_sampah' => '5',
                'histori_kategori_sampah' => 'Organik',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'user_id' => 2,
                'total_saldo' => '100000',
                'histori_berat_sampah' => '10',
                'histori_kategori_sampah' => 'Anorganik',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ]);

        // saldo_sampah::create($data);
    }
}
