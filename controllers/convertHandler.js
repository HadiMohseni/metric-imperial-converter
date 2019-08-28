/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    
    var match = input.indexOf(/[a-zA-Z]/.exec(input)[0]);
    
    var num = input.slice(0,match);
    
    if(num == ''){
      return 'invalid number';
    }
    
    var firstNum;
    var slashIndex = num.indexOf('/');
    if (slashIndex > -1){
      if(slashIndex == 0){
        firstNum = 1;
      }else{
        firstNum = Number(num.slice(0,slashIndex));
      }
      var secondNum = Number(num.slice(slashIndex+1,num.length));
      result = firstNum/secondNum;
    } else{
      result = Number(num);
    }
    
    if(isNaN(result)){
      result = 'invalid number'
    }
    //console.log((result == NaN));
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var match = input.indexOf(/[a-zA-Z]/.exec(input)[0]);
    //console.log(match);
    result = input.slice(match,input.length);
    
    var input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    if(!input.includes(result)){
      result = 'invalid unit';
    }
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    switch(initUnit) {
      case ('gal'):
      case ('GAL'):
        result = 'l';
        break;
      case ('lbs'):
      case ('LBS'):
        result = 'kg';
        break;
      case ('mi'):
      case ('MI'):
        result = 'km';
        break;
      case ('l'):
      case ('L'):
        result = 'gal';
        break;
      case ('kg'):
      case ('KG'):
        result = 'lbs';
        break;
      case ('km'):
      case ('KM'):
        result = 'mi';
        break;
      default:
        result = 'invalid unit';
}
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit) {
      case ('gal'):
      case ('GAL'):
        result = 'galons';
        break;
      case ('lbs'):
      case ('LBS'):
        result = 'pounds';
        break;
      case ('mi'):
      case ('MI'):
        result = 'miles';
        break;
      case ('l'):
      case ('L'):
        result = 'litres';
        break;
      case ('kg'):
      case ('KG'):
        result = 'kilograms';
        break;
      case ('km'):
      case ('KM'):
        result = 'kilometers' ;
        break;
      default:
        result = 'invalid unit';
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    if (initNum == 'invalid number'){
        result = 'unknowned';
    }else{
     switch(initUnit) {
      case ('gal'):
      case ('GAL'):
        result = initNum * 3.78541;
        break;
      case ('lbs'):
      case ('LBS'):
        result = initNum * 0.453592;
        break;
      case ('mi'):
      case ('MI'):
        result = initNum * 1.60934;
        break;
      case ('l'):
      case ('L'):
        result = initNum/3.78541;
        break;
      case ('kg'):
      case ('KG'):
        result = initNum/0.453592;
        break;
      case ('km'):
      case ('KM'):
        result = initNum/1.60934 ;
        break;
      default:
        result = 'invalid unit';
      }  
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if (initNum == 'invalid number' || initUnit == 'invalid unit'){
        result = {initNum: initNum, initUnit: initUnit, string: 'invalid unit or number'};
    }else{
        //console.log(this.spellOutUnit(initUnit));
        result = {initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: parseFloat(initNum.toFixed(5)) + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + parseFloat(returnNum.toFixed(5)) + ' ' + this.spellOutUnit(returnUnit)};
    }
    return result;
  };
  
}

module.exports = ConvertHandler;
