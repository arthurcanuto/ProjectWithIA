@extends('layout.app')

@section('content')

        <!-- Offer Start -->
        <div class="container-fluid bg-offer my-5 py-5">
            <div class="container py-5">
                <div class="row gx-5 justify-content-start">
                    <div class="col-lg-7">
                        <div class="border-start border-5 border-dark ps-5 mb-5">
                            <h6 class="text-dark text-uppercase">Special Offer</h6>
                            <h1 class="display-5 text-uppercase text-white mb-0">Save 50% on all items your first order</h1>
                        </div>
                        <p class="text-white mb-4">Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo lorem. Elitr ut dolores magna sit. Sea dolore sed et.</p>
                        <a href="" class="btn btn-light py-md-3 px-md-5 me-3">Shop Now</a>
                        <a href="" class="btn btn-outline-light py-md-3 px-md-5">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Offer End -->
    
    
        <!-- Team Start -->
        <div class="container-fluid py-5">
            <div class="container">
                <div class="border-start border-5 border-primary ps-5 mb-5" style="max-width: 600px;">
                    <h6 class="text-primary text-uppercase">Team Members</h6>
                    <h1 class="display-5 text-uppercase mb-0">Qualified Pets Care Professionals</h1>
                </div>
                <div class="owl-carousel team-carousel position-relative" style="padding-right: 25px;">
                    <div class="team-item">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-100" src="{{ url('assets/img/team-1.jpg') }}" alt="">
                            <div class="team-overlay">
                                <div class="d-flex align-items-center justify-content-start">
                                    <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-twitter"></i></a>
                                    <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-facebook"></i></a>
                                    <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="bg-light text-center p-4">
                            <h5 class="text-uppercase">Full Name</h5>
                            <p class="m-0">Designation</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-100" src="{{ url('assets/img/team-2.jpg') }}" alt="">
                            <div class="team-overlay">
                                <div class="d-flex align-items-center justify-content-start">
                                    <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-twitter"></i></a>
                                    <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-facebook"></i></a>
                                    <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="bg-light text-center p-4">
                            <h5 class="text-uppercase">Full Name</h5>
                            <p class="m-0">Designation</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-100" src="{{ url('assets/img/team-3.jpg') }}" alt="">
                            <div class="team-overlay">
                                <div class="d-flex align-items-center justify-content-start">
                                    <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-twitter"></i></a>
                                    <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-facebook"></i></a>
                                    <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="bg-light text-center p-4">
                            <h5 class="text-uppercase">Full Name</h5>
                            <p class="m-0">Designation</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-100" src="{{ url('assets/img/team-4.jpg') }}" alt="">
                            <div class="team-overlay">
                                <div class="d-flex align-items-center justify-content-start">
                                    <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-twitter"></i></a>
                                    <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-facebook"></i></a>
                                    <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="bg-light text-center p-4">
                            <h5 class="text-uppercase">Full Name</h5>
                            <p class="m-0">Designation</p>
                        </div>
                    </div>
                    <div class="team-item">
                        <div class="position-relative overflow-hidden">
                            <img class="img-fluid w-100" src="{{ url('assets/img/team-5.jpg') }}" alt="">
                            <div class="team-overlay">
                                <div class="d-flex align-items-center justify-content-start">
                                    <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-twitter"></i></a>
                                    <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-facebook"></i></a>
                                    <a class="btn btn-light btn-square mx-1" href="#"><i class="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="bg-light text-center p-4">
                            <h5 class="text-uppercase">Full Name</h5>
                            <p class="m-0">Designation</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Team End -->

@endsection
