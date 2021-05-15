<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBarangAmalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('barang_amals', function (Blueprint $table) {
            $table->increments('barang_id');
            $table->integer('user_id')->unsigned();
            $table->integer('harga_barang');
            $table->integer('jumlah_barang');
            $table->char('nama_barang');
            $table->timestamps();
        });

        Schema::table('barang_amals', function (Blueprint $table) {
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
        Schema::dropIfExists('barang_amals');
    }
}
