<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServicoController;
use App\Http\Controllers\SobreController;

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


Route::get('/', function () {
    return view('welcome');
});

Route::get('/servico', [ServicoController::class, 'index'])->name('servico.index');

Route::get('/sobre', [SobreController::class, 'index'])->name('sobre.index');


