// $( document ).ready(function() {
//     console.log( "ready!" );
//     $.ajaxSetup({
//         headers: {
//             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//         }
//     });
// });

$( document ).ready(function() {

	$.ajaxSetup({
			headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
    });

});



function addAuthor()
{
    //remote request for template
    $.get('authors/create',{},function(data){
        $("#js-disable-add-author").attr('disabled', true);
        $('#js_add_author').html(data);

    });
}


function storeAuthor()
{
        var data = $("#add_author").serializeArray();
        // console.log(data);
        // alert('here i am');

        $.post('authors', data, function (data) {
            $("#js-disable-add-author").attr('disabled', false);
            $("#add_author").remove();
            $("#listing_authors").prepend(data);
        });

        // $.ajax({
        //     type: 'POST',
        //     url: 'authors',
        //     enctype: 'multipart/form-data',
        //     data: data,
        //     processData: false,
        //     contentType: false,
        //     async: false,
        //     cache: false,
        //     success: function (data) {
        //         alert('succes');
        //         $("#listing_author").prepend(data);

        //         },
        //     error: function (error) {
        //         console.log(error);
        //         alert('error');

        //         }
        //     });
}
// function addAuthor()
// {
//         var data = $("#add_author").serializeArray();
//         console.log(data);
//         alert('here i am');

//         $.ajax({
//             // headers: {
//             //     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//             // },
//             type: 'POST',
//             url: 'authors',
//             enctype: 'multipart/form-data',
//             data: data,
//             processData: false,
//             contentType: false,
//             async: false,
//             cache: false,
//             success: function (data) {
//                 console.log(data);
//                 alert('here i am');

//                 },
//             error: function (error) {
//                 console.log(error);
//                 alert('error');

//                 }
//             });
// }
function closeAddAuthor() {
    
    $("#js-disable-add-author").attr('disabled', false);
    $('#add_author').remove();
}

function editAuthor(id)
{

    //remote request for template
    $.get('authors/'+id+'/edit',{},function(data){

        $('#listing_author_'+id).replaceWith(data);

    });
}

function updateAuthor(id)
{

    var data = $("#edit_author_"+id).serializeArray();

    $.ajax({
        url: '/authors/' + id,
        type: 'PUT',
        data: data,
        success: function (result) {
            $("#edit_author_"+id).replaceWith(result);
        }

    });

}

function cancelEditAuthor(id) {

    $.ajax({
        url: '/authors/' + id,
        type: 'GET',
        success: function (result) {
            $("#edit_author_"+id).replaceWith(result);
        }
    });
}



/// -------------Author path end ------------





/// -------------Customer path start -----------


function addCustomer()
{
    //remote request for template
    $.get('customers/create',{},function(data){
        $("#js-disable-add-customer").attr('disabled', true);
        $('#listing_customers').prepend(data);
    });
}


function storeCustomer()
{
    var data = $("#add_customer").serializeArray();

    $.post('customers', data, function (data) {

        $("#js-disable-add-customer").attr('disabled', false);
        $("#add_customer").remove();
        $("#listing_customers").append(data);
    });

}


function storeCustomerClose()
{
    $('#add_customer').remove();
    $("#js-disable-add-customer").attr('disabled', false);
}

function editCustomer(id)
{

    //remote request for template
    $.get('customers/'+id+'/edit',{},function(data){

        $('#listing_customer_'+id).replaceWith(data);

    });
}


function updateCustomer(id)
{

        var data = $("#edit_customer_"+id).serializeArray();

        $.ajax({
            url: '/customers/' + id,
            type: 'PUT',
            data: data,
            success: function (result) {
                // toastr.clear();
                $("#edit_customer_"+id).replaceWith(result);
            }

        });

}

/// -------------Customer path end -----------


/// -------------Book path start -----------


function addBook()
{
    //remote request for template
    $.get('books/create',{},function(data){
        $("#js-disable-add-book").attr('disabled', true);
        $('#listing_books').prepend(data);

    });
}


function storeBook()
{
    var data = $("#add_book").serializeArray();
    // console.log(data);
    // alert('here i am');

    $.post('books', data, function (data) {

        $("#add_book").remove();
        $("#js-disable-add-book").attr('disabled', false);
        $("#listing_books").prepend(data);

        });

}

function storeBookClose()
{
    $('#add_book').remove();
    $("#js-disable-add-book").attr('disabled', false);
}

function editBook(id)
{

    //remote request for template
    $.get('books/'+id+'/edit',{},function(data){

        $('#listing_book_'+id).replaceWith(data);

    });
}


function updateBook(id)
{

        var data = $("#edit_book_"+id).serializeArray();
        $.ajax({
            url: '/books/' + id,
            type: 'PUT',
            data: data,
            success: function (result) {
                // toastr.clear();
                $("#edit_book_"+id).replaceWith(result);
            }

        });

}

function cancelEditBook(id) {

    $.ajax({
        url: '/books/' + id,
        type: 'GET',
        success: function (result) {
            $("#edit_book_"+id).replaceWith(result);
        }
    });
}
