'use client';

import { useState } from 'react';
import * as Checkbox from '@/components/ui/checkbox';

export default function CheckboxPage() {
  const [checked, setChecked] = useState(false);

  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Checkbox</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Allow users to select one or multiple options from a list.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`npm install @radix-ui/react-checkbox
# Copy components/ui/checkbox.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Checkbox from '@/components/ui/checkbox';

<Checkbox.Root checked={checked} onCheckedChange={setChecked} />`}
          </code>
        </pre>
      </section>

      {/* Examples */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Examples</h2>
        
        <div className='space-y-8'>
          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>Basic</h3>
            <div className='rounded-lg border border-stroke-soft-200 p-6'>
              <div className='flex items-center gap-3'>
                <Checkbox.Root checked={checked} onCheckedChange={setChecked} />
                <label className='text-paragraph-sm'>Accept terms and conditions</label>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>Multiple Options</h3>
            <div className='rounded-lg border border-stroke-soft-200 p-6'>
              <div className='space-y-3'>
                <div className='flex items-center gap-3'>
                  <Checkbox.Root defaultChecked />
                  <label className='text-paragraph-sm'>Email notifications</label>
                </div>
                <div className='flex items-center gap-3'>
                  <Checkbox.Root />
                  <label className='text-paragraph-sm'>SMS notifications</label>
                </div>
                <div className='flex items-center gap-3'>
                  <Checkbox.Root defaultChecked />
                  <label className='text-paragraph-sm'>Push notifications</label>
                </div>
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
                <td className='p-4 text-paragraph-sm font-mono'>checked</td>
                <td className='p-4 text-paragraph-sm'>boolean</td>
                <td className='p-4 text-paragraph-sm'>false</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>defaultChecked</td>
                <td className='p-4 text-paragraph-sm'>boolean</td>
                <td className='p-4 text-paragraph-sm'>false</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>onCheckedChange</td>
                <td className='p-4 text-paragraph-sm'>(checked: boolean) =&gt; void</td>
                <td className='p-4 text-paragraph-sm'>-</td>
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
