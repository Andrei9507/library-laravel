<div class="row" id="listing_book_{{$book->id}}">
    <div  class="four wide column ">
        {{$book->name}}
    </div>

    <div  class="four wide column ">
        {{$book->author->name}}
    </div>

    <div  class="four wide column ">
        {{$book->type}}
    </div>

    <div class="four wide column">
        <button class="ui primary button" onclick="editBook({{$book->id}})">
            Edit
        </button>
    </div>

</div>