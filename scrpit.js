document.addEventListener("DOMContentLoaded", ()=>{
  const form = document.getElementById("checkoutForm");
  if(form){
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      alert("✅ YOUR ORDER HAS BENG SUCCESSFULLY PLASED !");
      form.reset();
    });
  }
});

