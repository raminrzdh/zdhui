'use client';

import { useState } from 'react';
import * as Pagination from '@/components/ui/pagination';

export default function PaginationPage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Pagination</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Navigate through pages of content.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`# Copy components/ui/pagination.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Pagination from '@/components/ui/pagination';

<Pagination.Root
  currentPage={currentPage}
  totalPages={10}
  onPageChange={setCurrentPage}
/>`}
          </code>
        </pre>
      </section>

      {/* Example */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Example</h2>
        <div className='rounded-lg border border-stroke-soft-200 p-6'>
          <Pagination.Root
            currentPage={currentPage}
            totalPages={10}
            onPageChange={setCurrentPage}
          />
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
                <td className='p-4 text-paragraph-sm font-mono'>currentPage</td>
                <td className='p-4 text-paragraph-sm'>number</td>
                <td className='p-4 text-paragraph-sm'>1</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>totalPages</td>
                <td className='p-4 text-paragraph-sm'>number</td>
                <td className='p-4 text-paragraph-sm'>-</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>onPageChange</td>
                <td className='p-4 text-paragraph-sm'>(page: number) =&gt; void</td>
                <td className='p-4 text-paragraph-sm'>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
