'use client';

import * as Breadcrumb from '@/components/ui/breadcrumb';

export default function BreadcrumbPage() {
  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Breadcrumb</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Navigation component showing the current page location within a hierarchy.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`# Copy components/ui/breadcrumb.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Breadcrumb from '@/components/ui/breadcrumb';

<Breadcrumb.Root>
  <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
  <Breadcrumb.Item href='/docs'>Docs</Breadcrumb.Item>
  <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
</Breadcrumb.Root>`}
          </code>
        </pre>
      </section>

      {/* Example */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Example</h2>
        <div className='rounded-lg border border-stroke-soft-200 p-6'>
          <Breadcrumb.Root>
            <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
            <Breadcrumb.Item href='/docs'>Documentation</Breadcrumb.Item>
            <Breadcrumb.Item href='/docs/breadcrumb'>Components</Breadcrumb.Item>
            <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
          </Breadcrumb.Root>
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
                <td className='p-4 text-paragraph-sm font-mono'>href</td>
                <td className='p-4 text-paragraph-sm'>string</td>
                <td className='p-4 text-paragraph-sm'>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
