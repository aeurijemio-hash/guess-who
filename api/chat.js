export const runtime = 'edge';

export async function POST(request) {
  const body = await request.json();
  
  const API_KEY = process.env.MINIMAX_API_KEY;
  const API_URL = 'https://api.minimaxi.com/v1/text/chatcompletion_v2';
  
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: 'MiniMax-M2.5',
      messages: body.messages,
      temperature: 0.7
    })
  });
  
  const data = await response.json();
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
}
