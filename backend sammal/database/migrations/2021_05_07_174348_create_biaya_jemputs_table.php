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
            $table->id();
            $table->unsignedBigInteger('jemput_id');
            $table->integer('jumlah_biaya');
            $table->timestamps();
            $table->foreign('jemput_id')->references('id')->on('buang_sampahs')->onDelete('cascade');
        });
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
