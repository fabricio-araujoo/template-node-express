import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectStr = `${process.env.MONGO_CONNECT || ''}`;

mongoose.connect(connectStr);

const mongo = mongoose.connection;

mongo.on('error', (err) => console.error('Mongo Connection Error: ', err));
mongo.once('open', () => console.log('Mongo Connection Started!'));

module.exports = mongo;
