$( function() {
    $( "#dialog-message" ).dialog({
      modal: true,
      buttons: {
        Ok: function() {
          window.location.href = "scratch.html";
        }
      }
    });
  } );
