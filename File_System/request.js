const fs=require('fs');
const prompt=require('prompt-sync')();

// fs.writeFileSync("./student.txt","My name is muhammad furqan  as well roll no. 211370049");

// fs.writeFile("./teacher.doc","This is list of teachers",(error)=>{
//             if(error!=null){
//                 console.log(error);
//             }else{
//                 console.log("File created");
//             }
// });



// var result=fs.readFileSync("./student.txt","utf-8",);

// fs.readFile("./teacher.doc","utf-8",(error,result)=>{

//     console.log(result);
// });

// console.log(result);


// for(let i=0;i<1;i++){
    
//     console.log(`\nStudent ${i+1} Detail.`)
//     let name =prompt(`Enter Name :`);
//     let roll =prompt("Enter roll no :");
//     let age =prompt("Enter age :");

//     let Details=`Name : ${name} , Roll No. : ${roll} , Age : ${age}`;

//     // fs.appendFileSync("./student.txt",`${Details}`);

//     // fs.appendFile("./student.txt",`\n ${Details}`,(error)=>{
//     //     if(error==null){
//     //         console.log(`Stduent-${i+1} Data Sucessfully Uploaded `);
//     //     }else
//     //     console.log(error);
//     // });
    
    
// }




// fs.writeFileSync("./dummy.pdf","this is dummy pdf");


// fs.cpSync("./student.txt","./dummy_data.txt");
// fs.cp("./student.txt","./dummy_data_2.txt",(error)=>{

//     if(error!=null){
//         console.log(error);
//     }else
//     console.log("file copied");
// });



// fs.unlink("./dummy_data.txt",(error)=>{console.log(error)});
// fs.unlinkSync("./dummy_data_2.txt");


// fs.stat("./student.txt",(error,result)=>{console.log(result)});
// var s=fs.statSync("./teacher.doc",);

// console.log(s);


// fs.mkdirSync("./folder1/folder2/folder3",{recursive:true});

fs.mkdir("./folder1/folder2/folder3/folder4",(error,result)=>{
            console.log(result);
});









