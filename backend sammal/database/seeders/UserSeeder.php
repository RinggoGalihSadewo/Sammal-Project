<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
// use Faker\Factory as Faker;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        // $faker = Faker::create();

        // for ($i = 0; $i < 100; $i++) {
        //     DB::table('users')->insert([
        //         [
        //             'user_name' => $faker->userName,
        //             'password' => $faker->password,
        //             'email' => $faker->freeEmail,
        //             'email_verified_at' => $faker->dateTime,
        //             'foto_profil' => $faker->text,
        //             'remember_token' => $faker->creditCardNumber,
        //             'kecamatan' => $faker->domainName,
        //             'created_at' => date('Y-m-d H:i:s'),
        //             'updated_at' => date('Y-m-d H:i:s'),
        //         ],
        //     ]);
        // }
        DB::table('users')->insert([
            [
                'user_name' => 'agungzefi',
                'password'  => Hash::make('admin321'),
                'email' => 'ahmadagungzs@gmail.com',
                'email_verified_at' => '2021-05-09 00:18:10',
                'remember_token' => 'OTP123',
                'role'  => 'user',
                'kecamatan' => 'kemiling',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'user_name' => 'admin',
                'password'  => Hash::make('admin123'),
                'email' => 'admin@gmail.com',
                'role'  => 'admin',
                'email_verified_at' => '2021-05-11 00:18:10',
                'remember_token' => '0TP345',
                'kecamatan' => 'langkapura',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'user_name' => 'dewapt',
                'password'  => Hash::make('dengandoa123'),
                'email' => 'dewapt@gmail.com',
                'email_verified_at' => '2021-05-10 00:18:10',
                // 'foto_profil' => 'foto_profil2.png',
                'remember_token' => 'OTP124',
                'role'  => 'user',
                'kecamatan' => 'tbu',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'user_name' => 'bagusdwi',
                'password'  => Hash::make('lancarjaya'),
                'email' => 'bagusdwi@gmail.com',
                'email_verified_at' => '2021-05-10 00:18:10',
                // 'foto_profil' => 'foto_profil3.png',
                'remember_token' => '0TP234',
                'role'  => 'user',
                'kecamatan' => 'labuhanratu',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'user_name' => 'ringgogs',
                'password'  => Hash::make('kemenangan'),
                'email' => 'ringgogs@gmail.com',
                'email_verified_at' => '2021-05-11 00:18:10',
                // 'foto_profil' => 'foto_profil4.png',
                'remember_token' => '0TP345',
                'role'  => 'user',
                'kecamatan' => 'langkapura',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],

        ]);
        // ]);
        // $data = [
        //     'user_name' => 'agungzefi',
        //     'password' => 'agungzefi',
        //     'email' => 'ahmadagungzs@gmail.com',
        //     'email_verified_at' => '2021-05-09 00:18:10',
        //     'foto_profil' => 'foto_profil.png',
        //     'remember_token' => 'OTP123',
        //     'kecamatan' => 'kemiling'
        // ];

        // User::table('users')->create($data);
    }
}
