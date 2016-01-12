

/*
 * Calculator Fun Assignment
 * parseFloat("3.14");
 */

$(function() {

	console.log("Execution Begins");
	var model = calc.model();
	model.addObserver(function() {
        updateView();
		console.log("I'm observing the model!");
	});

eventListeners(model);

function updateView(){
    var display = document.getElementById('display');

    $("#display").html(model.getDisplay());
}



});

function eventListeners(model){

var Button1 = document.getElementById('button1');
var Button2 = document.getElementById('button2');
var Button3 = document.getElementById('button3');
var Button4 = document.getElementById('button4');
var Button5 = document.getElementById('button5');
var Button6 = document.getElementById('button6');
var Button7 = document.getElementById('button7');
var Button8 = document.getElementById('button8');
var Button9 = document.getElementById('button9');
var Button10 = document.getElementById('button10');
var Button11 = document.getElementById('button11');
var Button12 = document.getElementById('button12');
var Button13 = document.getElementById('button13');
var Button14 = document.getElementById('button14');
var Button15 = document.getElementById('button15');
var Button16 = document.getElementById('button16');
var Button17 = document.getElementById('button17');
var Button18 = document.getElementById('button18');
var Button19 = document.getElementById('button19');
var Button20 = document.getElementById('button20');


         Button1.addEventListener('click', function() {
            model.pressButton(7);
        });         Button2.addEventListener('click', function() {
            model.pressButton(8);
        });         Button3.addEventListener('click', function() {
            model.pressButton(9);
        });         Button4.addEventListener('click', function() {
            model.pressButton("mult");
        });         Button5.addEventListener('click', function() {
            model.pressButton(4);
        });         Button6.addEventListener('click', function() {
            model.pressButton(5);
        });         Button7.addEventListener('click', function() {
            model.pressButton(6);
        });         Button8.addEventListener('click', function() {
            model.pressButton("minus");
        });         Button9.addEventListener('click', function() {
            model.pressButton(1);
        });         Button10.addEventListener('click', function() {
            model.pressButton(2);
        });         Button11.addEventListener('click', function() {
            model.pressButton(3);
        });         Button12.addEventListener('click', function() {
            model.pressButton("plus");
        });         Button13.addEventListener('click', function() {
            model.pressButton(0);
        });         Button14.addEventListener('click', function() {
            model.pressButton();
        });         Button15.addEventListener('click', function() {
            model.pressButton(".");
        });         Button16.addEventListener('click', function() {
            model.pressButton("equal");
        });
        Button17.addEventListener('click', function() {
            model.pressButton("ac");
        });
        Button18.addEventListener('click', function() {
            model.pressButton("invert");
        });
        Button19.addEventListener('click', function() {
            model.pressButton("percent");
        });
        Button20.addEventListener('click', function() {
            model.pressButton("divide");
        });


}

