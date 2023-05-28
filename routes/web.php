<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProdutosController;
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

// Rota para exibir a lista de produtos
Route::get('/produtos', [ProdutosController::class, 'index'])->name('produtos.index');
Route::get('/produtos/create', [ProdutosController::class, 'create'])->name('produtos.create');
Route::post('/produtos', [ProdutosController::class, 'store'])->name('produtos.store');
Route::get('/produtos/{produto}', [ProdutosController::class, 'show'])->name('produtos.show');
Route::get('/produtos/{produto}/edit', [ProdutosController::class, 'edit'])->name('produtos.editar');
Route::put('/produtos/{produto}', [ProdutosController::class, 'update'])->name('produtos.update');
Route::delete('/produtos/{produto}', [ProdutosController::class, 'destroy'])->name('produtos.destroy');

