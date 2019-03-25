{{-- <form id="edit_author_{{$author->id}}">
    <input name="name" type="text" value="{{$author->name}}">
    <button  onclick="updateAuthor({{$author->id}})" type= "button"> Submit</button>
</form> --}}
<form class="ui form row" id="edit_author_{{$author->id}}"> 

    <div  class="four wide column ">
            <input name="name" type="text" value="{{$author->name}}">
    </div>

    <div class="four wide column">
        <button class="ui green button"  type= "button" onclick="updateAuthor({{$author->id}})">
            update
        </button>
    </div>

</form>