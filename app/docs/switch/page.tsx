'use client';

import { useState } from 'react';
import * as Switch from '@/components/ui/switch';

export default function SwitchPage() {
  const [checked, setChecked] = useState(false);

  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Switch</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        A toggle control for binary on/off states.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`npm install @radix-ui/react-switch
# Copy components/ui/switch.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Switch from '@/components/ui/switch';

<Switch.Root checked={checked} onCheckedChange={setChecked} />`}
          </code>
        </pre>
      </section>

      {/* Example */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Example</h2>
        <div className='rounded-lg border border-stroke-soft-200 p-6'>
          <div className='flex items-center gap-3'>
            <Switch.Root checked={checked} onCheckedChange={setChecked} />
            <label className='text-paragraph-sm'>Enable notifications</label>
          </div>
        </div>
      </section>
    </div>
  );
}
