const Kafka = require('kafka-node');
const config  = require('./config');
//const { jsonToAvro } = require('json-to-avro')


const Producer = Kafka.Producer;
const client = new Kafka.KafkaClient({kafkaHost: config.KafkaHost});
const producer = new Producer(client);

//console.log(client)

const pushDataToKafka =(dataToPush) => {

  try {
  let payloadToKafkaTopic = [{topic: config.KafkaTopic, messages: JSON.stringify(dataToPush) }]
 
  console.log(payloadToKafkaTopic);
  producer.on('ready', async function() {
    producer.send(payloadToKafkaTopic, (err, data) => {
          console.log('data: ', data);
  });

  producer.on('error', function(err) {
    //  handle error cases here
  })
  })
  }
catch(error) {
  console.log(error);
}

};


const jsonData = require('./app_json.js');

for(var i in jsonData){
 console.log(jsonData[i])
 pushDataToKafka(jsonData[i]);
}
    


//const avroSchema= require('./app_avro.js');
//const avroRecord = jsonToAvro(avroSchema,jsonData)

//console.log(out);

//jsondata.forEach(p=> console.log(p))
//pushDataToKafka(jsonData);
