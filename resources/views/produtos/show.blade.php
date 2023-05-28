<!-- resources/views/produtos/show.blade.php -->

@extends('layouts.app')

@section('content')
    <h1>Detalhes do Produto</h1>

    <div>
        <p><strong>Nome:</strong> {{ $produto->name }}</p>
        <p><strong>Preço:</strong> {{ $produto->price }}</p>
        <p><strong>Categoria:</strong> {{ $produto->category }}</p>

        <!-- Adicione os demais detalhes do produto -->
    </div>

    <a href="{{ route('produtos.edit', $produto->id) }}" class="btn btn-secondary">Editar</a>
    <form action="{{ route('produtos.destroy', $produto->id) }}" method="POST" style="display: inline-block">
        @csrf
        @method('DELETE')
        <button type="submit" class="btn btn-danger">Excluir</button>
    </form>
@endsection
