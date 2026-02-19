'use client';

import * as ProgressBar from '@/components/ui/progress-bar';
import * as ProgressCircle from '@/components/ui/progress-circle';

export default function ProgressPage() {
  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Progress</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Display progress indicators for tasks and operations.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`npm install @radix-ui/react-progress
# Copy components/ui/progress-bar.tsx and progress-circle.tsx`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as ProgressBar from '@/components/ui/progress-bar';
import * as ProgressCircle from '@/components/ui/progress-circle';

<ProgressBar.Root value={60} />
<ProgressCircle.Root value={75} />`}
          </code>
        </pre>
      </section>

      {/* Examples */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Examples</h2>
        
        <div className='space-y-8'>
          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>Progress Bar</h3>
            <div className='rounded-lg border border-stroke-soft-200 p-6 space-y-4'>
              <div>
                <p className='text-paragraph-sm text-text-sub-600 mb-2'>25%</p>
                <ProgressBar.Root value={25} />
              </div>
              <div>
                <p className='text-paragraph-sm text-text-sub-600 mb-2'>50%</p>
                <ProgressBar.Root value={50} />
              </div>
              <div>
                <p className='text-paragraph-sm text-text-sub-600 mb-2'>75%</p>
                <ProgressBar.Root value={75} />
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>Progress Circle</h3>
            <div className='rounded-lg border border-stroke-soft-200 p-6'>
              <div className='flex gap-6'>
                <ProgressCircle.Root value={25} />
                <ProgressCircle.Root value={50} />
                <ProgressCircle.Root value={75} />
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
                <td className='p-4 text-paragraph-sm font-mono'>value</td>
                <td className='p-4 text-paragraph-sm'>number (0-100)</td>
                <td className='p-4 text-paragraph-sm'>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
