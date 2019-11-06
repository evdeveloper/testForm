$(document).ready(function () {
    svg4everybody({});

    function passShow() {
        $('.user__pass-icon').on('click',function(){
            var inputPass = $('#pass');
            if(inputPass.attr('type') === 'password'){
                inputPass.removeAttr('type');
                inputPass.attr('type','text');
                $('.user__pass-icon').html('<i id="i" class="fa fa-eye">')
            }else {
                inputPass.attr('type','password');
                $('.user__pass-icon').html('<i id="i" class="fa fa-eye-slash">')
            }
        });
    };

    passShow();

});