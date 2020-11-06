import { newSpecPage } from '@stencil/core/testing';
import { AlexaQuickLink } from './alexa-quick-link';

describe('alexa-quick-link', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AlexaQuickLink],
      html: '<alexa-quick-link></alexa-quick-link>',
    });
    expect(root).toEqualHtml(`
      <alexa-quick-link>
        <mock:shadow-root>
          <a>
            <slot />
          </a>
        </mock:shadow-root>
      </alexa-quick-link>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AlexaQuickLink],
      html: `<alexa-quick-link skill-id="skill-id">Click me</alexa-quick-link>`,
    });
    expect(root).toEqualHtml(`
      <alexa-quick-link skill-id="skill-id">
        <mock:shadow-root>
          <a href="https://alexa-skills.amazon.co.jp/apis/custom/skills/skill-id/launch">
            <slot />
          </a>
        </mock:shadow-root>
        Click me
      </alexa-quick-link>
    `);
  });

  it('renders with values and a tag attributes', async () => {
    const { root } = await newSpecPage({
      components: [AlexaQuickLink],
      html: `<alexa-quick-link skill-id="skill-id" href="aaaa" target="_blank" rel="noopener">Click me</alexa-quick-link>`,
    });
    expect(root).toEqualHtml(`
      <alexa-quick-link skill-id="skill-id" href="aaaa" target="_blank" rel="noopener">
        <mock:shadow-root>
          <a href="https://alexa-skills.amazon.co.jp/apis/custom/skills/skill-id/launch" target="_blank" rel="noopener">
            <slot />
          </a>
        </mock:shadow-root>
        Click me
      </alexa-quick-link>
    `);
  });
});
