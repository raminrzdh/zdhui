'use client';

import { useState } from 'react';
import * as Input from '@/components/ui/input';
import { RiMailLine, RiSearchLine, RiLockLine } from '@remixicon/react';

export default function InputPage() {
  const [value, setValue] = useState('');

  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Input</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Text input fields for forms and user input.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`# Copy components/ui/input.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Input from '@/components/ui/input';

<Input.Root>
  <Input.Wrapper>
    <Input.Input placeholder='Enter text...' />
  </Input.Wrapper>
</Input.Root>`}
          </code>
        </pre>
      </section>

      {/* Examples */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Examples</h2>
        
        {/* Basic */}
        <div className='mb-8'>
          <h3 className='text-label-md text-text-strong-950 mb-4'>Basic</h3>
          <div className='rounded-lg border border-stroke-soft-200 p-6 mb-4'>
            <div className='max-w-md'>
              <Input.Root>
                <Input.Wrapper>
                  <Input.Input placeholder='Enter your email' />
                </Input.Wrapper>
              </Input.Root>
            </div>
          </div>
          <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
            <code className='text-paragraph-sm font-mono'>
{`<Input.Root>
  <Input.Wrapper>
    <Input.Input placeholder='Enter your email' />
  </Input.Wrapper>
</Input.Root>`}
            </code>
          </pre>
        </div>

        {/* With Icon */}
        <div className='mb-8'>
          <h3 className='text-label-md text-text-strong-950 mb-4'>With Icon</h3>
          <div className='rounded-lg border border-stroke-soft-200 p-6 mb-4'>
            <div className='max-w-md space-y-4'>
              <Input.Root>
                <Input.Wrapper>
                  <Input.Icon as={RiMailLine} />
                  <Input.Input placeholder='Email address' />
                </Input.Wrapper>
              </Input.Root>
              <Input.Root>
                <Input.Wrapper>
                  <Input.Icon as={RiSearchLine} />
                  <Input.Input placeholder='Search...' />
                </Input.Wrapper>
              </Input.Root>
            </div>
          </div>
          <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
            <code className='text-paragraph-sm font-mono'>
{`import { RiMailLine } from '@remixicon/react';

<Input.Root>
  <Input.Wrapper>
    <Input.Icon as={RiMailLine} />
    <Input.Input placeholder='Email address' />
  </Input.Wrapper>
</Input.Root>`}
            </code>
          </pre>
        </div>

        {/* Sizes */}
        <div className='mb-8'>
          <h3 className='text-label-md text-text-strong-950 mb-4'>Sizes</h3>
          <div className='rounded-lg border border-stroke-soft-200 p-6 mb-4'>
            <div className='max-w-md space-y-4'>
              <Input.Root size='small'>
                <Input.Wrapper>
                  <Input.Input placeholder='Small input' />
                </Input.Wrapper>
              </Input.Root>
              <Input.Root>
                <Input.Wrapper>
                  <Input.Input placeholder='Medium input (default)' />
                </Input.Wrapper>
              </Input.Root>
            </div>
          </div>
        </div>

        {/* Error State */}
        <div className='mb-8'>
          <h3 className='text-label-md text-text-strong-950 mb-4'>Error State</h3>
          <div className='rounded-lg border border-stroke-soft-200 p-6 mb-4'>
            <div className='max-w-md'>
              <Input.Root hasError>
                <Input.Wrapper>
                  <Input.Input placeholder='Invalid input' />
                </Input.Wrapper>
              </Input.Root>
            </div>
          </div>
          <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
            <code className='text-paragraph-sm font-mono'>
{`<Input.Root hasError>
  <Input.Wrapper>
    <Input.Input placeholder='Invalid input' />
  </Input.Wrapper>
</Input.Root>`}
            </code>
          </pre>
        </div>

        {/* Disabled */}
        <div className='mb-8'>
          <h3 className='text-label-md text-text-strong-950 mb-4'>Disabled</h3>
          <div className='rounded-lg border border-stroke-soft-200 p-6 mb-4'>
            <div className='max-w-md'>
              <Input.Root>
                <Input.Wrapper>
                  <Input.Input placeholder='Disabled input' disabled />
                </Input.Wrapper>
              </Input.Root>
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
                <td className='p-4 text-paragraph-sm font-mono'>size</td>
                <td className='p-4 text-paragraph-sm'>"small" | "medium"</td>
                <td className='p-4 text-paragraph-sm'>"medium"</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>hasError</td>
                <td className='p-4 text-paragraph-sm'>boolean</td>
                <td className='p-4 text-paragraph-sm'>false</td>
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
