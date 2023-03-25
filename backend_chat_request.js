const { Configuration, OpenAIApi } = require('openai');
const OPENAI_API_KEY = " ";
const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateText = async (req, res) => {
    
    let messageStack = req.body.messages
    try {
        const response = await openai.createChatCompletion({
            // gpt-3.5-turbo
            model: "gpt-4",
            messages: messageStack,
        });

        const responseText = response['data']['choices'][0]['message']['content']

        res.status(200).json({
            success: true,
            data: responseText,
          });

    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
}

// generateText("Hi, what is your name and how are you?")

module.exports = { generateText };
