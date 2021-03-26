/** @jsx jsx */

import { jsx } from '@udecode/slate-plugins-test-utils';
import { withReact } from 'slate-react';
import { optionsAutoformat } from '../../../../../../stories/config/autoformatRules';
import { withAutoformat } from '../../../getAutoformatPlugin';

jsx;

const input = (
  <editor>
    <hp>
      -
      <cursor />
      hello
    </hp>
  </editor>
) as any;

const output = (
  <editor>
    <hul>
      <hli>
        <hp>hello</hp>
      </hli>
    </hul>
  </editor>
) as any;

it('should autoformat', () => {
  const editor = withAutoformat(optionsAutoformat)(withReact(input));

  editor.insertText(' ');

  expect(input.children).toEqual(output.children);
});
