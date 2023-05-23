var nam = "my_name";
var age = 20;
var hasHobbies = true;

//console.log('Name is ' + nam + ' Age is ' + age + ' And the user has hobbies ' + hasHobbies);

function Myself(userName, userAge, userHasHobby){
    return(
        "Name is " + nam + 
        " Age is " + age +  
        " Has hobbies " + hasHobbies
    );
};
console.log(Myself(nam, age, hasHobbies));
 