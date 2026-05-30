<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>objects in JS</title>
</head>
<body>
    <script>
    //object - it is the collection(pair) of keys(property) and its value.

    //create object - literal {} and new keyword

    //create object for student

    let student={
        id:101,
        name:"Abhay",
        age:23,
        ismarried:false,

        address:{
            streetNo:2,
            area:"Pratap Vihar",
            pincode:20109,
            city:"Ghaziabad",
        },
         education:["B.Tech","CSE",18 ,2025],
         getinfo:function(){
            return "my details are " + "and" + student.name;
         },
         examDone:null
         
    };
    student.getinfo();
    //console.log (student):
    //console.log(type of student)):

    //acess object's properties/keys
    console.log(student.getinfo());

    //find object's keys in object
    console.log('id'in student);
    //delete object's keys from object
    console.log(delete student.name);
    console.log(student);

    //object length
    let studentkeys=object.keys(student);
    console.log(studentkeys.length);

    //using for---loop
    for(int i=4 <Studentkeys.length;i++){
        console.log(student(studentkeys[i]));
    }
    
    //for in loop
    for(letx in student){
        console.log (student[x]);
    }

    //create an object using new keywords
    let my info=new oject();
    myinfo.name="vikas";
    myinfo.age=19;
    myinfo.city="varanasi"
    myinfo.ismarried="true"
    </script>
</body>
</html>
