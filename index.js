var fName = document.getElementById("firstName");
var lName = document.getElementById("lastName");
var age = document.getElementById("age");

var eFName = document.getElementById("error-firstName");
var eLName = document.getElementById("error-lastName");
var eAge = document.getElementById("error-age");

var submitBtn = document.getElementById("submitBtn");
var dynamicDataDiv = document.getElementById("dynamicData");

    submitBtn.addEventListener("click",validate);

    function validate()
    {
        defaultErrorValidation();

        console.log(fName.value);
        if(fName.value == "")
        {
            showErrorForName("firstName is Empty.");
        }else if(fName.value.length < 3)
        {
            showErrorForName("At least 3 character needed.");
        }   

        if(lName.value == "")
        {
            // alert("Last Name is required");
            showErrorForLastName("Last Name is required");
        } else if(lName.value.length < 3)
        {
            showErrorForLastName("At least 3 character needed.");
        }

        if(isNaN(age.value))
        {
            showErrorForAge("Ony numbers are allowed.");
        }else{
            console.log(age.value);
        }
        if(age.value  < 1)
        {
            showErrorForAge("age cannot be zero and less than zero.");
        }else if(age.value > 100)
        {
            showErrorForAge("Max age is 100.");
        }

        // console.log(dynamicDataDiv);
        
        var output = `<tr><td>`+fName.value+`</td>
        <td>`+lName.value+`</td>
        <td>`+age.value+`</td></tr>`;
        
        dynamicDataDiv.innerHTML +=output;

        function showErrorForName(message)
        {
            eFName.style.display ="block";
            eFName.style.color ="red";
            eFName.innerHTML=message;
        }

        
       function showErrorForLastName(message)
       {
        eLName.style.display ="block";
        eLName.style.color ="red";
        eLName.innerHTML=message;
       }
        
       function showErrorForAge(message)
       {
           eAge.style.display ="block";
           eAge.style.color ="red";
           eAge.innerHTML=message;
       }


        function defaultErrorValidation()
        {
            eFName.style.display ="none";
            eLName.style.display ="none";
            eAge.style.display ="none";
        }




    }
