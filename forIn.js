
  var json = [{
      "id" : "1", 
      "msg"   : "hi",
      "tid" : "2013-05-05 23:35",
      "fromWho": "hello1@email.se"
      },
      {
      "id" : "2", 
      "msg"   : "there",
      "tid" : "2013-05-05 23:45",
      "fromWho": "hello2@email.se"
      }];
      // Next, you can iterate like this :
      
      for (var key in json) {
        console.log(json[key].id);
        console.log(json[key].msg);
      }

