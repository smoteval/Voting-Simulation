// Establish a namespace
var electionViz = electionViz || {};

/*
 * Create a model object within the electionViz namespace.
 */
electionViz.model = function() {
    // Private instance variables
    var numCandidates = 0;
    var candidatePositions = [];
    var numVoters = 10000;
    var sigma = 1.0;
    var resolution = 1;
    var size = 200;
    var observers = [];
    var SampleSize = 0;
    var observers2 = [];
    var ErrorsFunction;

    function SetErrorsFunction(ErrorFunc) {
        ErrorsFunction = ErrorFunc;
    }

    function SetValues(num, x, y, numvo, distri, res) {
        numCandidates = num;
        numVoters = numvo;
        resolution = res;
        size = (size / res);
        sigma = distri;
        for (i = 0; i < num; i++) {
            candidatePositions[i] = {
                "x": x[i] * 1,
                "y": y[i] * 1
            };
        }
    }

    function SetValues2(sample, sig) {
        SampleSize = sample;
        sigma = sig;
    }

    function addObserver(updateFunc) {
        observers.push(updateFunc);
    }

    function addObserver2(updateFunc) {
        observers2.push(updateFunc);
    }




    function openModal() {
        document.getElementById('modal').style.display = 'block';
        document.getElementById('fade').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('modal').style.display = 'none';
        document.getElementById('fade').style.display = 'none';
    }




    function Notify() {
        openModal();
        $.ajax({
            contentType: "application/json",
            dataType: "json",
            url: "http://localhost:9000/electionSimulation",
            data: JSON.stringify({
                "candidates": candidatePositions,
                "size": parseInt(200 / (resolution * 1)),
                "numVoters": numVoters * 1,
                "sigma": sigma * 1
            }),
            method: 'POST',
            success: function(json) {
                closeModal();
                for (i in observers) {
                    observers[i](json.results, resolution, numCandidates, candidatePositions, json.electoralSystems);
                }
            },
            error: function(e) {
                closeModal();
                ErrorsFunction(1);
                console.log("error: ", e);
            }
        });
    }


    function Notify2() {
        openModal();
        $.ajax({
            contentType: "application/json",
            dataType: "json",
            url: "http://localhost:9000/sampleVoterDistribution",
            data: JSON.stringify({
                "sampleSize": SampleSize * 1,
                "sigma": sigma * 1
            }),
            method: 'POST',
            success: function(json) {
                closeModal();
                for (i in observers2) {
                    observers2[i](json);
                }
            },
            error: function(e) {
                closeModal();
                ErrorsFunction(2);
                console.log("error: ", e);
            }
        });
    }

    //console.log("Initializing the model.");
    // Return public functions
    return {
        addObserver: addObserver,
        Notify: Notify,
        SetValues: SetValues,
        SetValues2: SetValues2,
        addObserver2: addObserver2,
        Notify2: Notify2,
        SetErrorsFunction: SetErrorsFunction
    };

};
