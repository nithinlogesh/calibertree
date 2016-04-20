
var express = require('express');
var app = express();


var http = require('http');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');


//Database connect to remote server
var db = mongojs('calibertree:calibertree@ec2-52-38-247-61.us-west-2.compute.amazonaws.com:27017/electioncentre', ['ecelectiontn']);


//local terminal  var db = mongojs('electioncentre', ['ecelectiontn']);

//server push the controll to index.html
app.use(express.static(__dirname + "/public"));


//kanchipuram 

  app.get('/contact1',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Alandur"},function (err,docs){
    	res.json(docs); });   }); 

   app.get('/contact2',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Chengalpattu"},function (err,docs){
    	res.json(docs); });   }); 

  app.get('/contact3',function (req, res)
 {
	 db.ecelectiontn.find({"constituencyname" : "Cheyyur"},function (err,docs){
     res.json(docs); }); }); 

  app.get('/contact4',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kancheepuram"},function (err,docs){
    	res.json(docs); });  }); 

  app.get('/contact5',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Madurantakam"},function (err,docs){
    	res.json(docs); });   });

   app.get('/contact6',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Pallavaram"},function (err,docs){
    	res.json(docs); }); });

   app.get('/contact7',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Shozhinganallur"},function (err,docs){
    	res.json(docs); });  });

   app.get('/contact8',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Sriperumbudur"},function (err,docs){
    	res.json(docs); });  });

   app.get('/contact9',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tambaram"},function (err,docs){
    	res.json(docs); });  });

   app.get('/contact10',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thiruporur"},function (err,docs){
    	res.json(docs); });});

   app.get('/contact11',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Uthiramerur"},function (err,docs){
    	res.json(docs); });  });


//THIRUVALLUR

    app.get('/contact12',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Ambattur"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact13',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Avadi"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact14',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Gummidipoondi"},function (err,docs){
    	res.json(docs); });
  });


  app.get('/contact15',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Madhavaram"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact16',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Maduravoyal"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact17',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Ponneri"},function (err,docs){
    	res.json(docs); });
  });
  


   app.get('/contact18',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Poonmallae"},function (err,docs){
    	res.json(docs); });
  });


  app.get('/contact19',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thiruvallur"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact20',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thiruvottiyur"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact21',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thiruttani"},function (err,docs){
    	res.json(docs); });
  });



//CUDDALORE



 app.get('/contact22',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Bhuvanagiri"},function (err,docs){
    	res.json(docs); });
  });


  app.get('/contact23',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Chidambaram"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact24',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kattumannarkoil"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact25',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kurinjipadi"},function (err,docs){
    	res.json(docs); });
  });

  
 app.get('/contact26',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Neyveli"},function (err,docs){
    	res.json(docs); });
  });


  app.get('/contact27',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Panruti"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact28',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tittakudi"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact29',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Vriddhachalam"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact30',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Cuddalore"},function (err,docs){
    	res.json(docs); });
  });



//VILLUPURAM


  app.get('/contact31',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Gingee"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact32',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kallakurichi"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact33',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Mailam"},function (err,docs){
    	res.json(docs); });
  });

  
 app.get('/contact34',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Rishivanthiyam"},function (err,docs){
    	res.json(docs); });
  });


  app.get('/contact35',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Sankarapuram"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact36',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tindivanam"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact37',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tirukoilur"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact38',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Ulundurpettai"},function (err,docs){
    	res.json(docs); });
  });


  
   app.get('/contact39',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Vanur"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact40',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Vikravandi"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact41',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Villupuram"},function (err,docs){
    	res.json(docs); });
  });


//VELLORE

   

   app.get('/contact42',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Arcot"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact43',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Ambur"},function (err,docs){
    	res.json(docs); });
  });


  
   app.get('/contact44',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Anaikattu"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact45',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Arakkonam"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact46',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Gudiyattam"},function (err,docs){
    	res.json(docs); });
  });




   app.get('/contact47',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Jolarpet"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact48',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Katpadi"},function (err,docs){
    	res.json(docs); });
  });


  
   app.get('/contact49',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kilvaithinankuppam"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact50',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "ranipet"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact51',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Sholingur"},function (err,docs){
    	res.json(docs); });
  });


  

   app.get('/contact52',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tirupattur"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact53',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Vaniyambadi"},function (err,docs){
    	res.json(docs); });
  });


  
   app.get('/contact54',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Vellore"},function (err,docs){
    	res.json(docs); });
  });


//THIRUVANNAMALAI   


   app.get('/contact55',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Arani"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact56',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Chengam"},function (err,docs){
    	res.json(docs); });
  });

 

   app.get('/contact57',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Cheyyar"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact58',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kalasapakkam"},function (err,docs){
    	res.json(docs); });
  });



   app.get('/contact59',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Polur"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact60',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tiruvannamalai"},function (err,docs){
    	res.json(docs); });
  });

  
   app.get('/contact61',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Vandavasi"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact62',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kilpennathur"},function (err,docs){
    	res.json(docs); });
  });
  

//SALEM 

  

  
   app.get('/contact63',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Attur"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact64',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Edappadi"},function (err,docs){
    	res.json(docs); });
  });



   app.get('/contact65',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Gangavalli"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact66',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Mettur"},function (err,docs){
    	res.json(docs); });
  });

  
   app.get('/contact67',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Omalur"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact68',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Salemnorth"},function (err,docs){
    	res.json(docs); });
  });
  



   app.get('/contact69',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Salemsouth"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact70',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Salemwest"},function (err,docs){
    	res.json(docs); });
  });

  
   app.get('/contact71',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Sankagiri"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact72',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Veerapandi"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact73',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Yercaud"},function (err,docs){
    	res.json(docs); });
  });
  

//NAMAKKAL


  
   app.get('/contact74',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kumarapalayam"},function (err,docs){
    	res.json(docs); });
  });
  
   app.get('/contact75',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Namakkal"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact76',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Paramathivelur"},function (err,docs){
    	res.json(docs); });
  });

  
   app.get('/contact77',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Rasipuram"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact78',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Senthamangalam"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact79',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tiruchengodu"},function (err,docs){
    	res.json(docs); });
  });


//DHARMAPURI

  
   app.get('/contact80',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Dharmapuri"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact81',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Harur"},function (err,docs){
    	res.json(docs); });
  });

  
   app.get('/contact82',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Palacodu"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact83',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Pappireddippatti"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact84',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Pennagaram"},function (err,docs){
    	res.json(docs); });
  });



//ERODE


  
   app.get('/contact85',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Anthiyur"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact86',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Bhavani"},function (err,docs){
    	res.json(docs); });
  });

  
   app.get('/contact87',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Bhavanisagar"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact88',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Erodeeast"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact89',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Erodewest"},function (err,docs){
    	res.json(docs); });
  });



   app.get('/contact90',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Gobichettipalayam"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact91',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Modakkurichi"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact92',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Perundurai"},function (err,docs){
    	res.json(docs); });
  });



//COIMBATORE

  

   app.get('/contact93',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Coimbatorenorth"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact94',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Coimbatoresouth"},function (err,docs){
    	res.json(docs); });
  });

  
   app.get('/contact95',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kavundampalayam"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact96',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kinathukadavu"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact97',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Mettuppalayam"},function (err,docs){
    	res.json(docs); });
  });



   app.get('/contact98',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Pollachi"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact99',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Singanallur"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact100',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Sulur"},function (err,docs){
    	res.json(docs); });
  });

  
   app.get('/contact101',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thondamuthur"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact102',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Valparai"},function (err,docs){
    	res.json(docs); });
  });


//NILGIRIS

  app.get('/contact103',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Coonoor"},function (err,docs){
    	res.json(docs); });
  });

  
   app.get('/contact104',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Gudalur"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact105',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Udhagamandalam"},function (err,docs){
    	res.json(docs); });
  });



//THANJAVUR


   app.get('/contact106',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kumbakonam"},function (err,docs){
    	res.json(docs); });
  });

  
   app.get('/contact107',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Orathanadu"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact108',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Papanasam"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact109',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Pattukkottai"},function (err,docs){
    	res.json(docs); });
  });

  
   app.get('/contact110',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Peravurani"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact111',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thanjavur"},function (err,docs){
    	res.json(docs); });
  });

  
  app.get('/contact112',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thiruvaiyaru"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact113',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thiruvidaimarudur"},function (err,docs){
    	res.json(docs); });
  });


//NAGAPATTINAM


   
   app.get('/contact114',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kilvelur"},function (err,docs){
    	res.json(docs); });
  });

  
   app.get('/contact115',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Mayiladuthurai"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact116',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Nagapattinam"},function (err,docs){
    	res.json(docs); });
  });

  
  app.get('/contact117',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Poompuhar"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact118',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Sirkazhi"},function (err,docs){
    	res.json(docs); });
  });

 

   app.get('/contact119',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Vedaranyam"},function (err,docs){
    	res.json(docs); });
  });


//THIRUVARUR

  

   app.get('/contact120',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Mannargudi"},function (err,docs){
    	res.json(docs); });
  });

  
  app.get('/contact121',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Nannilam"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact122',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thiruthuraipoondi"},function (err,docs){
    	res.json(docs); });
  });

 

   app.get('/contact123',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thiruvarur"},function (err,docs){
    	res.json(docs); });
  });



//THIRUCHIRAPPALLI

  
   app.get('/contact124',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Lalgudi"},function (err,docs){
    	res.json(docs); });
  });

  
  app.get('/contact125',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Manachanallur"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact126',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Manapparai"},function (err,docs){
    	res.json(docs); });
  });

 

   app.get('/contact127',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Musiri"},function (err,docs){
    	res.json(docs); });
  });



    app.get('/contact128',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Srirangam"},function (err,docs){
    	res.json(docs); });
  });

  
  app.get('/contact129',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thiruverumbur"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact130',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thuraiyur"},function (err,docs){
    	res.json(docs); });
  });

 

   app.get('/contact131',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tiruchirappallieast"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact132',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tiruchirappalliwest"},function (err,docs){
    	res.json(docs); });
  });


//KARUR


  app.get('/contact133',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "aravakurichi"},function (err,docs){
    	res.json(docs); });
  });
  
  
   app.get('/contact134',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Karur"},function (err,docs){
    	res.json(docs); });
  });

 

   app.get('/contact135',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Krishnarayapuram"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact136',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kulithalai"},function (err,docs){
    	res.json(docs); });
  });  

   
//PERAMBALUR

    
   app.get('/contact137',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kunnam"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact138',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Perambalur"},function (err,docs){
    	res.json(docs); });
  });  


//PUDUKKOTTAI

  
   app.get('/contact139',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Alangudi"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact140',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Aranthangi"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact141',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Gandharvakottai"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact142',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Pudukkottai"},function (err,docs){
    	res.json(docs); });
  });  



   app.get('/contact143',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thirumayam"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact144',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Viralimalai"},function (err,docs){
    	res.json(docs); });
  });  


//MADURAI 

   

   app.get('/contact145',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Maduraicentral"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact146',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Maduraieast"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact147',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Madurainorth"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact148',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Maduraisouth"},function (err,docs){
    	res.json(docs); });
  });  



   app.get('/contact149',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Maduraiwest"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact150',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Melur"},function (err,docs){
    	res.json(docs); });
  });  


  

  
   app.get('/contact151',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Sholavandan"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact152',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thirumangalam"},function (err,docs){
    	res.json(docs); });
  });  



   app.get('/contact153',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thiruparankundram"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact154',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Usilampatti"},function (err,docs){
    	res.json(docs); });
  });  


//THENI

  

   app.get('/contact155',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Andipatti"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact156',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Bodinayakanur"},function (err,docs){
    	res.json(docs); });
  });  



   app.get('/contact157',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Cumbum"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact158',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Periyakulam"},function (err,docs){
    	res.json(docs); });
  });  

 
//DINDIGUL

   
   app.get('/contact159',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Athoor"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact160',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Dindigul"},function (err,docs){
    	res.json(docs); });
  });  



   app.get('/contact161',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Natham"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact162',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Nilakkottai"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact163',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Oddanchatram"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact164',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Palani"},function (err,docs){
    	res.json(docs); });
  });  



   app.get('/contact165',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Vedasandur"},function (err,docs){
    	res.json(docs); });
  });


//RAMANATHAPURAM   


   app.get('/contact166',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Mudhukulathur"},function (err,docs){
    	res.json(docs); });
  });  



   app.get('/contact167',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Paramakudi"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact168',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Ramanathapuram"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact169',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tiruvadanai"},function (err,docs){
    	res.json(docs); });
  });



//VIRUDHUNAGAR


   app.get('/contact170',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Aruppukkottai"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact171',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Rajapalayam"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact172',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Sattur"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact173',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Sivakasi"},function (err,docs){
    	res.json(docs); });
  });
  
  

   app.get('/contact174',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Srivilliputhur"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact175',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tiruchuli"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact176',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Virudhunagar"},function (err,docs){
    	res.json(docs); });
  });
  

//SIVAGANGAI

  

   app.get('/contact177',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Karaikudi"},function (err,docs){
    	res.json(docs); });
  });
  
  

   app.get('/contact178',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Manamadurai"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact179',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Sivagangai"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact180',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tiruppattur"},function (err,docs){
    	res.json(docs); });
  });


//TIRUNELVELI

  

   app.get('/contact181',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Alangulam"},function (err,docs){
    	res.json(docs); });
  });
  
  

   app.get('/contact182',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Ambasamudram"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact183',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kadayanallur"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact184',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Nanguneri"},function (err,docs){
    	res.json(docs); });
  });




   app.get('/contact185',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Palayamkottai"},function (err,docs){
    	res.json(docs); });
  });
  
  

   app.get('/contact186',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Radhapuram"},function (err,docs){
    	res.json(docs); });
  });


   app.get('/contact187',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Sankarankovil"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact188',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tenkasi"},function (err,docs){
    	res.json(docs); });
  });

 

   app.get('/contact189',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tirunelveli"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact190',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Vesudevanallur"},function (err,docs){
    	res.json(docs); });
  });


//THOOTHUKUDI

  

   app.get('/contact191',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kovilpatti"},function (err,docs){
    	res.json(docs); });
  });

 

   app.get('/contact192',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Ottapidaram"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact193',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Srivaikuntam"},function (err,docs){
    	res.json(docs); });
  });


   
   app.get('/contact194',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thoothukkudi"},function (err,docs){
    	res.json(docs); });
  });

 

   app.get('/contact195',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tiruchendur"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact196',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Vilathikulam"},function (err,docs){
    	res.json(docs); });
  });


//KANNIYAKUMARI

    

   app.get('/contact197',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Colachal"},function (err,docs){
    	res.json(docs); });
  });


   
   app.get('/contact198',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kanniyakumari"},function (err,docs){
    	res.json(docs); });
  });

 

   app.get('/contact199',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Killiyoor"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact200',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Nagercoil"},function (err,docs){
    	res.json(docs); });
  });

   

   app.get('/contact201',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Padmanabhapuram"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact202',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Vilavancode"},function (err,docs){
    	res.json(docs); });
  });


//KRISHNAGIRI

    

   app.get('/contact203',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Bargur"},function (err,docs){
    	res.json(docs); });
  });

   

   app.get('/contact204',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Hosur"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact205',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Krishnagiri"},function (err,docs){
    	res.json(docs); });
  });

   
   app.get('/contact206',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thalli"},function (err,docs){
    	res.json(docs); });
  });

   

   app.get('/contact207',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Uthangarai"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact208',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Veppanahalli"},function (err,docs){
    	res.json(docs); });
  });

//ARIYALUR

  

   app.get('/contact209',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Ariyalur"},function (err,docs){
    	res.json(docs); });
  });

   

   app.get('/contact210',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Jayankondam"},function (err,docs){
    	res.json(docs); });
  });  


//TIRUPPUR

  
   app.get('/contact211',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Avinashi"},function (err,docs){
    	res.json(docs); });
  });


  
   app.get('/contact212',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Dharapuram"},function (err,docs){
    	res.json(docs); });
  });

   

   app.get('/contact213',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kangayam"},function (err,docs){
    	res.json(docs); });
  });  


   app.get('/contact214',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Madathukulam"},function (err,docs){
    	res.json(docs); });
  });

   

   app.get('/contact215',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Palladam"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact216',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tiruppurnorth"},function (err,docs){
    	res.json(docs); });
  });

   

   app.get('/contact217',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Tiruppursouth"},function (err,docs){
    	res.json(docs); });
  });  



   app.get('/contact218',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Udumalaipettai"},function (err,docs){
    	res.json(docs); });
  });


//CHENNAI
   

   app.get('/contact219',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Annanagar"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact220',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Chepaukkam"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact221',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Dr.Radhakrishnannagar"},function (err,docs){
    	res.json(docs); });
  });

   

   app.get('/contact222',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Egmore"},function (err,docs){
    	res.json(docs); });
  });  



   app.get('/contact223',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Harbour"},function (err,docs){
    	res.json(docs); });
  });


  
   app.get('/contact224',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Kolathur"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact225',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Mylapore"},function (err,docs){
    	res.json(docs); });
  });

   

   app.get('/contact226',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Perambur"},function (err,docs){
    	res.json(docs); });
  });  



   app.get('/contact227',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Royapuram"},function (err,docs){
    	res.json(docs); });
  });
 



 
   app.get('/contact228',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Saidapet"},function (err,docs){
    	res.json(docs); });
  });  


  
   app.get('/contact229',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thiruvikanagar"},function (err,docs){
    	res.json(docs); });
  });

   

   app.get('/contact230',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thiyagarayanagar"},function (err,docs){
    	res.json(docs); });
  });  



   app.get('/contact231',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Thousandlights"},function (err,docs){
    	res.json(docs); });
  });
 

  
  
   app.get('/contact232',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Velachery"},function (err,docs){
    	res.json(docs); });
  });

   

   app.get('/contact233',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Villivakkam"},function (err,docs){
    	res.json(docs); });
  });  



   app.get('/contact234',function (req, res)
 {
	   db.ecelectiontn.find({"constituencyname" : "Virugampakkam"},function (err,docs){
    	res.json(docs); });
  });
 

app.listen(8080);

console.log("Server running on port 8080");






