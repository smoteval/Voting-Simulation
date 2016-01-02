// Establish a namespace
var electionViz = electionViz || {};

electionViz.controller2 = function(model) {
    window.addEventListener('load', function() {
        var samplesize = document.getElementById('samplesize');
        var sigma = document.getElementById('sig');
        sigma.defaultValue = "1.0";
        var GetSample = document.getElementById('GetSample');
        GetSample.addEventListener('click', function() {
            model.SetValues2(samplesize.value, sigma.value);
            model.Notify2();
        });
    })
}