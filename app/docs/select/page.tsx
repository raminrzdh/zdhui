'use client';

import * as Select from '@/components/ui/select';

export default function SelectPage() {
  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Select</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        A dropdown menu for selecting from a list of options.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`npm install @radix-ui/react-select
# Copy components/ui/select.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Select from '@/components/ui/select';

<Select.Root>
  <Select.Trigger>
    <Select.Value placeholder='Select option' />
  </Select.Trigger>
  <Select.Content>
    <Select.Item value='1'>Option 1</Select.Item>
    <Select.Item value='2'>Option 2</Select.Item>
  </Select.Content>
</Select.Root>`}
          </code>
        </pre>
      </section>

      {/* Example */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Example</h2>
        <div className='rounded-lg border border-stroke-soft-200 p-6'>
          <Select.Root>
            <Select.Trigger className='w-64'>
              <Select.Value placeholder='Select a fruit' />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value='apple'>Apple</Select.Item>
              <Select.Item value='banana'>Banana</Select.Item>
              <Select.Item value='orange'>Orange</Select.Item>
              <Select.Item value='grape'>Grape</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      </section>
    </div>
  );
}
