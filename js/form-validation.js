$(document).ready(function(){
$("#login").validate({
    rules: {
        login_text: {
            required: true
        },
        password: {
            required: true
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
            required: true,
            minlength: 11,
            maxlength: 11
        },
        username: {
            required: true,
            minlength: 3,
            maxlength: 20
        }
        ,
        celular: {
            required: true,
            minlength: 11,
            maxlength: 11
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
            minlength:10,
            maxlength:10
        }
            

    },
    message:{

    }
});
$("#cpf").focus(function(){
    this.value = ("999.999.999-99");
})

});