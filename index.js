const button = document.querySelector("#btn")
const input = document.querySelector("#input")


function clearInput() {
        if (input.value.length > 0) {
            input.value=" ";
        }
    }

function reverseString() {

    let str = input.value;
 
    let splitString = str.split(''); 

    let reverseArray = splitString.reverse();
  
    let joinArray = reverseArray.join(""); 
    
    
    if (str.length == 0) {
        document.getElementById("result").innerHTML = "Enter some Text to check if it is a Palindrome";
    } else if (str == joinArray) {
    	document.getElementById("result").innerHTML = "The text you entered is indeed a Palindrome!!";
        document.getElementById("rotate3D").innerHTML = "'"+str+"'"; 
    } else {    	
    	document.getElementById("result").innerHTML = "The text you entered is not a Palindrome";
        document.getElementById("rotate3D").innerHTML = "'"+str+"'";
    }
    console.log(str);
    console.log(joinArray);       
}

function afterClick(){
    if (input.value.length > 0) {
       reverseString();
       rotateYDIV()
    }
}

function afterEnter(event) {
       if(input.value.length > 0 && event.which === 13) {
        reverseString();
        rotateYDIV()
    }
}

 
button.addEventListener("click", afterClick);
input.addEventListener("keypress", afterEnter);


//Rotation of Text

var x,y,n=0,ny=0,rotINT,rotYINT


function rotateYDIV(){
   y=document.getElementById("rotate3D")
   clearInterval(rotYINT)
   rotYINT=setInterval("startYRotate()",10)
}

function startYRotate() {
   ny=ny+1
   y.style.transform="rotateY(" + ny + "deg)"
   y.style.webkitTransform="rotateY(" + ny + "deg)"
   y.style.OTransform="rotateY(" + ny + "deg)"
   y.style.MozTransform="rotateY(" + ny + "deg)"
   if (ny==180){
      let str = input.value;
 
      let splitString = str.split(''); 

      let reverseArray = splitString.reverse();
  
      let joinArray = reverseArray.join("");

      document.getElementById("rotate3D").innerHTML = "'"+str+"'";
      console.log("didnt work")
   }
   
}


    
    