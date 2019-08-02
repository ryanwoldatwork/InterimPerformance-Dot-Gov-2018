var chartDiv1 = document.getElementById("chart1");
var svg = d3.select(chartDiv1).append("svg");


function callFunction1(){

  //var svgtest = d3.select(chartDiv1).select('svg');
  //var labelT = d3.select(chartDiv1).select("div.label");

  // if (!svgtest.empty()) {
    // svgtest.remove()
    // labelT.remove()
    // }

    // var tooltip = d3.select("svg").append("div").style("opacity",'0').style("position","absolute");

              var parseD = d3.timeParse("%Y");

              d3.csv("VacantSpace_KPI_Test.csv")
              .row(function(d){ return {Year: parseD(d.Year), Actual: Number(d.Actual.trim()), Target: Number(d.Target.trim())};})
              .get(function(error,data){

                  // var h = (window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight);
                  // var w = (window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth);
                  var width = ((chartDiv1.clientWidth)/2);
                  var height = ((chartDiv1.clientHeight)/2);
                  console.log(width);
                  console.log(height);

                  var actYMax = d3.max(data,function(d){ return d.Actual;});
                  var tarYMax = d3.max(data,function(d){ return d.Target;});

                  var minDate = d3.min(data,function(d){ return d.Year;});
                  var maxDate = d3.max(data,function(d){ return d.Year;});

                  // if (actYMax>=tarYMax) {
                  //   max = actYMAX;
                  // } else {
                  //   max = tarYMAX;
                  // }

                  var y = d3.scaleLinear()
                              .domain([0,actYMax])
                              .range([height,0]);

                  var x = d3.scaleTime()
                              .domain([minDate,maxDate])
                              .range([0,width]);

                  var xAxis = d3.axisBottom(x);

                  var yAxis = d3.axisLeft(y);
                  var xAxis = d3.axisBottom(x);

                  var svg = d3.select(chartDiv1).append('svg')
                              .attr('height', '100%')
                              .attr('width', '100%');

                  var tooltip = d3.select(chartDiv1).append("div").style("opacity",'0').style("position","absolute");

                  var margin = {left:50,right:50,top:40,bottom:0};

                  var chartGroup = svg.append('g')
                                      .attr('transform', 'translate(' + margin.left + ',' + margin.top+ ')');

                  var lineAct = d3.line()
                    .x(function(d) { return x(d.Year); })
                    .y(function(d) { return y(d.Actual); });

                  var lineTar = d3.line()
                    .x(function(d) { return x(d.Year); })
                    .y(function(d) { return y(d.Target); });




                  chartGroup.append('path')
                                    .attr("fill","none")
                                    //.attr("stroke","orange")
                                    .attr('stroke-width', 5)
                                    .attr('class', 'Actual line')
                                    .attr("d",lineAct(data));

                  chartGroup.append('path')
                                  .attr("fill","none")
                                  //.attr("stroke","blue")
                                  .attr('class', 'Target line')
                                  .attr("d",lineTar(data));

                  chartGroup.selectAll("circle.Target")
                    .data(data)
                    .enter().append("circle")
                              .attr("class","Target circle")
                              .attr("cx",function(d){return x(d.Year);})
                              .attr("cy",function(d){return y(d.Target);})
                              .attr("r","3")
                              .on('mouseover',function(d){
                                tooltip.style("opacity","1")
                                .attr('class', 'label')
                                .style('left', d3.event.pageX +'px')
                                .style('top', d3.event.pageY + 'px');

                                tooltip.html("Target: "+ d.Target);

                              });

                chartGroup.selectAll("circle.Actual")
                  .data(data)
                  .enter().append("circle")
                            .attr("class",'Actual circle')
                            .attr("cx",function(d){return x(d.Year);})
                            .attr("cy",function(d){return y(d.Actual);})
                            .attr("r","3")
                            .on('mousemove',function(d){
                              tooltip.style("opacity","1")
                              .attr('class', 'label')
                              .style('left', d3.event.pageX +'px')
                              .style('top', d3.event.pageY + 'px');

                              tooltip.html("Actual: "+ d.Actual);

                            });

                  chartGroup.append('g')
                              .attr('class', 'x axis')
                              .attr('transform', 'translate(0,' + height + ')')
                              .call(xAxis);
                  chartGroup.append('g')
                            .attr('class', 'y axis')
                            .call(yAxis);

                  // chartGroup.append("text").selectAll("tspan.Actual")
                  //     .data(data)
                  //     .enter().append("tspan")
                  //       .attr("x",function(d){return x(d.Year);})
                  //       .attr("y",function(d){return y(d.Actual);})
                  //       .attr("stroke","black")
                  //       .attr('class', 'Actual textlable')
                  //       .attr("dominant-baseline","start")
                  //       .attr("text-anchor","start")
                  //       .attr("font-size","10")
                  //       .text(function(d){ return d.Actual; });
                  //
                  // chartGroup.append("text").selectAll("tspan.Target")
                  //     .data(data)
                  //     .enter().append("tspan")
                  //       .attr("x",function(d){return x(d.Year);})
                  //       .attr("y",function(d){return y(d.Target);})
                  //       .attr("stroke","black")
                  //       .attr('class', 'Target textlable')
                  //       .attr("dominant-baseline","start")
                  //       .attr("text-anchor","start")
                  //       .attr("font-size","10")
                  //       .text(function(d){ return d.Target; });

              })////final get closure
}
