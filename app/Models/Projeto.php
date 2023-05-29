<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Projeto extends Model
{
    protected $table = 'projetos'; 
    protected $fillable = [
        'nome',
        'descricao',
        'data_inicio',
        'data_termino',
        'responsavel',
        'status',
        'orcamento',
        'prioridade',
    ];

    // Relacionamento com tarefas
    public function tarefas()
    {
        return $this->hasMany(Tarefa::class);
    }
}

