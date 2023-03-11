const axios = require('axios');
import { createClient } from '@supabase/supabase-js';

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    // Process a POST request
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL as string,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
    );

    const {
      data: { user },
    } = await supabase.auth.getUser(req.headers.token as string);
    if (!user) {
      return res.status(401).json({ error: 'Not authorized' });
    }
    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'X-API-KEY': process.env.SANATAN_AI_API_KEY,
      },
    };
    let question = req.body.question;
    let chat_history = req.body.chat_history;

    let payload = {
      question: question, 
      chat_history: chat_history,
    };

    const { data: apiCount, error } = await supabase.rpc('incrementcount', {
      id: user.id,
    });

    let generations;
    if (apiCount === 0) {
      generations = {
        data: {
          answer: `We humbly ask for your patience, as you have made the maximum number of requests for today. Please visit us again tomorrow for more guidance. Radhey Radhey!<br>`,
          chat_history: [
            ...chat_history,
            `Human: ${question} \n` +
              `AI: We humbly ask for your patience, as you have made the maximum number of requests for today. Please visit us again tomorrow for more guidance. Radhey Radhey!<br>`,
          ],
        },
      };
    } else {
      generations = await axios.post(
        `${process.env.SANATAN_AI_API_URL}content/bhagavad_gita`,
        payload,
        axiosConfig
      );
    }

    let data = generations.data;
    return res.json(data);
  } else {
    return res.status(200).json({ message: 'Radhey Radhey Dear Devotee' });
  }
}
