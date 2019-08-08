
    $(document).ready(function(){
        $('.login-info-box').fadeOut();
        $('.login-show').addClass('show-log-panel');    
        $('#login').click(function(){
            var userName = $('#userName').val();
            var userPassword = $('#userPassword').val();
            alert(userPassword)
            $.ajax({
                type: 'post',
                url: `/check-login`,
                data: { userName, userPassword },
                dataType: "json",
                success: function (data) {
                   try {
                       let valueLogin = data.value;
                       if(Number(valueLogin) === 1){
                           window.localStorage.setItem('userName',userName);
                           //send client views dashboard
                           window.location.href = '/dashboard';
                       }else{
                        alert('username or password wrong');
                       }
                   } catch (error) {
                       alert(error)
                   }   
                }, error: function (err) {
                  console.log(err)
                }
              })
        })
    });
    
    
    $('.login-reg-panel input[type="radio"]').on('change', function() {
        if($('#log-login-show').is(':checked')) {
            $('.register-info-box').fadeOut(); 
            $('.login-info-box').fadeIn();
            
            $('.white-panel').addClass('right-log');
            $('.register-show').addClass('show-log-panel');
            $('.login-show').removeClass('show-log-panel');
        }
        else if($('#log-reg-show').is(':checked')) {
            $('.register-info-box').fadeIn();
            $('.login-info-box').fadeOut();
            $('.white-panel').removeClass('right-log');
            $('.login-show').addClass('show-log-panel');
            $('.register-show').removeClass('show-log-panel');
        }
    });

      
    