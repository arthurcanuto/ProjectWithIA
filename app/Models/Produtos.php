<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Produtos extends Model
{
    protected $table = 'produtos'; // Nome da tabela no banco de dados
    protected $fillable = [
        'name',
        'price',
        'category',
        'description',
        'sku',
        'fornecedor',
        'supplier',
        'expirationDate',
        'creationDate',
        'image',
    ];

    protected $dates = [
        'expirationDate',
        'creationDate',
    ];

    /**
     * Define o relacionamento com o modelo "Cliente".
     */
    public function cliente()
    {
        return $this->belongsTo(Cliente::class, 'IdCliente');
    }

    /**
     * Cria um novo produto.
     *
     * @param array $data
     * @return Produto
     */
    public static function createProduto(array $data)
    {
        return self::create($data);
    }

    /**
     * Atualiza um produto existente.
     *
     * @param array $data
     * @return bool
     */
    public function updateProduto(array $data)
    {
        return $this->update($data);
    }

    /**
     * Exclui o produto.
     *
     * @return bool|null
     */
    public function deleteProduto()
    {
        return $this->delete();
    }
}
