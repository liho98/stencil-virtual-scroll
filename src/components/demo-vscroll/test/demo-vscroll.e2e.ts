import { newE2EPage } from '@stencil/core/testing';

describe('demo-vscroll', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<demo-vscroll></demo-vscroll>');

    const element = await page.find('demo-vscroll');
    expect(element).toHaveClass('hydrated');
  });
});
