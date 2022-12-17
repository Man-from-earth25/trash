import { expect } from 'chai';

import { updateContent, Renderer } from '@gqlapp/testing-client-react';

describe('Discount UI works', () => {
  const renderer = new Renderer({});
  const app = renderer.mount();
  renderer.history.push('/Discount');
  const content = updateContent(app.container);

  it('Discount page renders on mount', () => {
    // tslint:disable:no-unused-expression
    expect(content).to.not.be.empty;
  });

  it('Discount page has title', async () => {
    expect(content.textContent).to.include('Hello, This is the Discount module');
  });
});
