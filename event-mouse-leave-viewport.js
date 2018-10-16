document.addEventListener("mouseleave", function(e){
 if( e.clientY < 0 )
    {
         alert("once time, exit popup starter");
    }
}, {once: true});
