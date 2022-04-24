$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                minlength:4
            },
            egmail:{
                required:true,
                email:true
            },
            passw:{
                required:true,
                minlength:4
            },
            day:{
                required:true 
            },
            month:{
                required:true
            },
            year:{
                required:true
            }


        }

    })

})