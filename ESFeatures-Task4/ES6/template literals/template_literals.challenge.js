// using template literals build a JS program to check if a person is eligible for a price discount or not
// check if 
// if a registered member - discount is 5% 
// if not registered member - discount is 4%

const lookup={
    registered: "discount is 5%",
    not_registered:" discount is 4%"
}
let person={
    status: "registered"
}

function IsEligibe(person){
    if(person.status=="registered"){
        return lookup.registered
    } 
    else{
        return lookup.not_registered
    }
}

let result=`The person is eligible for a discount and the ${IsEligibe(person)}`

console.log(result);