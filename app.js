const bars = document.querySelector("#trigger-bars");
const mobile = document.querySelector(".mobile")

bars.addEventListener("click", () => {
    if(bars.classList.contains('fa-bars')){
        bars.classList.remove('fa-bars')
        bars.classList.add('fa-times')
        mobile.classList.add("show")
    }else{
        bars.classList.remove('fa-times')
        bars.classList.add('fa-bars')
        mobile.classList.remove("show")
        // show mobile bar
   
    }
})
window.addEventListener('resize', () => {
    if(window.innerWidth > 998){
        if(mobile.classList.contains('show')){
            mobile.classList.remove('show')
        }
    }
})


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })

})