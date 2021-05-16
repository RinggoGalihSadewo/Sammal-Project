<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBiayaJemputsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('biaya_jemputs', function (Blueprint $table) {
            $table->integer('jumlah_biaya', 10);
            $table->foreignId('jemput_id')->references('jemput_id')->on('buang_sampahs');
            // $table->integer('jemput_id')->unsigned();
            $table->timestamps();
        });
        // Schema::table('biaya_jemputs', function (Blueprint $table) {
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
        Schema::dropIfExists('biaya_jemputs');
    }
}
