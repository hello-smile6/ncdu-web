import { chooseDirectory } from "./eventHandler";
import directoryPicker from "./ui/directoryPickerButton";
import { init } from "./ui/init";
import { mkTable } from "./ui/mkTable";

// Create our UI
var domRoot=init();
directoryPicker.addEventListener("click", chooseDirectory);