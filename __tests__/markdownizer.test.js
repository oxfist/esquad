import markdownizer from '../lib/markdownizer';

describe('markdownizer', () => {
  it('returns markdown for a rendered component', async () => {
    const fakeRenderedComponent = '<strong>Foobar</strong>';

    const actualText = await markdownizer.markdownize(fakeRenderedComponent);

    expect(actualText).toEqual('**Foobar**');
  });
});
