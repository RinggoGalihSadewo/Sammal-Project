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
            $table->id();
            $table->unsignedBigInteger('jemput_id');
            $table->string('nama_driver', 30);
            $table->string('plat_nomor', 10);
            $table->timestamps();
            $table->foreign('jemput_id')->references('id')->on('buang_sampahs')->onDelete('cascade');
        });
        // Schema::table('penjemputan_sampahs', function (Blueprint $table) {
        //     $table->foreign('jemput_id')->references('jemput_id')->on('buang_sampahs');
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
        Schema::dropIfExists('penjemputan_sampahs');
    }
}
