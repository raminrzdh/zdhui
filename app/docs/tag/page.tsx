'use client';

import * as Tag from '@/components/ui/tag';

export default function TagPage() {
  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Tag</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Display labels with optional remove functionality.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`# Copy components/ui/tag.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Tag from '@/components/ui/tag';

<Tag.Root>
  React
  <Tag.DismissButton />
</Tag.Root>`}
          </code>
        </pre>
      </section>

      {/* Examples */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Examples</h2>
        
        <div className='space-y-8'>
          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>Basic Tags</h3>
            <div className='rounded-lg border border-stroke-soft-200 p-6'>
              <div className='flex flex-wrap gap-2'>
                <Tag.Root>
                  React
                  <Tag.DismissButton />
                </Tag.Root>
                <Tag.Root>
                  TypeScript
                  <Tag.DismissButton />
                </Tag.Root>
                <Tag.Root>
                  Tailwind
                  <Tag.DismissButton />
                </Tag.Root>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>Variants</h3>
            <div className='rounded-lg border border-stroke-soft-200 p-6'>
              <div className='flex flex-wrap gap-2'>
                <Tag.Root variant='stroke'>
                  Stroke
                  <Tag.DismissButton />
                </Tag.Root>
                <Tag.Root variant='gray'>
                  Gray
                  <Tag.DismissButton />
                </Tag.Root>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>Disabled</h3>
            <div className='rounded-lg border border-stroke-soft-200 p-6'>
              <div className='flex flex-wrap gap-2'>
                <Tag.Root disabled>
                  Disabled
                  <Tag.DismissButton />
                </Tag.Root>
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
                <td className='p-4 text-paragraph-sm'>"stroke" | "gray"</td>
                <td className='p-4 text-paragraph-sm'>"stroke"</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>disabled</td>
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
