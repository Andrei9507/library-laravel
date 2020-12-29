@extends('layouts.app')

@section('content')

<!-- <form id="add_customer">
    <input name="name" type="text" placeholder="name customer">
    <button  onclick="storeCustomer()"> Submit</button>
</form>  -->

{{-- <div class="ui container"> --}}

    <div class="row dowwn-side ">
        <button id="js-disable-add-customer" class="ui orange button" onclick="addCustomer();">Add Customer</button>
    </div>

    {{-- maybe will be used later --}}
    <div id="js_add_customer">

    </div>

    <div class="ui grid">
        <div class="row center aligned ">
            <div class="four wide column  ">
                Firstname
            </div>
    
            <div class="four wide column ">
                Lastname
            </div>
    
            <div class="four wide column ">
                Email
            </div>
    
            <div class="four wide column ">
                Action
            </div>
        </div>

        <div id="listing_customers" class="row ui padded center aligned grid ">
            @foreach($customers as $customer)
        
                @include('customer.listingItem')
            
            @endforeach
        </div>
    </div>
{{-- </div> --}}
@endsection
