if(performance.navigation.type == 2){
  console.log( 'Page load due to a back button click. Reloading to refresh the Performance.gov report. ' );
  location.reload(true);
}

function myFunctionA() {
  document.getElementById("wrapper-letter").innerHTML = codeBlockA
}


var codeBlockA =   '<p>Explore over 10 years of SBA loan data geographically and overlaid with population and GDP data for context. Drill down to the individual loan level and filter by loan type and state. To learn more, view the overview of SBA Loan Guaranty Programs.</p>' + '<h3>Nationwide SBA Loan Distributions</h3>' + '<p>Click on a state to update the graph below the map. To reset the zoom in the visualization and see beyond the continental U.S., please click the home icon on the map. </p>' + '<p>The Microloan data below represent the loan dollars distributed to intermediaries, not the number of loans or loan dollars distributed to individual small businesses participating in the microloan program.</p>' + '<a class="usa-button usa-button-secondary" href="https://www.usaspending.gov/#/download_center/award_data_archive"> Loan Data</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8474" id="no-frame-border" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunctionB() {
  document.getElementById("wrapper-letter").innerHTML = codeBlockB
}


var codeBlockB =   '<p>Explore over 10 years of SBA loan data geographically and overlaid with population and GDP data for context. Drill down to the individual loan level and filter by loan type and state. To learn more, view the overview of SBA Loan Guaranty Programs.</p>' + '<h3>Heat Map of Loan Distributions to the County Level</h3>' + '<p>To reset the zoom in the visualization and apply selected filters, please click the home icon on the map. </p>' + '<a class="usa-button usa-button-secondary" href="https://www.usaspending.gov/#/download_center/award_data_archive"> Loan Data</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.census.gov/data/datasets/time-series/demo/popest/2010s-national-total.html">Census Data</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.bea.gov/data/gdp/gdp-state">GDP Data</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8472" id="no-frame-border" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunctionC() {
  document.getElementById("wrapper-letter").innerHTML = codeBlockC
}


var codeBlockC =   '<p>GSA has four strategic goals - Real Estate, Acquisition, Technology, and Shared Services - in its strategic plan and the agency tracks progress on 28 performance indicators across those goals. This data is published in the agency’s annual performance plan and report where you can find definitions and sources.</p>' + '<h3>Goal: Real Estate</h3>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8482" id="no-frame-border" frameborder="0" style="height:2100px;width:1050px;"></iframe>';

function myFunctionD() {
  document.getElementById("wrapper-letter").innerHTML = codeBlockD
}


var codeBlockD =   '<p>GSA has four strategic goals - Real Estate, Acquisition, Technology, and Shared Services - in its strategic plan and the agency tracks progress on 28 performance indicators across those goals. This data is published in the agency’s annual performance plan and report where you can find definitions and sources.</p>' + '<h3>Goal: Acquisition</h3>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8478" id="no-frame-border" frameborder="0" style="height:1300px;width:1050px;"></iframe>';

function myFunctionE() {
  document.getElementById("wrapper-letter").innerHTML = codeBlockE
}


var codeBlockE =   '<p>GSA has four strategic goals - Real Estate, Acquisition, Technology, and Shared Services - in its strategic plan and the agency tracks progress on 28 performance indicators across those goals. This data is published in the agency’s annual performance plan and report where you can find definitions and sources.</p>' + '<h3>Goal: Technology</h3>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8477" id="no-frame-border" frameborder="0" style="height:1750;width:1050px;"></iframe>';


function myFunctionF() {
  document.getElementById("wrapper-letter").innerHTML = codeBlockF
}

var codeBlockF =   '<p>GSA has four strategic goals - Real Estate, Acquisition, Technology, and Shared Services - in its strategic plan and the agency tracks progress on 28 performance indicators across those goals. This data is published in the agency’s annual performance plan and report where you can find definitions and sources.</p>' + '<h3>Goal: Service Expansion</h3>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8487" id="no-frame-border" frameborder="0" style="height:1800px;width:1050px;"></iframe>' + '<p><em> Note: The Y-axis bounds are generated by calculating the average and standard deviation for both the target and the actual values in the data set for each KPI. The larger standard deviation value between the target and the actual is then used with the average to generate the upper and lower bounds: Upper bound = Average Actual Value + (3 x the Standard Deviation); Lower bound = Average Actual Value - (3 x the Standard Deviation).</em></p>';


function myFunctionG() {
  document.getElementById("wrapper-letter").innerHTML = codeBlockG
}

var codeBlockG =   '<p><b>NRC Data Overview:</b> A recent initiative explored linking program performance and budget data for Federal agencies in order to increase transparency and provide meaningful analysis for decision makers through enhanced visualizations and displays. The Nuclear Regulatory Commission (NRC) was selected as a trial agency and the Performance.gov team worked closely with the Department of Treasury USASpending.gov team to attempt to link USASpending budget data with the program performance indicators reported in the agencys annual Congressional Justification (CJ) via the program activity. This effort was designed to build off of recent updates in the 2019 revision to OMB Circular A-11, Part 6, Section 210, which provided updated guidance for implementing reporting requirements of the Federal Program Inventory through leveraging program activity reporting and the spending data architecture of DATA Act reporting.</p>' + '<h3>Complete Peformance Dashboard</h3>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8610" id="no-frame-border" frameborder="0" style="height:1250px;width:1075px;"></iframe>' + '<p><em> <b>What the Team Found.</b> The budget and program performance data of the NRC that is reported in their CJ is structured in a hierarchy that does not align to how the agency reports spending data to USASpending, thereby limiting the ability to make direct linkages between the budget data available on USASpending to performance indicators provided in the CJ. As an interim step, the program performance and budget data that is reported in the CJ was manually mapped with other publicly available data found on NRC.gov to generate the dashboards which are featured below. Internal changes aligning the agency’s reporting hierarchy and structure across their budget and program performance data are needed to address this challenge moving forward, and continue to be explored along with other potential changes that could enhance the reporting of agency financial data.</em></p>';

function myFunctionH() {
  document.getElementById("wrapper-letter").innerHTML = codeBlockH
}

var codeBlockH =   '<p><b>NRC Budget Analysis:</b> A recent initiative explored linking program performance and budget data for Federal agencies in order to increase transparency and provide meaningful analysis for decision makers through enhanced visualizations and displays. The Nuclear Regulatory Commission (NRC) was selected as a trial agency and the Performance.gov team worked closely with the Department of Treasurys USASpending.gov team to attempt to link USASpending budget data with the program performance indicators reported in the agencys annual Congressional Justification (CJ) via the program activity. This effort was designed to build off of recent updates in the 2019 revision to OMB Circular A-11, Part 6, Section 210, which provided updated guidance for implementing reporting requirements of the Federal Program Inventory through leveraging program activity reporting and the spending data architecture of DATA Act reporting.</p>' + '<h3>Budget Analysis</h3>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8618" id="no-frame-border" frameborder="0" style="height:830px;width:1051px;"></iframe>' + '<p><em><b>What the Team Found.</b> The budget and program performance data of the NRC that is reported in their CJ is structured in a hierarchy that does not align to how the agency reports spending data to USASpending, thereby limiting the ability to make direct linkages between the budget data available on USASpending to performance indicators provided in the CJ. As an interim step, the program performance and budget data that is reported in the CJ was manually mapped with other publicly available data found on NRC.gov to generate the dashboards which are featured below. Internal changes aligning the agency’s reporting hierarchy and structure across their budget and program performance data are needed to address this challenge moving forward, and continue to be explored along with other potential changes that could enhance the reporting of agency financial data.  </em></p>';

function myFunction() {
  document.getElementById("wrapper").innerHTML = codeBlock
}


var codeBlock =   '<h3>Federal Employee Veiwpoint Survey - Improve Performance <em>(Updated December 2019)</em></h3>' + '<p>The Office of Personnel Management Federal Employee Viewpoint Survey measures employee perception of whether, and to what extent, conditions characteristic of successful organizations are present in their agencies.</p>' + '<p>The dashboard below compares 2017 and 2018 government-wide scores for two performance-related metrics, showing percentage change in conditions that lead to employee engagement and steps taken to deal with a poor performer who cannot or will not improve their work performance. </p>' + '<a class="usa-button usa-button-secondary" href="https://www.performance.gov/CAP/workforce/"> View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/FEVS-KPI-Data-dec.xlsx">Download Data</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8532" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction1() {
  document.getElementById("wrapper").innerHTML = codeBlock1
}

var codeBlock1 =   '<h3>Federal Employee Veiwpoint Survey - Strategic Hiring <em>(Updated December 2019)</em></h3>' + '<p>The Office of Personnel Management Federal Employee Viewpoint Survey measures employee perception of whether, and to what extent, conditions characteristic of successful organizations are present in their agencies.</p>' + '<p>The dashboard below compares 2017 and 2018 government-wide scores for two hiring-related metrics, tracking progress in hiring people with the right skills and overall satisfaction with agency hiring and recruiting. </p>'  + '<a class="usa-button usa-button-secondary" href="https://www.performance.gov/CAP/workforce/">View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/FEVS-KPI-Data-dec.xlsx">Download Data</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8533" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction2() {
  document.getElementById("wrapper").innerHTML = codeBlock2
}

var codeBlock2 =   '<h3>Cybersecurity - Manage Asset Security <em>(Updated December 2019)</em></h3>' + '<p>The dashboard below tracks FY2019 Q2-Q3 change for four asset security metrics for 23 federal agencies. Measuring progress in asset security area helps the Federal Government protect federal networks, software, and devices from unauthorized activity.</p>'  + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/it-mod/">View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/Cybersecurity_KPI Data_FY19-dec.xlsx">Download Data</a>' +
'<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8526" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction3() {
  document.getElementById("wrapper").innerHTML = codeBlock3
}

var codeBlock3 =   '<h3>Cybersecurity - Limit Personnel Access <em>(Updated December 2019)</em></h3>' + '<p>The dashboard below tracks FY2019 Q2-Q3 change for three access-related metrics for 23 federal agencies. Measuring progress in limiting personnel access helps the Federal Government control which personnel have access to priveleged networks and high value assets.</p>' + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/it-mod/">View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/Cybersecurity_KPI Data_FY19-dec.xlsx">Download Data</a>'  +
'<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8534" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction4() {
  document.getElementById("wrapper").innerHTML = codeBlock4
}

var codeBlock4 =   '<h3>Cybersecurity - Protect Networks and Data <em>(Updated December 2019)</em></h3>' + '<p>The dashboard below tracks FY2019 Q2-Q3 change for three data protection metrics for 23 federal agencies. Measuring progress in this area helps the Federal Government improve data encryption and protect federal data from unauthorized intrusion and exfultration.</p>'  + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/it-mod/">View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/Cybersecurity_KPI Data_FY19-dec.xlsx">Download Data</a>' +
'<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8535" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction5() {
  document.getElementById("wrapper").innerHTML = codeBlock5
}

var codeBlock5 =   '<h3>Cloud Email Adoption <em>(Updated December 2019)</em></h3>' + '<p>The dashboard below shows percentage change of agency email inboxes serviced by cloud-based solutions from June 2019 - September 2019.</p>'  + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/it-mod/">View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/Cloud-Email-Adoption_KPI-Data_dec.xlsx">Download Data</a>' +
'<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8539" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction6() {
  document.getElementById("wrapper").innerHTML = codeBlock6
}

var codeBlock6 =   '<h3>Government-wide View <em>(Updated June 2019)</em></h3>' + '<p></p>' + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/category-management/">View the CAP Goal</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8527" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';


function myFunction7() {
  document.getElementById("wrapper").innerHTML = codeBlock7
}

var codeBlock7 =   '<h3>Category View <em>(Updated June 2019)</em></h3>' + '<p></p>' + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/category-management/">View the CAP Goal</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8529" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction8() {
  document.getElementById("wrapper").innerHTML = codeBlock8
}

var codeBlock8 =   '<h3>Department View <em>(Updated June 2019)</em></h3>' + '<p></p>'  + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/category-management/">View the CAP Goal</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8530" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction9() {
  document.getElementById("wrapper").innerHTML = codeBlock9
}

var codeBlock9 =   '<h3>Agency Progress in Current Fiscal Year <em>(Updated June 2019)</em></h3>' + '<p>The dashboard below compares 2017 and 2018 data from 23 federal agecies towards Category Management targets.</p>'  + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/category-management/">View the CAP Goal</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8531" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction10() {
  document.getElementById("wrapper").innerHTML = codeBlock10
}

var codeBlock10 =   '<h3>Overview and Definitions <em>(Updated June 2019)</em></h3>' + '<p></p>' + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/category-management/">View the CAP Goal</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8528" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction11() {
  document.getElementById("wrapper").innerHTML = codeBlock11
}

var codeBlock11 =   '<h3>Customer Satisfaction Scores <em>(Updated September 2019)</em></h3>' + '<p>The dashboard below compares 2017 and 2018 customer satisfaction data from 23 federal agencies in four targeted mission support areas.</p>'  + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/sharing-quality-services/">View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/Customer%20Satisfaction%20Survey_KPI%20Data_FY18Sept.xlsx">Download Data</a>' +
'<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8536" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction12() {
  document.getElementById("wrapper").innerHTML = codeBlock12
}

var codeBlock12 =   '<h3>Cash Loss to the Government - FY 17-18 <em>(Updated September 2019)</em></h3>' + '<p>The dashboard below shows 2017 - 2018 change in cash loss to the government by program across 23 federal agecies.</p>' + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/getting-payments-right/">View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/Cash-Loss-to-the-Government_KPI-Data_FY19Q4.xlsx">Download Data</a>'  +
'<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8538" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';

function myFunction13() {
  document.getElementById("wrapper").innerHTML = codeBlock13
}

var codeBlock13 =   '<h3>Cash Loss to the Government - Program Scorecards <em>(Updated December 2019)</em></h3>' + '<p>The government can achieve the greatest return on investment for the taxpayer by ensuring that improper payments are eliminated in the highest-risk programs, otherwise known as high-priority programs. Details about these programs can be found in the dashboard below as well as steps to improve their efficiency by focusing on reducing incorrect payment that result in monetary loss.</p>'  + '<a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/getting-payments-right/">View the CAP Goal</a>' + ' <a class="usa-button usa-button-secondary " href="https://www.performance.gov/CAP/KPI/Cash_Loss_Government_KPI_Data_Dec2019.xlsx">Download Data</a>' + '<iframe src="https://d2d.gsa.gov/tableau-report-for-embed/8537" id="no-frame-border-1" frameborder="0" style="height:1130px;width:1050px;"></iframe>';
