// Dear all I have made several comments in the document so that u can understand which code stands for what thing 

// Note: Data in Json file directly begins from " [ " this , If u have somehing before like "Sheet1" , Kindly remove that.

// hEADER CODE STARTS

const menusw = document.querySelector("nav ul");
const menusBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menusBtn.addEventListener("click", function () {
  menusw.classList.add("display");
});

closeBtn.addEventListener("click", function () {
  menusw.classList.remove("display");
});

// hEADER CODE ENDS

// Function to change google drive image link to viewable format
function myf(string) {
   const index = string.indexOf('=');
   if (index !== -1) {
      return "https://drive.google.com/thumbnail?id=" + string.slice(index + 1);
   } else {
      return "https://drive.google.com/thumbnail?id=";
   }
}

// To display Club Reps
let http = new XMLHttpRequest();
http.open('get', 'cult_data.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
      let output = "";
      for(let item of products){
         let pic=myf(item.Photo);
         let instaid=item.Instagram_ID;
         if (instaid=="NA"){
            instaid="https://www.instagram.com/";
         }
         let linkedinid=item.LinkedIn_ID;
         if (linkedinid=="NA"){
            linkedinid="https://www.linkedin.com/feed/";
         }
         output += `
            <div class="product">
               <img src="${pic}">
               <p class="title">${item.Name}</p>
               <p class="description">${"+91 "+item.Phone_Number}</p>
               <div class="social-buttons">
               <a href="${linkedinid}" class="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in"></i></a>
                <a href="${instaid}" class="social-buttons__button social-button social-button--instagram" aria-label="Instagram">
               <i class="fab fa-instagram"></i></a>
               <a href="mailto:${item.Email_ID}" class="social-buttons__button social-button social-button--mail" aria-label="Mail">
            <i class="fas fa-envelope"></i></a>
            </div>
          
            </div>
         `;
      }
      document.querySelector(".products").innerHTML = output;
   }
}

// To display Committee Members
let http1 = new XMLHttpRequest();
http1.open('get', 'cult_data_committee.json', true);
http1.send();
http1.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let products = JSON.parse(this.responseText);
      let output = "";
      for(let item of products){
         let instaid=item.Instagram_ID;
         if (instaid=="NA"){
            instaid="https://www.instagram.com/";
         }
         let linkedinid=item.LinkedIn_ID;
         if (linkedinid=="NA"){
            linkedinid="https://www.linkedin.com/feed/";
         }
         output += `
            <div class="product">
               <p class="title">${item.Name}</p>
               <p class="description">${"+91 "+item.Phone_Number}</p>
               <div class="social-buttons">
               <a href="${linkedinid}" class="social-buttons__button social-button social-button--linkedin" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in"></i></a>
                <a href="${instaid}" class="social-buttons__button social-button social-button--instagram" aria-label="Instagram">
               <i class="fab fa-instagram"></i></a>
               <a href="mailto:${item.Email_ID}" class="social-buttons__button social-button social-button--mail" aria-label="Mail">
            <i class="fas fa-envelope"></i></a>
            </div>
            
            </div>
         `;
      }
      document.querySelector(".products1").innerHTML = output;
   }
}

