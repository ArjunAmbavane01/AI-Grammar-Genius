import { configDotenv } from 'dotenv';
import express from 'express'
import { GoogleGenerativeAI } from '@google/generative-ai';

configDotenv();

const app = express();
const port = process.env.PORT || 3000;

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index', { correctedText: null });
})

app.post('/correct', async (req, res) => {
    const userInput = req.body.text;
    const context = req.body.context || '';
    try {

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `Please correct the grammar of the following text considering the context: "${context}". Text: "${userInput}"`;

        const result = await model.generateContent(prompt);
        const correctedText = result?.response?.text() || 'Error in AI response';

        res.render('index', { correctedText });
    } catch (err) {
        console.error('Error calling Google Generative AI:', err);
        res.render('index', { correctedText: 'Error processing your request' });
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})