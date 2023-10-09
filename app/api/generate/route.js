import Replicate from "replicate";

export const POST = async (request, response) => {
  const body = await request.json();
  // create auth connection
  const { user_prompt } = body;
  const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });

  // ref: https://replicate.com/meta/llama-2-13b-chat/api
  try {
    const result = await replicate.run(
      "meta/llama-2-13b-chat:f4e2de70d66816a838a89eeeb621910adffb0dd0baba3976c96980970978018d",
      {
        input: {
          prompt: `User: Find the code's time and space complexity within 100 words: ${user_prompt}.\n Assistant: `,
          system_prompt: `You are a helpful, respectful and honest assistant but avoid polite and introductory language, such as "Sure!", "Certainly!", "Ah", instead immediately beginning the contents of a reply.
          Always answer as helpfully as possible, while being safe.
          Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, introductory or illegal content.  Please ensure that your responses are socially unbiased and positive in nature. If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information. Do not mention what your role is.`,
          max_new_tokens: 256,
        },
      }
    );
    return new Response(JSON.stringify({ result: result }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
};
