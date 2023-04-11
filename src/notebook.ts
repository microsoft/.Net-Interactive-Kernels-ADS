'use strict';

import * as vscode from 'vscode';
import * as azdata from 'azdata';
import * as path from 'path';

// This function is called when you run the command Launch Notebooks: dot-net-interactive-kernels from
// command palette in Azure Data Studio. If you would like any additional functionality
// to occur when you launch the book, add to the activate function.
export function activate(context: vscode.ExtensionContext) {
// Add the extension to the subscriptions array for cleanup when the extension is deactivated
context.subscriptions.push(vscode.commands.registerCommand('launchNotebook.Install.Net-Interactive-Kernels', () => {
// This function looks for the notebook found in the extension folder
let notebook = path.join(context.extensionPath, '/content/Install-Dot-Net-Kernels.ipynb');
azdata.nb.showNotebookDocument(vscode.Uri.file(notebook)).then((result) => {
// Add any additional functionality to occur after the notebook has been shown
console.log(Notebook shown successfully: ${result});
}, (error) => {
// Handle any errors that occur when attempting to show the notebook
console.error(Error showing notebook: ${error});
});
}));
}

// This function is called when the extension is deactivated
export function deactivate() {
console.log('Deactivating extension');
}
