'use client';

import * as Avatar from '@/components/ui/avatar';

export default function AvatarPage() {
  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Avatar</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Display user profile images with fallback support.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`npm install @radix-ui/react-avatar
# Copy components/ui/avatar.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Avatar from '@/components/ui/avatar';

<Avatar.Root>
  <Avatar.Image src='/avatar.jpg' alt='User' />
</Avatar.Root>

// With text content
<Avatar.Root>JD</Avatar.Root>`}
          </code>
        </pre>
      </section>

      {/* Examples */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Examples</h2>
        
        <div className='space-y-8'>
          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>Sizes</h3>
            <div className='rounded-lg border border-stroke-soft-200 p-6'>
              <div className='flex items-center gap-4'>
                <Avatar.Root size='20'>XS</Avatar.Root>
                <Avatar.Root size='32'>SM</Avatar.Root>
                <Avatar.Root size='48'>MD</Avatar.Root>
                <Avatar.Root size='64'>LG</Avatar.Root>
                <Avatar.Root size='80'>XL</Avatar.Root>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>With Image</h3>
            <div className='rounded-lg border border-stroke-soft-200 p-6'>
              <div className='flex items-center gap-4'>
                <Avatar.Root size='64'>
                  <Avatar.Image src='https://i.pravatar.cc/150?img=1' alt='User 1' />
                </Avatar.Root>
                <Avatar.Root size='64'>
                  <Avatar.Image src='https://i.pravatar.cc/150?img=2' alt='User 2' />
                </Avatar.Root>
                <Avatar.Root size='64'>
                  <Avatar.Image src='https://i.pravatar.cc/150?img=3' alt='User 3' />
                </Avatar.Root>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>Colors</h3>
            <div className='rounded-lg border border-stroke-soft-200 p-6'>
              <div className='flex items-center gap-4'>
                <Avatar.Root size='48' color='gray'>AB</Avatar.Root>
                <Avatar.Root size='48' color='blue'>CD</Avatar.Root>
                <Avatar.Root size='48' color='purple'>EF</Avatar.Root>
                <Avatar.Root size='48' color='red'>GH</Avatar.Root>
                <Avatar.Root size='48' color='yellow'>IJ</Avatar.Root>
              </div>
            </div>
          </div>

          <div>
            <h3 className='text-label-md text-text-strong-950 mb-4'>With Status</h3>
            <div className='rounded-lg border border-stroke-soft-200 p-6'>
              <div className='flex items-center gap-4'>
                <Avatar.Root size='64'>
                  <Avatar.Image src='https://i.pravatar.cc/150?img=4' alt='User' />
                  <Avatar.Indicator>
                    <Avatar.Status status='online' />
                  </Avatar.Indicator>
                </Avatar.Root>
                <Avatar.Root size='64'>
                  <Avatar.Image src='https://i.pravatar.cc/150?img=5' alt='User' />
                  <Avatar.Indicator>
                    <Avatar.Status status='busy' />
                  </Avatar.Indicator>
                </Avatar.Root>
                <Avatar.Root size='64'>
                  <Avatar.Image src='https://i.pravatar.cc/150?img=6' alt='User' />
                  <Avatar.Indicator>
                    <Avatar.Status status='away' />
                  </Avatar.Indicator>
                </Avatar.Root>
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
                <td className='p-4 text-paragraph-sm font-mono'>size</td>
                <td className='p-4 text-paragraph-sm'>"20" | "24" | "32" | "40" | "48" | "56" | "64" | "72" | "80"</td>
                <td className='p-4 text-paragraph-sm'>"80"</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>color</td>
                <td className='p-4 text-paragraph-sm'>"gray" | "yellow" | "blue" | "sky" | "purple" | "red"</td>
                <td className='p-4 text-paragraph-sm'>"gray"</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>placeholderType</td>
                <td className='p-4 text-paragraph-sm'>"user" | "company"</td>
                <td className='p-4 text-paragraph-sm'>"user"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
