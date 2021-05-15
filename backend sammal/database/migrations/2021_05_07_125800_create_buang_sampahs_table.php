<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBuangSampahsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buang_sampahs', function (Blueprint $table) {
            $table->id('jemput_id');
            $table->integer('user_id')->unsigned();
            $table->dateTime('waktu_jemput');
            $table->string('lokasi_jemput', 100);
            $table->integer('estimasi_berat_sampah');
            $table->char('kategori_sampah');
            $table->timestamps();
        });

        // $table->foreignId("nama_kolom")->reference("id tabel yang mau dihubungin")->on("nama table yang mau dihubungin");
        Schema::table('buang_sampahs', function (Blueprint $table) {
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
        Schema::dropIfExists('buang_sampahs');
    }
}
