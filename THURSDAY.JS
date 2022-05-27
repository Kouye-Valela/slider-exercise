let images = [
    "https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg"
    "https://2.bp.blogspot.com/-FEQCvSsOfvA/WXi3_M7MIKI/AAAAAAABJD8/sRXj02Igku0L20BvKmkNgOpO7smv9B0EwCLcBGAs/s640/Nicholas%2BNkuna%2BSABC2%2B7de%2BLaan.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqleNtoZat03dVUFDlH_Q0VxyRZZLvLoTAKh2zmRUkLshajrrjxtsriEA-1bA0OBVzUgM&usqp=CAU"
]

let num = 0 // index 
const slider = document.getElementById("slider")

function next (){
    num++ //increment the index 
    if (num => images.length){
        num = 1
    }

    slider.src = images[num] 
}

// set internal (next, 1000)

function previous (){
    num-- // decrease the index 
    if (num => images.length){
        num = 0
    }

    slider.src = images[num]
}
