import React from 'react';
import PropTypes from 'prop-types';
import { Root } from '../ui/button';
/**
 * @uxpindocurl https://www.zdh-ui.com/docs/ui/button
 * @uxpindescription Renders a button or an element styled to resemble a button.
 */
function Button(props) {
  return <Root {...props} />;
}

Button.propTypes = {
  /**
   * Content of the component.
   */
  children: PropTypes.node,
  /**
   * Defines the variant of the component.
   */
  variant: PropTypes.oneOf(['primary', 'neutral', 'error']),

  /**
   * Defines the mode of the component.
   */
  mode: PropTypes.oneOf(['filled', 'stroke', 'lighter', 'ghost']),

  /**
   * Defines the size of the component.
   */
  size: PropTypes.oneOf(['medium', 'small', 'xsmall', 'xxsmall']),

  /**
   * Determines whether the component should behave as a child element.
   */
  asChild: PropTypes.bool,

  /**
   * Additional Classes.
   */
  className: PropTypes.object,
};

export { Button as default };
