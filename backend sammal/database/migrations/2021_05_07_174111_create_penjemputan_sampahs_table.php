<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePenjemputanSampahsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('penjemputan_sampahs', function (Blueprint $table) {
            $table->increments('driver_id');
            // $table->integer('jemput_id')->unsigned();
            $table->binary('foto_driver');
            $table->string('nama_driver', 30);
            $table->string('plat_nomor', 10);
            $table->timestamps();
        });
        Schema::table('penjemputan_sampahs', function (Blueprint $table) {
            $table->foreign('jemput_id')->references('jemput_id')->on('buang_sampahs');
            // ->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('penjemputan_sampahs');
    }
}
