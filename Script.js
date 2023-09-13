var tl=gsap.timeline({
    repeat:-1
});

tl.to(".imagecontainer",{
    ease: Expo.easeInOut,
    width:"100%",
    stagger:1
},'Farhan')
.to(".text h1",{
    ease: Expo.easeInOut,
    stagger:1,
    top:0
},'Farhan')
.to(".text h1",{
    delay:1,
    ease: Expo.easeInOut,
    stagger:1,
    top:-100
},'Farhan')



