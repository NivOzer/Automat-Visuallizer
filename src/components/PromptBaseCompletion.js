import React from "react";
import { apiKey, organizationID } from "./OpenAI-Key.js";
import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: apiKey,
  organization: organizationID,
  dangerouslyAllowBrowser: true,
});

// async function chatGPT_execute() {
//   const compleiton = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [
//       {
//         role: "user",
//         content: "Hello how are you",
//       },
//     ],
//   });
//   console.log(compleiton.choices[0].message);
// }
// console.log(chatGPT_execute());

function PromptBaseCompletion() {
  return (
    <div className="w-6/12">
      <div className="full shadow-lg">
        <input
          className="text-center box-border text-xl shadow w-full border-none py-2 text-gray-700 border"
          type="text"
          placeholder="Specify an Automata"
        ></input>
      </div>
      <h6 className="p-1 m-0 flex justify-center text-zinc-300">
        Utilizing ChatGPT
      </h6>
    </div>
  );
}

export default PromptBaseCompletion;
