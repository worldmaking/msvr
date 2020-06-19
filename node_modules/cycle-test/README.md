# cycle-test

`cycle-test` detects cycles in your [directed
graph](https://en.wikipedia.org/wiki/Directed_graph) by returning
`true` or `false`.

## Status:

Version: 1.0.0

This is beta software.

## Installation:

    npm install cycle-test

## Use:

Each value of the input array represents a vertex identified by its array
index. Each vertex must be `undefined` (ignored) or an array of zero or more
integers, each representing an edge to another vertex.

    ct = require('cycle-test');

    graph = [[1], [2], [0]];
    console.log(ct.hasCycle(graph));
    // true

    graph = [[1, 2], [2], []];
    console.log(ct.hasCycle(graph));
    // false

    graph = [[0]];
    console.log(ct.hasCycle(graph));
    // true

    graph = [[1], [3], , [0]];
    console.log(ct.hasCycle(graph));
    // true

## Explanation:

For an explanation of the algorithm, see the following [stackoverflow
comment](http://stackoverflow.com/questions/261573/best-algorithm-for-detecting-cycles-in-a-directed-graph#comment43707072_16505064)
and [GeeksforGeeks
article](http://www.geeksforgeeks.org/detect-cycle-direct-graph-using-colors/).

## Authors:

Andrew Engelbrecht (lead developer and maintainer)

## License:

`cycle-test` is realeased under CC0. ([CC0 License](https://creativecommons.org/publicdomain/zero/1.0/))

