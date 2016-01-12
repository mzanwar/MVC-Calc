

// Establish a namespace
var calc = calc || {};

/*
 * Create a model object within the calc namespace.
 */
calc.model = function () {
	// Private instance variables
	var display = "0";
	var observers = [];

	function addObserver(updateFunc) {
		observers.push(updateFunc);
		updateFunc();
	}
	function pressButton(num) {
		switch(num) {
    case "plus":
        break;
    case "minus":
        break;
    case "mult":
        break;
    case "divide":
        break;
    case "equal":
        break;
    case "ac":
        display = "";
    default:
		display+=num;

    }
		update();

	}

	function getDisplay(){
		return display;
	}

	function update(){
		_.each(observers,function(updateFunc) {
			updateFunc();
		});
	}

	console.log("Initializing the model.");
	// Return public functions
	return {
		addObserver: addObserver,
		pressButton: pressButton,
		getDisplay: getDisplay
	};

};