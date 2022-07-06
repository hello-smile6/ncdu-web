import { mkTable } from "./ui/mkTable.js";
import { domRoot } from "./ui/init.js";

export function chooseDirectory(event) {
  window.showDirectoryPicker().then(async function (directoryHandle) {
    var table=mkTable();
    domRoot.appendChild(table);
    /**
     * From an MDN example.
     * https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryHandle
     * Hopefully this'll be easy to use.
     * @param {FileSystemFileHandle} entry 
     */
    async function* getFilesRecursively (entry) {
        if (entry.kind === 'file') {
          const file = await entry.getFile();
          if (file !== null) {
            // No such method: getRelativePath
            // file.relativePath = getRelativePath(entry);
            yield file;
          }
        } else if (entry.kind === 'directory') {
          for await (const handle of entry.values()) {
            yield* getFilesRecursively(handle);
          }
        }
      }
      var items=[];
      for await (const fileHandle of getFilesRecursively(directoryHandle)) {
        /**
         * @type {File} currentFile
         */
        if(fileHandle instanceof File) {
            console.log(fileHandle);
            let currentFile=fileHandle;
            // Pointless
            // table.addRow(currentFile.name,currentFile.size);
            items.push([currentFile.name,currentFile.size]);
        }
        else {
            console.log("Not a file",fileHandle);
        }
      };
      
  });
}
