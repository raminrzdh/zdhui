'use client';

import { useState } from 'react';
import * as Slider from '@/components/ui/slider';

export default function SliderPage() {
  const [value, setValue] = useState([50]);

  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Slider</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Allow users to select a value from a range.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`npm install @radix-ui/react-slider
# Copy components/ui/slider.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Slider from '@/components/ui/slider';

<Slider.Root value={value} onValueChange={setValue} />`}
          </code>
        </pre>
      </section>

      {/* Example */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Example</h2>
        <div className='rounded-lg border border-stroke-soft-200 p-6'>
          <div className='max-w-md'>
            <p className='text-paragraph-sm text-text-sub-600 mb-4'>Value: {value[0]}</p>
            <Slider.Root value={value} onValueChange={setValue} max={100} step={1} />
          </div>
        </div>
      </section>
    </div>
  );
}
