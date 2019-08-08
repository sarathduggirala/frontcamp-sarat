

let course = {

}

Reflect.defineProperty(course,'name',{
    value:"javascript",
    writable:false
});
Reflect.defineProperty(course,'duration',{
    value:"3 hours",
    writable:false
});

console.log(course);
var metadata=Reflect.getOwnPropertyDescriptor(course,"name")
console.log(metadata);



// use  reflect API to define property,  delete a property, getOwnpropertydescriptor details
// property to define - name with value as "Javascript", make it read only (writable : false)
// property to define - duration with value as "3 hours", make it read only (writable : false)
// getOwnpropertydescriptor - check and print metadata about name property
