import Link from 'next/link';
import * as Button from '@/components/ui/button';

export default function Home() {
  return (
    <div className='container mx-auto flex-1 px-5'>
      <div className='mt-48 flex flex-col items-center'>
        <h1 className='max-w-3xl text-balance text-center text-title-h3 text-text-strong-950'>
          Quick Starter ZDH-UI Template with Next.js & Typescript
        </h1>

        <div className='mt-6 flex gap-4'>
          <Button.Root variant='primary' asChild>
            <Link href='/components'>
              View Components
            </Link>
          </Button.Root>

          {/* <Button.Root variant='neutral' asChild>
            <a
              href='https://github.com/zdh-ui/zdh-ui-nextjs-typescript-starter'
              target='_blank'
            >
              <Button.Icon as={RiGithubFill} />
              Give a star
            </a>
          </Button.Root> */}

          {/* <Button.Root variant='neutral' mode='stroke' asChild>
            <Link href='https://zdh-ui.com/docs' target='_blank'>
              Read our docs
            </Link>
          </Button.Root> */}
        </div>

        <div className='mt-12'>
          <h2 className='text-lg text-text-strong-950 font-semibold'>
            What&apos;s Included:
          </h2>
          <ul className='ml-6 mt-3 flex list-disc flex-col gap-2 font-mono text-paragraph-sm font-medium text-text-sub-600'>
            <li>
              <strong className='text-text-strong-950'>50+ UI Components</strong> - Buttons, Forms, Navigation, Data Display, Feedback, and more
            </li>
            <li>
              <strong className='text-text-strong-950'>RTL Language Support</strong> - Built-in support for Arabic, Hebrew, Persian with Estedad font
            </li>
            <li>
              <strong className='text-text-strong-950'>Dark Mode</strong> - Seamless theme switching with next-themes
            </li>
            <li>
              <strong className='text-text-strong-950'>TypeScript</strong> - Fully typed components with excellent IDE support
            </li>
            <li>
              <strong className='text-text-strong-950'>Tailwind CSS</strong> - Utility-first styling with ZDH-UI design tokens
            </li>
            <li>
              Components in{' '}
              <code className='rounded bg-bg-weak-50 px-1 py-0.5 font-semibold text-text-strong-950'>
                /components/ui
              </code>
            </li>
            <li>
              Utils in{' '}
              <code className='rounded bg-bg-weak-50 px-1 py-0.5 font-semibold text-text-strong-950'>
                /utils
              </code>
            </li>
            <li>
              Custom hooks in{' '}
              <code className='rounded bg-bg-weak-50 px-1 py-0.5 font-semibold text-text-strong-950'>
                /hooks
              </code>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
