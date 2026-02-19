import React from 'react';
import PropTypes from 'prop-types';
import { Root } from '../ui/checkbox';
/**
 * @uxpindocurl https://www.zdh-ui.com/docs/ui/checkbox
 * @uxpindescription Checkbox is a form control for single and multiple selections.
 */
export default function Checkbox(props) {
  return <Root {...props} />;
}

Checkbox.propTypes = {
  /**
   * Determines whether the component should behave as a child element.
   * Defaults to `false`.
   */
  asChild: PropTypes.bool,

  /**
   * Whether the checkbox is checked by default.
   */
  defaultChecked: PropTypes.bool,

  /**
   * Whether the checkbox is checked.
   * @uxpinbind onCheckedChange 0
   */
  checked: PropTypes.bool,

  /**
   * Callback function triggered when the checked state changes.
   */
  onCheckedChange: PropTypes.func,

  /**
   * Whether the checkbox is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * Whether the checkbox is required.
   */
  required: PropTypes.bool,

  /**
   * The name of the checkbox input.
   */
  name: PropTypes.string,

  /**
   * The value associated with the checkbox.
   */
  value: PropTypes.string,
};
