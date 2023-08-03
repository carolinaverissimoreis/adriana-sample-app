import { render } from '@testing-library/react';

import Module3 from './module-3';

describe('Module3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Module3 />);
    expect(baseElement).toBeTruthy();
  });
});
