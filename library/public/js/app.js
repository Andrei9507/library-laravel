$.ajaxSetup({
    //setting used to send by ajax always in header the token, instead of passing as object
    //this is suggested in Laraevel doc
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    },
    //hanlding the errors
    error: function(x, status, error){
        /*if the status is 401 - Unauthorized, then reload the page, not locating to auth/login:
         * the framework's auth mechanism will redirect to auth login but will remember the previos page
         * such way it will redirect back the user where it were;
         */
        if(x.status === 401){
            location.reload();
        }
    }

});
function addAuthor()
{
        var data = $("#add_author").serializeArray();
        console.log(data);
        alert('here i am');
        // $.post("authors", data, function (data) {
        //     alert('here i am');
        //     console.log(data);
        //     alert('here i am');
        //     // toastr.clear();
        //     // $("#listing_companies tbody").prepend(data);
        // });
        $.ajax({
            type: 'POST',
            url: 'authors',
            enctype: 'multipart/form-data',
            data: data,
            processData: false,
            contentType: false,
            async: false,
            cache: false,
            success: function (data) {
                console.log(data);
                alert('here i am');
                    
                },
            error: function (error) {
                console.log(error);
                alert('error');
                    
                }
            });
}
