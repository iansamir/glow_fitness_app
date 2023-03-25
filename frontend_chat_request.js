let messageStack = [
    {
     "role": "system",
     "content": "You are an AI named Ariana 
assistant for a fitness and nutrition 
app . Keep your responses 
brief, below 50 words."
    },
    {
     "role": "user",
     "content": "Hello, what is your name?"
    },
    {
     "role": "assistant",
     "content": "Hi, I’m Ariana. Your AI 
assistant."
    },
]

const getResponse = async () => {
    try {
        const response = await fetch('/openAI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                messages: messageStack
            }),
        });

        if (!response.ok) {
            throw new Error('Oops! Something went wrong.');
        }

        const data = await response.json();
        const responseText = data.data;
        messageStack.push({ "role": "assistant", "content": 
  `${responseText}` })
        
  appendMessage(responseText, 'assistant')

    } catch (error) {
        console.log(error)
    }
}
