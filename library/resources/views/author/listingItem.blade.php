    <div class="row odd-listing divide-padding middle aligned" id="listing_author_{{$author->id}}">
        <div  class="eight wide column ">
            {{$author->name}}
        </div>

        <div class="eight wide column right aligned">
            <button class="ui primary button" onclick="editAuthor({{$author->id}})">
                Edit
            </button>
        </div>
    </div>
