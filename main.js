document.addEventListener("DOMContentLoaded", () => {

const welcomeScreen = document.getElementById("welcome-screen")

setTimeout(() => {

welcomeScreen.style.opacity = "0"
welcomeScreen.style.visibility = "hidden"

},2500)

})



const cursorGlow = document.querySelector(".cursor-glow")

document.addEventListener("mousemove",(e)=>{

if(cursorGlow){

cursorGlow.style.left = e.clientX + "px"
cursorGlow.style.top = e.clientY + "px"

}

})



const menuBtn = document.querySelector(".menu-btn")
const navLinks = document.querySelector(".nav-links")

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active")

})

}



document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active")

})

})



const sections = document.querySelectorAll("section")
const navItems = document.querySelectorAll(".nav-links a")

window.addEventListener("scroll",()=>{

let current = ""

sections.forEach(section=>{

const sectionTop = section.offsetTop - 150

if(pageYOffset >= sectionTop){

current = section.getAttribute("id")

}

})

navItems.forEach(link=>{

link.classList.remove("active")

if(link.getAttribute("href") === "#" + current){

link.classList.add("active")

}

})

})



const revealElements = document.querySelectorAll(
".section-title,.about-container,.timeline-card,.project-card,.certificate-card,.tech-card,.contact-card,.comments-card,.social-contact"
)

revealElements.forEach(el=>{

el.classList.add("reveal")

})

function revealOnScroll(){

const triggerBottom = window.innerHeight * 0.85

document.querySelectorAll(".reveal").forEach(el=>{

const boxTop = el.getBoundingClientRect().top

if(boxTop < triggerBottom){

el.classList.add("active")

}

})

}

window.addEventListener("scroll",revealOnScroll)

revealOnScroll()



const tabButtons = document.querySelectorAll(".tab-btn")
const tabContents = document.querySelectorAll(".tab-content")

tabButtons.forEach(button=>{

button.addEventListener("click",()=>{

tabButtons.forEach(btn=>{

btn.classList.remove("active")

})

tabContents.forEach(content=>{

content.classList.remove("active")

})

button.classList.add("active")

const target = button.dataset.tab

document.getElementById(target).classList.add("active")

})

})



const cvFile = document.getElementById("cvFile")
const cvPreview = document.getElementById("cvPreview")

if(cvFile){

cvFile.addEventListener("change",(e)=>{

const file = e.target.files[0]

if(!file) return

const reader = new FileReader()

reader.onload = function(event){

if(file.type.includes("image")){

cvPreview.innerHTML =
`<img src="${event.target.result}" alt="CV Preview">`

}

else if(file.type === "application/pdf"){

cvPreview.innerHTML =
`
<p style="margin-top:15px;">
PDF berhasil dipilih:
<br>
<strong>${file.name}</strong>
</p>
`

}

}

reader.readAsDataURL(file)

})

}



const projectUpload = document.getElementById("projectUpload")
const projectPreview = document.getElementById("projectPreview")

if(projectUpload){

projectUpload.addEventListener("change",(e)=>{

const file = e.target.files[0]

if(!file) return

const reader = new FileReader()

reader.onload = function(event){

projectPreview.innerHTML =
`
<img src="${event.target.result}" alt="Project Preview">
`

}

reader.readAsDataURL(file)

})

}



const commentBtn = document.getElementById("postComment")
const commentList = document.getElementById("commentList")

if(commentBtn){

commentBtn.addEventListener("click",()=>{

const name =
document.getElementById("commentName").value

const message =
document.getElementById("commentMessage").value

const photo =
document.getElementById("commentPhoto")

if(name.trim() === "" || message.trim() === ""){

alert("Silakan isi nama dan komentar")

return

}

const avatar = name.charAt(0).toUpperCase()

const commentItem = document.createElement("div")

commentItem.className = "comment-item"

if(photo.files.length > 0){

const reader = new FileReader()

reader.onload = function(event){

commentItem.innerHTML =
`
<div class="comment-avatar">
${avatar}
</div>

<div class="comment-content">

<h4>${name}</h4>

<p>${message}</p>

<img src="${event.target.result}">

</div>
`

commentList.prepend(commentItem)

}

reader.readAsDataURL(photo.files[0])

}

else{

commentItem.innerHTML =
`
<div class="comment-avatar">
${avatar}
</div>

<div class="comment-content">

<h4>${name}</h4>

<p>${message}</p>

</div>
`

commentList.prepend(commentItem)

}

document.getElementById("commentName").value = ""
document.getElementById("commentMessage").value = ""
document.getElementById("commentPhoto").value = ""

})

}



const contactForm = document.getElementById("contactForm")

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

e.preventDefault()

alert(
"Pesan berhasil dikirim. Terima kasih telah menghubungi saya."
)

contactForm.reset()

})

}



function createParticle(){

const particle = document.createElement("span")

particle.classList.add("particle")

particle.style.left =
Math.random() * window.innerWidth + "px"

particle.style.animationDuration =
Math.random() * 5 + 5 + "s"

particle.style.width =
Math.random() * 6 + 4 + "px"

particle.style.height =
particle.style.width

document.body.appendChild(particle)

setTimeout(()=>{

particle.remove()

},10000)

}

setInterval(createParticle,700)



const statNumbers = document.querySelectorAll(".stat-box h3")

function animateCounter(){

statNumbers.forEach(counter=>{

const target = Number(counter.innerText)

let count = 0

const speed = target / 60

const update = ()=>{

count += speed

if(count < target){

counter.innerText = Math.floor(count)

requestAnimationFrame(update)

}

else{

counter.innerText = target

}

}

update()

})

}

animateCounter()



const socialCards = document.querySelectorAll(".social-card")

socialCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-12px) scale(1.1)"

})

card.addEventListener("mouseleave",()=>{

card.style.transform =
"translateY(0px) scale(1)"

})

})



document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-10px)"

})

card.addEventListener("mouseleave",()=>{

card.style.transform =
"translateY(0px)"

})

})



document.querySelectorAll(".tech-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-10px) scale(1.05)"

})

card.addEventListener("mouseleave",()=>{

card.style.transform =
"translateY(0px) scale(1)"

})

})



window.addEventListener("load",()=>{

document.body.style.opacity = "1"

})