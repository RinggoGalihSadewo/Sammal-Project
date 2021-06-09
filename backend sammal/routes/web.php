<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});


$router->post('api/register', ['uses' => 'LoginController@register']);
$router->post('api/login', ['uses' => 'LoginController@login']);

$router->group(['prefix' => 'api'], function () use ($router) {

    $router->get('User', ['uses' => 'UserController@index']);
    $router->get('User/{id}', ['uses' => 'UserController@show']);
    $router->delete('User/{id}', ['uses' => 'UserController@destroy']);
    $router->post('user/update', ['uses' => 'UserController@update']);
    $router->post('User', ['uses' => 'UserController@create']);

    $router->get('buang_sampah', ['uses' => 'BuangSampahController@index']);
    $router->get('buang_sampah/{id}', ['uses' => 'BuangSampahController@show']);
    $router->post('buang_sampah', ['uses' => 'BuangSampahController@create']);
    $router->delete('buang_sampah/{id}', ['uses' => 'BuangSampahController@destroy']);
    $router->put('buang_sampah/{id}', ['uses' => 'BuangSampahController@update']);

    $router->get('berita_sampah', ['uses' => 'BeritaSampahController@index']);
    $router->get('berita_sampah/{id}', ['uses' => 'BeritaSampahController@show']);
    $router->post('berita_sampah', ['uses' => 'BeritaSampahController@create']);
    $router->delete('berita_sampah/{id}', ['uses' => 'BeritaSampahController@destroy']);
    $router->put('berita_sampah/{id}', ['uses' => 'BeritaSampahController@update']);

    $router->get('barang_amal', ['uses' => 'BarangAmalController@index']);
    $router->get('barang_amal/{id}', ['uses' => 'BarangAmalController@show']);
    $router->post('barang_amal', ['uses' => 'BarangAmalController@create']);
    $router->delete('barang_amal/{id}', ['uses' => 'BarangAmalController@destroy']);
    $router->put('barang_amal/{id}', ['uses' => 'BarangAmalController@update']);

    $router->get('tukar_saldo', ['uses' => 'TukarSaldoController@index']);
    $router->get('tukar_saldo/{id}', ['uses' => 'TukarSaldoController@show']);
    $router->post('tukar_saldo', ['uses' => 'TukarSaldoController@create']);
    $router->delete('tukar_saldo/{id}', ['uses' => 'TukarSaldoController@destroy']);
    $router->put('tukar_saldo/{id}', ['uses' => 'TukarSaldoController@update']);

    $router->get('biaya_jemput', ['uses' => 'BiayaJemputController@index']);
    $router->get('biaya_jemput/{id}', ['uses' => 'BiayaJemputController@show']);
    $router->post('biaya_jemput', ['uses' => 'BiayaJemputController@create']);
    $router->delete('biaya_jemput/{id}', ['uses' => 'BiayaJemputController@destroy']);
    $router->put('biaya_jemput/{id}', ['uses' => 'BiayaJemputController@update']);

    $router->get('saldo_sampah', ['uses' => 'SaldoSampahController@index']);
    $router->get('saldo_sampah/{id}', ['uses' => 'SaldoSampahController@show']);
    $router->post('saldo_sampah', ['uses' => 'SaldoSampahController@create']);
    $router->delete('saldo_sampah/{id}', ['uses' => 'SaldoSampahController@destroy']);
    $router->put('saldo_sampah/{id}', ['uses' => 'SaldoSampahController@update']);

    $router->get('panduan_sampah', ['uses' => 'PanduanSampahController@index']);
    $router->get('panduan_sampah/{id}', ['uses' => 'PanduanSampahController@show']);
    $router->post('panduan_sampah', ['uses' => 'PanduanSampahController@create']);
    $router->delete('panduan_sampah/{id}', ['uses' => 'PanduanSampahController@destroy']);
    $router->put('panduan_sampah/{id}', ['uses' => 'PanduanSampahController@update']);

    $router->get('penjemputan_sampah', ['uses' => 'PenjemputanSampahController@index']);
    $router->get('penjemputan_sampah/{id}', ['uses' => 'PenjemputanSampahController@show']);
    $router->post('penjemputan_sampah', ['uses' => 'PenjemputanSampahController@create']);
    $router->delete('penjemputan_sampah/{id}', ['uses' => 'PenjemputanSampahController@destroy']);
    $router->put('penjemputan_sampah/{id}', ['uses' => 'PenjemputanSampahController@update']);
});
