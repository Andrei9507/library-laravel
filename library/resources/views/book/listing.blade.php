@extends('layouts.app')

@section('content')

<!-- <form id="add_author">
    <input name="name" type="text" placeholder="name author">
    <button  onclick="storeAuthor()"> Submit</button>
</form>  -->

<div class="ui container">

    <button onclick="addBook();">Add Book</button>
    <div id="js_add_book">

    </div>

    <div id="listing_books" class="ui grid">
        @foreach($books as $book)
       
            @include('book.listingItem')
        
        @endforeach
    </div>
</div>
@endsection
