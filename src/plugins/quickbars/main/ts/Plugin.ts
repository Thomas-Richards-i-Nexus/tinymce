/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

import PluginManager from 'tinymce/core/api/PluginManager';
import { default as InsertButtons } from './insert/Buttons';
import { default as InsertToolbars } from './insert/Toolbars';

import { default as SelectionButtons } from './selection/Buttons';
import { default as SelectionToolbars } from './selection/Toolbars';

PluginManager.add('quickbars', function (editor) {
  InsertButtons.setupButtons(editor);
  InsertToolbars.addToEditor(editor);

  SelectionButtons.setupButtons(editor);
  SelectionToolbars.addToEditor(editor);
});

export default function () { }