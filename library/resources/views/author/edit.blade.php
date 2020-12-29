{{-- <form id="edit_author_{{$author->id}}">
    <input name="name" type="text" value="{{$author->name}}">
    <button  onclick="updateAuthor({{$author->id}})" type= "button"> Submit</button>
</form> --}}
<form class="ui form row" id="edit_author_{{$author->id}}"> 

    <div  class="eight wide column ">
            <input name="name" type="text" value="{{$author->name}}">
    </div>

    <div class="eight wide column right aligned">
        <button class="ui green button"  type= "button" onclick="updateAuthor({{$author->id}})">
            update
        </button>
        <button class="ui red button" type="button" onclick="cancelEditAuthor({{$author->id}})">
            cancel
        </button>
    </div>

</form>