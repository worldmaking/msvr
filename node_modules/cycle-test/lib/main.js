#! /bin/env node

// Copyright 2016 Andrew Engelbrecht
//
// This program is released under CC0
//
// https://creativecommons.org/publicdomain/zero/1.0/
//
//
// cycle-test - returns true if a directed graph contains a cycle


var hasCycle, hasCycleHere;

// return true if any cycles are found in directed graph
hasCycle = function (graph) {

    "use strict";

    var colors, vertex;

    console.assert(Array.isArray(graph),
            "cycle-test: internal error: invalid graph (must be an array): "
            + JSON.stringify(graph));


    // there is a color for every vertex in the graph
    // "undefined" is treated as "white", or "not yet visited"
    colors = [];

    for (vertex = 0; vertex < graph.length; vertex += 1) {

        if (graph[vertex] !== undefined
                && hasCycleHere(graph, colors, vertex)) {
            return true;
        }
    }

    return false;
};

// check for cycles downstream from, or through, this vertex
hasCycleHere = function (graph, colors, vertex) {

    "use strict";

    var children, child, i;

    console.assert(Array.isArray(graph),
            "cycle-test: internal error: invalid graph (must be an array): "
            + JSON.stringify(graph));

    console.assert(Array.isArray(colors),
            "cycle-test: internal error: invalid colors (must be an array): "
            + JSON.stringify(colors));

    console.assert((typeof vertex === 'number' && !isNaN(vertex) && vertex % 1 === 0),
            "cycle-test: internal error: invalid vertex (must be an integer): "
            + JSON.stringify(vertex));


    if (colors[vertex] === "black") {
        return false;
    }

    // cycle found
    if (colors[vertex] === "grey") {
        return true;
    }


    // mark the vertex as "processing"
    colors[vertex] = "grey";

    children = graph[vertex];

    if (children !== undefined) {

        console.assert(Array.isArray(children),
                "cycle-test: internal error: invalid edges sub-array (must be an array or undefined): "
                + JSON.stringify(children));

        for (i = 0; i < children.length; i += 1) {

            child = children[i];

            if (hasCycleHere(graph, colors, child)) {
                return true;
            }
        }
    }


    // mark the vertex as "processed"
    colors[vertex] = "black";

    return false;
};

module.exports.hasCycle = hasCycle;


