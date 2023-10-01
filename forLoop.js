let student = [ 
    {
    "fname" : "Saran",
    "age"  : 26 ,
    "city" : "Anaimalai",
    "dist" : "coimbatore"
    },
    {
    "fname" : "Kumar",
    "age"  : 18 ,
    "city" : "Pollachi",
    "dist" : "coimbatore"
    },
    {
    "fname" : "Ranjith",
    "age"  : 21 ,
     "city" : "Udumalpet",
     "dist" : "Tirupur"
    },

];

for(let i=0;i<student.length;i++)
{
    console.log("Name : " + student[i].fname + ", Age : " + student[i].age + ", city : " + student[i].city);
}