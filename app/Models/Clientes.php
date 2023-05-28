<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Clientes extends Model
{   
    protected $table = 'clientes'; 
    protected $fillable = [
        'name',
        'email',
        'phone',
        'birth',
        'code',
        'state',
        'number',
        'city',
        'borhood',
        'street',
        // outros campos do cliente, se houver
    ];

    public function produtos()
    {
        return $this->hasMany(Produto::class, 'IdCliente');
    }
}
