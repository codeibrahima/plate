/** @jsx jsx */

jsx;
import { jsx } from '@udecode/slate-plugins-test-utils';
import { Editor } from 'slate';
import { withReact } from 'slate-react';
import { useBoldPlugin } from '../../../../../../marks/basic-marks/src/bold/getBoldPlugin';
import { createEditorPlugins } from '../../../../../../slate-plugins/src/utils/createEditorPlugins';
import { getSlatePluginsOptions } from '../../../../../../slate-plugins/src/utils/getSlatePluginsOptions';
import {
  getDeserializeHTMLPlugin,
  withDeserializeHTML,
} from '../../getDeserializeHTMLPlugin';

const input = ((
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any) as Editor;

// noinspection CheckTagEmptyBody
const data = {
  getData: () => '<html></html>',
};

const output = (
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any;

describe('when inserting empty html', () => {
  it('should do nothing', () => {
    const plugins = [useBoldPlugin()];
    plugins.push(getDeserializeHTMLPlugin({ plugins }));
    const editor = createEditorPlugins({
      editor: input,
      plugins,
    });

    editor.insertData(data as any);

    expect(editor.children).toEqual(output.children);
  });
});
