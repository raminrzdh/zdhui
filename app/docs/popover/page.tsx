'use client';

import * as Popover from '@/components/ui/popover';
import * as Button from '@/components/ui/button';

export default function PopoverPage() {
  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Popover</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Display rich content in a floating panel.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`npm install @radix-ui/react-popover
# Copy components/ui/popover.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Popover from '@/components/ui/popover';

<Popover.Root>
  <Popover.Trigger>Open</Popover.Trigger>
  <Popover.Content>
    Content goes here
  </Popover.Content>
</Popover.Root>`}
          </code>
        </pre>
      </section>

      {/* Example */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Example</h2>
        <div className='rounded-lg border border-stroke-soft-200 p-6'>
          <Popover.Root>
            <Popover.Trigger asChild>
              <Button.Root variant='primary'>Open Popover</Button.Root>
            </Popover.Trigger>
            <Popover.Content>
              <div>
                <h3 className='text-label-md text-text-strong-950 mb-2'>Popover Title</h3>
                <p className='text-paragraph-sm text-text-sub-600'>
                  This is a popover with some content inside.
                </p>
              </div>
            </Popover.Content>
          </Popover.Root>
        </div>
      </section>

      {/* API Reference */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>API Reference</h2>
        <div className='rounded-lg border border-stroke-soft-200 overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-bg-weak-50'>
              <tr>
                <th className='text-left p-4 text-label-sm text-text-strong-950'>Component</th>
                <th className='text-left p-4 text-label-sm text-text-strong-950'>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>Root</td>
                <td className='p-4 text-paragraph-sm'>Container component</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>Trigger</td>
                <td className='p-4 text-paragraph-sm'>Button that opens the popover</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>Content</td>
                <td className='p-4 text-paragraph-sm'>Popover content container</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
