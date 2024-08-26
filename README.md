# AI Grammar Genius

AI Grammar Genius is a web application that leverages Google Generative AI to enhance your writing by detecting and correcting grammar mistakes. With the ability to consider context, it provides accurate and intelligent grammar corrections, making it an essential tool for anyone looking to improve their written content.

![WebApp UI](assetREADME.md\img2.png)

## Features

- **Grammar Correction**: Automatically corrects grammatical errors in the input text.
- **Contextual Understanding**: Takes into account the provided context to deliver more accurate corrections.
- **User-Friendly Interface**: Simple and intuitive UI built with Bootstrap and EJS.
- **AI-Powered**: Utilizes Google's Generative AI for advanced grammar checking.

## Installation

Follow these steps to get the application up and running on your local machine:

1. **Clone the repository:**
   git clone https://github.com/ArjunAmbavane01/AI-Grammar-Genius.git
   cd AI-Grammar-Genius
2. **Install dependencies**
   npm install
3. **Set up environment variables**
   - Create a .env file in the root directory.
   - Add your Google Generative AI API key :
     API_KEY=your_google_api_key<br>
     PORT=3000
4. **Start the server**
   node app.js

## Technologies Used   
1. Node.js: Backend framework.
2. Express: Web framework for Node.js.
3. EJS: Embedded JavaScript templating.
4. Google Generative AI: AI model for grammar correction.
5. Bootstrap: Front-end component library for designing the UI.
