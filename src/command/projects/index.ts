import inquirer from "inquirer";
import { projectMenuChoices, ProjectTypeEnum } from "../../lib/choices";
import { prompt } from "../../components/globals";

function whatProject() {
  return prompt({
    message: "What project do you want to create?",
    choices: projectMenuChoices,
  });
}

async function projectMain() {
  try {
    const projectChoice = await whatProject();
    switch (projectChoice) {
      case ProjectTypeEnum.DE:
        console.log("You chose DE Project");
        // Add logic for DE Project
        break;
      case ProjectTypeEnum.ML:
        console.log("You chose Machine Learning");
    }
  } catch (error: any) {
    console.error(`Error: ${error.message || "Unknown error"}`);
    process.exit(1);
  }
}

export default projectMain;
