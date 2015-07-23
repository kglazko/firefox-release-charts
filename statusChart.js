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
        label: "Yellow"
    },
    {

        value: verified,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Brown"
    },
      {
        value: wontfix,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    },
      {
        value: question,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "?"
    },
        {
        value: blank,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "---"
    }
];

    var myPieChart = new Chart(ctx).Pie(data,{
    animateScale: true
});
}