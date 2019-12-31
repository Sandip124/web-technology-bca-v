var fName = document.getElementById("firstName");
var lName = document.getElementById("lastName");
var age = document.getElementById("age");
var submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click",validate);

    function validate()
    {
        console.log(fName.value);
        if(fName.value == "")
        {
            alert("firstName is Empty.");
        }else if(fName.value.length < 3)
        {
            alert("At least 3 character needed.");
        }   

        if(lName.value == "")
        {
            alert("Last Name is required");
        } else if(lName.value.length < 3)
        {
            alert("At least 3 character needed.");
        }

        if(age.value  <= 0)
        {
            alert("age cannot be zero and less than zero.");
        }else if(age.value >= 100)
        {
            alert("Max age is 100.");
        }
    }
