'use client';

export default function RTLPage() {
  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>RTL Support</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        ZDH-UI provides comprehensive Right-to-Left (RTL) language support for Arabic, Persian, Hebrew, and other RTL languages.
      </p>

      {/* Overview */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Overview</h2>
        <p className='text-paragraph-md text-text-sub-600 mb-4'>
          All components in ZDH-UI are fully optimized for RTL layouts with proper text direction, 
          mirrored layouts, and culturally appropriate typography.
        </p>
      </section>

      {/* Setup */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Setup</h2>
        <p className='text-paragraph-md text-text-sub-600 mb-4'>
          To enable RTL support in your application:
        </p>
        
        <div className='space-y-6'>
          <div>
            <h3 className='text-label-md text-text-strong-950 mb-3'>1. Install RTL Provider</h3>
            <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
              <code className='text-paragraph-sm font-mono'>
{`// Copy components/rtl-provider.tsx to your project
import { RTLProvider } from '@/components/rtl-provider';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <RTLProvider>
          {children}
        </RTLProvider>
      </body>
    </html>
  );
}`}
              </code>
            </pre>
          </div>

          <div>
            <h3 className='text-label-md text-text-strong-950 mb-3'>2. Add RTL Toggle (Optional)</h3>
            <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
              <code className='text-paragraph-sm font-mono'>
{`// Copy components/rtl-switch.tsx to your project
import { RTLSwitch } from '@/components/rtl-switch';

<RTLSwitch />`}
              </code>
            </pre>
          </div>

          <div>
            <h3 className='text-label-md text-text-strong-950 mb-3'>3. Configure Fonts</h3>
            <p className='text-paragraph-sm text-text-sub-600 mb-3'>
              Add Vazirmatn font for Persian/Arabic text in your layout:
            </p>
            <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
              <code className='text-paragraph-sm font-mono'>
{`<link 
  href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700&display=swap" 
  rel="stylesheet" 
/>`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>RTL Features</h2>
        <div className='rounded-lg border border-stroke-soft-200 p-6'>
          <ul className='space-y-3'>
            <li className='flex items-start gap-3'>
              <span className='text-primary-base'>✓</span>
              <span className='text-paragraph-sm text-text-sub-600'>
                Automatic text direction switching (LTR ↔ RTL)
              </span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-primary-base'>✓</span>
              <span className='text-paragraph-sm text-text-sub-600'>
                Mirrored layouts for all components
              </span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-primary-base'>✓</span>
              <span className='text-paragraph-sm text-text-sub-600'>
                Proper positioning for modals, drawers, and popovers
              </span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-primary-base'>✓</span>
              <span className='text-paragraph-sm text-text-sub-600'>
                Optimized animations for RTL direction
              </span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-primary-base'>✓</span>
              <span className='text-paragraph-sm text-text-sub-600'>
                Vazirmatn font for Persian/Arabic typography
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Using RTL Context</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`import { useRTL } from '@/components/rtl-provider';

function MyComponent() {
  const { direction, toggleDirection } = useRTL();
  
  return (
    <div>
      <p>Current direction: {direction}</p>
      <button onClick={toggleDirection}>
        Toggle Direction
      </button>
    </div>
  );
}`}
          </code>
        </pre>
      </section>

      {/* Supported Components */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>RTL-Optimized Components</h2>
        <p className='text-paragraph-md text-text-sub-600 mb-4'>
          All components support RTL, with special optimizations for:
        </p>
        <div className='rounded-lg border border-stroke-soft-200 p-6'>
          <div className='grid grid-cols-2 gap-3'>
            <span className='text-paragraph-sm text-text-sub-600'>• Modal</span>
            <span className='text-paragraph-sm text-text-sub-600'>• Drawer</span>
            <span className='text-paragraph-sm text-text-sub-600'>• Popover</span>
            <span className='text-paragraph-sm text-text-sub-600'>• Dropdown</span>
            <span className='text-paragraph-sm text-text-sub-600'>• Switch</span>
            <span className='text-paragraph-sm text-text-sub-600'>• Radio</span>
            <span className='text-paragraph-sm text-text-sub-600'>• Breadcrumb</span>
            <span className='text-paragraph-sm text-text-sub-600'>• Tabs</span>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Additional Resources</h2>
        <p className='text-paragraph-md text-text-sub-600'>
          For detailed implementation guide and best practices, see the{' '}
          <a href='/RTL_GUIDE.md' className='text-primary-base hover:underline'>
            RTL_GUIDE.md
          </a>{' '}
          file in the repository.
        </p>
      </section>
    </div>
  );
}
