// $( document ).ready(function() {
//     console.log( "ready!" );
//     $.ajaxSetup({
//         headers: {
//             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//         }
//     });
// });

$( document ).ready(function() {
	console.log( "ready!" );
	$.ajaxSetup({
			headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    
            }
    });
    console.log($('meta[name="csrf-token"]').attr('content'));
    
});



  
function addAuthor()
{
        var data = $("#add_author").serializeArray();
        console.log(data);
        alert('here i am');
       
        $.post('authors', data, function (data) {
                
            console.log(data);
            alert('success');
                // $("#listing_personnel tbody").prepend(data);
                $(".items").prepend(data);
            });



        // $.ajax({
            // headers: {
            //     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            // },
            // headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')}
            // type: 'POST',
            // url: 'authors',
            // enctype: 'multipart/form-data',
            // data: data,
            // processData: false,
            // contentType: false,
            // async: false,
            // cache: false,
            // success: function (data) {
            //     console.log(data);
            //     alert('here i am');
                    
            //     },
            // error: function (error) {
            //     console.log(error);
            //     alert('error');
                    
            //     }
            // });
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
