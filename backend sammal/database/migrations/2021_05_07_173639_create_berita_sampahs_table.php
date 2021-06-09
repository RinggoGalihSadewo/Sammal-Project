<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBeritaSampahsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('berita_sampahs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            // $table->binary('deskripsi');
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
        // Schema::table('berita_sampahs', function (Blueprint $table) {
        //     $table->foreign('user_id')->references('user_id')->on('users');
        //     // ->onDelete('cascade')->onUpdate('cascade');
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('berita_sampahs');
    }
}
