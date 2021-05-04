let number_a = 19;
const number_b =15;

if (number_a>number_b) 
    console.log(number_b);

else if (number_a<number_b) 
    console.log(number_a);

// ----------------------------------------//

while (number_a > number_b) {
    number_a -= 1;
    console.log(number_a);
};

for (let i=0; i<number_b; i++) {
    if (i<=3) 
        console.log('This small number - ', i)
    else if (i==7)
        continue;
    else if (i>3 || i<9) 
        console.log('This big number - ', i)
    
    if (i==8)
        break;
    
}