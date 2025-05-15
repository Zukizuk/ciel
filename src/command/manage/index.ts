import inquirer from "inquirer";
import { manageMenuChoices, ManageMenuChoiceKey } from "../../lib/choices";
import { prompt } from "../../components/globals";

function what() {
  return prompt({
    message: "What do you want to manage?",
    choices: manageMenuChoices,
  });
}

async function manageMain() {
  try {
    const choice = await what();
    switch (choice) {
      case ManageMenuChoiceKey.MANAGE_PROJECT:
        console.log("Manage project selected");
        // Add your project management logic here
        break;
      default:
        console.error("Invalid choice");
        process.exit(1);
    }
  } catch (error: any) {
    console.error(`Error: ${error.message || "Unknown error"}`);
    process.exit(1);
  }
}

export default manageMain;
