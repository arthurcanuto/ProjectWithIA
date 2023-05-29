<?php

namespace App\Http\Controllers;

use App\Models\Projeto;
use Illuminate\Http\Request;

class ProjetoController extends Controller
{
    public function index()
    {
        $projetos = Projeto::all();

        return view('projetos.index', compact('projetos'));
    }

    public function create()
    {
        return view('projetos.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required',
            'descricao' => 'required',
            'data_inicio' => 'required|string',
            'data_termino' => 'required|string',
            'responsavel' => 'required',
            'status' => 'required',
            'orcamento' => 'required|numeric',
            'prioridade' => 'required',
        ]);

        Projeto::create($request->all());

        return redirect()->route('projetos.index')->with('success', 'Projeto cadastrado com sucesso.');
    }

    public function show(Projeto $projeto)
    {
        return view('projetos.show', compact('projeto'));
    }

    public function details()
    {
        return view('projetos.details');
    }

    public function edit(Projeto $projeto)
    {
        return view('projetos.edit', compact('projeto'));
    }

    public function update(Request $request, Projeto $projeto)
    {
        $request->validate([
            'nome' => 'required',
            'descricao' => 'required',
            'data_inicio' => 'required|string',
            'data_termino' => 'required|string',
            'responsavel' => 'required',
            'status' => 'required',
            'orcamento' => 'required|numeric',
            'prioridade' => 'required',
        ]);

        $projeto->update($request->all());

        return redirect()->route('projetos.show', $projeto)->with('success', 'Projeto atualizado com sucesso.');
    }

    public function destroy(Projeto $projeto)
    {
        $projeto->delete();

        return redirect()->route('projetos.index')->with('success', 'Projeto excluído com sucesso.');
    }
}
