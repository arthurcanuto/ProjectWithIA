@extends('welcome')

@section('content')
    
<!-- Start Content-->
<div class="container-fluid">
    <div class="card">
        <div class="card-header border-light text-muted border-bottom">

            <!-- navegation -->
            <div class="row">
                <div class="col-12">
                    <div class="page-title-box">
                        <div class="page-title-right">
                            <ol class="breadcrumb m-0">
                                <li class="breadcrumb-item"><a href="">Início</a></li>
                                <li class="breadcrumb-item"><a href="">Entrada de Produtos</a></li>
                                    
                                </li>
                            </ol>
                        </div>
                        <h5>
                            <span class="page-title">Entrada de Produtos

                                <span class="badge bg-primary page-title-subtitle">
                                
                                </span>
                            </span>
                        </h5>
                    </div>
                </div>
            </div>
            <!-- end - navegation -->


            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="row mb-2">
                                <div class="col-sm-5">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#add-new-task-modal" class="btn btn-danger mb-2"><i class="mdi mdi-plus-circle me-2"></i>Adicionar Novo</a></h4>
                                </div>
                                <div class="col-sm-7">
                                    <div class="text-sm-end">
                                        <button type="button" class="btn btn-success mb-2 me-1"><i class="mdi mdi-cog-outline"></i></button>
                                        <button type="button" class="btn btn-light mb-2 me-1">Importar</button>
                                        <button type="button" class="btn btn-light mb-2">Exportar</button>
                                    </div>
                                </div><!-- end col-->
                            </div>
    
                            <div class="table-responsive">
                                <table class="table table-centered w-100 dt-responsive nowrap" id="products-datatable">
                                    <thead class="table-light">
                                        <tr>
                                            <th class="all" style="width: 20px;">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="customCheck1">
                                                    <label class="form-check-label" for="customCheck1">&nbsp;</label>
                                                </div>
                                            </th>
                                            <th class="all">Nome</th>
                                            <th>Categoria</th>
                                            <th>Data de Entrada</th>
                                            <th>Valor</th>
                                            <th>Status</th>
                                            <th class="col-md-1" style="width: 85px;">Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="customCheck2">
                                                    <label class="form-check-label" for="customCheck2">&nbsp;</label>
                                                </div>
                                            </td>
                                            <td>
                                                <p class="m-0 d-inline-block align-middle font-16">
                                                    <a href="apps-ecommerce-products-details.html" class="text-body">Arthur Henrique Canuto</a>
                                                    <br/>
                                                </p>
                                            </td>
                                            <td>
                                                dsad
                                            </td>
                                            <td>
                                                27/05/2023
                                            </td>
                                            <td>
                                                R$150,00
                                            </td>
                                            <td>
                                                <span class="badge bg-success">Ativo</span>
                                            </td>
        
                                            <td class="table-action col-md-1">
                                                <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-eye"></i></a>
                                                <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                            </td>
                                        </tr>                                        
                                    </tbody>
                                </table>
                            </div>
                        </div> <!-- end card-body-->
                    </div> <!-- end card-->
                </div> <!-- end col -->
            </div>
            <!-- end row --> 
            
            <!--  Add new task modal -->
            <div class="modal fade task-modal-content" id="add-new-task-modal" tabindex="-1" role="dialog" aria-labelledby="NewTaskModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="NewTaskModalLabel">Criar Lançamento</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form class="p-2">
                                <div class="mb-3">
                                    <label class="form-label">Categoria da Entrada</label>
                                    <select class="form-select form-control-light" id="categoria" name="categoria">
                                        <option>...</option>
                                        <option>Doação</option>
                                        <option>Oferta - Missa</option>
                                        <option>Venda Bíblia</option>
                                    </select>
                                </div>                              

                                <div class="row">
                                    <div class="col-md-8">
                                        <div class="mb-3">
                                            <label for="task-title" class="form-label">Nome do Dizimista</label>
                                            <input type="text" class="form-control form-control-light" id="task-title" placeholder="Preencha o nome do responsável pela doação">
                                        </div>
                                    </div>

                                    <div class="col-md-4" id="horario-container">
                                        <div class="mb-3">
                                            <label for="task-priority2" class="form-label">Horário</label>
                                            <select class="form-select form-control-light" id="task-priority2" name="horario">
                                                <option>...</option>
                                                <option>Dia</option>
                                                <option>Tarde</option>
                                                <option>Noite</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div class="col-md-4" id="outro-horario-container" style="display: none;">
                                        <div class="mb-3">
                                            <label for="outro-horario" class="form-label">Outro Horário</label>
                                            <input type="text" class="form-control form-control-light" id="outro-horario" name="outro_horario" placeholder="Digite o horário">
                                        </div>
                                    </div>                             
                                </div>

                                <div class="mb-3">
                                    <label for="task-description" class="form-label">Descrição</label>
                                    <textarea class="form-control form-control-light" id="task-description" rows="3" placeholder="Descrição da doação, se necessário"></textarea>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="task-title" class="form-label">Local</label>
                                            <select class="form-select form-control-light" id="task-priority">
                                                <option>...</option>
                                                <option>Igreja de Santos Reis</option>
                                                <option>Igreja do Tamanduá</option>
                                                <option>Festa do Tamanduá</option>
                                                <option>Festa de Santos Reis</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="mb-3">
                                            <label for="task-priority" class="form-label">Data de Entrada</label>
                                            <input type="text" class="form-control form-control-light" id="creationDate" name="creationDate" data-mask-format="00/00/0000">
                                        </div>
                                    </div>      
                                </div>
                                
                                <div class="text-end">
                                    <button type="button" class="btn btn-light" data-dismiss="modal">Cancelar</button>
                                    <button type="button" class="btn btn-primary">Criar</button>
                                </div>
                            </form>
                        </div>
                    </div><!-- /.modal-content -->
                </div><!-- /.modal-dialog -->
            </div><!-- /.modal -->


        </div>
    </div>
</div>

@endsection

@section('scripts')
<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
<script src="{{ asset('admin/validate-additional-methods.js') }}"></script>
<script src="{{ asset('admin/validate-messages_pt_BR.js') }}"></script>
<script src="{{ asset('admin/maskedinput.js') }}"></script>

<script>  
$(document).ready(function() {
    $("#code").mask('99999-999');
    $("#birth").mask('99/99/9999');
    $("#phone").mask('(99) 9999-9999');
});
</script>
@endsection

@push('scripts')
<script>
    document.getElementById('categoria').addEventListener('change', function() {
        var categoria = this.value;
        var horarioContainer = document.getElementById('horario-container');
        var outroHorarioContainer = document.getElementById('outro-horario-container');
        
        if (categoria === 'Oferta - Missa') {
            horarioContainer.style.display = 'block';
            outroHorarioContainer.style.display = 'none';
        } else {
            horarioContainer.style.display = 'none';
            outroHorarioContainer.style.display = 'block';
        }
    });
</script>
@endpush




