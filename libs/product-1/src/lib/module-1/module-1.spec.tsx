import { render } from '@testing-library/react';

import Module1 from './module-1';

describe('Module1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Module1 />);
    expect(baseElement).toBeTruthy();
  });
});
