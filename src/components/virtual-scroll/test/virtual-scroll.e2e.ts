import { newE2EPage } from '@stencil/core/testing';

describe('virtual-scroll', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<virtual-scroll></virtual-scroll>');

    const element = await page.find('virtual-scroll');
    expect(element).toHaveClass('hydrated');
  });
});
