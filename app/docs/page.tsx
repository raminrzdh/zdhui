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
        What's Included
      </h2>
      <p className='text-paragraph-md text-text-sub-600 mb-6'>
        A complete design system with everything you need to build modern web applications:
      </p>

      <div className='space-y-6 mb-8'>
        <div className='rounded-lg border border-stroke-soft-200 p-6'>
          <h3 className='text-label-md text-text-strong-950 mb-3'>Foundation</h3>
          <ul className='space-y-2'>
            <li className='text-paragraph-sm text-text-sub-600'>
              <span className='font-medium text-text-strong-950'>Color System</span> - Comprehensive palette with core colors and semantic tokens
            </li>
            <li className='text-paragraph-sm text-text-sub-600'>
              <span className='font-medium text-text-strong-950'>Typography</span> - Complete type scale with titles, labels, paragraphs, and subheadings
            </li>
          </ul>
        </div>

        <div className='rounded-lg border border-stroke-soft-200 p-6'>
          <h3 className='text-label-md text-text-strong-950 mb-3'>59 Production-Ready Components</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
            <div>
              <h4 className='text-label-sm text-text-strong-950 mb-2'>Form Controls</h4>
              <p className='text-paragraph-xs text-text-sub-600'>
                Input, Select, Checkbox, Radio, Switch, Textarea, Slider, Color Picker, Date Picker, File Upload, Digit Input
              </p>
            </div>
            <div>
              <h4 className='text-label-sm text-text-strong-950 mb-2'>Navigation</h4>
              <p className='text-paragraph-xs text-text-sub-600'>
                Breadcrumb, Tabs (Horizontal/Vertical), Pagination, Dropdown, Command Menu
              </p>
            </div>
            <div>
              <h4 className='text-label-sm text-text-strong-950 mb-2'>Feedback & Overlays</h4>
              <p className='text-paragraph-xs text-text-sub-600'>
                Alert, Banner, Toast (Sonner), Progress Bar, Progress Circle, Modal, Drawer, Popover, Tooltip
              </p>
            </div>
            <div>
              <h4 className='text-label-sm text-text-strong-950 mb-2'>Data Display</h4>
              <p className='text-paragraph-xs text-text-sub-600'>
                Table, Badge, Status Badge, Avatar, Avatar Group, Tag, Skeleton, Divider
              </p>
            </div>
            <div>
              <h4 className='text-label-sm text-text-strong-950 mb-2'>Buttons</h4>
              <p className='text-paragraph-xs text-text-sub-600'>
                Button, Button Group, Compact Button, Link Button, Fancy Button, Social Button
              </p>
            </div>
            <div>
              <h4 className='text-label-sm text-text-strong-950 mb-2'>Layout & Structure</h4>
              <p className='text-paragraph-xs text-text-sub-600'>
                Accordion, Stepper (Horizontal/Vertical/Dot), Form Components, Hint, Label, KBD
              </p>
            </div>
          </div>
        </div>

        <div className='rounded-lg border border-stroke-soft-200 p-6'>
          <h3 className='text-label-md text-text-strong-950 mb-3'>Features</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className='flex items-start gap-2'>
              <span className='text-success-base mt-0.5'>✓</span>
              <span className='text-paragraph-sm text-text-sub-600'>
                Built with Radix UI primitives for accessibility
              </span>
            </div>
            <div className='flex items-start gap-2'>
              <span className='text-success-base mt-0.5'>✓</span>
              <span className='text-paragraph-sm text-text-sub-600'>
                Styled with Tailwind CSS for easy customization
              </span>
            </div>
            <div className='flex items-start gap-2'>
              <span className='text-success-base mt-0.5'>✓</span>
              <span className='text-paragraph-sm text-text-sub-600'>
                Full TypeScript support with type definitions
              </span>
            </div>
            <div className='flex items-start gap-2'>
              <span className='text-success-base mt-0.5'>✓</span>
              <span className='text-paragraph-sm text-text-sub-600'>
                RTL language support (Arabic, Persian, Hebrew)
              </span>
            </div>
            <div className='flex items-start gap-2'>
              <span className='text-success-base mt-0.5'>✓</span>
              <span className='text-paragraph-sm text-text-sub-600'>
                Dark mode ready with CSS variables
              </span>
            </div>
            <div className='flex items-start gap-2'>
              <span className='text-success-base mt-0.5'>✓</span>
              <span className='text-paragraph-sm text-text-sub-600'>
                Responsive design for all screen sizes
              </span>
            </div>
          </div>
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
