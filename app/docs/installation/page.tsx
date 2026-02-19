export default function InstallationPage() {
  return (
    <div className='prose prose-neutral max-w-none'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>
        Installation
      </h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Get started with ZDH-UI in your Next.js project
      </p>

      <h2 className='text-title-h4 text-text-strong-950 mb-4 mt-12'>
        Quick Start
      </h2>
      <p className='text-paragraph-md text-text-sub-600 mb-4'>
        Clone the repository and copy the components you need:
      </p>
      <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-8'>
        <code className='text-paragraph-sm font-mono'>
{`git clone https://github.com/raminrzdh/zdhui.git
cd zdhui
npm install --legacy-peer-deps`}
        </code>
      </pre>

      <h2 className='text-title-h4 text-text-strong-950 mb-4 mt-12'>
        Project Structure
      </h2>
      <p className='text-paragraph-md text-text-sub-600 mb-4'>
        The repository is organized as follows:
      </p>
      <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-8'>
        <code className='text-paragraph-sm font-mono'>
{`zdhui/
├── components/
│   ├── ui/              # All UI components
│   ├── header.tsx       # Header component
│   ├── rtl-provider.tsx # RTL context provider
│   └── theme-switch.tsx # Theme switcher
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── app/                 # Next.js app directory
└── tailwind.config.ts   # Tailwind configuration`}
        </code>
      </pre>

      <h2 className='text-title-h4 text-text-strong-950 mb-4 mt-12'>
        Copy Components
      </h2>
      <p className='text-paragraph-md text-text-sub-600 mb-4'>
        To use components in your project:
      </p>
      <ol className='space-y-4 mb-8 list-decimal list-inside'>
        <li className='text-paragraph-md text-text-sub-600'>
          Copy the component file from <code className='bg-bg-weak-50 px-2 py-1 rounded'>components/ui/</code> to your project
        </li>
        <li className='text-paragraph-md text-text-sub-600'>
          Copy required utilities from <code className='bg-bg-weak-50 px-2 py-1 rounded'>utils/</code>
        </li>
        <li className='text-paragraph-md text-text-sub-600'>
          Install component dependencies (see component-specific docs)
        </li>
        <li className='text-paragraph-md text-text-sub-600'>
          Import and use in your application
        </li>
      </ol>

      <h2 className='text-title-h4 text-text-strong-950 mb-4 mt-12'>
        Dependencies
      </h2>
      <p className='text-paragraph-md text-text-sub-600 mb-4'>
        Core dependencies required for most components:
      </p>
      <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-8'>
        <code className='text-paragraph-sm font-mono'>
{`npm install @radix-ui/react-* tailwindcss clsx tailwind-merge
npm install @remixicon/react next-themes`}
        </code>
      </pre>

      <h2 className='text-title-h4 text-text-strong-950 mb-4 mt-12'>
        Tailwind Configuration
      </h2>
      <p className='text-paragraph-md text-text-sub-600 mb-4'>
        Add the ZDH-UI design tokens to your <code className='bg-bg-weak-50 px-2 py-1 rounded'>tailwind.config.ts</code>:
      </p>
      <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-8'>
        <code className='text-paragraph-sm font-mono'>
{`// Copy the entire tailwind.config.ts from the repository
// It includes all design tokens, colors, and utilities`}
        </code>
      </pre>

      <h2 className='text-title-h4 text-text-strong-950 mb-4 mt-12'>
        RTL Support
      </h2>
      <p className='text-paragraph-md text-text-sub-600 mb-4'>
        To enable RTL support, wrap your app with the RTL provider:
      </p>
      <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-8'>
        <code className='text-paragraph-sm font-mono'>
{`import { RTLProvider } from '@/components/rtl-provider';

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

      <p className='text-paragraph-md text-text-sub-600 mt-8'>
        For more details, see the{' '}
        <a href='/docs/rtl' className='text-primary-base hover:underline'>
          RTL Support Guide
        </a>
        .
      </p>
    </div>
  );
}
