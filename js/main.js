
// Check to see if both input boxes contain Text
// If so, enable the next button 
function validate() {
    var hasString1 = false; 
    var hasString2 = false; 

    var string1 = document.getElementById('string1'); 
    var string2 = document.getElementById('string2'); 

    var string1Val = string1.value; 
    var string2Val = string2.value; 


    //    change border color to show the user has 
    //    the input field
    var button = document.getElementById('buttonAnagram'); 
    
    if (string1Val.length > 0) {
        string1.style.border = "1px solid #7ac70c"; 
        hasString1 = true; 
    } else {
        string1.style.border = "1px solid #d33131"; 
        button.disabled = true; 
        button.style.opacity = .3; 
        document.getElementById('feedback').innerHTML = "Please enter two strings..."
    }

    if (string2Val.length > 0) {
        string2.style.border = "1px solid #7ac70c"; 
        hasString2 = true; 
    } else {
        string2.style.border = "1px solid #d33131"; 
        button.disabled = true; 
        button.style.opacity = .3; 
        document.getElementById('feedback').innerHTML = "Please enter two strings..."
    }

    if (hasString1 && hasString2) {
        button.disabled = false; 
        button.style.opacity = 1; 
    }

}

// Checks to see if the two strings are anagrams 
function checkAnagram(string1, string2) {

    var string1Sorted = string1.toLowerCase().replace(/\s+/g, '').split("").sort().join(""); 
    var string2Sorted = string2.toLowerCase().replace(/\s+/g, '').split("").sort().join(""); 

    if (string1Sorted === string2Sorted) {
        var feedback = "They're anagrams!"; 
    } else {
        var feedback = "They're not anagrams!"
        }
    
    
    document.getElementById('feedback').innerHTML = feedback; 
}

