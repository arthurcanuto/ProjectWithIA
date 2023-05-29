<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjetosTable extends Migration
{
    public function up()
    {
        Schema::create('projetos', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->text('descricao');
            $table->string('data_inicio');
            $table->string('data_termino');
            $table->string('responsavel');
            $table->string('status');
            $table->decimal('orcamento', 10, 2);
            $table->integer('prioridade');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('projetos');
    }
}
