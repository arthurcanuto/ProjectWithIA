<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ClientesController;

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

Route::get('/', [App\Http\Controllers\HomeController::class, 'welcome']);


// Rota para exibir a lista de clientes
Route::get('/clientes', [ClientesController::class, 'index'])->name('clientes.index');
Route::get('/clientes/criar', [ClientesController::class, 'create'])->name('clientes.create');
Route::post('/clientes', [ClientesController::class, 'store'])->name('clientes.store');
Route::get('/clientes/listar', [ClientesController::class, 'listar'])->name('clientes.listar');
Route::get('/clientes/{id}/editar', [ClientesController::class, 'editarPerfil'])->name('clientes.editar');
Route::post('/clientes/{id}/atualizar', [ClientesController::class, 'atualizar'])->name('clientes.atualizar');
Route::put('/clientes/{IdClient}', [ClientesController::class, 'update'])->name('clientes.update');
Route::delete('/clientes/{IdClient}', [ClientesController::class, 'destroy'])->name('clientes.destroy');

