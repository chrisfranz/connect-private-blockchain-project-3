const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const Block = require('./Block');
const Blockchain = require('./BlockChain');
const chain = new Blockchain.Blockchain();

const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/block/:height', 
  async (req, res) => {
    try {
    // destructure request body to get height value
    const { height } = req.params;
    // query db for block with corresponding height
    const block = await chain.getBlock(height)
    // if query fails to return block, send error message
    if (!block) {
      res.status(400).send(`invalid request: block ${height} doesn't exist`);
      return;
    }
    // send response containing block to client
    res.send(block);
  } catch(e) {
    // if async activity fails, send 500 response
    res.status(500).send('server error')
  }
})

app.post('/block', 
  async (req, res) => {
    const { data } = req.body;
    if (!data) {
      res.status(400).send('invalid submission')
      return;
    }
    try {
      const newBlock = new Block.Block(data);
      const block = await chain.addBlock(newBlock);
      res.send(block);
    } catch(e) {
      res.status(500).send('server error')
    }
})

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}...`))