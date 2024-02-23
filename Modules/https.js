


const {send,read,RESQUEST_TIMEOUT}=require('./Internals');




function makeRequest(url,data){
   send(url,data);
    console.log(RESQUEST_TIMEOUT);
    return read();
}


// const internals=require('./Internals');


// function makeRequest(url,data){
//     internals.request.send(url,data);
//     return internals.response.read();
// }





const req=makeRequest("www.google.com","Data");


console.log(req);







//   Vanilla Js ---------  access all varaibles method using this  request.name,response.name

// const request=require("./request");
// const response=require("./response");


// destructing 

// const {send, TIME_OUT}=require("./request");
// const {read}=require("./response");


// function makeRequest(url,data){
//     request.send(url,data);
//     return response.read();
// }


// function makeRequest(url,data){
//     send(url,data);
//     console.log(TIME_OUT);
//     return read();
// }



// const req=makeRequest("www.google.com","Data");


// console.log(req);