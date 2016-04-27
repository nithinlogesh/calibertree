 

 function populate(s1,s2) 
{      
   
         var s1= document.getElementById(s1);
          var s2= document.getElementById(s2);

          s2.innerHTML = "";
          
           if (s1.value == "Chennai")
           {
                   var optionArray = ["|","Annanagar|Annanagar","Chepaukkam|Chepaukkam","Dr.Radhakrishnannagar|Dr.Radhakrishnannagar","Egmore|Egmore","Harbour|Harbour","Kolathur|Kolathur","Mylapore|Mylapore","Perambur|Perambur","Royapuram|Royapuram","Saidapet|Saidapet","Thiruvikanagar|Thiruvikanagar","Thiyagarayanagar|Thiyagarayanagar","Thousandlights|Thousandlights","Velachery|Velachery","Villivakkam|Villivakkam","Virugampakkam|Virugampakkam"];
              } 
           else if (s1.value == "Kancipuram") 
           {
                   var optionArray = ["|","Alandur|Alandur","Chengalpattu|Chengalpattu","Cheyyur|Cheyyur","Kancheepuram|Kancheepuram","Madurantakam|Madurantakam","Pallavaram|Pallavaram","Shozhinganallur|Shozhinganallu","Sriperumbudur|Sriperumbudur","Tambaram|Tambaram","Thiruporur|Thiruporur","Uthiramerur|Uthiramerur"]; }
             
                   else if (s1.value == "Tiruvallur")
            {
                   var optionArray = ["|","Ambattur|Ambattur","Avadi|Avadi","Gummidipoondi|Gummidipoondi","Madhavaram|Madhavaram","Maduravoyal|Maduravoyal","Ponneri|Ponneri","Poonmallae|Poonmalle","Thiruvallur|Thiruvallur","Thiruvottiyur|Thiruvottiyur","Tiruttani|Tiruttani"];
            }

                 
             else if (s1.value == "Cuddalore")
            {
                   var optionArray = ["|","Bhuvanagiri|Bhuvanagiri","Chidambaram|Chidambaram","Kattumannarkoil|Kattumannarkoil","Kurinjipadi|Kurinjipadi","Neyveli|Neyveli","Panruti|Panruti","Tittakudi|Tittakudi","Vriddhachalam|Vriddhachalam","Cuddalore|Cuddalore"];
            }

            else if (s1.value == "Villupuram") {
                   var optionArray = ["|","Gingee|Gingee","Kallakurichi|Kallakurichi","Mailam|Mailam",
                   "Rishivanthiyam|Rishivanthiyam","Sankarapuram|Sankarapuram","Tindivanam|Tindivanam","Tirukoilur|Tirukoilur","Ulundurpettai|Ulundurpettai","Vanur|Vanur","Vikravandi|Vikravandi","Villupuram|Villupuram"]; }

      


           else if (s1.value == "Vellore")
            {
                   var optionArray = ["|","Arcot|Arcot","Ambur|Ambur","Anaikattu|Anaikattu","Arakkonam|Arakkonam","Gudiyattam|Gudiyattam","Jolarpet|Jolarpet","Katpadi|Katpadi","Kilvaithinankuppam|Kilvaithinankuppam","Ranipet|Ranipet","Sholingur|Sholingur","Tirupattur|Tirupattur","Vaniyambadi|Vaniyambadi","Vellore|Vellore"];
            }
             else if (s1.value == "Tiruvannamalai")
            {
                   var optionArray = ["|","Arani|Arani","Chengam|Chengam","Cheyyar|Cheyyar","Kalasapakkam|Kalasapakkam","Polur|Polur","Tiruvannamalai|Tiruvannamalai","Vandavasi|Vandavasi","Kilpennathur|Kilpennathur"];
            }

      
            else if (s1.value == "Salem")
            {
                   var optionArray = ["|","Attur|Attur","Edappadi|Edappadi","Gangavalli|Gangavalli","Mettur|Mettur","Omalur|Omalur","Salemnorth|Salemnorth","Salemsouth|Salemsouth","Salemwest|Salemwest","Sankagiri|Sankagiri","Veerapandi|Veerapandi","Yercaud|Yercaud"];
            }

             else if (s1.value == "Namakkal")
            {
                   var optionArray = ["|","Kumarapalayam|Kumarapalayam","Namakkal|Namakkal","Paramathivelur|Paramathivelur","Rasipuram|Rasipuram","Senthamangalam|Senthamangalam","Tiruchengodu|Tiruchengodu"];
            }

      
            
             else if (s1.value == "Dharmapuri")
            {
                   var optionArray = ["|","Dharmapuri|Dharmapuri","Harur|Harur","Palacodu|Palacodu","Pappireddippatti|Pappireddippatti","Pennagaram|Pennagaram"];
            }

             
             else if (s1.value == "Erode")
            {
                   var optionArray = ["|","Anthiyur|Anthiyur","Bhavani|Bhavani","Bhavanisagar|Bhavanisagar","Erodeeast|Erodeeast","Erodewest|Erodewest","Gobichettipalayam|Gobichettipalayam","Modakkurichi|Modakkurichi","Perundurai|Perundurai"];
            }

             
             else if (s1.value == "Coimbatore")
            {
                   var optionArray = ["|","Coimbatorenorth|Coimbatorenorth","Coimbatoresouth|Coimbatoresouth","Kavundampalayam|Kavundampalayam","Kinathukadavu|Kinathukadavu","Mettuppalayam|Mettuppalayam","Pollachi|Pollachi","Singanallur|Singanallur","Sulur|Sulur","Thondamuthur|Thondamuthur","Valparai|Valparai"];
            }


             else if (s1.value == "Nilgiris")
            {
                   var optionArray = ["|","Coonoor|Coonoor","Gudalur|Gudalur","Udhagamandalam|Udhagamandalam"];
            }

             
             else if (s1.value == "Thanjavur")
            {
                   var optionArray = ["|","Kumbakonam|Kumbakonam","Orathanadu|Orathanadu","Papanasam|Papanasam","Pattukkottai|Pattukkottai","Peravurani|Peravurani","Thanjavur|Thanjavur","Thiruvaiyaru|Thiruvaiyaru","Thiruvidaimarudur|Thiruvidaimarudur"];
            }

             else if (s1.value == "Nagapattinam")
            {
                   var optionArray = ["|","Kilvelur|Kilvelur","Mayiladuthurai|Mayiladuthurai","Nagapattinam|Nagapattinam","Poompuhar|Poompuhar","Sirkazhi|Sirkazhi","Vedaranyam|Vedaranyam"];
            }


             else if (s1.value == "Tiruvarur")
            {
                   var optionArray = ["|","Mannargudi|Mannargudi","Nannilam|Nannilam","Thiruthuraipoondi|Thiruthuraipoondi","Thiruvarur|Thiruvarur"];
            }


             
             else if (s1.value == "Tiruchirappalli")
            {
                   var optionArray = ["|","Lalgudi|Lalgudi","Manachanallur|Manachanallur","Manapparai|Manapparai","Musiri|Musiri","Srirangam|Srirangam","Thiruverumbur|Thiruverumbur","Thuraiyur|Thuraiyur","Tiruchirappallieast|Tiruchirappallieast","Tiruchirappalliwest|Tiruchirappalliwest"];
            }

             else if (s1.value == "Karur")
            {
                   var optionArray = ["|","Aravakurichi|Aravakurichi","Karur|Karur","Krishnarayapuram|Krishnarayapuram","Kulithalai|Kulithalai"];
            }

            else if (s1.value == "Perambalur")
            {
                   var optionArray = ["|","Kunnam|Kunnam","Perambalur|Perambalur"];
            }

               else if (s1.value == "Pudukkottai")
            {
                   var optionArray = ["|","Alangudi|Alangudi","Aranthangi|Aranthangi","Gandharvakottai|Gandharvakottai","Pudukkottai|Pudukkottai","Thirumayam|Thirumayam","Viralimalai|Viralimalai"];
            }

            else if (s1.value == "Madurai")
            {
                   var optionArray = ["|","Maduraicentral|Maduraicentral","Maduraieast|Maduraieast","Madurainorth|Madurainorth","Maduraisouth|Maduraisouth","Maduraiwest|Maduraiwest","Melur|Melur","Sholavandan|Sholavandan","Thirumangalam|Thirumangalam","Thiruparankundram|Thiruparankundram","Usilampatti|Usilampatti"];
            }


              else if (s1.value == "Theni")
            {
                   var optionArray = ["|","Andipatti|Andipatti","Bodinayakanur|Bodinayakanur","Cumbum|Cumbum","Periyakulam|Periyakulam"];
            }

               else if (s1.value == "Dindigul")
            {
                   var optionArray = ["|","Athoor|Athoor","Dindigul|Dindigul","Natham|Natham","Nilakkottai|Nilakkottai","Oddanchatram|Oddanchatram","Palani|Palani","Vedasandur|Vedasandur"];

           }
              else if (s1.value == "Ramanathapuram")
            {
                   var optionArray = ["|","Mudhukulathur|Mudhukulathur","Paramakudi|Paramakudi","Ramanathapuram|Ramanathapuram","Tiruvadanai|Tiruvadanai"];
            }

               else if (s1.value == "Virudhunagar")
            {
                   var optionArray = ["|","Aruppukottai|Aruppukottai","Rajapalayam|Rajapalayam","Sattur|Sattur","Sivakasi|Sivakasi","Srivilliputhur|Srivilliputhur","Tiruchuli|Tiruchuli","Virudhunagar|Virudhunagar"];

              }

              else if (s1.value == "Sivagangai")
            {
                   var optionArray = ["|","Karaikudi|Karaikudi","Manamadurai|Manamadurai","Sivagangai|Sivagangai","Tiruppattur|Tiruppattur"];
            }

               else if (s1.value == "Tirunelveli")
            {
                   var optionArray = ["|","Alangulam|Alangulam","Ambasamudram|Ambasamudram","Kadayanallur|Kadayanallur","Nanguneri|Nanguneri","Palayamkottai|Palayamkottai","Radhapuram|Radhapuram","Sankarankovil|Sankarankovil","Tenkasi|Tenkasi","Tirunelveli|Tirunelveli","Vasudevanallur|Vasudevanallur"];

             }
            

              else if (s1.value == "Thoothukkudi")
            {
                   var optionArray = ["|","Kovilpatti|Kovilpatti","Ottapidaram|Ottapidaram","Srivaikuntam|Srivaikuntam","Thoothukkudi|Thoothukkudi","Tiruchendur|Tiruchendur","Vilathikulam|Vilathikulam"];
            }

               else if (s1.value == "Kanniyakumari")
            {
                   var optionArray = ["|","Colachal|Colachal","Kanniyakumari|Kanniyakumari","Killiyoor|Killiyoor","Nagercoil|Nagercoil","Padmanabhapuram|Padmanabhapuram","Vilavancode|Vilavancode"];

             }
       

              else if (s1.value == "Krishnagiri")
            {
                   var optionArray = ["|","Bargur|Bargur","Hosur|Hosur","Krishnagiri|Krishnagiri","Thalli|Thalli","Uthangarai|Uthangarai","Veppanahalli|Veppanahalli"];
            }

               else if (s1.value == "Ariyalur")
            {
                   var optionArray = ["|","Ariyalur|Ariyalur","Jayankondam|Jayankondam"];

             }


           
              else if (s1.value == "Tiruppur")
            {
                   var optionArray = ["|","Avinashi|Avinashi","Dharapuram|Dharapuram","Kangayam|Kangayam","Madathukulam|Madathukulam","Palladam|Palladam","Tiruppurnorth|Tiruppurnorth","Tiruppursouth|Tiruppursouth","Udumalaipettai|Udumalaipettai"];
            }


          for(var option in optionArray)
          {
              var pair = optionArray[option].split("|");
              var newOption = document.createElement("option");

              
              newOption.value = pair[0];
              newOption.innerHTML = pair[1];
              
            
              s2.options.add(newOption);
          }


}
