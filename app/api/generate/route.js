import Replicate from "replicate";

//[ToDo] connect replicate

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
          prompt: `User: For the given code, explain its time and space complexity: ${user_prompt}\n Assistant: `,
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
