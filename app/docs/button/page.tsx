'use client';

import * as Button from '@/components/ui/button';
import { RiStarFill, RiDownloadLine } from '@remixicon/react';

export default function ButtonPage() {
  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Button</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Buttons trigger actions and events throughout your application.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`npm install @radix-ui/react-slot
# Copy components/ui/button.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Button from '@/components/ui/button';

<Button.Root variant='primary'>
  Click me
</Button.Root>`}
          </code>
        </pre>
      </section>

      {/* Examples */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Examples</h2>
        
        {/* Variants */}
        <div className='mb-8'>
          <h3 className='text-label-md text-text-strong-950 mb-4'>Variants</h3>
          <div className='rounded-lg border border-stroke-soft-200 p-6 mb-4'>
            <div className='flex flex-wrap gap-4'>
              <Button.Root>Default</Button.Root>
              <Button.Root variant='primary'>Primary</Button.Root>
              <Button.Root variant='neutral'>Neutral</Button.Root>
              <Button.Root variant='error'>Error</Button.Root>
            </div>
          </div>
          <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
            <code className='text-paragraph-sm font-mono'>
{`<Button.Root>Default</Button.Root>
<Button.Root variant='primary'>Primary</Button.Root>
<Button.Root variant='neutral'>Neutral</Button.Root>
<Button.Root variant='error'>Error</Button.Root>`}
            </code>
          </pre>
        </div>

        {/* Modes */}
        <div className='mb-8'>
          <h3 className='text-label-md text-text-strong-950 mb-4'>Modes</h3>
          <div className='rounded-lg border border-stroke-soft-200 p-6 mb-4'>
            <div className='flex flex-wrap gap-4'>
              <Button.Root variant='primary'>Filled</Button.Root>
              <Button.Root variant='primary' mode='stroke'>Stroke</Button.Root>
              <Button.Root variant='primary' mode='ghost'>Ghost</Button.Root>
            </div>
          </div>
          <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
            <code className='text-paragraph-sm font-mono'>
{`<Button.Root variant='primary'>Filled</Button.Root>
<Button.Root variant='primary' mode='stroke'>Stroke</Button.Root>
<Button.Root variant='primary' mode='ghost'>Ghost</Button.Root>`}
            </code>
          </pre>
        </div>

        {/* Sizes */}
        <div className='mb-8'>
          <h3 className='text-label-md text-text-strong-950 mb-4'>Sizes</h3>
          <div className='rounded-lg border border-stroke-soft-200 p-6 mb-4'>
            <div className='flex flex-wrap items-center gap-4'>
              <Button.Root size='xsmall'>XSmall</Button.Root>
              <Button.Root size='small'>Small</Button.Root>
              <Button.Root size='medium'>Medium</Button.Root>
            </div>
          </div>
          <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
            <code className='text-paragraph-sm font-mono'>
{`<Button.Root size='xsmall'>XSmall</Button.Root>
<Button.Root size='small'>Small</Button.Root>
<Button.Root size='medium'>Medium</Button.Root>`}
            </code>
          </pre>
        </div>

        {/* With Icons */}
        <div className='mb-8'>
          <h3 className='text-label-md text-text-strong-950 mb-4'>With Icons</h3>
          <div className='rounded-lg border border-stroke-soft-200 p-6 mb-4'>
            <div className='flex flex-wrap gap-4'>
              <Button.Root variant='primary'>
                <Button.Icon as={RiStarFill} />
                Favorite
              </Button.Root>
              <Button.Root variant='neutral'>
                <Button.Icon as={RiDownloadLine} />
                Download
              </Button.Root>
            </div>
          </div>
          <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
            <code className='text-paragraph-sm font-mono'>
{`import { RiStarFill } from '@remixicon/react';

<Button.Root variant='primary'>
  <Button.Icon as={RiStarFill} />
  Favorite
</Button.Root>`}
            </code>
          </pre>
        </div>

        {/* Disabled */}
        <div className='mb-8'>
          <h3 className='text-label-md text-text-strong-950 mb-4'>Disabled</h3>
          <div className='rounded-lg border border-stroke-soft-200 p-6 mb-4'>
            <div className='flex flex-wrap gap-4'>
              <Button.Root disabled>Disabled</Button.Root>
              <Button.Root variant='primary' disabled>Disabled Primary</Button.Root>
            </div>
          </div>
          <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
            <code className='text-paragraph-sm font-mono'>
{`<Button.Root disabled>Disabled</Button.Root>
<Button.Root variant='primary' disabled>Disabled Primary</Button.Root>`}
            </code>
          </pre>
        </div>
      </section>

      {/* API Reference */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>API Reference</h2>
        <div className='rounded-lg border border-stroke-soft-200 overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-bg-weak-50'>
              <tr>
                <th className='text-left p-4 text-label-sm text-text-strong-950'>Prop</th>
                <th className='text-left p-4 text-label-sm text-text-strong-950'>Type</th>
                <th className='text-left p-4 text-label-sm text-text-strong-950'>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>variant</td>
                <td className='p-4 text-paragraph-sm'>"primary" | "neutral" | "error"</td>
                <td className='p-4 text-paragraph-sm'>"primary"</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>mode</td>
                <td className='p-4 text-paragraph-sm'>"filled" | "stroke" | "ghost"</td>
                <td className='p-4 text-paragraph-sm'>"filled"</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>size</td>
                <td className='p-4 text-paragraph-sm'>"xsmall" | "small" | "medium" | "xxsmall"</td>
                <td className='p-4 text-paragraph-sm'>"medium"</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>disabled</td>
                <td className='p-4 text-paragraph-sm'>boolean</td>
                <td className='p-4 text-paragraph-sm'>false</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>asChild</td>
                <td className='p-4 text-paragraph-sm'>boolean</td>
                <td className='p-4 text-paragraph-sm'>false</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
