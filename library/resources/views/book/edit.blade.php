{{-- <form id="edit_author_{{$author->id}}">
    <input name="name" type="text" value="{{$author->name}}">
    <button  onclick="updateAuthor({{$author->id}})" type= "button"> Submit</button>
</form> --}}
<form class="ui form row " id="edit_book_{{$book->id}}">

    <div  class="four wide column  ">
            <input name="name" type="text" value="{{$book->name}}">
    </div>

    <div  class="four wide column ">
        <select class="ui dropdown" name="author_id">
            @foreach($authors as $author )
                <option value="{{$author->id}}" @if($book->author->id == $author->id) selected @endif>{{$author->name}}</option>
            @endforeach
        </select>
    </div>

    <div  class="four wide column ">
            <input name="type" type="text" value="{{$book->type}}">
    </div>


    <div class="four wide column">
        <button class="ui green button"  type= "button" onclick="updateBook({{$book->id}})">
            update
        </button>
        
        <button class="ui red button" type="button" onclick="cancelEditBook({{$book->id}})">
            cancel
        </button>
    </div>

</form>
