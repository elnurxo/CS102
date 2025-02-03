// Təcrübə ilinə əsasən maaşa bonus əlavə edilir. 
// 5 ildən çoxdursa 25%, 3-5 il aralığındadırsa 15%, 
// əks halda isə bonus olmur. input -> 
// calcSalary('John Doe', 'Developer', 4000, 6), 
// output => John Doe, ümumi maaşınız 5000 AZN-dir.


function calcSalary(fullName, position, salary, experience){
    if(experience > 5){
        salary = salary * 25 / 100 + salary;
    }
    else if(experience >= 3 && experience <= 5){
        salary = salary * 15 / 100 + salary;
    }

    return `${fullName} | ${position}, ümumi maaşınız ${salary} AZN-dir.`
}

console.log(calcSalary('John Doe', 'dev', 4000, 4));