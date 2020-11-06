import { newE2EPage } from '@stencil/core/testing';

describe('alexa-quick-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<alexa-quick-link></alexa-quick-link>');
    const element = await page.find('alexa-quick-link');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<alexa-quick-link skill-id="aaaa">this is my skill!</alexa-quick-link>');
    const element = await page.find('alexa-quick-link >>> a');
    expect(element.getAttribute('href')).toEqual("https://alexa-skills.amazon.co.jp/apis/custom/skills/aaaa/launch")
  });
});
