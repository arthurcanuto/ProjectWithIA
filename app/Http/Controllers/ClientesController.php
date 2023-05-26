<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Clientes;
use Illuminate\Http\Request;

class ClientesController extends Controller
{
    // Exibe a lista de clientes
    public function index()
    {
        $clientes = Clientes::all();
        return view('clientes.index', compact('clientes'));
    }

    // Exibe o formulário de criação de cliente
    public function create()
    {
        return view('clientes.create');
    }

    // Armazena um novo cliente
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:clientes,email'],
            'birth' => ['required', 'string'],
            'state' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'borhood' => ['required', 'string', 'max:255'],
            'street' => ['required', 'string', 'max:255'],
            'number' => ['required', 'integer', 'max:99999'],
            'phone' => ['required', 'string', 'regex:/^\([1-9]{2}\) [2-9][0-9]{3,4}\-[0-9]{4}$/'],
            'code' => ['required', 'regex:/^\d{5}-\d{3}$/'],
        ]);
        
        try {
            $birth = Carbon::createFromFormat('d/m/Y', $validatedData['birth']);
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['birth' => 'A data de nascimento é inválida.'])->withInput();
        }

        $cliente = new Clientes;
        $cliente->name = $validatedData['name'];
        $cliente->email = $validatedData['email'];
        $cliente->phone = $validatedData['phone'];
        $cliente->code = $validatedData['code'];
        $cliente->birth = $birth->toDateString();
        $cliente->state = $validatedData['state'];
        $cliente->number = $validatedData['number'];
        $cliente->city = $validatedData['city'];
        $cliente->borhood = $validatedData['borhood'];
        $cliente->street = $validatedData['street'];

        $cliente->save();

        return redirect()->route('clientes.index')->with('success', 'Cliente cadastrado com sucesso.');
    }

    // Exibe a lista de clientes
    public function listar()
    {
        $clientes = Clientes::all();
        return view('clientes.listar', compact('clientes'));
    }

    // Exibe os detalhes de um cliente
    public function show(Clientes $cliente)
    {
        return view('clientes.show', compact('cliente'));
    }

    // Exibe o formulário de edição de um cliente
    public function edit(Clientes $client)
    {
        return view('clientes.edit', compact('client'));
    }

    // Atualiza um cliente
    public function update(Request $request, Clientes $client)
    {
        $validatedData = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:clientes,email'],
            'birth' => ['required', 'string'],
            'state' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'borhood' => ['required', 'string', 'max:255'],
            'street' => ['required', 'string', 'max:255'],
            'number' => ['required', 'integer', 'max:99999'],
            'phone' => ['required', 'string', 'regex:/^\([1-9]{2}\) [2-9][0-9]{3,4}\-[0-9]{4}$/'],
            'code' => ['required', 'regex:/^\d{5}-\d{3}$/'],
        ]);

        try {
            $birth = Carbon::createFromFormat('d/m/Y', $validatedData['birth']);
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['birth' => 'A data de nascimento é inválida.'])->withInput();
        }

        $client->name = $validatedData['name'];
        $client->email = $validatedData['email'];
        $client->phone = $validatedData['phone'];
        $client->code = $validatedData['code'];
        $client->birth = $birth->toDateString();
        $client->state = $validatedData['state'];
        $client->number = $validatedData['number'];
        $client->city = $validatedData['city'];
        $client->borhood = $validatedData['borhood'];
        $client->street = $validatedData['street'];

        $client->save();

        return redirect()->route('clientes.show', $client->id)->with('success', 'Cliente atualizado com sucesso!');
    }

    public function editarPerfil($id)
    {
        $cliente = Clientes::find($id);

        // Verifique se o cliente existe ou retorne um erro caso contrário

        return view('clientes.editar')->with('cliente', $cliente);
    }

    public function atualizar(Request $request, $id)
    {
        $cliente = Clientes::find($id);

        // Verifique se o cliente existe ou retorne um erro caso contrário

        // Valide os campos do formulário conforme suas necessidades
        $validatedData = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:clientes,email'],
            'birth' => ['required', 'string'],
            'state' => ['required', 'string', 'max:255'],
            'city' => ['required', 'string', 'max:255'],
            'borhood' => ['required', 'string', 'max:255'],
            'street' => ['required', 'string', 'max:255'],
            'number' => ['required', 'integer', 'max:99999'],
            'phone' => ['required', 'string', 'regex:/^\([1-9]{2}\) [2-9][0-9]{3,4}\-[0-9]{4}$/'],
            'code' => ['required', 'regex:/^\d{5}-\d{3}$/'],
        ]);

        try {
            $birth = Carbon::createFromFormat('d/m/Y', $validatedData['birth']);
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['birth' => 'A data de nascimento é inválida.'])->withInput();
        }

        $cliente->name = $validatedData['name'];
        $cliente->email = $validatedData['email'];
        $cliente->phone = $validatedData['phone'];
        $cliente->code = $validatedData['code'];
        $cliente->birth = $birth->toDateString();
        $cliente->state = $validatedData['state'];
        $cliente->number = $validatedData['number'];
        $cliente->city = $validatedData['city'];
        $cliente->borhood = $validatedData['borhood'];
        $cliente->street = $validatedData['street'];

        $cliente->save();

        // Redirecione o usuário para a página de exibição do perfil do cliente ou outra rota desejada
        return redirect()->route('clientes.ver', $cliente->id);
    }
}
