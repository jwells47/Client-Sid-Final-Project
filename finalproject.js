
//Online Journal Welcome Statement
console.log("Welcome to JW's journal");
console.log("Here you can leave a post for others to read or create a post that will anser something you have read");
function validateForm() {
    var x = document.forms["myform"]["fname"].value;
    if (x == null || x == "") {
        alert("name must be filled out");
        return false;
    }
}

function post (name,subject,date,message) {
    this.postname = name;
    this.subjectname = subject;
    this.date = date;
    this.time = time;
    this.message = message;
}
/*<form name="myform" action="demo_form.asp"
onsubmit="return validatForm()" method="post">
Name: <input type="text" name="fname">
<input type="submit" value="Submit"
</form>*/

