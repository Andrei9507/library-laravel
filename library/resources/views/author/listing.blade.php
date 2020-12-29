@extends('layouts.app')

@section('content')

<!-- <form id="add_author">
    <input name="name" type="text" placeholder="name author">
    <button  onclick="storeAuthor()"> Submit</button>
</form>  -->

<!-- <div class="ui container"> -->

    <div class="row dowwn-side ">
        <button id="js-disable-add-author" class="ui orange button" onclick="addAuthor();">Add Author</button>
    </div>

    <div id="js_add_author">

    </div>

    <div id="listing_authors" class="ui grid padded centered">
        @foreach($authors as $author)

            @include('author.listingItem')

        @endforeach
    </div>
<!-- </div> -->
@endsection
