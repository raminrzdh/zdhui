'use client';

import { useState } from 'react';
import * as Radio from '@/components/ui/radio';

export default function RadioPage() {
  const [value, setValue] = useState('option1');

  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Radio</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Allow users to select a single option from a list.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`npm install @radix-ui/react-radio-group
# Copy components/ui/radio.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Radio from '@/components/ui/radio';

<Radio.Group value={value} onValueChange={setValue}>
  <Radio.Item value='option1' />
</Radio.Group>`}
          </code>
        </pre>
      </section>

      {/* Example */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Example</h2>
        <div className='rounded-lg border border-stroke-soft-200 p-6'>
          <Radio.Group value={value} onValueChange={setValue}>
            <div className='space-y-3'>
              <div className='flex items-center gap-3'>
                <Radio.Item value='option1' />
                <label className='text-paragraph-sm'>Option 1</label>
              </div>
              <div className='flex items-center gap-3'>
                <Radio.Item value='option2' />
                <label className='text-paragraph-sm'>Option 2</label>
              </div>
              <div className='flex items-center gap-3'>
                <Radio.Item value='option3' />
                <label className='text-paragraph-sm'>Option 3</label>
              </div>
            </div>
          </Radio.Group>
        </div>
      </section>
    </div>
  );
}
