'use client';

import * as Badge from '@/components/ui/badge';

export default function BadgePage() {
  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Badge</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Small labels for displaying status, counts, or categories.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`# Copy components/ui/badge.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Badge from '@/components/ui/badge';

<Badge.Root variant='primary'>New</Badge.Root>`}
          </code>
        </pre>
      </section>

      {/* Examples */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Examples</h2>
        
        <div className='space-y-8'>
          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>Variants</h3>
            <div className='rounded-lg border border-stroke-soft-200 p-6'>
              <div className='flex flex-wrap gap-3'>
                <Badge.Root variant='primary'>Primary</Badge.Root>
                <Badge.Root variant='neutral'>Neutral</Badge.Root>
                <Badge.Root variant='success'>Success</Badge.Root>
                <Badge.Root variant='warning'>Warning</Badge.Root>
                <Badge.Root variant='error'>Error</Badge.Root>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>Sizes</h3>
            <div className='rounded-lg border border-stroke-soft-200 p-6'>
              <div className='flex flex-wrap items-center gap-3'>
                <Badge.Root size='small'>Small</Badge.Root>
                <Badge.Root size='medium'>Medium</Badge.Root>
              </div>
            </div>
          </div>
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
                <td className='p-4 text-paragraph-sm'>"primary" | "neutral" | "success" | "warning" | "error"</td>
                <td className='p-4 text-paragraph-sm'>"primary"</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>size</td>
                <td className='p-4 text-paragraph-sm'>"small" | "medium"</td>
                <td className='p-4 text-paragraph-sm'>"medium"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
