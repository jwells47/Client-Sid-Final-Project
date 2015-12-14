 
simInput();

function simInput(){
 
 postMessage("John","Hi this is my first post");
 postMessage("April","Hi John I'm glad to see you were able to post.");
 postMessage("John","Thanks I could not have done it without you");
 
}




function postMessage(name,message){
 var d = new Date();
 var output = "Date: " + d.toString() + "\n";
     output += "Name: " + name + "\n";
     output += "Message: " + message + "\n";
 console.log(output);
}
