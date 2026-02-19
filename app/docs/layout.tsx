'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';
import { useRTL } from '@/components/rtl-provider';

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/installation' },
      { title: 'RTL Support', href: '/docs/rtl' },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Accordion', href: '/docs/accordion' },
      { title: 'Alert', href: '/docs/alert' },
      { title: 'Avatar', href: '/docs/avatar' },
      { title: 'Badge', href: '/docs/badge' },
      { title: 'Banner', href: '/docs/banner' },
      { title: 'Breadcrumb', href: '/docs/breadcrumb' },
      { title: 'Button', href: '/docs/button' },
      { title: 'Checkbox', href: '/docs/checkbox' },
      { title: 'Drawer', href: '/docs/drawer' },
      { title: 'Dropdown', href: '/docs/dropdown' },
      { title: 'Input', href: '/docs/input' },
      { title: 'Modal', href: '/docs/modal' },
      { title: 'Pagination', href: '/docs/pagination' },
      { title: 'Popover', href: '/docs/popover' },
      { title: 'Progress', href: '/docs/progress' },
      { title: 'Radio', href: '/docs/radio' },
      { title: 'Select', href: '/docs/select' },
      { title: 'Slider', href: '/docs/slider' },
      { title: 'Switch', href: '/docs/switch' },
      { title: 'Table', href: '/docs/table' },
      { title: 'Tabs', href: '/docs/tabs' },
      { title: 'Tag', href: '/docs/tag' },
      { title: 'Textarea', href: '/docs/textarea' },
      { title: 'Tooltip', href: '/docs/tooltip' },
    ],
  },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { direction } = useRTL();

  return (
    <div className='container mx-auto px-5 py-8'>
      <div className='flex gap-8'>
        {/* Sidebar */}
        <aside className='w-64 shrink-0'>
          <nav className='sticky top-8 space-y-6'>
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className='mb-3 text-label-sm text-text-strong-950'>
                  {section.title}
                </h3>
                <ul className='space-y-1'>
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          'block rounded-lg px-3 py-2 text-paragraph-sm transition-colors',
                          pathname === item.href
                            ? 'bg-primary-alpha-10 text-primary-base font-medium'
                            : 'text-text-sub-600 hover:bg-bg-weak-50 hover:text-text-strong-950'
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className='flex-1 min-w-0'>
          {children}
        </main>
      </div>
    </div>
  );
}
