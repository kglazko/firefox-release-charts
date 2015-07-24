
      
      function getAffected(version) {
        
          $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&f2=cf_status_firefox"+version+"&o1=equals&o2=equals&resolution=---&v1=%2B&v2=affected", function(data){
            affected = data.bugs.length;
            if(isReady()==true){
              drawChart(affected,unaffected,fixed,verified,wontfix,question,blank);
              drawLabel(affected,unaffected,fixed,verified,wontfix,question,blank);
            }
         });  
        }

      function getUnaffected(version) {
      $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&f2=cf_status_firefox"+version+"&o1=equals&o2=equals&resolution=---&v1=%2B&v2=unaffected", function(data1){
        unaffected = data1.bugs.length;
        if(isReady()==true){
         drawChart(affected,unaffected,fixed,verified,wontfix,question,blank);
         drawLabel(affected,unaffected,fixed,verified,wontfix,question,blank);
            }
         }); 
        }


      function getFixed(version) {
      $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&f2=OP&f3=cf_status_firefox"+version+"&j2=OR&known_name=tracking-firefox"+version+"%2B&o1=equals&o3=equals&v1=%2B&v3=fixed&v4=---", function(data2){
     fixed = data2.bugs.length;
          if(isReady() == true){
              drawChart(affected,unaffected,fixed,verified,wontfix,question,blank);
              drawLabel(affected,unaffected,fixed,verified,wontfix,question,blank);
            }
         }); 
        }

      function getVerified(version) {
      $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&f2=OP&f3=cf_status_firefox"+version+"&j2=OR&known_name=tracking-firefox"+version+"%2B&o1=equals&o3=equals&v1=%2B&v3=verified&v4=---", function(data3){
      verified = data3.bugs.length;
       if(isReady()==true){
              drawChart(affected,unaffected,fixed,verified,wontfix,question,blank);
              drawLabel(affected,unaffected,fixed,verified,wontfix,question,blank);
         }
         }); 
        }

      function getWontfix(version) {
      $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&f2=OP&f3=cf_status_firefox"+version+"&j2=OR&known_name=tracking-firefox"+version+"%2B&o1=equals&o3=equals&v1=%2B&v3=wontfix&v4=---", function(data4){
      wontfix= data4.bugs.length;
      if(isReady()==true){
              drawChart(affected,unaffected,fixed,verified,wontfix,question,blank);
              drawLabel(affected,unaffected,fixed,verified,wontfix,question,blank);
            }
         }); 
        }

      function getQuestion(version) {
      $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&f2=OP&f3=cf_status_firefox"+version+"&j2=OR&known_name=tracking-firefox"+version+"%2B&o1=equals&o3=equals&v1=%2B&v3=%3F&v4=---", function(data5){
      question = data5.bugs.length;
    if(isReady()==true){
              drawChart(affected,unaffected,fixed,verified,wontfix,question,blank);
              drawLabel(affected,unaffected,fixed,verified,wontfix,question,blank);
            }
         }); 
        }

      function getBlank(version) {
 $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&f2=OP&f3=cf_status_firefox"+version+"&j2=OR&known_name=tracking-firefox"+version+"%2B&o1=equals&o3=equals&v1=%2B&v3=---&v4=---", function(data6){
      blank = data6.bugs.length;
if(isReady()==true){
              drawChart(affected,unaffected,fixed,verified,wontfix,question,blank);
              drawLabel(affected,unaffected,fixed,verified,wontfix,question,blank);
            }
         }); 
        }