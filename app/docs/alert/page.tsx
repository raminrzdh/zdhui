'use client';

import * as Alert from '@/components/ui/alert';
import { RiInformationLine, RiCheckLine, RiErrorWarningLine, RiAlertLine } from '@remixicon/react';

export default function AlertPage() {
  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Alert</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Display important messages and notifications to users.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`# Copy components/ui/alert.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Alert from '@/components/ui/alert';

<Alert.Root variant='filled' status='information'>
  <Alert.Icon as={RiInformationLine} />
  <div>
    <p>This is an informational message.</p>
  </div>
</Alert.Root>`}
          </code>
        </pre>
      </section>

      {/* Examples */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Examples</h2>
        
        <div className='space-y-6'>
          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>Status Types</h3>
            <div className='rounded-lg border border-stroke-soft-200 p-6 space-y-4'>
              <Alert.Root variant='filled' status='information'>
                <Alert.Icon as={RiInformationLine} />
                <div>
                  <p className='font-medium'>Information</p>
                  <p className='text-sm opacity-90'>This is an informational alert.</p>
                </div>
              </Alert.Root>

              <Alert.Root variant='filled' status='success'>
                <Alert.Icon as={RiCheckLine} />
                <div>
                  <p className='font-medium'>Success</p>
                  <p className='text-sm opacity-90'>Operation completed successfully.</p>
                </div>
              </Alert.Root>

              <Alert.Root variant='filled' status='warning'>
                <Alert.Icon as={RiAlertLine} />
                <div>
                  <p className='font-medium'>Warning</p>
                  <p className='text-sm opacity-90'>Please review this warning message.</p>
                </div>
              </Alert.Root>

              <Alert.Root variant='filled' status='error'>
                <Alert.Icon as={RiErrorWarningLine} />
                <div>
                  <p className='font-medium'>Error</p>
                  <p className='text-sm opacity-90'>An error occurred during the operation.</p>
                </div>
              </Alert.Root>
            </div>
          </div>

          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>Variants</h3>
            <div className='rounded-lg border border-stroke-soft-200 p-6 space-y-4'>
              <Alert.Root variant='filled' status='information'>
                <Alert.Icon as={RiInformationLine} />
                <div>Filled variant</div>
              </Alert.Root>

              <Alert.Root variant='light' status='information'>
                <Alert.Icon as={RiInformationLine} />
                <div>Light variant</div>
              </Alert.Root>

              <Alert.Root variant='lighter' status='information'>
                <Alert.Icon as={RiInformationLine} />
                <div>Lighter variant</div>
              </Alert.Root>

              <Alert.Root variant='stroke' status='information'>
                <Alert.Icon as={RiInformationLine} />
                <div>Stroke variant</div>
              </Alert.Root>
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
                <td className='p-4 text-paragraph-sm'>"filled" | "light" | "lighter" | "stroke"</td>
                <td className='p-4 text-paragraph-sm'>"filled"</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>status</td>
                <td className='p-4 text-paragraph-sm'>"information" | "success" | "warning" | "error" | "feature"</td>
                <td className='p-4 text-paragraph-sm'>"information"</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>size</td>
                <td className='p-4 text-paragraph-sm'>"xsmall" | "small" | "large"</td>
                <td className='p-4 text-paragraph-sm'>"small"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
