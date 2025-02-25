import { KeyboardEvent } from 'react';
import { PlateEditor } from '@udecode/plate-core';
import { HandlerReturnType } from '@udecode/plate-core/src';
import { Range, Transforms } from 'slate';

export const moveSelectionByOffset = (
  editor: PlateEditor,
  { query = () => true }: { query: (editor: PlateEditor) => boolean }
) => (event: KeyboardEvent): HandlerReturnType => {
  const { selection } = editor;
  if (!selection || Range.isExpanded(selection) || !query(editor)) {
    return false;
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    Transforms.move(editor, { unit: 'offset', reverse: true });
    return true;
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault();
    Transforms.move(editor, { unit: 'offset' });
    return true;
  }
};
