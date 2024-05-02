

      function Mycaptcha(){
    let str = "asd1fgh34jkl5zxc78vbnm9qwer0tyuiopASDFQWER1GHJKLTYUIOP2ZXCVBNM6";
    let len = str.length;    
    
    
        let captcha="";
        for(i = 0; i<5; i++){
            let rIndex = Math.floor(Math.random()*len);
    let charindex = str[rIndex]
            captcha+= charindex
        }        document.querySelector('s').innerText= captcha;        
};

// function cheackCaptcha()
//         {
//             let ac = document.getElementById("space")
//             let bc = document.getElementById("incaptcha")
//             let show = document.getElementById("showcap")

//             if(ac.innerText == bc.value.trim()  ){
//                 // ac.style.border='2px solid green'
//                 // bc.style.border='2px solid green'                                            
//                 }
           
//             else {
//                 show.innerText="wrong captcha inserted"
//                 // ac.style.border='2px solid red'
//                 // bc.style.border='2px solid red'
//             }
//         };

        
        function validForm()
        {
            let mail = document.getElementById("emails").value;  
            let pass = document.getElementById("pass").value;  
            let cap = document.getElementById("showcap").value;
            let ac = document.getElementById("space")
            let bc = document.getElementById("incaptcha")
            let show = document.getElementById("showcap")
            var ac_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            var ck_password = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
            
            
                     
            
            
            if(mail ==""){
                document.getElementById('validshow').style.display="block"
                return false; 
            }   
            if(ac_email.test(mail)==false){
                alert('valid')
                return false;
             }                  
            if(document.getElementById('pass').value ==""){
                document.getElementById('validpass').style.display="block" 
                document.getElementById('validshow').style.display="none"                 
                return false;          
            }         
            if(ck_password.test(pass) == false ){
                document.getElementById('validpass').style.display="none" 
                document.getElementById('validshow').style.display="none"   
                    document.getElementById('validpass1').style.display="block"                    
                    return false}

            if(bc.value==""  ) {
                document.getElementById('validpass').style.display="none"
                document.getElementById('showcap').style.display="block"
                show.innerText="captcha is blank "
                document.getElementById('capimage').style.border = '2px solid red'
                document.getElementById('capimage').style.borderRadius = '5px'                
                bc.style.border='2px solid red'
                return false;
            } 
        //     if(bc.value != ac.innerText ){ 
                 
        //         document.getElementById('showcap1').style.display="none"                 
        //         show.innerText="captcha not maTched!!"                
        //         ac.style.border='2px solid red'
        //         bc.style.border='2px solid red'
        //         return false ; 
        // }    
            if(ac.innerText == bc.value.trim()  ){                
                document.getElementById('showcap1').style.display="block"
                show.innerText="Captcha didn't matched!!"                
                ac.style.border='2px solid yellow'
                bc.style.border='2px solid yellow'
                return false ;                                           
                }          
                        return false;    
                }  
            

                            


//         var ac_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// var bc_password = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
        // var ck_name = /^[A-Za-z0-9 ]{3,20}$/;
        // var ck_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        // var ck_username = /^[A-Za-z0-9_]{1,20}$/;
        // var ck_password = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
        

        // // regular experessions

        // function validate(form) {

        //     var name = form.name.value;
        //     var email = form.email.value;
        //     var username = form.username.value;
        //     var password = form.password.value;
        //     var gender = form.gender.value;

        //     var errors = [];

        //     if (!ck_name.test(name)) {
        //         errors[errors.length] = 'enter your valid name'
        //     }
        //     if (!ck_email.test(email)) {
        //         errors[errors.length] = 'enter your valid email'
        //     }
        //     if (!ck_username.test(username)) {
        //         errors[errors.length] = 'enter your valid username'
        //     }
        //     if (!ck_password.test(password)) {
        //         errors[errors.length] = 'enter your valid password'
        //     }
        //     if (gender == 0) {
        //         errors[errors.length] = 'select gender'
        //     }

        //     if (errors.length > 0) {
        //         reportError(errors);
        //         return false;
        //     }
        //     return true;
        // }
        // function reportError(errors) {
        //     var msg = "please enter valid data...\n";
        //     for (var i = 0; i < errors.length; i++) {
        //         var numError = i + 1;
        //         msg += "\n" + numError + "." + errors[i];
        //     }
        //     alert(msg);
        // }

        