const { Thing } = require('../models');

module.exports.createThing = async (req, res, next) => {
  try {
    const { body } = req;
    const newThing = await Thing.create(body);
    if(newThing){
      return res.status(201).send(newThing);
    }
    return res.status(400).send('');
  } catch (error) {
    next(error);
  }
};