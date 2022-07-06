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
      };
      var sort2dArray=function(data) {
        // From https://www.codingem.com/javascript-sort-an-array-of-arrays/
        const sortedData = data.sort((a, b) => b[1] - a[1]);
        return sortedData;
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
      sort2dArray(items).forEach(element => {
        /* We do this craziness with try/catch so we don't fail if that CDN ever goes down. */
        table.addRow(element[0],(()=>{try{return filesize(element[1])}catch(e){return element[1]}})());
      });
  });
}
