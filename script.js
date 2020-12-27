var arrayimg = [
    "mother.jpg",
    "father1.png",
     "brother.png",
     "brother.jpg"
];
var array_name = [
    "Mother",
    "Father",
     "Me",
     "Brother"
];
var i = 0;
function nextslide()
{

    
    document.getElementById("name1").innerHTML=array_name[i];
    

    document.getElementById("img1").src=arrayimg[i];
    i++;
    }