let toggle = false

document.getElementById("burger").addEventListener("click", (e) => {
    console.log('Нажата');
    toggle = !toggle
    document.getElementById("phoneMenu").style.display = toggle ? "flex" : "none"
    // document.getElementById("burger").style.backgroundColor = "white"
    
})