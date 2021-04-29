/*********************************************************************************
* WEB700 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Mahshid Farrahinia Student ID: 144091196 Date: 2020/01/17
*
********************************************************************************/ 
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
var serverPaths = ["/", "/about", "/contact", "/login", "/dashboard", "/logout"];
var serverResponses = ["Welcome to WEB700 Assignment1", "This assignment was prepared by Mahshid Farrahinia", "mfarrahinia@myseneca.ca", "Login Successful", "Main Dashboard", "Logout Successful"];

function ProcessRequest(httpVerb, Path) {
    var returnedresult = "";
    for (var i = 0; i < serverVerbs.length; i++) {
        if (serverVerbs[i] == httpVerb && serverPaths[i] == Path) {
            returnedresult = serverResponses[i];
            break;
        }
    }
    if (returnedresult == "") {
        return "404: Unable to process " + httpVerb + " request for " + Path;
    } else {
        return "200: " + returnedresult;
    }

}
var result = ProcessRequest("GET", "/");
console.log(result);

function testRequests() {
    var testVerbs = ["GET", "POST"];
    var testPaths = ["/", "/about", "/contact", "/login", "/dashboard", "/logout", "notFound1", "notFound2"];
    function randomRequest() {
        var randVerb = getRandomInt(2)
        var randPath = getRandomInt(8)
        console.log(ProcessRequest(testVerbs[randVerb], testPaths[randPath]));
    }
    setInterval(randomRequest, 1000)
}
testRequests();
