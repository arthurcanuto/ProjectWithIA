@extends('layouts.layout')

@section('content')

<!-- Start Page Content here -->
<div class="card">
    <div class="card-header border-light text-muted border-bottom">
        <!-- start page title -->
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <div class="page-title-right">
                        <ol class="breadcrumb m-0">
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Home</a></li>
                            <li class="breadcrumb-item"><a href="javascript: void(0);">Clientes</a></li>
                            <li class="breadcrumb-item active">Lista de Clientes</li>
                        </ol>
                    </div>
                    <h4 class="page-title">Lista de Clientes</h4>
                </div>
            </div>
        </div>
        <!-- end page title -->

        <!-- Start Content -->
        <div class="container-fluid">
            <div class="row">
                @foreach ($clientes as $index => $cliente)
                <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card">
                        <div class="card-body">
                            <div class="dropdown float-end">
                                <a href="#" class="dropdown-toggle arrow-none card-drop" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <i class="mdi mdi-dots-horizontal"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <!-- item -->
                                    <a href="#" class="dropdown-item" data-bs-toggle="modal"
                                        data-bs-target="#bs-example-modal-lg-{{ $cliente->id }}">Ver Perfil</a>
                                    <!-- item -->
                                    <a href="{{ route('clientes.editar', ['id' => $cliente->id]) }}" class="dropdown-item">Editar Perfil</a>
                                    <!-- item -->
                                    <a href="javascript:void(0);" class="dropdown-item">Produtos</a>
                                </div>
                            </div>

                            <div class="text-center">
                                <img src="{{ url('assets/images/users/avatar-1.jpg') }}"
                                    class="rounded-circle avatar-md img-thumbnail" alt="friend">
                                <h4 class="mt-3 my-1">{{ $cliente->name }}<i
                                        class="mdi mdi-check-decagram text-success"></i></h4>
                                <p class="mt-3 my-1 "><i class="mdi mdi-email-outline me-1"></i>{{ $cliente->email }}
                                </p>
                                <hr class="bg-dark-lighten my-3">
                                <h5 class="mt-3 fw-semibold text-muted">Número de Produtos - XX</h5>

                                <div class="row mt-3">
                                    <div class="col-12">
                                        <button type="button" class="btn btn-primary btn w-100" data-bs-toggle="modal"
                                            data-bs-target="#top-modal">
                                            <i class="mdi mdi-phone"></i> Telefone
                                        </button>
                                        <div id="top-modal" class="modal fade" tabindex="-1" role="dialog"
                                            aria-hidden="true">
                                            <div class="modal-dialog modal-top">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h4 class="modal-title" id="topModalLabel">Telefone para
                                                            Contato</h4>
                                                    </div>
                                                    <div class="modal-body">
                                                        {{ $cliente->phone }}
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-danger"
                                                            data-bs-dismiss="modal">Fechar</button>
                                                    </div>
                                                </div><!-- /.modal-content -->
                                            </div><!-- /.modal-dialog -->
                                        </div><!-- /.modal -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Break the row after every 4 clients -->
                @if (($index + 1) % 4 === 0)
            </div>
            <div class="row">
                @endif

                <!-- Large modal -->
                <div class="modal fade" id="bs-example-modal-lg-{{ $cliente->id }}" tabindex="-1" role="dialog"
                    aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="myLargeModalLabel">Dados do Cliente</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-hidden="true"></button>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-group">
                                            <strong>Nome:</strong>
                                            <span class="text-center">{{ $cliente->name }}</span>
                                        </div>
                                    </div>

                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-group">
                                            <strong>Email:</strong>
                                            <span class="text-center">{{ $cliente->email }}</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-group">
                                            <strong>Data de Nascimento:</strong>
                                            <span class="text-center">
                                                @if(!empty($cliente->birth)) {{ date('d-m-Y', strtotime($cliente->birth)) }} @endif
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-group">
                                            <strong>Rua:</strong>
                                            <span class="text-center">{{ $cliente->street }}</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-group">
                                            <strong>Bairro:</strong>
                                            <span class="text-center">{{ $cliente->borhood }}</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                                        <div class="form-group">
                                            <strong>Cidade:</strong>
                                            <span class="text-center">{{ $cliente->city }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.modal -->

                @endforeach
            </div>
        </div>
        <!-- end row -->
    </div> <!-- container-fluid -->
</div>
<!-- end card -->
@endsection
