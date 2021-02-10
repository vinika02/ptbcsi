@extends('welcome')

@section('content')
    <style>
        .bordered {
            border: 1px solid black !important;
        }
    </style>
    <script>
        $(function () {
            $('.mission').addClass('active');
        });
    </script>

    <div class="col-sm-12 bg-blue">
        <div class="container">
            <h4>Mission</h4>
        </div>
    </div>

    <div class="container tile" style="background: white">
        <div class="col-lg-8">
            <p>
                Our mission is to market petroleum products and operate related business for consumers countrywide and beyond with a focus on quality, safety and reliability for the benefit of our stakeholders.
            </p>
            <br>
            <br>
            <br>
        </div>
    </div>

@endsection
