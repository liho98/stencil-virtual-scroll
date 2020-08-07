import { newSpecPage } from '@stencil/core/testing';
import { DemoVscroll } from '../demo-vscroll';

describe('demo-vscroll', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DemoVscroll],
      html: `<demo-vscroll></demo-vscroll>`,
    });
    expect(page.root).toEqualHtml(`
      <demo-vscroll>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </demo-vscroll>
    `);
  });
});
