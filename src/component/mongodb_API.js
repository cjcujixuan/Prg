const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://110b16908:<Seb56835>@cluster0.swkxwzw.mongodb.net/TwStock', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// 定義一個簡單的資料模型
const Schema = mongoose.Schema;
const TestSchema = new Schema({
  field1: String,
  field2: String,
});

const TestModel = mongoose.model('Test', TestSchema);

// 創建一個簡單的路由來獲取資料
app.get('/api/data', async (req, res) => {
  try {
    const data = await TestModel.find();
    res.json(data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
