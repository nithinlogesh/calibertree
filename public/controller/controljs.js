


var sampleApp = angular.module('myapp', []);
 
//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'pages/home.html',
        controller: 'homecontroller'
    }).
      when('/Electioncandidates', {
        templateUrl: 'pages/Electioncandidates.html',
        controller: 'ecandidatescontroller'
    }).


      when('/Electionresult', {
        templateUrl: 'pages/Electionresult.html',
        controller: 'eresultcontroller'
      }).
       when('/Login', {
        templateUrl: 'pages/Login.html',
        controller: 'logincontroller'
      }).

      when('/Contact', {
        templateUrl: 'pages/contactus.html',
        controller: 'contactcontroller'
      }).
 
           when('/Online', {
        templateUrl: 'pages/onlinevoting.html',
        controller: 'onlinecontroller'
      }).



      when('/jeyalalitha', {
        templateUrl: 'partypages/admk.html',
        controller: 'admkcontroller'
      }).

      when('/karunanithi', {
        templateUrl: 'partypages/dmk.html',
        controller: 'dmkcontroller'
      }).

        when('/vijayakanth', {
        templateUrl: 'partypages/dmdk.html',
        controller: 'dmdkcontroller'
      }).
         when('/anbumani', {
        templateUrl: 'partypages/pmk.html',
        controller: 'dmdkcontroller'
      }).
          when('/vaiko', {
        templateUrl: 'partypages/mdmk.html',
        controller: 'mdmkcontroller'
      }).





      otherwise({
        redirectTo: '/home'
      });
}]);
 
 
sampleApp.controller('homecontroller', function($scope) {
     
    $scope.message = 'This is HOME pages';
   
     
});


 sampleApp.controller('ecandidatescontroller', function($scope, $http)
{ 










$scope.message = 'This is Election candidate  pages';

 //KANCHEEPURAM
    $http.get('/contact1').success(function(response) 
   {
       $scope.conalandur = response; });

     $http.get('/contact2').success(function(response) 
   {
       $scope.conchengalpattu = response;   
     });

    
   $http.get('/contact3').success(function(response)
  {
      $scope.concheyyur = response;   
   });


    
   $http.get('/contact4').success(function(response)
  {
      $scope.conkancheepuram = response;   //response object contains docs(document data)
   });



   $http.get('/contact5').success(function(response)
  {
      $scope.conmadurantakam = response;   //response object contains docs(document data)
   });


   $http.get('/contact6').success(function(response)
  {
      $scope.conpallavaram = response;   //response object contains docs(document data)
   });



   $http.get('/contact7').success(function(response)
  {
      $scope.conshozhinganallur = response;   //response object contains docs(document data)
   });



   $http.get('/contact8').success(function(response)
  {
      $scope.consriperumbudur = response;   //response object contains docs(document data)
   });



   $http.get('/contact9').success(function(response)
  {
      $scope.contambaram = response;   //response object contains docs(document data)
   });




   $http.get('/contact10').success(function(response)
  {
      $scope.conthiruporur = response;   //response object contains docs(document data)
   });



   $http.get('/contact11').success(function(response)
  {
      $scope.conuthiramerur = response;   //response object contains docs(document data)
   });


//THIRUVALLUR

    

   $http.get('/contact12').success(function(response)
  {
      $scope.conambattur = response;   //response object contains docs(document data)
   });



   $http.get('/contact13').success(function(response)
  {
      $scope.conavadi = response;   //response object contains docs(document data)
   });



   $http.get('/contact14').success(function(response)
  {
      $scope.congummidipoondi = response;   //response object contains docs(document data)
   });




   $http.get('/contact15').success(function(response)
  {
      $scope.conmadhavaram = response;   //response object contains docs(document data)
   });



   $http.get('/contact16').success(function(response)
  {
      $scope.conmaduravoyal = response;   //response object contains docs(document data)
   });


   $http.get('/contact17').success(function(response)
  {
      $scope.conponneri = response;   //response object contains docs(document data)
   });



   $http.get('/contact18').success(function(response)
  {
      $scope.conpoonmallae = response;   //response object contains docs(document data)
   });



   $http.get('/contact19').success(function(response)
  {
      $scope.conthiruvallur = response;   //response object contains docs(document data)
   });




   $http.get('/contact20').success(function(response)
  {
      $scope.conthiruvottiyur = response;   //response object contains docs(document data)
   });



   $http.get('/contact21').success(function(response)
  {
      $scope.contiruttani = response;   //response object contains docs(document data)
   });



//CUDDALORE

    

   $http.get('/contact22').success(function(response)
  {
      $scope.conbhuvanagiri = response;   //response object contains docs(document data)
   });



   $http.get('/contact23').success(function(response)
  {
      $scope.conchidambaram = response;   //response object contains docs(document data)
   });



   $http.get('/contact24').success(function(response)
  {
      $scope.conkattumannarkoil = response;   //response object contains docs(document data)
   });




   $http.get('/contact25').success(function(response)
  {
      $scope.conkurinjipadi = response;   //response object contains docs(document data)
   });



   $http.get('/contact26').success(function(response)
  {
      $scope.conneyveli = response;   //response object contains docs(document data)
   });


  

   $http.get('/contact27').success(function(response)
  {
      $scope.conpanruti = response;   //response object contains docs(document data)
   });



   $http.get('/contact28').success(function(response)
  {
      $scope.contittakudi = response;   //response object contains docs(document data)
   });



   $http.get('/contact29').success(function(response)
  {
      $scope.convriddhachalam = response;   //response object contains docs(document data)
   });




   $http.get('/contact30').success(function(response)
  {
      $scope.concuddalore = response;   //response object contains docs(document data)
   });


//VILLUPURAM


   $http.get('/contact31').success(function(response)
  {
      $scope.congingee = response;   //response object contains docs(document data)
   });


  
   $http.get('/contact32').success(function(response)
  {
      $scope.conkallakurichi = response;   //response object contains docs(document data)
   });



   $http.get('/contact33').success(function(response)
  {
      $scope.conmailam = response;   //response object contains docs(document data)
   });


  
   $http.get('/contact34').success(function(response)
  {
      $scope.conrishivanthiyam = response;   //response object contains docs(document data)
   });


  
   $http.get('/contact35').success(function(response)
  {
      $scope.consankarapuram = response;   //response object contains docs(document data)
   });



   $http.get('/contact36').success(function(response)
  {
      $scope.contindivanam = response;   //response object contains docs(document data)
   });



  

   $http.get('/contact37').success(function(response)
  {
      $scope.contirukoilur = response;   //response object contains docs(document data)
   });


  
   $http.get('/contact38').success(function(response)
  {
      $scope.conulundurpettai = response;   //response object contains docs(document data)
   });


  
   $http.get('/contact39').success(function(response)
  {
      $scope.convanur = response;   //response object contains docs(document data)
   });



   $http.get('/contact40').success(function(response)
  {
      $scope.convikravandi = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact41').success(function(response)
  {
      $scope.convillupuram = response;   //response object contains docs(document data)
   });

//VELLOREE

   
   $http.get('/contact42').success(function(response)
  {
      $scope.conarcot = response;   //response object contains docs(document data)
   });


  
   $http.get('/contact43').success(function(response)
  {
      $scope.conambur = response;   //response object contains docs(document data)
   });


  
   $http.get('/contact44').success(function(response)
  {
      $scope.conanaikattu = response;   //response object contains docs(document data)
   });



   $http.get('/contact45').success(function(response)
  {
      $scope.conarakkonam = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact46').success(function(response)
  {
      $scope.congudiyattam = response;   //response object contains docs(document data)
   });

   

   $http.get('/contact47').success(function(response)
  {
      $scope.conjolarpet = response;   //response object contains docs(document data)
   });



   $http.get('/contact48').success(function(response)
  {
      $scope.conkatpadi = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact49').success(function(response)
  {
      $scope.conkilvaithinankuppam = response;   //response object contains docs(document data)
   });

     
   
   $http.get('/contact50').success(function(response)
  {
      $scope.conranipet = response;   //response object contains docs(document data)
   });

   

   $http.get('/contact51').success(function(response)
  {
      $scope.consholingur = response;   //response object contains docs(document data)
   });



   $http.get('/contact52').success(function(response)
  {
      $scope.contirupattur = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact53').success(function(response)
  {
      $scope.convaniyambadi = response;   //response object contains docs(document data)
   });


   
   
   $http.get('/contact54').success(function(response)
  {
      $scope.convellore = response;   //response object contains docs(document data)
   });

//TIRUVANNAMALAI
  

   $http.get('/contact55').success(function(response)
  {
      $scope.conarani = response;   //response object contains docs(document data)
   });



   $http.get('/contact56').success(function(response)
  {
      $scope.conchengam = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact57').success(function(response)
  {
      $scope.concheyyar = response;   //response object contains docs(document data)
   });


   
   
   $http.get('/contact58').success(function(response)
  {
      $scope.conkalasapakkam = response;   //response object contains docs(document data)
   });


  
   $http.get('/contact59').success(function(response)
  {
      $scope.conpolur = response;   //response object contains docs(document data)
   });



   $http.get('/contact60').success(function(response)
  {
      $scope.contiruvannamalai = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact61').success(function(response)
  {
      $scope.convandavasi = response;   //response object contains docs(document data)
   });


   
   
   $http.get('/contact62').success(function(response)
  {
      $scope.conkilpennathur = response;   //response object contains docs(document data)
   });
  


//SALEM

  
   
   
   $http.get('/contact63').success(function(response)
  {
      $scope.conattur = response;   //response object contains docs(document data)
   });


  
   $http.get('/contact64').success(function(response)
  {
      $scope.conedappadi = response;   //response object contains docs(document data)
   });



   $http.get('/contact65').success(function(response)
  {
      $scope.congangavalli = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact66').success(function(response)
  {
      $scope.conmettur = response;   //response object contains docs(document data)
   });


   
   
   $http.get('/contact67').success(function(response)
  {
      $scope.conomalur = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact68').success(function(response)
  {
      $scope.consalemnorth = response;   //response object contains docs(document data)
   });



   $http.get('/contact69').success(function(response)
  {
      $scope.consalemsouth = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact70').success(function(response)
  {
      $scope.consalemwest = response;   //response object contains docs(document data)
   });


   
   
   $http.get('/contact71').success(function(response)
  {
      $scope.consankagiri = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact72').success(function(response)
  {
      $scope.conveerapandi = response;   //response object contains docs(document data)
   });


   
   
   $http.get('/contact73').success(function(response)
  {
      $scope.conyercaud = response;   //response object contains docs(document data)
   });


//NAMAKKAL


   
   
   $http.get('/contact74').success(function(response)
  {
      $scope.conkumarapalayam = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact75').success(function(response)
  {
      $scope.connamakkal = response;   //response object contains docs(document data)
   });


   
   
   $http.get('/contact76').success(function(response)
  {
      $scope.conparamathivelur = response;   //response object contains docs(document data)
   });

  


   $http.get('/contact77').success(function(response)
  {
      $scope.conrasipuram = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact78').success(function(response)
  {
      $scope.consenthamangalam = response;   //response object contains docs(document data)
   });


   
   
   $http.get('/contact79').success(function(response)
  {
      $scope.contiruchengodu = response;   //response object contains docs(document data)
   });


 //DHARMAPURI



   $http.get('/contact80').success(function(response)
  {
      $scope.condharmapuri = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact81').success(function(response)
  {
      $scope.conharur = response;   //response object contains docs(document data)
   });


   
   
   $http.get('/contact82').success(function(response)
  {
      $scope.conpalacodu = response;   //response object contains docs(document data)
   });

  

   $http.get('/contact83').success(function(response)
  {
      $scope.conpappireddippatti = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact84').success(function(response)
  {
      $scope.conpennagaram = response;   //response object contains docs(document data)
   });


   
//ERODE


   $http.get('/contact85').success(function(response)
  {
      $scope.conanthiyur = response;   //response object contains docs(document data)
   });

   
   
   $http.get('/contact86').success(function(response)
  {
      $scope.conbhavani = response;   //response object contains docs(document data)
   });

  

   $http.get('/contact87').success(function(response)
  {
      $scope.conbhavanisagar = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact88').success(function(response)
  {
      $scope.conerodeeast = response;   //response object contains docs(document data)
   });
   
  

   $http.get('/contact89').success(function(response)
  {
      $scope.conerodewest = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact90').success(function(response)
  {
      $scope.congobichettipalayam = response;   //response object contains docs(document data)
   });


   $http.get('/contact91').success(function(response)
  {
      $scope.conmodakkurichi = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact92').success(function(response)
  {
      $scope.conperundurai = response;   //response object contains docs(document data)
   });


//COIMBATORE

   

   $http.get('/contact93').success(function(response)
  {
      $scope.concoimbatorenorth = response;   //response object contains docs(document data)
   });
   
  

   $http.get('/contact94').success(function(response)
  {
      $scope.concoimbatoresouth = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact95').success(function(response)
  {
      $scope.conkavundampalayam = response;   //response object contains docs(document data)
   });


   $http.get('/contact96').success(function(response)
  {
      $scope.conkinathukadavu = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact97').success(function(response)
  {
      $scope.conmettuppalayam = response;   //response object contains docs(document data)
   });


  
   $http.get('/contact98').success(function(response)
  {
      $scope.conpollachi = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact99').success(function(response)
  {
      $scope.consinganallur = response;   //response object contains docs(document data)
   });

  

   $http.get('/contact100').success(function(response)
  {
      $scope.consulur = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact101').success(function(response)
  {
      $scope.conthondamuthur = response;   //response object contains docs(document data)
   });


  
   $http.get('/contact102').success(function(response)
  {
      $scope.convalparai = response;   //response object contains docs(document data)
   });


//NILGIRIS


   
   
   $http.get('/contact103').success(function(response)
  {
      $scope.concoonoor = response;   //response object contains docs(document data)
   });


  
   $http.get('/contact104').success(function(response)
  {
      $scope.congudalur = response;   //response object contains docs(document data)
   });



   
   $http.get('/contact105').success(function(response)
  {
      $scope.conudhagamandalam = response;   //response object contains docs(document data)
   });


//THANJAVUR

  
   $http.get('/contact106').success(function(response)
  {
      $scope.conkumbakonam = response;   //response object contains docs(document data)
   });

   
   $http.get('/contact107').success(function(response)
  {
      $scope.conoranthanadu = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact108').success(function(response)
  {
      $scope.conpapanasam = response;   //response object contains docs(document data)
   });

   
   $http.get('/contact109').success(function(response)
  {
      $scope.conpattukkottai = response;   //response object contains docs(document data)
   });

 
   $http.get('/contact110').success(function(response)
  {
      $scope.conperavurani = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact111').success(function(response)
  {
      $scope.conthanjavur = response;   //response object contains docs(document data)
   });

   
   $http.get('/contact112').success(function(response)
  {
      $scope.conthiruvaiyaru = response;   //response object contains docs(document data)
   });

   

   $http.get('/contact113').success(function(response)
  {
      $scope.conthiruvidaimarudur = response;   //response object contains docs(document data)
   });


//NAGAPATTINAM


   
   $http.get('/contact114').success(function(response)
  {
      $scope.conkilvelur = response;   //response object contains docs(document data)
   });

   
   $http.get('/contact115').success(function(response)
  {
      $scope.conmayiladuthurai = response;   //response object contains docs(document data)
   });

 
   $http.get('/contact116').success(function(response)
  {
      $scope.connagapattinam = response;   //response object contains docs(document data)
   });



   $http.get('/contact117').success(function(response)
  {
      $scope.conpoonpuhar = response;   //response object contains docs(document data)
   });

   
   $http.get('/contact118').success(function(response)
  {
      $scope.consirkazhi = response;   //response object contains docs(document data)
   });

 
   $http.get('/contact119').success(function(response)
  {
      $scope.convedaranyam = response;   //response object contains docs(document data)
   });



//THIRUVARUR

    

   $http.get('/contact120').success(function(response)
  {
      $scope.conmannargudi = response;   //response object contains docs(document data)
   });

   
   $http.get('/contact121').success(function(response)
  {
      $scope.connannilam = response;   //response object contains docs(document data)
   });

 
   $http.get('/contact122').success(function(response)
  {
      $scope.conthiruthuraipoondi = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact123').success(function(response)
  {
      $scope.conthiruvarur = response;   //response object contains docs(document data)
   });


//THIRUCHIRAPPALLI

  


   $http.get('/contact124').success(function(response)
  {
      $scope.conlalgudi = response;   //response object contains docs(document data)
   });

   
   $http.get('/contact125').success(function(response)
  {
      $scope.conmanachanallur = response;   //response object contains docs(document data)
   });

 
   $http.get('/contact126').success(function(response)
  {
      $scope.conmanapparai = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact127').success(function(response)
  {
      $scope.conmusiri = response;   //response object contains docs(document data)
   });

   

   $http.get('/contact128').success(function(response)
  {
      $scope.consrirangam = response;   //response object contains docs(document data)
   });

   
   $http.get('/contact129').success(function(response)
  {
      $scope.conthiruverumbur = response;   //response object contains docs(document data)
   });

 
   $http.get('/contact130').success(function(response)
  {
      $scope.conthuraiyur = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact131').success(function(response)
  {
      $scope.contiruchirappallieast = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact132').success(function(response)
  {
      $scope.contiruchirappalliwest = response;   //response object contains docs(document data)
   });


//KARUR


    
   $http.get('/contact133').success(function(response)
  {
      $scope.conaravakurichi = response;   //response object contains docs(document data)
   });

 
   $http.get('/contact134').success(function(response)
  {
      $scope.conkarur = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact135').success(function(response)
  {
      $scope.conkrishnarayapuram = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact136').success(function(response)
  {
      $scope.conkulithalai = response;   //response object contains docs(document data)
   });


//PERAMBALUR

    
   $http.get('/contact137').success(function(response)
  {
      $scope.conkunnam = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact138').success(function(response)
  {
      $scope.conperambalur = response;   //response object contains docs(document data)
   });

   
//PUDUKKOTTAI


   
   $http.get('/contact139').success(function(response)
  {
      $scope.conalangudi = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact140').success(function(response)
  {
      $scope.conaranthangi = response;   //response object contains docs(document data)
   });



   $http.get('/contact141').success(function(response)
  {
      $scope.congandharvakottai = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact142').success(function(response)
  {
      $scope.conpudukkottai = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact143').success(function(response)
  {
      $scope.conthirumayam = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact144').success(function(response)
  {
      $scope.conviralimalai = response;   //response object contains docs(document data)
   });



//MADURAI



   $http.get('/contact145').success(function(response)
  {
      $scope.conmaduraicentral = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact146').success(function(response)
  {
      $scope.conmaduraieast = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact147').success(function(response)
  {
      $scope.conmadurainorth = response;   //response object contains docs(document data)
   });

   
   $http.get('/contact148').success(function(response)
  {
      $scope.conmaduraisouth = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact149').success(function(response)
  {
      $scope.conmaduraiwest = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact150').success(function(response)
  {
      $scope.conmelur = response;   //response object contains docs(document data)
   });

    $http.get('/contact151').success(function(response)
  {
      $scope.consholavandan = response;   //response object contains docs(document data)
   });

   
   $http.get('/contact152').success(function(response)
  {
      $scope.conthirumangalam = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact153').success(function(response)
  {
      $scope.conthiruparankundram = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact154').success(function(response)
  {
      $scope.conusilampatti = response;   //response object contains docs(document data)
   });


//THENI

 
    $http.get('/contact155').success(function(response)
  {
      $scope.conandipatti = response;   //response object contains docs(document data)
   });

   
   $http.get('/contact156').success(function(response)
  {
      $scope.conbodinayakanur = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact157').success(function(response)
  {
      $scope.concumbum = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact158').success(function(response)
  {
      $scope.conperiyakulam = response;   //response object contains docs(document data)
   });


//DINDIGUL

   

    $http.get('/contact159').success(function(response)
  {
      $scope.conathoor = response;   //response object contains docs(document data)
   });

   
   $http.get('/contact160').success(function(response)
  {
      $scope.condindigul = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact161').success(function(response)
  {
      $scope.connatham = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact162').success(function(response)
  {
      $scope.connilakkottai = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact163').success(function(response)
  {
      $scope.conoddanchatram = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact164').success(function(response)
  {
      $scope.conpalani = response;   //response object contains docs(document data)
   });



   $http.get('/contact165').success(function(response)
  {
      $scope.convedasandur = response;   //response object contains docs(document data)
   });



//RAMANATHAPURAM

   

   $http.get('/contact166').success(function(response)
  {
      $scope.conmudhukulathur = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact167').success(function(response)
  {
      $scope.conparamakudi = response;   //response object contains docs(document data)
   });



   $http.get('/contact168').success(function(response)
  {
      $scope.conramanathapuram = response;   //response object contains docs(document data)
   });


   $http.get('/contact169').success(function(response)
  {
      $scope.contiruvadanai = response;   //response object contains docs(document data)
   });


//VIRUDHUNAGAR

    

   $http.get('/contact170').success(function(response)
  {
      $scope.conaruppukkottai = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact171').success(function(response)
  {
      $scope.conrajapalayam = response;   //response object contains docs(document data)
   });



   $http.get('/contact172').success(function(response)
  {
      $scope.consattur = response;   //response object contains docs(document data)
   });


  
   $http.get('/contact173').success(function(response)
  {
      $scope.consivakasi = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact174').success(function(response)
  {
      $scope.consrivilliputhur = response;   //response object contains docs(document data)
   });



   $http.get('/contact175').success(function(response)
  {
      $scope.contiruchuli = response;   //response object contains docs(document data)
   });



   $http.get('/contact176').success(function(response)
  {
      $scope.convirudhunagar = response;   //response object contains docs(document data)
   });



//SIVAGANGAI

   
    $http.get('/contact177').success(function(response)
  {
      $scope.conkaraikudi = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact178').success(function(response)
  {
      $scope.conmanamadurai = response;   //response object contains docs(document data)
   });



   $http.get('/contact179').success(function(response)
  {
      $scope.consivagangai = response;   //response object contains docs(document data)
   });



   $http.get('/contact180').success(function(response)
  {
      $scope.contiruppattur = response;   //response object contains docs(document data)
   });


//TIRUNELVELI


    
    $http.get('/contact181').success(function(response)
  {
      $scope.conalangulam = response;   //response object contains docs(document data)
   });



   $http.get('/contact182').success(function(response)
  {
      $scope.conambasamudram = response;   //response object contains docs(document data)
   });



   $http.get('/contact183').success(function(response)
  {
      $scope.conkadayanallur = response;   //response object contains docs(document data)
   });


    $http.get('/contact184').success(function(response)
  {
      $scope.connanguneri = response;   //response object contains docs(document data)
   });



   $http.get('/contact185').success(function(response)
  {
      $scope.conpalayamkottai = response;   //response object contains docs(document data)
   });



   $http.get('/contact186').success(function(response)
  {
      $scope.conradhapuram = response;   //response object contains docs(document data)
   });

   

   $http.get('/contact187').success(function(response)
  {
      $scope.consankarankovil = response;   //response object contains docs(document data)
   });


    $http.get('/contact188').success(function(response)
  {
      $scope.contenkasi = response;   //response object contains docs(document data)
   });



   $http.get('/contact189').success(function(response)
  {
      $scope.contirunelveli = response;   //response object contains docs(document data)
   });



   $http.get('/contact190').success(function(response)
  {
      $scope.convasudevanallur = response;   //response object contains docs(document data)
   });


//THOOTHUKUDI


   

   $http.get('/contact191').success(function(response)
  {
      $scope.conkovilpatti = response;   //response object contains docs(document data)
   });


    $http.get('/contact192').success(function(response)
  {
      $scope.conottapidaram = response;   //response object contains docs(document data)
   });



   $http.get('/contact193').success(function(response)
  {
      $scope.consrivaikuntam = response;   //response object contains docs(document data)
   });



   $http.get('/contact194').success(function(response)
  {
      $scope.conthoothukkudi = response;   //response object contains docs(document data)
   });


   
    $http.get('/contact195').success(function(response)
  {
      $scope.contiruchendur = response;   //response object contains docs(document data)
   });



   $http.get('/contact196').success(function(response)
  {
      $scope.convilathikulam = response;   //response object contains docs(document data)
   });


//KANNIYAKUMARI


   $http.get('/contact197').success(function(response)
  {
      $scope.concolachal = response;   //response object contains docs(document data)
   });

   

    $http.get('/contact198').success(function(response)
  {
      $scope.conkanniyakumari = response;   //response object contains docs(document data)
   });



   $http.get('/contact199').success(function(response)
  {
      $scope.conkilliyoor = response;   //response object contains docs(document data)
   });



   $http.get('/contact200').success(function(response)
  {
      $scope.connagercoil = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact201').success(function(response)
  {
      $scope.conpadmanabhapuram = response;   //response object contains docs(document data)
   });



   $http.get('/contact202').success(function(response)
  {
      $scope.convilavancode = response;   //response object contains docs(document data)
   });


//KRISHNAGIRI

   
   $http.get('/contact203').success(function(response)
  {
      $scope.conbargur = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact204').success(function(response)
  {
      $scope.conhosur = response;   //response object contains docs(document data)
   });



   $http.get('/contact205').success(function(response)
  {
      $scope.conkrishnagiri = response;   //response object contains docs(document data)
   });

   
   $http.get('/contact206').success(function(response)
  {
      $scope.conthalli = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact207').success(function(response)
  {
      $scope.conuthangarai = response;   //response object contains docs(document data)
   });



   $http.get('/contact208').success(function(response)
  {
      $scope.conveppanahalli = response;   //response object contains docs(document data)
   });


//ARIYALUR


   $http.get('/contact209').success(function(response)
  {
      $scope.conariyalur = response;   //response object contains docs(document data)
   });



   $http.get('/contact210').success(function(response)
  {
      $scope.conjayankondam = response;   //response object contains docs(document data)
   });


//TIRUPPUR

    
      $http.get('/contact211').success(function(response)
  {
      $scope.conavinashi = response;   //response object contains docs(document data)
   });



   $http.get('/contact212').success(function(response)
  {
      $scope.condharapuram = response;   //response object contains docs(document data)
   });

     $http.get('/contact213').success(function(response)
  {
      $scope.conkangayam = response;   //response object contains docs(document data)
   });



   $http.get('/contact214').success(function(response)
  {
      $scope.conmadathukulam = response;   //response object contains docs(document data)
   });

  $http.get('/contact215').success(function(response)
  {
      $scope.conpalladam = response;   //response object contains docs(document data)
   });



   $http.get('/contact216').success(function(response)
  {
      $scope.contiruppurnorth = response;   //response object contains docs(document data)
   });

  
   $http.get('/contact217').success(function(response)
  {
      $scope.contiruppursouth = response;   //response object contains docs(document data)
   });



   $http.get('/contact218').success(function(response)
  {
      $scope.conudumalaipettai = response;   //response object contains docs(document data)
   });

//CHENNAI

    
     $http.get('/contact219').success(function(response)
  {
      $scope.conannanagar = response;   //response object contains docs(document data)
   });

  $http.get('/contact220').success(function(response)
  {
      $scope.conchepaukkam = response;   //response object contains docs(document data)
   });



   $http.get('/contact221').success(function(response)
  {
      $scope.conrknagar = response;   //response object contains docs(document data)
   });

  
   $http.get('/contact222').success(function(response)
  {
      $scope.conegmore = response;   //response object contains docs(document data)
   });



   $http.get('/contact223').success(function(response)
  {
      $scope.conharbour = response;   //response object contains docs(document data)
   });


   $http.get('/contact224').success(function(response)
  {
      $scope.conkolathur = response;   //response object contains docs(document data)
   });

  
   $http.get('/contact225').success(function(response)
  {
      $scope.conmylapore = response;   //response object contains docs(document data)
   });



   $http.get('/contact226').success(function(response)
  {
      $scope.conperambur = response;   //response object contains docs(document data)
   });


    $http.get('/contact227').success(function(response)
  {
      $scope.conroyapuram = response;   //response object contains docs(document data)
   });

  
   $http.get('/contact228').success(function(response)
  {
      $scope.consaidapet = response;   //response object contains docs(document data)
   });



   $http.get('/contact229').success(function(response)
  {
      $scope.conthirukikanagar = response;   //response object contains docs(document data)
   });


   
   $http.get('/contact230').success(function(response)
  {
      $scope.conthiyagarayanagar = response;   //response object contains docs(document data)
   });


    $http.get('/contact231').success(function(response)
  {
      $scope.conthousandlights = response;   //response object contains docs(document data)
   });

  
   $http.get('/contact232').success(function(response)
  {
      $scope.convelachery = response;   //response object contains docs(document data)
   });



   $http.get('/contact233').success(function(response)
  {
      $scope.convillivakkam = response;   //response object contains docs(document data)
   });

  
   $http.get('/contact234').success(function(response)
  {
      $scope.convirugampakkam = response;   //response object contains docs(document data)
   });






});



 
    







sampleApp.controller('eresultcontroller', function($scope) {
 
    $scope.message = 'This is Election result pages';
 
});


sampleApp.controller('logincontroller', function($scope) {
 
    $scope.message = 'This is login pages';
 
});


sampleApp.controller('contactcontroller', function($scope) {
 
    $scope.message = 'This is contact controller pages';
 
});


sampleApp.controller('onlinecontroller', function($scope) {
 
    $scope.message = 'This is online controller pages';
 
});















