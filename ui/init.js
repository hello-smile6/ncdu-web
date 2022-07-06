import directoryPicker from "./directoryPickerButton.js";

export function init() {
    const domRoot=document.createElement("div");
    domRoot.appendChild(directoryPicker);
    document.body.appendChild(domRoot);
    return domRoot;
}