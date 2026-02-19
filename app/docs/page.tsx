import Link from 'next/link';
import * as Button from '@/components/ui/button';

export default function DocsPage() {
  return (
    <div className='prose prose-neutral max-w-none'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>
        ZDH-UI Design System
      </h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Design and development perfectly aligned
      </p>

      <div className='rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-8 mb-12'>
        <p className='text-paragraph-md text-text-strong-950 mb-6'>
          Skip the months of implementation - we've turned the entire ZDH-UI design system into 
          production-ready code blocks you can drop into your project. Get pixel-perfect, accessible 
          components without sacrificing customization or control.
        </p>
        <Link href='/docs/installation'>
          <Button.Root variant='primary' size='medium'>
            Get Started
          </Button.Root>
        </Link>
      </div>

      <h2 className='text-title-h4 text-text-strong-950 mb-4 mt-12'>
        Why Copy/Paste?
      </h2>
      <p className='text-paragraph-md text-text-sub-600 mb-4'>
        Instead of distributing our components as an npm package, we provide the source code 
        directly to your project. This gives you:
      </p>
      <ul className='space-y-2 mb-8'>
        <li className='text-paragraph-md text-text-sub-600'>
          ✓ Complete control over the implementation
        </li>
        <li className='text-paragraph-md text-text-sub-600'>
          ✓ Freedom to customize and extend components
        </li>
        <li className='text-paragraph-md text-text-sub-600'>
          ✓ No dependency lock-in
        </li>
        <li className='text-paragraph-md text-text-sub-600'>
          ✓ Direct access to modify styles and behavior
        </li>
      </ul>

      <h2 className='text-title-h4 text-text-strong-950 mb-4 mt-12'>
        Built for Production
      </h2>
      <p className='text-paragraph-md text-text-sub-600 mb-4'>
        Each component is built on proven foundations:
      </p>
      <ul className='space-y-2 mb-8'>
        <li className='text-paragraph-md text-text-sub-600'>
          ✓ Core behaviors powered by Radix UI
        </li>
        <li className='text-paragraph-md text-text-sub-600'>
          ✓ Styling through Tailwind CSS
        </li>
        <li className='text-paragraph-md text-text-sub-600'>
          ✓ TypeScript for type safety
        </li>
        <li className='text-paragraph-md text-text-sub-600'>
          ✓ Accessibility built-in
        </li>
        <li className='text-paragraph-md text-text-sub-600'>
          ✓ RTL language support (Arabic, Persian, Hebrew)
        </li>
      </ul>

      <h2 className='text-title-h4 text-text-strong-950 mb-4 mt-12'>
        50+ Components
      </h2>
      <p className='text-paragraph-md text-text-sub-600 mb-4'>
        A comprehensive collection of UI components including:
      </p>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-8'>
        <div className='rounded-lg bg-bg-weak-50 p-4'>
          <h3 className='text-label-sm text-text-strong-950 mb-2'>Forms</h3>
          <p className='text-paragraph-xs text-text-sub-600'>
            Input, Select, Checkbox, Radio, Switch, Textarea
          </p>
        </div>
        <div className='rounded-lg bg-bg-weak-50 p-4'>
          <h3 className='text-label-sm text-text-strong-950 mb-2'>Navigation</h3>
          <p className='text-paragraph-xs text-text-sub-600'>
            Breadcrumb, Tabs, Pagination, Dropdown
          </p>
        </div>
        <div className='rounded-lg bg-bg-weak-50 p-4'>
          <h3 className='text-label-sm text-text-strong-950 mb-2'>Feedback</h3>
          <p className='text-paragraph-xs text-text-sub-600'>
            Alert, Banner, Toast, Progress, Modal
          </p>
        </div>
        <div className='rounded-lg bg-bg-weak-50 p-4'>
          <h3 className='text-label-sm text-text-strong-950 mb-2'>Data Display</h3>
          <p className='text-paragraph-xs text-text-sub-600'>
            Table, Badge, Avatar, Tag, Tooltip
          </p>
        </div>
        <div className='rounded-lg bg-bg-weak-50 p-4'>
          <h3 className='text-label-sm text-text-strong-950 mb-2'>Layout</h3>
          <p className='text-paragraph-xs text-text-sub-600'>
            Drawer, Popover, Divider, Accordion
          </p>
        </div>
        <div className='rounded-lg bg-bg-weak-50 p-4'>
          <h3 className='text-label-sm text-text-strong-950 mb-2'>Buttons</h3>
          <p className='text-paragraph-xs text-text-sub-600'>
            Button, Button Group, Link Button, Social
          </p>
        </div>
      </div>

      <h2 className='text-title-h4 text-text-strong-950 mb-4 mt-12'>
        Next Steps
      </h2>
      <p className='text-paragraph-md text-text-sub-600 mb-4'>
        Ready to get started? Head over to our{' '}
        <Link href='/docs/installation' className='text-primary-base hover:underline'>
          Installation Guide
        </Link>{' '}
        to begin using ZDH-UI in your project.
      </p>
    </div>
  );
}
