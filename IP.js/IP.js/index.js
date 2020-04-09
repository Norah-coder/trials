var production;{
    name="shed A";
    numberOfCows="34";
    averageProd="15" ;
    
    name="shed B";
    numberOfCows="11";
    averageProd="28" ;
    
    name="shed C";
    numberOfCows="27";
    averageProd="18" ;
    
    name="shed D";
    numberOfCows="52";
    averageProd="11" ;
  }
  var numberOfSheds=shed.length:
  var months={ january 31,february 29,march 31,april 30,may 31,june 30 ,july 31,august 31,september 30,november 30,december 31};
  function totalProduction(verbose);
  totalProduction=0;
  index=0;
  while(index<numberOfSheds){
    total_production+=sheds[index].numberOfCows*sheds[index]averageProd;
    shed_production=sheds[index].numberOfCows*sheds[index]averageProd;
    if(verbose===true){
    console.log(Your production in ''+sheds[index].name+ ''+shedProduction.toString()+"litres per day"):}
  }
    index+=1;
  if(verbose===true){
  console.log(The total production is ''+total_production.toStrings()+"litres per day")}
  
  return total_production;
  
  totalProduction(verbose=true);
  function incomeOvertime(selling_price,time,verbose){
    dailyIncome=total_production()*selling_price;
    return dailyIncome*time;
  }
    console.log("");
    console.log("Your weekly will be ksh ''+incomeOvertime(45,7));
    console.log("Your weekly will be ksh ''+incomeOvertime(45,365));
    
    console.log("")
  for(var key in months){
    monthly_income=incomeOvertime(45,months[key]);
    console.log("Your income for"+ key+ "is" + monthly_income.toString());
  }