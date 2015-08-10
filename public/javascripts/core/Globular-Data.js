"use strict";

/*
Data Class

*/


// Creates an element holding a name string, a mapDiagram object and an RGB value describing the colour
function Data(name, colour, diagram, dimension) {
    this.name = name;
    this.colour = colour;
    this.diagram = diagram;
    this.dimension = dimension;
};

Data.prototype.getType = function() {
    return 'Data';
};

