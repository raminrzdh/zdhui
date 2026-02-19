import Link from 'next/link';
import dynamic from 'next/dynamic';

const DynamicThemeSwitch = dynamic(() => import('./theme-switch'), {
  ssr: false,
});

const DynamicRTLSwitch = dynamic(() => import('./rtl-switch'), {
  ssr: false,
});

export default function Header() {
  return (
    <div className='border-b border-stroke-soft-200'>
      <header className='mx-auto flex h-14 max-w-7xl items-center justify-between px-5'>
        <div className='flex items-center gap-8'>
          <Link
            href='/'
            className='flex items-center gap-2 text-label-md text-text-strong-950'
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/images/logo.jpg'
              alt=''
              className='size-9 object-contain'
            />
            ZDH-UI
          </Link>
          
          <nav className='hidden md:flex items-center gap-6'>
            <Link
              href='/docs'
              className='text-paragraph-sm text-text-sub-600 hover:text-text-strong-950 transition-colors'
            >
              Documentation
            </Link>
            <Link
              href='https://github.com/raminrzdh/zdhui'
              target='_blank'
              rel='noopener noreferrer'
              className='text-paragraph-sm text-text-sub-600 hover:text-text-strong-950 transition-colors'
            >
              GitHub
            </Link>
          </nav>
        </div>

        <div className='flex items-center gap-2'>
          <DynamicRTLSwitch />
          <DynamicThemeSwitch />
        </div>
      </header>
    </div>
  );
}
