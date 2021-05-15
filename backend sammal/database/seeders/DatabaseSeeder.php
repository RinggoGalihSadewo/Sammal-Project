<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call('UsersTableSeeder');
        $this->call(UserSeeder::class);
        $this->call(BuangSampahSeeder::class);
        $this->call(BarangAmalSeeder::class);
        $this->call(TukarSaldoSeeder::class);
        $this->call(SaldoSampahSeeder::class);
        $this->call(BeritaSampahSeeder::class);
        $this->call(PanduanSampahSeeder::class);
        $this->call(PenjemputanSampahSeeder::class);
        $this->call(BiayaJemputSeeder::class);
    }
}
