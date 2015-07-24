function getCrash(version) {
	          $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=bug_status&f2=keywords&f3=cf_tracking_firefox"+version+"&o1=notsubstring&o2=substring&o3=equals&v1=RESOLVED&v2=crash&v3=%2B", function(crashes){
            		numCrash = crashes.bugs.length;
            		if(isReadyforBar()==true){
              		drawBarChart(numCrash, numTopCrash, numRegression);
            		}
         }); 
	
}


function getTopCrash(version) {
	          $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=bug_status&f2=keywords&f3=cf_tracking_firefox"+version+"&o1=notsubstring&o2=substring&o3=equals&v1=RESOLVED&v2=topcrash&v3=%2B", function(topcrashes){
            		numTopCrash = topcrashes.bugs.length;
            		if(isReadyforBar()==true){
              		drawBarChart(numCrash, numTopCrash, numRegression);
            		}
         }); 
	
}


function getRegression(version) {
	          $.getJSON("https://bugzilla.mozilla.org/rest/bug?include_fields=id,summary,status&f1=bug_status&f2=keywords&f3=cf_tracking_firefox"+version+"&o1=notsubstring&o2=substring&o3=equals&v1=RESOLVED&v2=regression&v3=%2B", function(regressions){
            		numRegression = regressions.bugs.length;
            		if(isReadyforBar()==true){
              		drawBarChart(numCrash, numTopCrash, numRegression);
            		}
         }); 
	
}