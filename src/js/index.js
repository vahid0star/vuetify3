function sendEmail(){
    Email.send({
    SecureToken : "675dff7c-a46c-4622-a6eb-976f1b2953cd",
    To : 'khrdyw@gmail.com',
    From : "khrdyw@gmail.com",
    Subject : "test mail",
    Body :"phone: "+document.getElementById("phone").value 
        +"<br> Email: "+document.getElementById("email").value
        +"<br> message: "+document.getElementById("message").value

}).then(
    message => 
    Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'پیام شما ارسال شد',
    showConfirmButton: false,
    timer: 3000
})
);
}


function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "بیشتر بخوانید"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "کمتر"; 
    moreText.style.display = "inline";
  }
}