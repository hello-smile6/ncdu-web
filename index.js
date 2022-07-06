import { chooseDirectory } from "./eventHandler.js";
import directoryPicker from "./ui/directoryPickerButton.js";
import { domRoot } from "./ui/init.js";
import { mkTable } from "./ui/mkTable.js";

// Create our UI
directoryPicker.addEventListener("click", chooseDirectory);