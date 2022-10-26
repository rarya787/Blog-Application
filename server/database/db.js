import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://rarya787:rarya787@cluster0.3evz80r.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;