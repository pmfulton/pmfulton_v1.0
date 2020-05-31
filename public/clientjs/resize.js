console.log('loaded')

const resizeWin = window.addEventListener('resize', (e) => {
    if (window.innerWidth <  500) {
        document.getElementById('test').style.backgroundColor = "#F0F8FF"
    }
})