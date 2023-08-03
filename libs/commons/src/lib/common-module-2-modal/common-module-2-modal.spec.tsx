import { render } from '@testing-library/react';

import CommonModule2Modal from './common-module-2-modal';

describe('CommonModule2Modal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonModule2Modal />);
    expect(baseElement).toBeTruthy();
  });
});
