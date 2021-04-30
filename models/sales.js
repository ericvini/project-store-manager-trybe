const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () =>
  connection()
    .then((db) => db.collection('sales').find().toArray());

// const findByName = async (name) =>{
//   return await connection()
//     .then((db) => db.collection('products').findOne({ name: name }));
// };

const findById = async (id) =>{
  return await connection()
    .then((db) => db.collection('sales').findOne(new ObjectId(id)));
};
const deleteById = async (id) =>{
  return await connection()
    .then((db) => db.collection('sales')
      .deleteOne({_id:ObjectId(id)}));
};
const create = async (itensSold) =>
  connection()
    .then((db) =>
      db.collection('sales').insertOne(itensSold)
    ).then((result) => result);

const updateById = async (quantity,id,index) =>
  connection()
    .then((db) =>
      db.collection('sales').updateOne({ _id: new ObjectId(id),
      },
      {$set: { [`itensSold.${index}.quantity`]:quantity}})
    ).then((result) => result);

module.exports = {
  getAll,
  deleteById,
  updateById,
  // findByName,
  findById,
  create,
};
