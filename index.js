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


function cycle(b) {
    for (let i=0; i<b; i++) {
    if (i<=3) 
        console.log('This small number - ', i)
    else if (i==7)
        continue;
    else if (i>3 || i<9) 
        console.log('This big number - ', i)  
    if (i==8)
        break;
    }

}

cycle(number_b);

// ----------------------------------------//

/*function output() {
    console.log('Hello');
}

function nameFun(output = () =>{
    console.log('Hello world');
})

nameFun(); */

const something = function() {
    console.log('ahahahah')
}

function smth() {
    console.log('smth')
}

smth()

const arrow = () => {
    console.log('arrow')
}

arrow()

something()


  var car = {
      price: 3000,
      color: 'Red',
      model: 'Toyta',
      intro: function(){
          console.log(this);
      }
  };

console.log('property => ', car.model)
car.intro();


function app() {
    try {
        // логика программы, подключение к бд, запуск сервера и т д
        // если ошибка, то выполняется условие catch
}
    catch(error) {
        console.log('This error ', error)
    }
}

