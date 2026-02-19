import React from 'react';
import PropTypes from 'prop-types';
import Root from './Root/Root';
import Item from './Item/Item';
import Icon from './Icon/Icon';
/**
 * @uxpindescription Empty Namespace for UXPin - Do not use
 */
export default function ButtonGroup(props) {
  return <div {...props}>Empty Namespace - Do not use</div>;
}

ButtonGroup.propTypes = {
  /**
   * Content of the component.
   */
  children: PropTypes.node,
};
ButtonGroup.Root = Root;
ButtonGroup.Item = Item;
ButtonGroup.Icon = Icon;
