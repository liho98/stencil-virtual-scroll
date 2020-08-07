import { newSpecPage } from '@stencil/core/testing';
import { VirtualScroll } from '../virtual-scroll';

describe('virtual-scroll', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VirtualScroll],
      html: `<virtual-scroll></virtual-scroll>`,
    });
    expect(page.root).toEqualHtml(`
      <virtual-scroll>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </virtual-scroll>
    `);
  });
});
