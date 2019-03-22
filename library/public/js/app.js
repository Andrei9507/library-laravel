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

        $('#js_add_author').html(data);       

    });
}

  
function storeAuthor()
{
        var data = $("#add_author").serializeArray();
        // console.log(data);
        // alert('here i am');
       
        $.post('authors', data, function (data) {
                
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
function editAuthor(id)
{

    //remote request for template
    $.get('authors/'+id+'/edit',{},function(data){

        $('#listing_author_'+id).replaceWith(data);
       
    });
}