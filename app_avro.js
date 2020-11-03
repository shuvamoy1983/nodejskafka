//const { jsonToAvro } = require('json-to-avro')

const avro = require('avsc');
const jsonData = {
  "id": 90021,
  "Name": "Mike",
  "Salary": 5060
};

const AvroSchema = avro.Type.forSchema({
   type: 'record',
   fields: [
    {name: 'id', type: 'int'},
    {name: 'Name', type: 'string'},
    {name: 'Salary', type: 'int'}
  ]
}
);


const buf = AvroSchema.toBuffer(jsonData);
//const avroRecord = jsonToAvro(AvroSchema, jsonData)
module.exports = buf;
