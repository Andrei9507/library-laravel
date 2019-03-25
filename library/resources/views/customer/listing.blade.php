@extends('layouts.app')

@section('content')

<!-- <form id="add_customer">
    <input name="name" type="text" placeholder="name customer">
    <button  onclick="storeCustomer()"> Submit</button>
</form>  -->

<div class="ui container">

    <button onclick="addCustomer();">Add Customer</button>
    <div id="js_add_customer">

    </div>

    <div id="listing_customers" class="ui grid">
        @foreach($customers as $customer)
       
            @include('customer.listingItem')
        
        @endforeach
    </div>
</div>
@endsection
