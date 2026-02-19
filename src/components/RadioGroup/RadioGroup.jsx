import React from 'react';
import PropTypes from 'prop-types';
import * as Radio from '@/components/ui/radio';
import Item from './Item/Item';

/**
 * @uxpindocurl https://www.zdh-ui.com/docs/ui/checkbox
 * @uxpindescription Checkbox is a form control for single and multiple selections.
 */
export default function RadioGroup(props) {
  return <Radio.Group {...props} />;
}

RadioGroup.Item = Item;

RadioGroup.propTypes = {
  children: PropTypes.node,
  asChild: PropTypes.bool,
  defaultValue: PropTypes.string,
  /**
   * If true, expands the accordion, otherwise collapse it. Setting this prop enables control over the accordion.
   * @uxpinbind onValueChange 0
   */
  value: PropTypes.string,
  onValueChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool,
  orientation: PropTypes.oneOf(['horizontal', 'vertical', undefined]),
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  loop: PropTypes.bool,
};
