<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SeriesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [SeriesController::class, 'index'])->name('listar_series');

Route::group(['controller' => SeriesController::class], function () {
    Route::get('/series/criar', 'create')->name('form_criar_serie');
    Route::post('/series/criar', 'store');
    Route::delete('/series/{id}', 'destroy');
});

