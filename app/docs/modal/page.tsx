'use client';

import { useState } from 'react';
import * as Modal from '@/components/ui/modal';
import * as Button from '@/components/ui/button';

export default function ModalPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Modal</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        A dialog window that overlays the main content.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`npm install @radix-ui/react-dialog
# Copy components/ui/modal.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Modal from '@/components/ui/modal';

<Modal.Root open={open} onOpenChange={setOpen}>
  <Modal.Trigger>Open Modal</Modal.Trigger>
  <Modal.Content>
    <Modal.Header>
      <Modal.Title>Modal Title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      Content goes here
    </Modal.Body>
  </Modal.Content>
</Modal.Root>`}
          </code>
        </pre>
      </section>

      {/* Example */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Example</h2>
        <div className='rounded-lg border border-stroke-soft-200 p-6'>
          <Modal.Root open={open} onOpenChange={setOpen}>
            <Modal.Trigger asChild>
              <Button.Root variant='primary'>Open Modal</Button.Root>
            </Modal.Trigger>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>Confirm Action</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p className='text-paragraph-md text-text-sub-600 mb-6'>
                  Are you sure you want to proceed with this action? This cannot be undone.
                </p>
                <div className='flex gap-3 justify-end'>
                  <Button.Root variant='neutral' onClick={() => setOpen(false)}>
                    Cancel
                  </Button.Root>
                  <Button.Root variant='primary' onClick={() => setOpen(false)}>
                    Confirm
                  </Button.Root>
                </div>
              </Modal.Body>
            </Modal.Content>
          </Modal.Root>
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
