import { render } from '@testing-library/react';

import Module2 from './module-2';

describe('Module2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Module2 />);
    expect(baseElement).toBeTruthy();
  });
});
