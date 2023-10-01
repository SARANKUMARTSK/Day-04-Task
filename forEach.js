var json = [{
    "id" : 1, 
    "msg"   : "hi",
    "name" : "Saran",
    "fromWho": "guvi"
},
{
    "id" : 2, 
    "msg"   : "there",
    "name" : "Kumar",
    "fromWho": "guvi"
}];

json.forEach((item) => {
  console.log('ID is   : ' + item.id);
  console.log('MSG is  : ' + item.msg);
  console.log('name is : ' + item.tid);
  console.log('FROMWHO : ' + item.fromWho);
});