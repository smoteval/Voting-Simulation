/*
 * Election visualization.
 * CS349 Fall 2015  Assignment 4
 */
$(function() {
    console.log("Execution begins in electionViz.js");
    var model = electionViz.model();
    var view1 = electionViz.view1(model, 'c1', 0);
    var view2 = electionViz.view1(model, 'c2', 1);
    var view3 = electionViz.view1(model, 'c3', 2);
    var view2 = electionViz.view1(model, 'c4', 3);
    var Error = electionViz.ErrorView(model);
    var viewforsamplevoting = electionViz.view2(model, 'c1');
    var controller = electionViz.controller(model);
    var controller2 = electionViz.controller2(model);
    // $("body").append("<h1>Electoral System Visualization</h1>");
    // $("h1").fadeOut(3000);
});