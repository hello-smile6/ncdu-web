import directoryPicker from "./directoryPickerButton.js";

function init() {
    const domRoot=document.createElement("div");
    domRoot.appendChild(directoryPicker);
    document.body.appendChild(domRoot);
    return domRoot;
}
var domRoot=init();
export default domRoot;