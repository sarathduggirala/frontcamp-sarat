// 1. SET 
// Rewrite the sample code below so that every time a property is set a callback runs.
// your callback will check if the property changed is employees.

//If it is employees, make sure if it is an Array, a string or null.
//If anything else comes, respond with an appropriate message
//If not employees, let it pass

let handler={
    set: (target, prop,value) =>{
         if(prop=="employees"){
             if(!(typeof(value)=='string'  || Array.isArray(value) || value===null)){
                    console.log("Re check type- type should be either string, array or null");
             }
             else{
               console.log("continue");
             }
         }
         else{
             console.log("prop is not employess");
         }
    }
}
let manager = {
    office: `Dubai`,
    dept: `sales`,
    employees: 0
}

var p=new Proxy({},handler);
p.employees=`London`
p.office = `London` //updates
p.employees = ['Jim', 'Patrick', 'Mary']; //updates
p.employees = 3; // doesn't update
p.employees = null; // updates
p.employees = {name:'Jim'} // doesn't update



// 2. GET
// adjust the following code so that anytime an internal object with accessLevel of 1 is accessed,
//"Access Denied" is returned.
const users = [
    {
        username: `bob`,
        accessLevel: 1,
        accessCode: 1234
    },
    {
        username: `Mary`,
        accessLevel: 2,
        accessCode: 2345
    },
    {
        username: `Harold`,
        accessLevel: 2,
        accessCode: 9999
    }
]

//1st approach
let handler={
    get: (target, prop)=>{
        if(target["accessLevel"]==1){
            console.log("access denied")
            return 0
        }
        else{
            return target[prop]
        }
        
    }
}

proxies=[];
for(let i=0;i<users.length;i++){
var proxyval= new Proxy(users[i],handler);
proxies[i]=proxyval;
}
console.log(proxies[0].username)
console.log(proxies[1].username) 
console.log(proxies[2].username)   // Access Denied


//2nd approach
let handler1={
    get: (target, prop)=>{
        if(target[prop].accessLevel==1){
            console.log("access denied")
            return 0
        }
        else{
            return target[prop]
        }
    }
}
var proxy=new proxy(users,handler1);
console.log(proxy[0].username)
console.log(proxy[1].username)
console.log(proxy[2].username)
