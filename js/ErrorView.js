// Establish a namespace
var electionViz = electionViz || {};



electionViz.ErrorView = function(model) {
    var Errfunc = function(type) {
        cn1 = document.getElementById('c1');
        cn2 = document.getElementById('c2');
        cn3 = document.getElementById('c3');
        cn4 = document.getElementById('c4');
        c1 = cn1.getContext("2d");
        c2 = cn2.getContext("2d");
        c3 = cn3.getContext("2d");
        c4 = cn4.getContext("2d");
        c1.stroke();

        c1.clearRect(0, 0, 200, 200);
        c2.clearRect(0, 0, 200, 200);
        c3.clearRect(0, 0, 200, 200);
        c4.clearRect(0, 0, 200, 200);
        if (type == 1) {
            document.getElementById('shadowing').style.display = 'block';
            document.getElementById('box').style.display = 'block';
        } else {
            document.getElementById('shadowing').style.display = 'block';
            document.getElementById('box2').style.display = 'block';
        }
    }
    model.SetErrorsFunction(Errfunc);

    return {
        Errfunc: Errfunc
    }
}