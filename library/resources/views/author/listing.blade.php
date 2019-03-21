@extends('layouts.app')

@section('content')

<button onclick="addAuthor();">Add Author</button>
<div id="js_add_author">

</div>
{{-- <form id="add_author">
    <input name="name" type="text" placeholder="name author">
    <button  onclick="storeAuthor()"> Submit</button>
</form> --}}

<div class="ui container">
    @foreach($authors as $author)
        <div id="listing_author_{{$author->id}}" class="items">
            {{$author->name}}
        </div>
    @endforeach
</div>
@endsection
