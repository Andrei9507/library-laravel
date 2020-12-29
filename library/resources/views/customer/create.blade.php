<form id="add_customer" class="ui form row new-item ">
    <div  class="four wide column ">
        <input name="first_name" type="text" placeholder="customer first name">
    </div>
    <div  class="four wide column ">
        <input name="last_name" type="text" placeholder="customer last name">
    </div>
    <div  class="four wide column ">
        <input name="email" type="text" placeholder="customer email">
    </div>
    <div  class="four wide column ">
        <button  onclick="storeCustomer()"  class="positive ui button" type="button"> Submit</button>
        <button  onclick="storeCustomerClose()" class="negative ui button center" type="button">
            <i class="trash alternate icon"></i>
        </button>
    </div>
</form>