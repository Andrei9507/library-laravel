<form id="add_book"  class="ui form row new-item ">
    <div  class="four wide column ">
        <input name="name" type="text" placeholder="name book">
    </div>
    <div  class="four wide column ">
        <select class="ui dropdown" name="author_id" >
            @foreach( $authors as $author )
                <option value="{{$author->id}}">{{$author->name}}</option>
            @endforeach
        </select>
    </div>

    <div  class="four wide column ">
        <input name="type" type="text" placeholder="book type">
    </div>
    <div class="four wide column">
        <button  onclick="storeBook()" class="positive ui button" type= "button"> Submit</button>
        <button  onclick="storeBookClose()" class="negative ui button center" type= "button">
            <i class="trash alternate icon"></i>
        </button>

    </div>

</form>
