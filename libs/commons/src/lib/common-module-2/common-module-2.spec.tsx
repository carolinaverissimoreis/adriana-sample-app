import { render } from '@testing-library/react';

import CommonModule2 from './common-module-2';

describe('CommonModule2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonModule2 />);
    expect(baseElement).toBeTruthy();
  });
});
