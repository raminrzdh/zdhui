import React from 'react';
import PropTypes from 'prop-types';
import * as Radio from '@/components/ui/radio';

/**
 * @uxpindocurl https://www.zdh-ui.com/docs/ui/checkbox
 * @uxpindescription Checkbox is a form control for single and multiple selections.
 * @uxpinnamespace RadioGroup
 */
export default function Item(props) {
  return <Radio.Item {...props} />;
}

Item.propTypes = {
  asChild: PropTypes.bool,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onValueChange: PropTypes.func,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool,
  orientation: PropTypes.oneOf(['horizontal', 'vertical', undefined]),
  dir: PropTypes.oneOf(['ltr', 'rtl']),
  loop: PropTypes.bool,
};
