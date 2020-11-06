import { Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'alexa-quick-link',
  shadow: true,
})
export class MyComponent {
  /**
   * Your skill id
   */
  @Prop() skillId: string;

  @Prop() target?: string;

  @Prop() rel?: string;

  private getQuickLink(): string {
    if (!this.skillId) return null;
    return [
      'https://alexa-skills.amazon.co.jp/apis/custom/skills',
      this.skillId,
      'launch'
    ].join('/');
  }

  private getElementAttributes() {
    const attributes = {
      href: this.getQuickLink(),
      target: this.target,
      rel: this.rel,
    }
    return attributes
  }

  render() {
    return (
      <a {...this.getElementAttributes()}>
        <slot />
      </a>
    );
  }
}
