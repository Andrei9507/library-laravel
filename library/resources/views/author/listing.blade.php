@extends('layouts.app')

@section('content')

<!-- <form id="add_author">
    <input name="name" type="text" placeholder="name author">
    <button  onclick="storeAuthor()"> Submit</button>
</form>  -->

<div class="ui container">

    <button onclick="addAuthor();">Add Author</button>
    <div id="js_add_author">

    </div>

    <div id="listing_authors" class="ui grid">
        @foreach($authors as $author)
       
            @include('author.listingItem')
        
        @endforeach
    </div>
</div>
@endsection
