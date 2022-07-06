import { chooseDirectory } from "./eventHandler.js";
import directoryPicker from "./ui/directoryPickerButton.js";
import { init } from "./ui/init.js";
import { mkTable } from "./ui/mkTable.js";

// Create our UI
var domRoot=init();
directoryPicker.addEventListener("click", chooseDirectory);