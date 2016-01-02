// Establish a namespace
var electionViz = electionViz || {};



electionViz.view2 = function(model, id) {


    var updateView = function(j) {

        function setPixel(imageData, x, y, r, g, b, a) {
            index = (x + y * imageData.width) * 4;
            imageData.data[index + 0] = r;
            imageData.data[index + 1] = g;
            imageData.data[index + 2] = b;
            imageData.data[index + 3] = a;
        }

        element = document.getElementById(id);
        cn2 = document.getElementById('c2');
        cn3 = document.getElementById('c3');
        cn4 = document.getElementById('c4');
        c = element.getContext("2d");
        c2 = cn2.getContext("2d");
        c3 = cn3.getContext("2d");
        c4 = cn4.getContext("2d");

        // read the width and height of the canvas
        width = element.width;
        height = element.height;
        c.clearRect(0, 0, width, height);
        c2.clearRect(0, 0, width, height);
        c3.clearRect(0, 0, width, height);
        c4.clearRect(0, 0, width, height);

        // create a new pixel array
        imageData = c.createImageData(width, height);

        for (i = 0; i < j.length; i++) {
            c.beginPath();
            dimx = ((j[i].x + 0.25) / (1.5)) * 200;
            dimy = ((j[i].y + 0.25) / (1.5)) * 200;
            c.arc(dimx, dimy, 0.5, 0, 2 * Math.PI, false);
            c.stroke();
        }
    }


    model.addObserver2(updateView);
    return {
        updateView: updateView
    };
};