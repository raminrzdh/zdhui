import React from 'react';
import PropTypes from 'prop-types';
import { Icon as ButtonGroupIcon } from '../../ui/button-group';
/**
 * @uxpindocurl https://www.zdh-ui.com/docs/ui/button-group
 * @uxpindescription Button groups are a set of buttons sticked together in a horizontal line.
 * @uxpinnamespace ButtonGroup
 */
export default function Icon(props) {
  return <ButtonGroupIcon {...props} />;
}

Icon.propTypes = {
  /**
   * Content of the component.
   */
  children: PropTypes.node,
  /**
   * The ButtonGroup.Icon component is polymorphic, allowing you to change the underlying HTML element using the as prop.
   */
  as: PropTypes.node,
};
