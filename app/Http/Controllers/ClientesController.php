<?php

namespace App\Http\Controllers;

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
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'phone' => 'required',
            'birth' => 'required|date', // Certifique-se de que o campo birth seja validado como uma data
            'state' => 'required',
            'code' => 'required',
            'number' => 'required',
            'city' => 'required',
            'borhood' => 'required',
            'street' => 'required',
        ]);

        if(!empty($request->input('date_birth'))):
            $birth = date('Y-m-d', strtotime($request->input('birth')));
            $request->merge(['birth' => $birth]);
        endif;

        $birth = strtotime($validatedData['birth']);
        if ($birth === false) {
            // Lida com o erro de formato de data inválido
            return redirect()->back()->withErrors(['birth' => 'A data de nascimento é inválida.'])->withInput();
        } else {
            $cliente = new Clientes;
            $cliente->name = $validatedData['name'];
            $cliente->email = $validatedData['email'];
            $cliente->phone = $validatedData['phone'];
            $cliente->code = $validatedData['code'];
            $cliente->birth = date('d-m-Y', $birth);
            $cliente->state = $validatedData['state'];
            $cliente->number = $validatedData['number'];
            $cliente->city = $validatedData['city'];
            $cliente->borhood = $validatedData['borhood'];
            $cliente->street = $validatedData['street'];
            // Preencha outros campos do cliente conforme necessário

            $cliente->save();

            return redirect()->route('clientes.index')->with('success', 'Cliente cadastrado com sucesso.');
        }
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
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'code' => 'required',
            'birth' => 'required|date', // Certifique-se de que o campo birth seja validado como uma data
            'state' => 'required',
            'number' => 'required',
            'city' => 'required',
            'borhood' => 'required',
            'street' => 'required',
        ]);

        $birth = strtotime($validatedData['birth']);
        if ($birth === false) {
            // Lida com o erro de formato de data inválido
            return redirect()->back()->withErrors(['birth' => 'A data de nascimento é inválida.'])->withInput();
        } else {
            $client->name = $validatedData['name'];
            $client->email = $validatedData['email'];
            $client->phone = $validatedData['phone'];
            $client->code = $validatedData['code'];
            $client->birth = date('d-m-Y', $birth);
            $client->state = $validatedData['state'];
            $client->number = $validatedData['number'];
            $client->city = $validatedData['city'];
            $client->borhood = $validatedData['borhood'];
            $client->street = $validatedData['street'];
            // Preencha outros campos do cliente conforme necessário

            $client->save();

            return redirect()->route('clientes.index')->with('success', 'Cliente atualizado com sucesso!');
        }
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
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'code' => 'required',
            'birth' => 'required|date', // Certifique-se de que o campo birth seja validado como uma data
            'state' => 'required',
            'number' => 'required',
            'city' => 'required',
            'borhood' => 'required',
            'street' => 'required',
        ]);

        // Atualize os dados do cliente com base nos campos enviados no formulário
        $cliente->name = $request->input('name');
        $cliente->email = $request->input('email');
        $cliente->phone = $request['phone'];
        $cliente->code = $request['code'];
        $cliente->birth = date('d-m-Y');
        $cliente->state = $request['state'];
        $cliente->number = $request['number'];
        $cliente->city = $request['city'];
        $cliente->borhood = $request['borhood'];
        $cliente->street = $request['street'];

        // Salve as alterações no banco de dados
        $cliente->save();

        // Redirecione o usuário para a página de exibição do perfil do cliente ou outra rota desejada
        return redirect()->route('clientes.ver', $cliente->id);
    }


}
