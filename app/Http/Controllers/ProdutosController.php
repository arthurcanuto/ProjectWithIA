<?php

namespace App\Http\Controllers;

use App\Models\Produtos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProdutosController extends Controller
{
    /**
     * Exibe uma lista de produtos.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $produtos = Produtos::all();

        return view('produtos.index', compact('produtos'));
    }


    /**
     * Cria um novo produto.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'price' => 'required|numeric',
            'category' => 'required|string',
            'description' => 'nullable|string',
            'sku' => 'required|string',
            'supplier' => 'nullable|string',
            'expirationDate' => 'required|string',
            'creationDate' => 'required|string',
            'image' => 'nullable|image',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $produto = Produtos::create($request->all());

        return response()->json($produto, 201);
    }

    /**
     * Exibe o formulário de criação de um novo produto.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('produtos.create');
    }

    /**
     * Exibe os detalhes de um produto.
     *
     * @param  \App\Models\Produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function show(Produtos $produto)
    {
        return response()->json($produto);
    }

    /**
     * Atualiza um produto existente.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Produtos $produto)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'string',
            'price' => 'numeric',
            'category' => 'string',
            'description' => 'nullable|string',
            'sku' => 'string',
            'fornecedor' => 'string',
            'supplier' => 'nullable|string',
            'expirationDate' => 'string',
            'creationDate' => 'string',
            'image' => 'nullable|image',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 400);
        }

        $produto->update($request->all());

        return response()->json($produto);
    }

    /**
     * Remove um produto.
     *
     * @param  \App\Models\Produto  $produto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Produtos $produto)
    {
        $produto->delete();

        return response()->json(null, 204);
    }
}
