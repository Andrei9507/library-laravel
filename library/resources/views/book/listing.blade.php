@extends('layouts.app')

@section('content')

<!-- <form id="add_author">
    <input name="name" type="text" placeholder="name author">
    <button  onclick="storeAuthor()"> Submit</button>
</form>  -->


    <div class="row dowwn-side ">
        <!-- <div class=""> -->
            <button class="ui orange button" onclick="addBook();">Add Book</button>
        <!-- </div> -->
    </div>

    <div id="js_add_book">

    </div>

<div class="ui  grid">
    <div class="row center aligned ">
        <div  class="four wide column  ">
                Name
            </div>

            <div  class="four wide column ">
                Author name
            </div>

            <div  class="four wide column ">
                Type
            </div>

            <div class="four wide column ">
                Action
            </div>
    </div>
    <div id="listing_books" class=" ui padded center aligned grid " >

        @foreach($books as $book)

            @include('book.listingItem')

        @endforeach
    </div>
</div>

@endsection
