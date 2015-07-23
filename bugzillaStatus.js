
      
      function getAffected(version) {
        var temp;
          $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&f2=cf_status_firefox"+version+"&o1=equals&o2=equals&resolution=---&v1=%2B&v2=affected", function(data){
            temp = data.bugs.length;
            return temp;
         });  
        }

      function getUnaffected(version) {
      $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&f2=cf_status_firefox"+version+"&o1=equals&o2=equals&resolution=---&v1=%2B&v2=unaffected", function(data1){
        unaffected = data1.bugs.length;
         }); 
            return unaffected;
        }


      function getFixed(version) {
      $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&f2=cf_status_firefox"+version+"&o1=equals&o2=equals&resolution=---&v1=%2B&v2=fixed", function(data2){
     fixed = data2.bugs.length;
         }); 
            return fixed;
        }

      function getVerified(version) {
      $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&f2=cf_status_firefox"+version+"&o1=equals&o2=equals&resolution=---&v1=%2B&v2=verified", function(data3){
      verified = data3.bugs.length;
         }); 
            return verified;
        }

      function getWontfix(version) {
      $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&f2=cf_status_firefox"+version+"&o1=equals&o2=equals&resolution=---&v1=%2B&v2=wontfix", function(data4){
      wontfix= data4.bugs.length;
         }); 
            return wontfix;
        }

      function getQuestion(version) {
      $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&f2=cf_status_firefox"+version+"&o1=equals&o2=equals&resolution=---&v1=%2B&v2=?", function(data5){
      question = data5.bugs.length;
         }); 
            return question;
        }

      function getBlank(version) {
 $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=cf_tracking_firefox"+version+"&f2=cf_status_firefox"+version+"&o1=equals&o2=equals&resolution=---&v1=%2B&v2=---", function(data6){
      blank = data6.bugs.length;
         }); 
            return blank;
        }