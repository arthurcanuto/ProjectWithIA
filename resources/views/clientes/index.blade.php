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
                                <li class="breadcrumb-item"><a href="">Cadastro de Clientes</a></li>
                                    
                                </li>
                            </ol>
                        </div>
                        <h5>
                            <span class="page-title">Cadastro Clientes

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
                    <form method="POST" action="{{ route('clientes.store') }}">
                        @csrf
                        <div class="row g-2">
                            <div class="mb-3 col-md-4">
                                <label for="inputName" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="name" name="name" placeholder="Nome Completo">
                            </div>
                            <div class="mb-3 col-md-4">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" name="email" placeholder="Email">
                            </div>
                            <div class="mb-3 col-md-2">
                                <label for="inputPhone" class="form-label">Telefone/Celular</label>
                                <input type="text" class="form-control" id="phone" name="phone" @error('phone') is-invalid @enderror" value="{{ old('phone') ?? $cliente->phone ?? "" }}" placeholder="(99) 9 9999-9999">
                            </div> 
                            <div class="mb-3 col-md-2">
                                <label class="form-label">Data de Nascimento</label>
                                <input type="text" class="form-control" data-toggle="input-mask" id="birth" name="birth" data-mask-format="00/00/0000">
                            </div>        
                        </div>
                                  
                        <div class="row g-2">
                            <div class="mb-3 col-md-6">
                                <label for="inputAddress" class="form-label">Rua</label>
                                <input type="text" class="form-control" id="inputAddress" name="street" placeholder="Rua Ângela Barcelos">
                            </div>
                            <div class="mb-3 col-md-3">
                                <label for="inputAddress" class="form-label">Bairro</label>
                                <input type="text" class="form-control" id="inputAddress" name="borhood" placeholder="Pão de Açúcar">
                            </div>
                            <div class="mb-3 col-md-3">
                                <label for="inputAddress" class="form-label">Número</label>
                                <input type="text" class="form-control" id="inputAddress" name="number"  placeholder="20">
                            </div>
                        </div>
                                    
                        <div class="row g-2">
                            <div class="mb-3 col-md-6">
                                <label for="inputCity" class="form-label">Cidade</label>
                                <input type="text" class="form-control" id="inputCity" name="city">
                            </div>
                            <div class="mb-3 col-md-3">
                                <label for="inputState" class="form-label">Estado</label>
                                <select id="inputState" name="state" class="form-select" @error('state') is-invalid @enderror" @if(!empty($cliente)) disabled @endif>
                                    <option value="AC" @if((old('state') == "AC") OR (!empty($cliente) AND ($cliente->state == "AC")))selected @endif>AC</option>
                                    <option value="AL" @if((old('state') == "AL") OR (!empty($cliente) AND ($cliente->state == "AL")))selected @endif>AL</option>
                                    <option value="AM" @if((old('state') == "AM") OR (!empty($cliente) AND ($cliente->state == "AM")))selected @endif>AM</option>
                                    <option value="AP" @if((old('state') == "AP") OR (!empty($cliente) AND ($cliente->state == "AP")))selected @endif>AP</option>
                                    <option value="BA" @if((old('state') == "BA") OR (!empty($cliente) AND ($cliente->state == "BA")))selected @endif>BA</option>
                                    <option value="CE" @if((old('state') == "CE") OR (!empty($cliente) AND ($cliente->state == "CE")))selected @endif>CE</option>
                                    <option value="DF" @if((old('state') == "DF") OR (!empty($cliente) AND ($cliente->state == "DF")))selected @endif>DF</option>
                                    <option value="ES" @if((old('state') == "ES") OR (!empty($cliente) AND ($cliente->state == "ES")))selected @endif>ES</option>
                                    <option value="GO" @if((old('state') == "GO") OR (!empty($cliente) AND ($cliente->state == "GO")))selected @endif>GO</option>
                                    <option value="MA" @if((old('state') == "MA") OR (!empty($cliente) AND ($cliente->state == "MA")))selected @endif>MA</option>
                                    <option value="MG" @if((old('state') == "MG") OR (!empty($cliente) AND ($cliente->state == "MG")) OR (empty($cliente)))selected @endif>MG</option>
                                    <option value="MS" @if((old('state') == "MS") OR (!empty($cliente) AND ($cliente->state == "MS")))selected @endif>MS</option>
                                    <option value="MT" @if((old('state') == "MT") OR (!empty($cliente) AND ($cliente->state == "MT")))selected @endif>MT</option>
                                    <option value="PA" @if((old('state') == "PA") OR (!empty($cliente) AND ($cliente->state == "PA")))selected @endif>PA</option>
                                    <option value="PB" @if((old('state') == "PB") OR (!empty($cliente) AND ($cliente->state == "PB")))selected @endif>PB</option>
                                    <option value="PE" @if((old('state') == "PE") OR (!empty($cliente) AND ($cliente->state == "PE")))selected @endif>PE</option>
                                    <option value="PI" @if((old('state') == "PI") OR (!empty($cliente) AND ($cliente->state == "PI")))selected @endif>PI</option>
                                    <option value="PR" @if((old('state') == "PR") OR (!empty($cliente) AND ($cliente->state == "PR")))selected @endif>PR</option>
                                    <option value="RJ" @if((old('state') == "RJ") OR (!empty($cliente) AND ($cliente->state == "RJ")))selected @endif>RJ</option>
                                    <option value="RN" @if((old('state') == "RN") OR (!empty($cliente) AND ($cliente->state == "RN")))selected @endif>RN</option>
                                    <option value="RO" @if((old('state') == "RO") OR (!empty($cliente) AND ($cliente->state == "RO")))selected @endif>RO</option>
                                    <option value="RR" @if((old('state') == "RR") OR (!empty($cliente) AND ($cliente->state == "RR")))selected @endif>RR</option>
                                    <option value="RS" @if((old('state') == "RS") OR (!empty($cliente) AND ($cliente->state == "RS")))selected @endif>RS</option>
                                    <option value="SC" @if((old('state') == "SC") OR (!empty($cliente) AND ($cliente->state == "SC")))selected @endif>SC</option>
                                    <option value="SE" @if((old('state') == "SE") OR (!empty($cliente) AND ($cliente->state == "SE")))selected @endif>SE</option>
                                    <option value="SP" @if((old('state') == "SP") OR (!empty($cliente) AND ($cliente->state == "SP")))selected @endif>SP</option>
                                    <option value="TO" @if((old('state') == "TO") OR (!empty($cliente) AND ($cliente->state == "TO")))selected @endif>TO</option>
                                </select>
                            </div>
                            <div class="mb-3 col-md-3">
                                <label for="inputZip" class="form-label">CEP</label>
                                <input type="text" id="code" class="form-control" name="code" placeholder="Código Postal (CEP)">
                            </div>
                        </div>
                    
                        <div class="mb-2">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="customCheck11">
                                <label class="form-check-label" for="customCheck11">Check this custom checkbox</label>
                            </div>
                        </div>
                                    
                        <button type="submit" class="btn btn-primary">Cadastrar</button>
                    </form>
                </div>
            </div>
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



