import { render } from '@testing-library/react';

import CommonModulePeople from './common-module-people';

describe('CommonModulePeople', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonModulePeople />);
    expect(baseElement).toBeTruthy();
  });
});
