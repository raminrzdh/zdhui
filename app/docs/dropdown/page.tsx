'use client';

import * as Dropdown from '@/components/ui/dropdown';
import * as Button from '@/components/ui/button';
import { RiMoreLine } from '@remixicon/react';

export default function DropdownPage() {
  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Dropdown</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Display a menu of actions or options triggered by a button.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`npm install @radix-ui/react-dropdown-menu
# Copy components/ui/dropdown.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Dropdown from '@/components/ui/dropdown';

<Dropdown.Root>
  <Dropdown.Trigger>Options</Dropdown.Trigger>
  <Dropdown.Portal>
    <Dropdown.Content>
      <Dropdown.Item>Edit</Dropdown.Item>
      <Dropdown.Item>Delete</Dropdown.Item>
    </Dropdown.Content>
  </Dropdown.Portal>
</Dropdown.Root>`}
          </code>
        </pre>
      </section>

      {/* Example */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Example</h2>
        <div className='rounded-lg border border-stroke-soft-200 p-6'>
          <Dropdown.Root>
            <Dropdown.Trigger asChild>
              <Button.Root variant='neutral'>
                <Button.Icon as={RiMoreLine} />
                Options
              </Button.Root>
            </Dropdown.Trigger>
            <Dropdown.Portal>
              <Dropdown.Content>
                <Dropdown.Item>Edit</Dropdown.Item>
                <Dropdown.Item>Duplicate</Dropdown.Item>
                <Dropdown.Item>Archive</Dropdown.Item>
                <Dropdown.Separator />
                <Dropdown.Item>Delete</Dropdown.Item>
              </Dropdown.Content>
            </Dropdown.Portal>
          </Dropdown.Root>
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
                <td className='p-4 text-paragraph-sm'>Button that opens the dropdown</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>Content</td>
                <td className='p-4 text-paragraph-sm'>Container for dropdown items</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>Item</td>
                <td className='p-4 text-paragraph-sm'>Individual menu item</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
