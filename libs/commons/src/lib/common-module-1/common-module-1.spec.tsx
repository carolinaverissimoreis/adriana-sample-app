import { render } from '@testing-library/react';

import CommonModule1 from './common-module-1';

describe('CommonModule1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonModule1 />);
    expect(baseElement).toBeTruthy();
  });
});
