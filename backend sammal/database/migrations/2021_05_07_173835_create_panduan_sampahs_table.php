<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePanduanSampahsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('panduan_sampahs', function (Blueprint $table) {
            $table->increments('panduan_id');
            $table->integer('user_id')->unsigned();
            $table->string('nama_panduan');
            $table->binary('deskripsi');
            $table->timestamps();
        });
        Schema::table('panduan_sampahs', function (Blueprint $table) {
            $table->foreign('user_id')->references('user_id')->on('users');
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
        Schema::dropIfExists('panduan_sampahs');
    }
}
