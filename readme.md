# Project #3. RESTful API with Node.js Framework
This is Project 3: RESTful API with Node.js Framework. In this project I created two endpoints to access and add blocks to my private blockchain.

## Setup project for Review.

To setup the project for review do the following:
1. Download the project.
2. Run command __npm install__ to install the project dependencies.
3. Run command __node simpleChain.js__ in the root directory to generate a blockchain with test blocks.
4. Run command __node app.js__ to start server. Access the server at the following address:
````
http://localhost:8000/
````

## Project Features

* Node.js Framework
  This project uses Express.js, a fast, unopinionated, minimalist framework for Node.js. More information can be found at: 
  ````
  https://expressjs.com
  ````

The project featurs 2 endpoints:

1. GET Block
URL:
  http://localhost:8000/block/[blockheight]

Example URL path:
  http://localhost:8000/block/3 -> where '3' is the block height

Response:
  The response provides a block object of corresponding height in JSON format.

2. POST Block
  URL:
    http://localhost:8000/block

  Payload:
    {
      "data": "insert block body data here"
    }
  Response:
    The response provides a newly generated block, containing corresponding payload data, in JSON format.


