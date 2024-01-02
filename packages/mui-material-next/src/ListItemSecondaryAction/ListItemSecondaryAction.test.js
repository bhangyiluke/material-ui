import * as React from 'react';
import { expect } from 'chai';
import { createRenderer, describeConformance } from '@mui-internal/test-utils';
import ListItem from '@mui/material-next/ListItem';
import ListItemSecondaryAction, {
  listItemSecondaryActionClasses as classes,
} from '@mui/material-next/ListItemSecondaryAction';

describe('<ListItemSecondaryAction />', () => {
  const { render } = createRenderer();

  describeConformance(<ListItemSecondaryAction />, () => ({
    classes,
    inheritComponent: 'div',
    render,
    refInstanceof: window.HTMLDivElement,
    muiName: 'MuiListItemSecondaryAction',
    skip: ['componentProp', 'componentsProp', 'themeVariants'],
  }));

  it('should render without classes that disable gutters', () => {
    const { getByTestId } = render(
      <ListItem>
        <ListItemSecondaryAction data-testid="secondary-action" />
      </ListItem>,
    );
    expect(getByTestId('secondary-action')).not.to.have.class(classes.disableGutters);
  });

  it('should disable the gutters', () => {
    const { getByTestId } = render(
      <ListItem disableGutters>
        <ListItemSecondaryAction data-testid="secondary-action" />
      </ListItem>,
    );
    expect(getByTestId('secondary-action')).to.have.class(classes.disableGutters);
  });
});
