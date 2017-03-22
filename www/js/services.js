angular.module('starter.services', [])

  /*测试数据开始*/
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory("HomeGoodlistRow",function(){
  var homeGoodlistRows = [
    [{ "id":0, "title":"javaScript课程", "main":"good,good,非常棒！","imgsrc":"shouye_02.png"},
      {"id":1, "title":"UI/UE","main":"UI,非常棒！","imgsrc":"shouye_02.png"}],
    [{ "id":2, "title":"HTML5+CSS3","main":"bangbangda,非常棒！","imgsrc":"shouye_02.png"
    },
      { "id":3, "title":"jQuery","main":"wuli jQuery,非常棒！","imgsrc":"shouye_02.png"
      }]
  ];
  return{
    all:function(){
      return homeGoodlistRows;
    }
  };
})
  .factory("HomeNewLists",function(){
    var homeNewListRow = [
      [{ "id":0, "title":"javaScript课程", "main":"good,good,非常棒！","imgsrc":"shouye_03.png"},
        {"id":1, "title":"UI/UE","main":"UI,非常棒！","imgsrc":"shouye_03.png"}],
      [{ "id":2, "title":"HTML5+CSS3","main":"bangbangda,非常棒！","imgsrc":"shouye_03.png"},
        { "id":3, "title":"jQuery","main":"wuli jQuery,非常棒！","imgsrc":"shouye_03.png"}]
    ];
    return{
      all:function(){
        return homeNewListRow;
      }
    };
  })


  .factory("HomechooseLists",function(){
    var homechooseList= [
      {
        "id":0,
        "pic":"img/shouye_02.png",
        "title":"javaScript课程",
        "main":"good,good,非常棒！" ,
        "imgsrc":"shouye_02.png"
      },
      {
        "id":1,
        "pic":"img/shouye_02.png",
        "title":"UI/UE",
        "main":"UI,非常棒！" ,
        "imgsrc":"shouye_02.png"
      },
      {
        "id":2,
        "pic":"img/shouye_02.png",
        "title":"HTML5+CSS3",
        "main":"bangbangda,非常棒！" ,
        "imgsrc":"shouye_02.png"
      },
      {
        "id":3,
        "pic":"img/shouye_02.png",
        "title":"jQuery",
        "main":"wuli jQuery,非常棒！" ,
        "imgsrc":"shouye_02.png"
      }
    ];
    return{
      all:function(){
        return homechooseList;
      }
    };
  })


  .factory('courseLists',function() {
    var chats = [{
      id: 0,
      titleEn: '1Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 15,
      titleEn: '2Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 15,
      titleEn: '3Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 15,
      titleEn: '4Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 15,
      titleEn: '5Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 15,
      titleEn: '6Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 15,
      titleEn: '7Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 15,
      titleEn: '8Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 15,
      titleEn: '9Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 15,
      titleEn: '10Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 15,
      titleEn: '11Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 15,
      titleEn: '12Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 15,
      titleEn: '13Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 15,
      titleEn: '14Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 15,
      titleEn: '15Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    },{
      id: 15,
      titleEn: '16Ben Sparrow',
      price: 'You on your way?',
      imgsrc: 'img/ben.png'
    }];


    return {
      page: function(page) {
        return chats.splice((page-1)*5,(page-1)*5+5);
      },
      all:function(){
        return chats;
      },
      remove: function(chat) {
        chats.splice(chats.indexOf(chat), 1);
      },
      get: function(chatId) {
        for (var i = 0; i <chats.length; i++) {
          if (chats[i].id === parseInt(chatId)) {
            return chats[i];
          }
        }
        return null;
      },
      courseSerch: function(searchText){
        return chats.splice(0,2);
      }


    };
  })

  .factory("courseFirst",function() {
    var itemFir = [{
      id: 0,
      imgsrc:"img/ben.png",
      title: "标题1",
      num: "3节",
      nums: "15节"
    },{
      id: 5,
      imgsrc:"img/ben.png",
      title: "标题1",
      num: "3节",
      nums: "15节"
    },{
      id: 5,
      imgsrc:"img/ben.png",
      title: "标题2",
      num: "3节",
      nums: "15节"
    },{
      id: 5,
      imgsrc:"img/ben.png",
      title: "标题3",
      num: "3节",
      nums: "15节"
    },{
      id: 5,
      imgsrc:"img/ben.png",
      title: "标题4",
      num: "3节",
      nums: "15节"
    },{
      id: 5,
      imgsrc:"img/ben.png",
      title: "标题6",
      num: "3节",
      nums: "15节"
    }];


    return {
      all:function(){
        return itemFir;
      }
    };
  })

  .factory('courseSecond',function() {
    var itemSec=[{
      id: 0,
      imgsrc:"img/ben.png",
      title: "2标题1",
      num: "2节",
      nums: "15节"
    },
      /*省略部分内容*/
      {
        id: 5,
        imgsrc:"img/ben.png",
        title: "标题6",
        num: "3节",
        nums: "15节"
      }];


    return {
      all:function(){
        return itemSec;
      }
    };
  })

  //学习页面目录数据
  .factory('studyList',function() {
    var studymulu = [{
      title:"1-1photoshop修图效果效果制作",
      time:"15分钟"
    },
      {
        title:"1-2photoshop修图效果效果制作",
        time:"15分钟"
      },
      {
        title:"1-2photoshop修图效果效果制作",
        time:"15分钟"
      },
      {
        title:"1-2photoshop修图效果效果制作",
        time:"15分钟"
      },
      {
        title:"1-2photoshop修图效果效果制作",
        time:"15分钟"
      } ,
      {
        title:"1-2photoshop修图效果效果制作",
        time:"15分钟"
      }]

    return{
      all:function(){
        return studymulu;
      }
    }
  })

  .factory('pingjiaList',function() {

    var assesslist = [{
      pic: "img/study_tx.jpg",
      name: "李晓丽",
      title: "10分钟前",
      cont: "多谢大神指点",
    },
      {
        pic: "img/study_tx.jpg",
        name: "李晓丽",
        title: "10分钟前",
        cont: "多谢大神指点",
      },
      {
        pic:"img/study_tx.jpg",
        name: "李晓丽",
        title: "8分钟前",
        cont: "多谢大神指点",
      },
      {
        pic: "img/study_tx.jpg",
        name: "李晓丽",
        title: "刚刚",
        cont: "多谢大神指点",
      }]

    return{
      all:function(){
        return assesslist
      }
    }

  })

  /*测试数据结束   使用完成后，就可以注释掉了*/


  //调用浏览器的本地数据储存
  .factory('locals',['$window',function($window){
    return{
      //存储单个属性
      set :function(key,value){
        $window.localStorage[key]=value;
      },
      //读取单个属性
      get:function(key,defaultValue){
        return  $window.localStorage[key] || defaultValue;
      }
    }
  }])


  //页面之间共享数据的方法，使用方式，一个页面设置值，跳转页面，然后在另一个页面取值，并设置值为空。
  .factory('shareData',function($window){
    var allData = {};
    return{
      //存储单个属性
      set :function(key,value){
        allData[key]=value;
      },
      //读取单个属性
      get:function(key,defaultValue){
        return  allData[key] || defaultValue;
      }

    }
  })





