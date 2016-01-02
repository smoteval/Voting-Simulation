// Establish a namespace
var electionViz = electionViz || {};


electionViz.controller = function(model) {
	window.addEventListener('load', function() {
		var numberofcands = document.getElementById('numcans');
		var numberofvoters = document.getElementById('numvotes');
		var resolution = document.getElementById('res');
		var sigma = document.getElementById('dist');
		resolution.defaultValue = "1";
		numberofvoters.defaultValue = "10000";
		sigma.defaultValue = "1.0";
		var can1x = document.getElementById('can1x');
		var can1y = document.getElementById('can1y');
		var can2x = document.getElementById('can2x');
		var can2y = document.getElementById('can2y');
		var can3x = document.getElementById('can3x');
		var can3y = document.getElementById('can3y');
		var can4x = document.getElementById('can4x');
		var can4y = document.getElementById('can4y');
		var can5x = document.getElementById('can5x');
		var can5y = document.getElementById('can5y');
		var can6x = document.getElementById('can6x');
		var can6y = document.getElementById('can6y');
		var submitButton = document.getElementById('submit');
		submitButton.addEventListener('click', function() {
			var x = [can1x.value, can2x.value, can3x.value, can4x.value, can5x.value, can6x.value];
			var y = [can1y.value, can2y.value, can3y.value, can4y.value, can5y.value, can6y.value];
            model.SetValues(numberofcands.value,x,y, numberofvoters.value, sigma.value, resolution.value);
            model.Notify();
        });
	})	
}