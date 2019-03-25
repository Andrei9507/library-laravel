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

function updateAuthor(id)
{
    // if (checkCompanyFields() === true)
    // {

        // var id = $("#edit_company_id").val();

        // toastr.info(translate('please_wait'));
        var data = $("#edit_author_"+id).serializeArray();
        //remote request for template
        //the id is generic x as the real id of the company is saved in session
        $.ajax({
            url: '/authors/' + id,
            type: 'PUT',
            data: data,
            success: function (result) {
                // toastr.clear();
                $("#edit_author_"+id).replaceWith(result);
            }

        });


    // } else {
    //     return false;
    // }

}



/// -------------Author path end ------------





/// -------------Customer path start -----------


function addCustomer()
{
    //remote request for template
    $.get('customers/create',{},function(data){

        $('#js_add_customer').html(data);       

    });
}


function storeCustomer()
{
    var data = $("#add_customer").serializeArray();
    // console.log(data);
    // alert('here i am');
    
    $.post('customers', data, function (data) {
            
        $("#listing_customers").prepend(data);
    });
    
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
    // if (checkCompanyFields() === true)
    // {

        // var id = $("#edit_company_id").val();

        // toastr.info(translate('please_wait'));
        var data = $("#edit_customer_"+id).serializeArray();
        //remote request for template
        //the id is generic x as the real id of the company is saved in session
        $.ajax({
            url: '/customers/' + id,
            type: 'PUT',
            data: data,
            success: function (result) {
                // toastr.clear();
                $("#edit_customer_"+id).replaceWith(result);
            }

        });


    // } else {
    //     return false;
    // }

}
/* method exemple


function addCompany()
{
    toastr.info(translate('please_wait'));
    //remote request for template; the id is generic x as the real id of the company is saved in session
    $.get(path_company + '/create', {}, function (data) {

        toastr.clear();
        //expose the form modal and set approve action
        openModal({title: translate('add_company'),
            content: data,
            approve: saveNewCompany});

        initChosenSelectType();
        initPopUp();
        initCheckbox();

    });
}

function saveNewCompany()
{
    if (checkCompanyFields() === true)
    {
 
        toastr.info(translate('please_wait'));

        var data = $("#register-new-company").serializeArray();

        $.post(path_company, data, function (data) {
            toastr.clear();
            $("#listing_companies tbody").prepend(data);
        });
    } else {
        return false;
    }
}



function checkCompanyFields()
{
    //clear any previos error markup
    $("div.ui.labeled.input").removeClass('error');

    var error_flag = 0;

    //do required fields checking
    if ($("#new_company_name").val() === '')
    {
        $("#new_company_name_wrapper").addClass('error');
        error_flag++;
    }

    if ($("#new_company_cui").val() === '')
    {
        $("#new_company_cui_wrapper").addClass('error');
        error_flag++;
    }

//    if( $("#new_company_vat").val() === '')
//    {
//        $("#new_company_vat_wrapper").addClass('error');
//        error_flag++;
//    }

    if ($("#new_company_contact_person").val() === '')
    {
        $("#new_company_contact_person_wrapper").addClass('error');
        error_flag++;
    }

    if ($("#new_company_contact_email").val() === '')
    {
        $("#new_company_contact_email_wrapper").addClass('error');
        error_flag++;
    }

    if ($("#new_company_contact_phone").val() === '')
    {
        $("#new_company_contact_phone_wrapper").addClass('error');
        error_flag++;
    }

    //make sure the divisions are selected if there is a category that requires divisions
    if( $('select[name="contractor_type_id[]"] option[data-requires_divisions=1]:selected').length > 0 
        &&
        $('select[name="division_id[]"] option:selected').length == 0 )
    {
        toastr.error(translate('divisions_required_by_selected_category'));
        return false;
    }

    if (error_flag > 0)
    {
        toastr.error(translate('all_fields_are_required'));
        return false;
    }

    return true;
}



function editCompany(id)
{
    toastr.info(translate('please_wait'));
    //remote request for template; the id is generic x as the real id of the company is saved in session
    $.get(path_company + '/' + id + '/edit', {}, function (data) {

        toastr.clear();
        //expose the form modal and set approve action
        openModal({title: translate('company_update_data'),
            content: data,
            approve: updateCompany});

        initChosenSelectType();
        initPopUp();
        initCheckbox();
    });


}


function updateCompany()
{
    if (checkCompanyFields() === true)
    {

        var id = $("#edit_company_id").val();

        toastr.info(translate('please_wait'));
        var data = $("#register-new-company").serializeArray();
        //remote request for template
        //the id is generic x as the real id of the company is saved in session
        $.ajax({
            url: '/company/' + id,
            type: 'PUT',
            data: data,
            success: function (result) {
                toastr.clear();
                $("#company_" + id).replaceWith(result);
            }

        });


    } else {
        return false;
    }

}



*/