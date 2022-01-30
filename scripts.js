function validation(){
    var name = document.getElementById("name").value;
    var product = document.getElementById("product").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errorMessage = document.getElementById("errorMessage");
    var text;

    errorMessage.style.padding = "1.3em";
    errorMessage.style.marginBottom = "2em";

    if(name.length < 3){
        text = "Please enter a valid \"Name\"";
        errorMessage.innerHTML = text;        
        return false;
    }

    if(product.length < 5){
        text = "Please enter a valid \"Product Name\"";
        errorMessage.innerHTML = text;
        errorMessage.style.animation = "shake 0.5s";
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){ 
        text = "Please enter a valid \"Email\"";
        errorMessage.innerHTML = text;
        errorMessage.style.animation = "shake 0.5s";
        return false;
    }

    if(message.length < 30){ 
        text = "Please enter a longer \"Message\"";
        errorMessage.innerHTML = text;
        return false;
    }

    alert("Message was sent successfully!");
    return true;
}