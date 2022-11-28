/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let record =[];
    let total =0;    
    for(let i=0; i<ops.length;i++){
        switch(ops[i]){
            case "+": 
                let num1 = Number(record[record.length-1]);
                let num2 = Number(record[record.length-2]);
                let sum = num1 + num2;
                total +=sum;
                record.push(""+sum);
                break;
            case "D": 
                let prev = Number(record[record.length-1]);
                total+= prev*2
                record.push(""+(prev*2));
                break;
            case "C": 
                total -= Number(record[record.length-1]);
                record.pop();
                break;
            default: 
                record.push(ops[i]);
                total+=Number(ops[i]);
        }
    }
    return total;
};
