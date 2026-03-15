import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

// export async function getRecipeFromChefClaude(ingredientsArr) {
//   const ingredientsString = ingredientsArr.join(", ");

//   const msg = await anthropic.messages.create({
//     model: "claude-3-haiku-20240307",
//     max_tokens: 1024,
//     system: SYSTEM_PROMPT,
//     messages: [
//       {
//         role: "user",
//         content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
//       },
//     ],
//   });
//   return msg.content[0].text;
// }

// Make sure you set VITE_HUGGING_FACE_API_KEY in your .env file
const hf = new InferenceClient(import.meta.env.VITE_HUGGING_FACE_API_KEY);

const RECIPE_MODELS = [
  "mistralai/Mistral-7B-Instruct-v0.3",
  "HuggingFaceH4/zephyr-7b-beta",
  "Qwen/Qwen2.5-7B-Instruct",
];

export async function getRecipeFromAI(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  let lastError;

  for (const model of RECIPE_MODELS) {
    try {
      const response = await hf.chatCompletion({
        model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          {
            role: "user",
            content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
          },
        ],
        max_tokens: 1024,
      });

      const content = response?.choices?.[0]?.message?.content;
      if (content) return content;

      lastError = new Error("No recipe content returned from the AI provider.");
    } catch (err) {
      lastError = err;
    }
  }

  throw new Error(
    lastError?.message ||
      "Unable to generate a recipe right now. Please try again in a moment.",
  );
}
