
function bmicalc(){
    var obj = require('./bmijson.json');
    const BMI_Range={
        0:[0,18.5],
        1:[18.5,24.9],
        2:[25,29.9],
        3:[30,34.9],
        4:[35,39.9],
        5:[40,50]
    };
    
const Health_Risk=[
    "Malnutrition risk",
    "Low risk",
    "Enhanced risk",
    "Medium risk",
    "High risk",
    "Very high risk"
];
const BMI_Category=[
    "Underweight",
    "Normal weight",
    "Overweight",
    "Moderately obese",
    "Severely obese",
    "Very severely obese"
];
    var Final_Result={}
    var n =0;
    for(key in obj){
        let bmi = (obj[key].WeightKg/(obj[key].HeightCm*obj[key].HeightCm))*10000;
        bmi = bmi.toFixed(2);
        
        for (var i = 0; i < 5; i++){
            if(i===5){
                Final_Result[n]=[bmi,Health_Risk[i],BMI_Category[i]]
                break;
            }
            if((bmi >= BMI_Range[i][0] )&& (bmi < BMI_Range[i+1][0])){
                Final_Result[n]=[bmi,Health_Risk[i],BMI_Category[i]]
                break
            }
        }
        n++;            
    }
    return Final_Result;
}

var final=bmicalc();
let totalOverWeight =0;
for(key in final){
    for(i in final[key])
    if("Overweight"=== final[key][i]){
        totalOverWeight++;
    }
}
console.log("There are total "+totalOverWeight+" Overweigth people in given data.")