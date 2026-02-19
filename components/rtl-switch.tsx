'use client';

import { useRTL } from './rtl-provider';
import * as Button from '@/components/ui/button';

export default function RTLSwitch() {
  const { direction, toggleDirection } = useRTL();

  return (
    <Button.Root
      variant='neutral'
      mode='ghost'
      size='sm'
      onClick={toggleDirection}
      aria-label='Toggle text direction'
    >
      {direction === 'ltr' ? 'RTL' : 'LTR'}
    </Button.Root>
  );
}
