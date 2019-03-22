    <div class="row" id="listing_author_{{$author->id}}">
        <div  class="four wide column ">
            {{$author->name}}
        </div>

        <div class="four wide column">
            <button class="ui primary button" onclick="editAuthor({{$author->id}})">
                Edit
            </button>
        </div>
    </div>