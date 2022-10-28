const mobile_nav = document.querySelector(".mobile_nav")

const close = document.querySelector(".close")

const burger_btn = document.querySelector(".burger_icon")


burger_btn.addEventListener("click", toggleNav) 


function toggleNav (){
    if (mobile_nav.classList.contains("active")) {
        mobile_nav.classList.remove("active")
        console.log("i am working");
        } else {
            mobile_nav.classList.add("active")
            
        }
    }

    close.addEventListener("click", toggleNav)



