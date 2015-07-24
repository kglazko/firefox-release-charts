function drawChart(affected,unaffected,fixed,verified,wontfix,question,blank) {
    var ctx = document.getElementById("myChart").getContext("2d");
    var data = [
    {
        value: affected,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "affected"
    },
    {
        value: unaffected,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "unaffected"
    },
    {
        value: fixed,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Fixed"
    },
    {

        value: verified,
        color: "#0000FF",
        highlight: "#FFC870",
        label: "Verified"
    },
      {
        value: wontfix,
        color: "#FF00FF",
        highlight: "#FFC870",
        label: "Wontfix"
    },
      {
        value: question,
        color: "#000000",
        highlight: "#FFC870",
        label: "?"
    },
        {
        value: blank,
        color: "#C0C0C0",
        highlight: "#FFC870",
        label: "---"
    }
];

    var myPieChart = new Chart(ctx).Pie(data, {legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"});
}

function drawLabel(affected,unaffected,fixed,verified,wontfix,question,blank) {
    document.getElementById('affected').innerHTML = "Affected: " + affected;
    document.getElementById('unaffected').innerHTML = "Unaffected: " + unaffected;
    document.getElementById('fixed').innerHTML = "Fixed: " + fixed;
    document.getElementById('verified').innerHTML = "Verified: " + verified;
    document.getElementById('wontfix').innerHTML = "Wontfix: " + wontfix;
    document.getElementById('question').innerHTML = "?: " + question;
    document.getElementById('blank').innerHTML = "---: " + blank;
}