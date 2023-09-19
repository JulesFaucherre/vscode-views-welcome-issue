// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

class EmptyTreeDataProvider implements vscode.TreeDataProvider<void> {
  getChildren(): vscode.ProviderResult<void[]> {
    return [];
  }

  getTreeItem(): vscode.TreeItem | Thenable<vscode.TreeItem> {
    return new vscode.TreeItem("no item");
  }
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  const treeView = vscode.window.createTreeView("viewsWelcomeTest", {
    treeDataProvider: new EmptyTreeDataProvider(),
  });

  treeView.message = undefined;

  context.subscriptions.push(treeView);
}

// This method is called when your extension is deactivated
export function deactivate() {}
