/**
 * 
 * @param {OpenAI} openai 
 * @param {*} slide 
 */
export async function getAssistantForSlide(openai, slide) {
  const myAssistants = await openai.beta.assistants.list({
    // order: "desc",
    limit: "100"
  });
  // console.log(myAssistants.data);
  // Find the assistant with name that matches the slide.name
  let assistant = myAssistants.data.find((a) => {
    return a.name === slide.name;
  });
  // Update the assistant if a match is found,
  // Otherwise create a new assistant
  if (assistant) {
    assistant = await openai.beta.assistants.update(assistant.id, {
      instructions: slide.instructions,
      name: slide.name,
      model: slide.model
    });
  } else {
    assistant = await openai.beta.assistants.create({
      instructions: slide.instructions,
      name: slide.name,
      model: slide.model
    });
  }
  return assistant;
}
