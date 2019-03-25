
<form class="ui form row" id="edit_customer_{{$customer->id}}"> 

    <div  class="four wide column ">
        <input name="first_name" type="text" value=" {{$customer->first_name}}">
    </div>
    <div  class="four wide column ">
        <input name="last_name" type="text" value="{{$customer->last_name}}">
    </div>
    <div  class="four wide column ">
        <input name="email" type="text" value=" {{$customer->email}}">
    </div>

    <div class="four wide column">
        <button class="ui green button" type = "button" onclick="updateCustomer({{$customer->id}})">
           Update
        </button>
    </div>

</form>