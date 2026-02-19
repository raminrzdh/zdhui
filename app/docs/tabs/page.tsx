'use client';

import * as TabMenuHorizontal from '@/components/ui/tab-menu-horizontal';

export default function TabsPage() {
  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Tabs</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Organize content into separate views.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`npm install @radix-ui/react-tabs
# Copy components/ui/tab-menu-horizontal.tsx`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Tabs from '@/components/ui/tab-menu-horizontal';

<Tabs.Root defaultValue='tab1'>
  <Tabs.List>
    <Tabs.Trigger value='tab1'>Tab 1</Tabs.Trigger>
    <Tabs.Trigger value='tab2'>Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value='tab1'>Content 1</Tabs.Content>
  <Tabs.Content value='tab2'>Content 2</Tabs.Content>
</Tabs.Root>`}
          </code>
        </pre>
      </section>

      {/* Example */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Example</h2>
        <div className='rounded-lg border border-stroke-soft-200 p-6'>
          <TabMenuHorizontal.Root defaultValue='account'>
            <TabMenuHorizontal.List>
              <TabMenuHorizontal.Trigger value='account'>Account</TabMenuHorizontal.Trigger>
              <TabMenuHorizontal.Trigger value='settings'>Settings</TabMenuHorizontal.Trigger>
              <TabMenuHorizontal.Trigger value='notifications'>Notifications</TabMenuHorizontal.Trigger>
            </TabMenuHorizontal.List>
            <TabMenuHorizontal.Content value='account'>
              <p className='text-paragraph-sm text-text-sub-600'>Account settings content</p>
            </TabMenuHorizontal.Content>
            <TabMenuHorizontal.Content value='settings'>
              <p className='text-paragraph-sm text-text-sub-600'>General settings content</p>
            </TabMenuHorizontal.Content>
            <TabMenuHorizontal.Content value='notifications'>
              <p className='text-paragraph-sm text-text-sub-600'>Notification preferences</p>
            </TabMenuHorizontal.Content>
          </TabMenuHorizontal.Root>
        </div>
      </section>
    </div>
  );
}
