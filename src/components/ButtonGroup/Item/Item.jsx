import React from 'react';
import PropTypes from 'prop-types';
import { Item as ButtonGroupItem } from '../../ui/button-group';
/**
 * @uxpindocurl https://www.zdh-ui.com/docs/ui/button-group
 * @uxpindescription Button groups are a set of buttons sticked together in a horizontal line.
 * @uxpinnamespace ButtonGroup
 */
export default function Item(props) {
  return <ButtonGroupItem {...props} />;
}

Item.propTypes = {
  /**
   * Content of the component.
   */
  children: PropTypes.node,
  /**
   * Determines whether the component should behave as a child element.
   */
  asChild: PropTypes.bool,

  /**
   * Additional Classes.
   */
  className: PropTypes.object,
};
