window.onload = function loads(){
    document.getElementsByClassName('box').style.display == 'block'
     
    }
   
   
    
   
   
   
   
   var  show = document.getElementById('diarylist');
             
           function displayList() {
             if(show.style.display=="block"){          
             show.style.display = "none"; 
             }
             else
             {            
               show.style.display = "block";           
             }
           }
   
           $( function() {
             $( ".widget input[type=submit], .widget a, .widget button" ).button();
             $( "button, input, a" ).on( "click", function( event ) {
               event.preventDefault();
             } );
           } );
   
   
           function bell(){
              let bells = document.getElementById('bells')
               if(bells.style.display == 'none'){
                 bells.style.display = 'block';
               }
               else{
                 bells.style.display = 'none';
               }    
           }
   
           function ok(){
             let bells = document.getElementById('bells')
              if(bells.style.display == 'none'){
                bells.style.display = 'block';
              }
              else{
                bells.style.display = 'none';
              }    
          }
   
          function okduration(){
           let remind = document.getElementById('reminder')
           let bells = document.getElementById('bells')
            if(remind.style.display == 'none'){
              remind.style.display = 'block';
              bells.style.display = 'none';
            }
            else{
              remind.style.display = 'none';
            }    
        }
   
        function hiderem(){
         let remind = document.getElementById('reminder')     
          if(remind.style.display == 'none'){
            remind.style.display = 'block';
            
          }
          else{
            remind.style.display = 'none';
          }    
   
        }
   
        
   
   
       