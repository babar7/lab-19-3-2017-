var i;
var Mob_networks = ["Zong","Telenor","Warid","Ufone","Jazz","Paktel"];

    document.write("<h1> Mobile Networks In Pakistan </h1>");
for(i=1 ; i<=6; i++)
{
    document.write(i+"). "+Mob_networks[i-1]+"<br  />");
}

var qualifications = ["HSC","SSC","BSc","BCs","BS","MS","M.Phill.","PhD","BCOM"];

    document.write("<h1> Education Qualifications In Pakistan </h1>")
for(i=1 ; i<=9; i++)
{
    document.write(i+"). "+qualifications[i-1]+"<br  />");
}

var movies = [];
    movies[0] = "Avengers: Age of Ultron";
    movies[1] = "Spectre";  
    movies[2] = "Jurassic World";  
    movies[3] = "Inside Out";  

    document.write("<h1> Top movies of 2015 </h1>");

for(i=1; i<=4; i++)
{
    document.write(i+"). "+movies[i-1]+"<br  />");
}
    document.write("<h1> Length of the array: "+movies.length+"</h1>");

var cars = ["Audi","BMW","Volvo","Ferrari","Ford","Lamborghini"];

    document.write("<h1> Favorite Cars </h1>");
    document.write(cars+"<br  /><br  />");

    document.write("First index of the array: "+cars.indexOf("Audi")+"<br  />");
    document.write("Car at first index of the array: "+cars[0]+"<br  />");
    document.write("Last index of the array: "+cars.indexOf("Lamborghini")+"<br  />");
    document.write("Car at last index of the array: "+cars[5]+"<br  />");

    document.write("<h1> Perecentage </h1>");
var studentsName = ["Bale","Ramos","Ronaldo"];
var score = [320, 230, 480];

for(i=0; i < score.length; i++)
{
    document.write("Score of "+studentsName[i]+" is "+score[i]+". Perecentage: "+ (score[i]/500)*100 +"% <br >");
}

var color = ["Blue","Green","Red"];

    document.write("<br  /> <b> "+color+"</b> <br  />");

var userColor1 = prompt("| "+color+" | What color you want to add to the beginning","Color Name");

    document.write("You want to add color "+userColor1+" to the beginning <br  />");
    color.unshift(userColor1);
    document.write("<b>Updated: </b>"+color+"<br  /><br  />");

var userColor2 = prompt("| "+color+" | What color you want to add to the end","Color Name");

    document.write("You want to add color "+userColor2+" to the end <br  />");
    document.write(color+"<br  />");
    color.push(userColor2);
    document.write("<b>Updated: </b>"+color+"<br  /><br  />");

    document.write("Adding two colors to the beginning <br  />");   
    document.write(color+"<br  />");
    color.unshift("Black","White");
    document.write("<b>Updated: </b>"+color+"<br  /><br  />");

    document.write("Deleting first color <br  />");   
    document.write(color+"<br  />");
    color.shift();
    document.write("<b>Updated: </b>"+color+"<br  /><br  />");

    document.write("Deleting last color <br  />");   
    document.write(color+"<br  />");
    color.pop();
    document.write("<b>Updated: </b>"+color+"<br  /><br  />");

var userColor3 = prompt("| "+color+" | At which index you want to add color new color","3");
var userColor4 = prompt("| "+color+" | At your given index which color you want to add","Purpel");

    document.write("You want to add color "+userColor4+" at index "+userColor3+"<br  />");    
    document.write(color+"<br  />");
    color.splice(userColor3, 0, userColor4);
    document.write("<b>Updated: </b>"+color+"<br  /><br  />");

var userColor5 = prompt("| "+color+" | At which index you want to delet color(s)","1");
var userColor6 = prompt("| "+color+" | And how many colors do you want to delet","2");

    document.write("You want to start deleting color from index "+userColor5+" to "+userColor6+"<br  />");
    document.write(color+"<br  />");
    color.splice(userColor5, userColor6);
    document.write("<b>Updated: </b>"+color+"<br  /><br  />");

var score2 = [320, 230, 480, 120, 150, 280, 80, 100];

    document.write("Scores of Students : "+score2+"<br  />");
    score2.sort();
    document.write("Ordered Scores of Students : "+score2+"<br  />");

var fruits = ["strawberry","apple","orange","banana","pineapple","mango"];

    document.write("<br  />Fruits list : "+fruits+"<br  />");
    fruits.sort();
    document.write("Ordered fruits list : "+fruits+"<br  /><br  />");

var city = ["karachi","Multan","Lahore","Islamabad","Quetta","Muree","Peshawar"];

    document.write("Cities list: "+city+"<br  />");
    document.write("<h2> Selected cities are: <br  /></h2>");
    var city2 = city.slice(2, 5) 
    document.write("Selected cities list : "+city2+"<br  />");

    document.write("<h2> Arry join </h2>");
var arr = ["This","is","my","car"];

    document.write("Array: "+arr+"<br  />");
    document.write("String: "+arr.join(" ")+"<br  />");

var devices = [];

    devices.push("Keyboard");        
    devices.push("Mouse");        
    devices.push("Printer");        
    devices.push("Monitor");

    document.write("<h2> Devices: </h2>");
    document.write("Devices: "+devices+"<br  />");

    document.write("<b>Out:</b></br  >"+devices.shift() +"<br  />");
    document.write("<b>Out:</b></br  >"+devices.shift() +"<br  />");
    document.write("<b>Out:</b></br  >"+devices.shift() +"<br  />");
    document.write("<b>Out:</b></br  >"+devices.shift() +"<br  />");

var devices = [];

    devices.push("Keyboard");        
    devices.push("Mouse");        
    devices.push("Printer");        
    devices.push("Monitor");

    document.write("<h2> Devices: </h2>");
    document.write("Devices: "+devices+"<br  />");

    document.write("<b>Out:</b></br  >"+devices.pop() +"<br  />");
    document.write("<b>Out:</b></br  >"+devices.pop() +"<br  />");
    document.write("<b>Out:</b></br  >"+devices.pop() +"<br  />");
    document.write("<b>Out:</b></br  >"+devices.pop() +"<br  />");

var empty = [[], [], []];

    document.write("<h2> Empty Array </h2>");
    document.write("A multidimensional array <br>"+empty.join(" "));

    document.write("<h2>Matrix Array </h2>");

var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

    document.write(matrix[0].join(" ")+"<br>"+matrix[1].join(" ")+"<br>"+matrix[2].join(" ")); 

var phone = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

    document.write("<h2> Mobile Brands </h2>");
    document.write("<br> <select><option>"+ phone[0]+"</option><option>"+ phone[1]+"</option><option>"+ phone[2]+"</option><option>"+ phone[3]+"</option><option>"+ phone[4]+"</option><option>"+ phone[5]+"</option><br>");

