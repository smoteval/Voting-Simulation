// Establish a namespace
var electionViz = electionViz || {};



electionViz.view1 = function(model, id, Election) {



    var updateView = function(j, res, numCandidates, candidatePositions, electoralSys) {

        function setPixel(imageData, x, y, r, g, b, a) {
            index = (x + y * imageData.width) * 4;
            imageData.data[index + 0] = r;
            imageData.data[index + 1] = g;
            imageData.data[index + 2] = b;
            imageData.data[index + 3] = a;
        }

        element = document.getElementById(id);

        c = element.getContext("2d");
        // c.font = '20pt Verdana';
        // c.fillText('Some text', 50, 50);
        // c.strokeText('Some text', 50, 50);

        // read the width and height of the canvas
        width = element.width;
        height = element.height;

        // create a new pixel array
        imageData = c.createImageData(width, height);
        var marg = res * 1;

        for (y1 = 0; y1 < height;) {
            for (x1 = 0; x1 < width;) {
                x = parseInt(x1 / marg);
                y = parseInt(y1 / marg);
                if (x > parseInt(200 / marg) - 1) {
                    x = parseInt(200 / marg) - 1;
                }
                if (y > parseInt(200 / marg) - 1) {
                    y = parseInt(200 / marg) - 1;
                }

                // set red, green, blue, and alpha:
                if (j[x][y][Election] == 0) {
                    setPixel(imageData, x1, y1, 200, 38, 222, 255);
                } else if (j[x][y][Election] == 1) {
                    setPixel(imageData, x1, y1, 24, 8, 204, 255);
                } else if (j[x][y][Election] == 2) {
                    setPixel(imageData, x1, y1, 12, 198, 240, 255);
                } else if (j[x][y][Election] == 3) {
                    setPixel(imageData, x1, 1, 153, 163, 160, 255);
                } else if (j[x][y][Election] == 4) {
                    setPixel(imageData, x1, y1, 36, 161, 11, 255);
                } else if (j[x][y][Election] == 5) {
                    setPixel(imageData, x1, y1, 245, 245, 5, 255);
                }
                x1 = x1 + 1
            }
            y1 = y1 + 1;
        }


        // copy the image data back onto the canvas
        c.putImageData(imageData, 0, 0); // at coords 0,0
        for (i = 0; i < numCandidates; i++) {
            c.beginPath();
            dimx = ((candidatePositions[i].x + 0.25) / (1.5)) * 200;
            dimy = ((candidatePositions[i].y + 0.25) / (1.5)) * 200;
            c.arc(dimx, dimy, 3, 0, 2 * Math.PI, false);
            c.stroke();
        }

        c.font = '8pt Verdana';
        c.fillText(electoralSys[Election], 10, 10);
        c.strokeText(electoralSys[Election], 10, 10);


    }

    // Init view
    //$(id).click(function() { ... });     

    model.addObserver(updateView);
    return {
        updateView: updateView
    };
};