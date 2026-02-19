'use client';

import * as Table from '@/components/ui/table';

export default function TablePage() {
  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Table</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        Display data in rows and columns.
      </p>

      {/* Installation */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Installation</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`# Copy components/ui/table.tsx to your project`}
          </code>
        </pre>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto mb-4'>
          <code className='text-paragraph-sm font-mono'>
{`import * as Table from '@/components/ui/table';

<Table.Root>
  <Table.Header>
    <Table.Row>
      <Table.Head>Name</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>John</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>`}
          </code>
        </pre>
      </section>

      {/* Example */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Example</h2>
        <div className='rounded-lg border border-stroke-soft-200 overflow-hidden'>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Head>Name</Table.Head>
                <Table.Head>Email</Table.Head>
                <Table.Head>Role</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>John Doe</Table.Cell>
                <Table.Cell>john@example.com</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jane Smith</Table.Cell>
                <Table.Cell>jane@example.com</Table.Cell>
                <Table.Cell>User</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </div>
      </section>
    </div>
  );
}
