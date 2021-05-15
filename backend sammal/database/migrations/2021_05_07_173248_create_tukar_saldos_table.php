<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTukarSaldosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tukar_saldos', function (Blueprint $table) {
            $table->increments('transaksi_id');
            $table->integer('user_id')->unsigned();
            $table->integer('jumlah_barang');
            $table->timestamps();
        });
        Schema::table('tukar_saldos', function (Blueprint $table) {
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
        Schema::dropIfExists('tukar_saldos');
    }
}
