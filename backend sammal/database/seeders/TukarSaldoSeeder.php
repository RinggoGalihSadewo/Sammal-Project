<?php

namespace Database\Seeders;

use App\Models\tukar_saldo;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TukarSaldoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('tukar_saldos')->insert([
            [

                'user_id' => 1,
                'jumlah_barang' => '3',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'user_id' => 2,
                'jumlah_barang' => '7',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ]);

        // tukar_saldo::create($data);
    }
}
