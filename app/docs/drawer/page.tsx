'use client';

import { useState } from 'react';
import * as Drawer from '@/components/ui/drawer';
import * as Button from '@/components/ui/button';

export default function DrawerPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Drawer</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        A panel that slides in from the edge of the screen.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`npm install @radix-ui/react-dialog
# Copy components/ui/drawer.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Drawer from '@/components/ui/drawer';

<Drawer.Root open={open} onOpenChange={setOpen}>
  <Drawer.Trigger>Open Drawer</Drawer.Trigger>
  <Drawer.Content>
    <Drawer.Header>
      <Drawer.Title>Drawer Title</Drawer.Title>
    </Drawer.Header>
    <Drawer.Body>
      Content goes here
    </Drawer.Body>
  </Drawer.Content>
</Drawer.Root>`}
          </code>
        </pre>
      </section>

      {/* Example */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Example</h2>
        <div className='rounded-lg border border-stroke-soft-200 p-6'>
          <Drawer.Root open={open} onOpenChange={setOpen}>
            <Drawer.Trigger asChild>
              <Button.Root variant='primary'>Open Drawer</Button.Root>
            </Drawer.Trigger>
            <Drawer.Content>
              <Drawer.Header>
                <Drawer.Title>Drawer Example</Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <div className='p-5'>
                  <p className='text-paragraph-md text-text-sub-600 mb-4'>
                    This is a drawer component that slides in from the right side of the screen.
                  </p>
                  <p className='text-paragraph-md text-text-sub-600'>
                    It supports RTL layouts and will slide from the appropriate direction.
                  </p>
                </div>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Root>
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
                <td className='p-4 text-paragraph-sm font-mono'>open</td>
                <td className='p-4 text-paragraph-sm'>boolean</td>
                <td className='p-4 text-paragraph-sm'>false</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>onOpenChange</td>
                <td className='p-4 text-paragraph-sm'>(open: boolean) =&gt; void</td>
                <td className='p-4 text-paragraph-sm'>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
