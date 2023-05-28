<!-- resources/views/produtos/edit.blade.php -->

@extends('layouts.app')

@section('content')
    <h1>Editar Produto</h1>

    <form action="{{ route('produtos.update', $produto->id) }}" method="POST">
        @csrf
        @method('PUT')

        <div class="form-group">
            <label for="name">Nome:</label>
            <input type="text" name="name" id="name" class="form-control" value="{{ $produto->name }}" required>
        </div>

        <div class="form-group">
            <label for="price">Preço:</label>
            <input type="number" name="price" id="price" class="form-control" value="{{ $produto->price }}" required>
        </div>

        <!-- Adicione os demais campos do formulário de edição de produto -->

        <button type="submit" class="btn btn-primary">Atualizar Produto</button>
    </form>
@endsection
