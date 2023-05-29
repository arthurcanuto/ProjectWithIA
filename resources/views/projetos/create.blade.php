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
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">

                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="mb-3">
                                        <label for="projectname" class="form-label">Name</label>
                                        <input type="text" id="projectname" class="form-control" placeholder="Enter project name">
                                    </div>

                                    <div class="mb-3">
                                        <label for="project-overview" class="form-label">Overview</label>
                                        <textarea class="form-control" id="project-overview" rows="5" placeholder="Enter some brief about project.."></textarea>
                                    </div>

                                    <!-- Date View -->
                                    <div class="mb-3 position-relative" id="datepicker1">
                                        <label class="form-label">Start Date</label>
                                        <input type="text" class="form-control" data-provide="datepicker" data-date-container="#datepicker1" data-date-format="d-M-yyyy" data-date-autoclose="true">
                                    </div>

                                    <div class="mb-3">
                                        <label for="project-budget" class="form-label">Budget</label>
                                        <input type="text" id="project-budget" class="form-control" placeholder="Enter project budget">
                                    </div>

                                    <div class="mb-0">
                                        <label for="project-overview" class="form-label">Team Members</label>
                                        
                                        <select class="form-control select2" data-toggle="select2">
                                            <option>Select</option>
                                            <option value="AZ">Mary Scott</option>
                                            <option value="CO">Holly Campbell</option>
                                            <option value="ID">Beatrice Mills</option>
                                            <option value="MT">Melinda Gills</option>
                                            <option value="NE">Linda Garza</option>
                                            <option value="NM">Randy Ortez</option>
                                            <option value="ND">Lorene Block</option>
                                            <option value="UT">Mike Baker</option>
                                        </select>

                                        <div class="mt-2" id="tooltip-container">
                                            <a href="javascript:void(0);" data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Mat Helme" class="d-inline-block">
                                                <img src="assets/images/users/avatar-6.jpg" class="rounded-circle avatar-xs" alt="friend">
                                            </a>
    
                                            <a href="javascript:void(0);" data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Michael Zenaty" class="d-inline-block">
                                                <img src="assets/images/users/avatar-7.jpg" class="rounded-circle avatar-xs" alt="friend">
                                            </a>
    
                                            <a href="javascript:void(0);" data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="top" title="James Anderson" class="d-inline-block">
                                                <img src="assets/images/users/avatar-8.jpg" class="rounded-circle avatar-xs" alt="friend">
                                            </a>

                                            <a href="javascript:void(0);" data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Lorene Block" class="d-inline-block">
                                                <img src="assets/images/users/avatar-4.jpg" class="rounded-circle avatar-xs" alt="friend">
                                            </a>
    
                                            <a href="javascript:void(0);" data-bs-container="#tooltip-container" data-bs-toggle="tooltip" data-bs-placement="top" title="Mike Baker" class="d-inline-block">
                                                <img src="{{ asset('assets/images/users/avatar-5.jpg') }}" class="rounded-circle avatar-xs" alt="friend">
                                            </a>
                                        </div>

                                    </div>

                                </div> <!-- end col-->

                                <div class="col-xl-6">
                                    <div class="mb-3 mt-3 mt-xl-0">
                                        <label for="projectname" class="mb-0">Avatar</label>
                                        <p class="text-muted font-14">Recommended thumbnail size 800x400 (px).</p>

                                        <form action="/" method="post" class="dropzone" id="myAwesomeDropzone" data-plugin="dropzone" data-previews-container="#file-previews"
                                            data-upload-preview-template="#uploadPreviewTemplate">
                                            <div class="fallback">
                                                <input name="file" type="file" />
                                            </div>

                                            <div class="dz-message needsclick">
                                                <i class="h3 text-muted ri-upload-cloud-2-line"></i>
                                                <h4>Drop files here or click to upload.</h4>
                                            </div>
                                        </form>

                                        <!-- Preview -->
                                        <div class="dropzone-previews mt-3" id="file-previews"></div>

                                        <!-- file preview template -->
                                        <div class="d-none" id="uploadPreviewTemplate">
                                            <div class="card mt-1 mb-0 shadow-none border">
                                                <div class="p-2">
                                                    <div class="row align-items-center">
                                                        <div class="col-auto">
                                                            <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="">
                                                        </div>
                                                        <div class="col ps-0">
                                                            <a href="javascript:void(0);" class="text-muted fw-bold" data-dz-name></a>
                                                            <p class="mb-0" data-dz-size></p>
                                                        </div>
                                                        <div class="col-auto">
                                                            <!-- Button -->
                                                            <a href="" class="btn btn-link btn-lg text-muted" data-dz-remove>
                                                                <i class="ri-close-line"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end file preview template -->
                                    </div>

                                    <!-- Date View -->
                                    <div class="mb-3 position-relative" id="datepicker2">
                                        <label class="form-label">Due Date</label>
                                        <input type="text" class="form-control" data-provide="datepicker" data-date-container="#datepicker2" data-date-format="d-M-yyyy" data-date-autoclose="true">
                                    </div>
                                </div> <!-- end col-->
                            </div>
                            <!-- end row -->

                        </div> <!-- end card-body -->
                    </div> <!-- end card-->
                </div> <!-- end col-->
            </div>
            <!-- end row-->
            </div>
        </div>
        <!-- end row -->
    </div> <!-- container-fluid -->
</div>
<!-- end card -->
@endsection

@section('scripts')
<script src="{{ asset('https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js') }}"></script>
<script src="{{ asset('admin/validate-additional-methods.js') }}"></script>
<script src="{{ asset('admin/validate-messages_pt_BR.js') }}"></script>
<script src="{{ asset('admin/maskedinput.js') }}"></script>

<!-- Vendor js -->
<script src="{{ asset('assets/js/vendor.min.js') }}"></script>

<!-- Bootstrap Datepicker Plugin js -->
<script src="{{ asset('assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker.min.js') }}"></script>

<!-- Select2 js  -->
<script src="{{ asset('assets/vendor/select2/js/select2.min.js') }}"></script>

<!-- Dropzone File Upload js -->
<script src="{{ asset('assets/vendor/dropzone/min/dropzone.min.js') }}"></script>

<!-- init js -->
<script src="{{ asset('assets/js/ui/component.fileupload.js') }}"></script>

<!-- App js -->
<script src="{{ asset('assets/js/app.min.js') }}"></script>

<script>  
$(document).ready(function() {
    $("#birth").mask('99/99/9999');
});
</script>

@endsection


