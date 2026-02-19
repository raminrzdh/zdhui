'use client';

import * as Banner from '@/components/ui/banner';
import { RiInformationLine } from '@remixicon/react';

export default function BannerPage() {
  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Banner</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Display prominent messages and announcements at the top of pages.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`# Copy components/ui/banner.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Banner from '@/components/ui/banner';

<Banner.Root variant='filled' status='information'>
  <Banner.Content>
    <Banner.Icon as={RiInformationLine} />
    <span>New Feature Available</span>
  </Banner.Content>
</Banner.Root>`}
          </code>
        </pre>
      </section>

      {/* Examples */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Examples</h2>
        
        <div className='space-y-6'>
          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>Status Types</h3>
            <div className='space-y-4'>
              <Banner.Root variant='filled' status='information'>
                <Banner.Content>
                  <Banner.Icon as={RiInformationLine} />
                  <span className='text-label-sm'>This is an informational banner</span>
                </Banner.Content>
              </Banner.Root>

              <Banner.Root variant='filled' status='success'>
                <Banner.Content>
                  <Banner.Icon as={RiInformationLine} />
                  <span className='text-label-sm'>Operation completed successfully</span>
                </Banner.Content>
              </Banner.Root>

              <Banner.Root variant='filled' status='warning'>
                <Banner.Content>
                  <Banner.Icon as={RiInformationLine} />
                  <span className='text-label-sm'>Please review this warning</span>
                </Banner.Content>
              </Banner.Root>

              <Banner.Root variant='filled' status='error'>
                <Banner.Content>
                  <Banner.Icon as={RiInformationLine} />
                  <span className='text-label-sm'>An error occurred</span>
                </Banner.Content>
              </Banner.Root>
            </div>
          </div>

          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>Variants</h3>
            <div className='space-y-4'>
              <Banner.Root variant='filled' status='information'>
                <Banner.Content>
                  <Banner.Icon as={RiInformationLine} />
                  <span className='text-label-sm'>Filled variant</span>
                </Banner.Content>
              </Banner.Root>

              <Banner.Root variant='light' status='information'>
                <Banner.Content>
                  <Banner.Icon as={RiInformationLine} />
                  <span className='text-label-sm'>Light variant</span>
                </Banner.Content>
              </Banner.Root>

              <Banner.Root variant='lighter' status='information'>
                <Banner.Content>
                  <Banner.Icon as={RiInformationLine} />
                  <span className='text-label-sm'>Lighter variant</span>
                </Banner.Content>
              </Banner.Root>

              <Banner.Root variant='stroke' status='information'>
                <Banner.Content>
                  <Banner.Icon as={RiInformationLine} />
                  <span className='text-label-sm'>Stroke variant</span>
                </Banner.Content>
              </Banner.Root>
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
                <td className='p-4 text-paragraph-sm'>"feature"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
