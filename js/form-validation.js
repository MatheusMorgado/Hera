$(document).ready(function(){
$("#login").validate({
    rules: {
        login_text: {
            required: true
        },
        password:{
            required:true,
            minlength:7,
            maxlength:21
        }
    }
});

$("#registro").validate({
    rules: {
        firstname:{
            required:true,
            minlength:3,
            maxlength:64
        },
        email: "required",
        cpf: {
            required: true
        },
        username: {
            required: true,
            minlength: 3,
            maxlength: 20
        }
        ,
        celular: {
            required: true
        },
        password:{
            required:true,
            minlength:7,
            maxlength:21
        },
        endereco:{
            required:true,
            minlength:10,
            maxlength: 64
        },
        cidade: {
            required: true,
            minlength: 1,
            maxlength: 64
        },
        bairro:{
            required: true,
            minlength: 1,
            maxlength: 64
        },
        cep: {
            required: true,
        }
            

    },
    message:{

    }
});
$("#cpf").mask("999.999.999-99" , {placeholder: "123.123.123-99"});
$('#celular').mask('(00)0000-0000',{placeholder: "(00) 91234-1234"});
$('#cep').mask('00000-000',{placeholder: "12345-678"});
$('#date').mask('00/00/0000', {placeholder: "__/__/____"});

});