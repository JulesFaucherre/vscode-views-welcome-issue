# test-tree-view-welcome README

Extension showing issues between VSCode treeView viewsWelcome and treeView message.

In [the doc](https://code.visualstudio.com/api/extension-guides/tree-view#welcome-content) it says that treeView's viewsWelcome must be shown when the treeView has no element and no message. Apparently setting the message to an empty string `''` or to `undefined`, as it is allowed by the API typing, is not enough to make VSCode consider showing the viewsWelcome.

This extension exposes an empty tree with a viewsWelcome and a message set to undefined, you can launch the extension to see that the treeView.message does not appear
