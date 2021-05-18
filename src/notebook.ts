'use strict';

import * as vscode from 'vscode';
import * as azdata from 'azdata';
import * as path from 'path';

// This function is called when you run the command `Launch Notebooks: dot-net-interactive-kernels` from
// command palette in Azure Data Studio. If you would like any additional functionality
// to occur when you launch the book, add to the activate function.
export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(vscode.commands.registerCommand('launchNotebook.Install.Net-Interactive-Kernels', () => {
        // This function looks for the notebook found in the extension folder
        let notebook = path.join(context.extensionPath, '/content/Install-Dot-Net-Kernels.ipynb');
        azdata.nb.showNotebookDocument(vscode.Uri.file(notebook));
    }));
}
