'use strict';

import * as vscode from 'vscode';
import * as azdata from 'azdata';
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

// This function looks in the user's extensions folder for notebooks to be opened.
// If it encounters an error, a message will appear in an error window.
const processNotebooks = (context: vscode.ExtensionContext) => {
    let notebook = context.extensionPath + '/content/Install-Dot-Net-Kernels.ipynb';
    try {
        let notebookNames: Array<string> = [];
        notebookNames.push(notebook);
        return notebookNames;
    } catch (e) {
        vscode.window.showErrorMessage("Unable to find " + notebook + ": " + e.message);
        return [];
    }
}


// This is a wrapper to read each subfolder in the extensions folder.
const getFolderContent = (folderPath: string) => {
    try {
        return fs.readdirSync(folderPath);
    } catch (e) {
        vscode.window.showErrorMessage("Unable to access " + folderPath + ": " + e.message);
        return [];
    }
}

// This function is called when you run the command `Launch Notebooks: dot-net-interactive-kernels` from
// command palette in Azure Data Studio. If you would like any additional functionality
// to occur when you launch the book, add to the activate function.
export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('launchNotebook.Install.Net-Interactive-Kernels', () => {
        let notebooksToDisplay: Array<string> = processNotebooks(context);
        notebooksToDisplay.forEach(name => {
            azdata.nb.showNotebookDocument(vscode.Uri.file(name));
        });
    }));
}
