'use client';

import * as Accordion from '@/components/ui/accordion';

export default function AccordionPage() {
  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Accordion</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        A vertically stacked set of interactive headings that reveal content sections.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`npm install @radix-ui/react-accordion
# Copy components/ui/accordion.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Accordion from '@/components/ui/accordion';

<Accordion.Root type='single' collapsible>
  <Accordion.Item value='item-1'>
    <Accordion.Header>
      <Accordion.Trigger>
        <Accordion.Arrow />
        <span>Is it accessible?</span>
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>
      Yes. It adheres to the WAI-ARIA design pattern.
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>`}
          </code>
        </pre>
      </section>

      {/* Example */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Example</h2>
        <div className='rounded-lg border border-stroke-soft-200 p-6 mb-4'>
          <Accordion.Root type='single' collapsible className='space-y-3 max-w-2xl'>
            <Accordion.Item value='item-1'>
              <Accordion.Header>
                <Accordion.Trigger>
                  <Accordion.Arrow />
                  <span>What is ZDH-UI?</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                ZDH-UI is a comprehensive design system and component library built with React, 
                TypeScript, and Tailwind CSS. It provides accessible, customizable components 
                for building modern web applications.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value='item-2'>
              <Accordion.Header>
                <Accordion.Trigger>
                  <Accordion.Arrow />
                  <span>How do I get started?</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                Simply install the dependencies and copy the components you need from the 
                repository. All components are fully typed and documented.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value='item-3'>
              <Accordion.Header>
                <Accordion.Trigger>
                  <Accordion.Arrow />
                  <span>Is it customizable?</span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                Yes! All components are built with Tailwind CSS and support custom styling 
                through className props. You can also modify the design tokens in your 
                Tailwind configuration.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </section>

      {/* API Reference */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>API Reference</h2>
        <div className='space-y-6'>
          <div>
            <h3 className='text-label-md text-text-strong-950 mb-3'>Accordion.Root</h3>
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
                    <td className='p-4 text-paragraph-sm font-mono'>type</td>
                    <td className='p-4 text-paragraph-sm'>"single" | "multiple"</td>
                    <td className='p-4 text-paragraph-sm'>-</td>
                  </tr>
                  <tr className='border-t border-stroke-soft-200'>
                    <td className='p-4 text-paragraph-sm font-mono'>collapsible</td>
                    <td className='p-4 text-paragraph-sm'>boolean</td>
                    <td className='p-4 text-paragraph-sm'>false</td>
                  </tr>
                  <tr className='border-t border-stroke-soft-200'>
                    <td className='p-4 text-paragraph-sm font-mono'>defaultValue</td>
                    <td className='p-4 text-paragraph-sm'>string | string[]</td>
                    <td className='p-4 text-paragraph-sm'>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
