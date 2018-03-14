var arr = [99,0,0,0,0,0,0,0,0,0]

var turnNum = 0

var pos1 = document.getElementById("boxTopLeft")
var pos2 = document.getElementById("boxTopMid")
var pos3 = document.getElementById("boxTopRight")
var pos4 = document.getElementById("boxMiddleLeft")
var pos5 = document.getElementById("boxMiddleMid")
var pos6 = document.getElementById("boxMiddleRight")
var pos7 = document.getElementById("boxBottomLeft")
var pos8 = document.getElementById("boxBottomMid")
var pos9 = document.getElementById("boxBottomRight")


$(pos1).one ("click", function(){
    if (turnNum % 2 == 0){
    pos1.innerHTML="x"
    arr[1]=1
    }

    else {
        pos1.innerHTML="o"
        arr[1]=2
    }

turnNum++
console.log(arr)

})


$(pos2).one ("click", function(){
    if (turnNum % 2 == 0){
    pos2.innerHTML="x"
    arr[2]=1
    }

    else {
        pos2.innerHTML="o"
        arr[2]=2
    }

turnNum++
console.log(arr)

})


$(pos3).one ("click", function(){
    if (turnNum % 2 == 0){
    pos3.innerHTML="x"
    arr[3]=1
    }

    else {
        pos3.innerHTML="o"
        arr[3]=2
    }

turnNum++
console.log(arr)

})


$(pos4).one ("click", function(){
    if (turnNum % 2 == 0){
    pos4.innerHTML="x"
    arr[4]=1
    }

    else {
        pos4.innerHTML="o"
        arr[4]=2
    }

turnNum++
console.log(arr)

})

$(pos5).one ("click", function(){
    if (turnNum % 2 == 0){
    pos5.innerHTML="x"
    arr[5]=1
    }

    else {
        pos5.innerHTML="o"
        arr[5]=2
    }

turnNum++
console.log(arr)

})


$(pos6).one ("click", function(){
    if (turnNum % 2 == 0){
    pos6.innerHTML="x"
    arr[6]=1
    }

    else {
        pos6.innerHTML="o"
        arr[6]=2
    }

turnNum++
console.log(arr)

})

$(pos7).one ("click", function(){
    if (turnNum % 2 == 0){
    pos7.innerHTML="x"
    arr[7]=1
    }

    else {
        pos7.innerHTML="o"
        arr[7]=2
    }

turnNum++
console.log(arr)

})


$(pos8).one ("click", function(){
    if (turnNum % 2 == 0){
    pos8.innerHTML="x"
    arr[8]=1
    }

    else {
        pos8.innerHTML="o"
        arr[8]=2
    }

turnNum++
console.log(arr)

})

$(pos9).one ("click", function(){
    if (turnNum % 2 == 0){
    pos9.innerHTML="x"
    arr[9]=1
    }

    else {
        pos9.innerHTML="o"
        arr[9]=2
    }

turnNum++
console.log(arr)

})