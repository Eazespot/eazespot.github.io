Parse.initialize("6f3zl2BaSmqGiw8o7Qp8XpzR4tCkvznMEXgU723z", "cAQidgajtd5whYpxRYFWpoy43bqEC3j6AFYM5GCu");
$("#sendData").click(function(){
    var fname = $("#git-3-mailform-first-name").val();
    var lname = $("#git-3-mailform-last-name").val();
    var email = $("#git-3-mailform-email").val();
    var message = $("#git-3-mailform-message").val();
    var phone = $("#git-3-mailform-phone").val();
    //alert(name);
    if(fname == "" || lname == ""){
        $("#messg").text('Please fill all fields !');
        $("#messg").show();
        $("#messg").fadeOut(5000);  
        //alert("NON"); 
    }else{                  
        var saveTable = Parse.Object.extend("contact");
        var SaveTable = new saveTable();
        SaveTable.save({firstname: fname.toString(), lastname: lname.toString(), email: email.toString(), phone: phone.toString(), message: message.toString(), }, {
            success: function(object) {
                console.log("Save");
                $("#messg").text('We got your text, will get back to you soon!');
                $("#messg").show();
                $("#messg").fadeOut(5000);
                $("#git-3-mailform-first-name").val('');
                $("#git-3-mailform-last-name").val('');
                $("#git-3-mailform-phone").val('');
                $("#git-3-mailform-email").val('');
                $("#git-3-mailform-message").val(''); 
              },
              error: function(model, error) {
                 console.log("Error");
                 $("#messg").show();
                 $("#messg").text('Try Again!');
                 $("#messg").fadeOut(3000);
              }
        })
    }
})   

$("#getData").click(function(){
    var subscribe = $("#subscribe").val();
    if(subscribe == ""){
      console.log("Error");
      alert('Please enter email!')
    }else{                  
        var saveTable = Parse.Object.extend("subscribe");
        var SaveTable = new saveTable();
        SaveTable.save({email: subscribe.toString(), }, {
            success: function(object) {
                console.log("Save");
                //alert('We got your text, will get back to you soon!')
                window.location.href = "http://beta.eazespot.com/#/register/?"+subscribe;
                $("#subscribe").val(''); 
              },
              error: function(model, error) {
                 console.log("Error");
              }
        })
    }
})   