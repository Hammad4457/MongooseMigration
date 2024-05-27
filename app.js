import  express from 'express';
import  mongoose from 'mongoose';

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://hammadkhalil04:A1iPlnqSSxPnU7Bj@migrationtestingpractic.zvytoiw.mongodb.net/MigrationTestingPractice', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Define a simple route
app.get('/', (req, res) => {
    res.send('Welcome to the server');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

