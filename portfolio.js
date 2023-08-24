// document.querySelector(".header-button").addEventListener("click", ()=>{
//   console.log("good")
// })


gsap.from("#nav-animation", {
	y: 60,
	duration: 1.5
})


gsap.from(".header-box-text", {
	opacity:0, 
	x:-200,
	duration:1
})

gsap.from(".header-box-images", {
	opacity:0, 
	x:200,
	duration:1
})

gsap.from("#img-small-1", {
	x:-100,
	opacity:0,
	duration:1,
	scrollTrigger:{
		trigger:".social-marketing",
		start: "top 60%",
	}
	
})


const firstContainer = document.querySelectorAll("#first-container")

gsap.from(firstContainer, {
	opacity : 0,
	duration:2,
	scrollTrigger: {
		trigger:".content-container"
	}
})


const middleContainer = document.querySelectorAll("#middle-container")

gsap.from(middleContainer, {
	opacity : 0,
	duration:2,
	delay: .4,
	scrollTrigger: {
		trigger:".content-container"
	}
})

const lastContainer = document.querySelectorAll("#last-container")

gsap.from(lastContainer, {
	opacity : 0,
	duration:2,
	delay: .7,
	scrollTrigger: {
		trigger:".content-container"
	}
})