var expression = [];
var display = '0';

function updateDisplay(){
  $('#display').text(display);
  if (expression.length < 1){
    $('#expression').text('0');
  } else {
    $('#expression').text(expression.join(''));
  }
}

function numberPress(event){
  if(expression.length > 0 && expression[expression.length-1].indexOf('=') !== -1){
    expression = [];
  }
  var number = event.data.number;
  if(expression.length < 1 || isNaN(parseInt(expression[expression.length - 1]))){
    expression.push(number);
    display = number;
    updateDisplay();
  } else {
    expression[expression.length - 1] += number;
    display += number;
    updateDisplay();
  }
}

function operatorPress(event){
  if(expression.length > 0 && expression[expression.length-1].indexOf('=') !== -1){
    expression = [];
    expression.push(display);
  }
  var operator = event.data.operator;
  if(expression.length > 0 && !isNaN(parseInt(expression[expression.length - 1]))){
    expression.push(operator);
    display = operator;
    updateDisplay();
  }
}

updateDisplay();

$('#equals').on('click', function(){
  if(expression.length > 0 && !isNaN(parseInt(expression[expression.length - 1]))){
    display = eval(expression.join(''));
    expression.push('=' + display);
    updateDisplay();
  }
});

$('#ac').on('click', function(){
  expression = [];
  display = 0;
  updateDisplay();
});

$('#ce').on('click', function(){
  expression.pop();
  display = 0;
  updateDisplay();
});

$('#add').on('click', {operator: '+'}, operatorPress);
$('#subtract').on('click', {operator: '-'}, operatorPress);
$('#multiply').on('click', {operator: '*'}, operatorPress);
$('#divide').on('click', {operator: '/'}, operatorPress);

$('#zero').on('click', {number: '0'}, numberPress);
$('#one').on('click', {number: '1'}, numberPress);
$('#two').on('click', {number: '2'}, numberPress);
$('#three').on('click', {number: '3'}, numberPress);
$('#four').on('click', {number: '4'}, numberPress);
$('#five').on('click', {number: '5'}, numberPress);
$('#six').on('click', {number: '6'}, numberPress);
$('#seven').on('click', {number: '7'}, numberPress);
$('#eight').on('click', {number: '8'}, numberPress);
$('#nine').on('click', {number: '9'}, numberPress);
$('#point').on('click', {number: '.'}, numberPress);