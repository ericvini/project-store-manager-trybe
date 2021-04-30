const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () =>
  connection()
    .then((db) => db.collection('products').find().toArray());

const findByName = async (name) =>{
  return await connection()
    .then((db) => db.collection('products').findOne({ name: name }));
};

const findById = async (id) =>{
  return await connection()
    .then((db) => db.collection('products').findOne(new ObjectId(id)));
};
const deleteById = async (id) =>{
  return await connection()
    .then((db) => db.collection('products')
      .deleteOne({_id:ObjectId(id)}));
};
const create = async (name, quantity) =>
  connection()
    .then((db) =>
      db.collection('products').insertOne({ name, quantity })
    ).then((result) => result);

const updateById = async (name, quantity,id) =>
  connection()
    .then((db) =>
      db.collection('products').updateOne({ _id: new ObjectId(id) },
        {$set: {name, quantity}})
    ).then((result) => result);

module.exports = {
  getAll,
  deleteById,
  updateById,
  findByName,
  findById,
  create,
};
