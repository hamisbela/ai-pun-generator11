// Using Cloudflare Workers AI for text generation
const generateWithAI = async (prompt: string): Promise<string> => {
  try {
    // Log the API call for debugging
    console.log('Calling Cloudflare AI API with prompt:', prompt);

    const accountId = import.meta.env.VITE_CLOUDFLARE_ACCOUNT_ID;
    const apiToken = import.meta.env.VITE_CLOUDFLARE_API_TOKEN;

    if (!accountId || !apiToken) {
      throw new Error('Missing Cloudflare credentials');
    }

    const response = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/meta/llama-2-7b-chat-int8`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      mode: 'cors',
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: 'You are a creative AI assistant specialized in generating witty and clever content.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        stream: false
      })
    });

    // Log the response status for debugging
    console.log('API Response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error('API Error:', errorData);
      throw new Error(`API error: ${response.status} - ${errorData.errors?.[0]?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    console.log('API Response data:', data);

    // Check the response structure and return the generated content
    if (!data.result?.response) {
      console.error('Unexpected API response structure:', data);
      throw new Error('Invalid API response format');
    }

    return data.result.response;
  } catch (error) {
    console.error('Error generating content:', error);
    if (error instanceof Error && error.message.includes('Failed to fetch')) {
      throw new Error('Unable to connect to AI service. Please check your internet connection and try again.');
    }
    throw error instanceof Error ? error : new Error('Failed to generate content. Please try again.');
  }
};

const generatePrompt = (topic: string, type: string): string => {
  const prompts = {
    puns: `Generate 5 clever puns about "${topic}".
Requirements:
- Each pun should be witty and original
- Include wordplay that relates to the topic
- Keep them family-friendly
- Make them memorable and shareable

Return only the 5 puns, one per line, without numbers or additional text.`,

    jokes: `Generate 5 original jokes about "${topic}".
Requirements:
- Each joke should be clever and witty
- Include setup and punchline
- Keep them family-friendly
- Make them engaging and memorable

Return only the 5 jokes, one per line, without numbers or additional text.`,

    wordplay: `Generate 5 creative wordplay examples about "${topic}".
Requirements:
- Use clever linguistic techniques
- Include double meanings or homophones
- Keep them family-friendly
- Make them intellectually engaging

Return only the 5 wordplay examples, one per line, without numbers or additional text.`,

    riddles: `Generate 5 clever riddles about "${topic}".
Requirements:
- Each riddle should be challenging but solvable
- Include wordplay and clever misdirection
- Keep them family-friendly
- Make them thought-provoking

Return only the 5 riddles, one per line, without numbers or additional text.`,

    epigrams: `Generate 5 witty epigrams about "${topic}".
Requirements:
- Each epigram should be concise and memorable
- Include clever observations or paradoxes
- Keep them family-friendly
- Make them thought-provoking

Return only the 5 epigrams, one per line, without numbers or additional text.`
  };

  return prompts[type as keyof typeof prompts] || prompts.puns;
};

export const generateContent = async (
  topic: string,
  type: string = 'puns'
): Promise<string[]> => {
  // Check for required environment variables
  if (!import.meta.env.VITE_CLOUDFLARE_API_TOKEN || !import.meta.env.VITE_CLOUDFLARE_ACCOUNT_ID) {
    console.warn('Missing Cloudflare credentials, using fallback content');
    // Fallback content if API credentials are not set
    return [
      "Why did the AI go to therapy? It had too many processing issues!",
      "What do you call a computer that sings? A Dell-a-cappella!",
      "Why don't programmers like nature? It has too many bugs!",
      "What did the router say to the doctor? I feel a bit disconnected!",
      "Why did the cookie go to the doctor? Because it was feeling crumbly!"
    ];
  }

  try {
    const prompt = generatePrompt(topic, type);
    const result = await generateWithAI(prompt);
    
    // Split the result into lines and clean up
    const lines = result.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .slice(0, 5);

    // If we got no valid lines, throw an error
    if (lines.length === 0) {
      throw new Error('No valid content generated');
    }

    return lines;
  } catch (error) {
    console.error('Error in generateContent:', error);
    throw error instanceof Error ? error : new Error('Failed to generate content. Please try again.');
  }
};
