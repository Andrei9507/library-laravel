    <div class="row" id="listing_customer_{{$customer->id}}">
        <div  class="four wide column ">
            {{$customer->first_name}}
        </div>
        <div  class="four wide column ">
            {{$customer->last_name}}
        </div>
        <div  class="four wide column ">
            {{$customer->email}}
        </div>

        <div class="four wide column">
            <button class="ui primary button" onclick="editCustomer({{$customer->id}})">
                Edit
            </button>
        </div>
    </div>