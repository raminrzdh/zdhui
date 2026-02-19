'use client';

export default function TypographyPage() {
  const typographyStyles = [
    {
      category: 'Title',
      styles: [
        { name: 'H1 Title', class: 'text-title-h1', weight: 'Medium / 500', size: '56px', lineHeight: '64px', letterSpacing: '-1%' },
        { name: 'H2 Title', class: 'text-title-h2', weight: 'Medium / 500', size: '48px', lineHeight: '56px', letterSpacing: '-1%' },
        { name: 'H3 Title', class: 'text-title-h3', weight: 'Medium / 500', size: '40px', lineHeight: '48px', letterSpacing: '-1%' },
        { name: 'H4 Title', class: 'text-title-h4', weight: 'Medium / 500', size: '32px', lineHeight: '40px', letterSpacing: '-0.5%' },
        { name: 'H5 Title', class: 'text-title-h5', weight: 'Medium / 500', size: '24px', lineHeight: '32px', letterSpacing: '0%' },
        { name: 'H6 Title', class: 'text-title-h6', weight: 'Medium / 500', size: '20px', lineHeight: '28px', letterSpacing: '0%' },
      ],
    },
    {
      category: 'Label',
      styles: [
        { name: 'X-Large', class: 'text-label-xl', weight: 'Medium / 500', size: '24px', lineHeight: '32px', letterSpacing: '-1.5%' },
        { name: 'Large', class: 'text-label-lg', weight: 'Medium / 500', size: '18px', lineHeight: '24px', letterSpacing: '-1.5%' },
        { name: 'Medium', class: 'text-label-md', weight: 'Medium / 500', size: '16px', lineHeight: '24px', letterSpacing: '-1.1%' },
        { name: 'Small', class: 'text-label-sm', weight: 'Medium / 500', size: '14px', lineHeight: '20px', letterSpacing: '-0.6%' },
        { name: 'X-Small', class: 'text-label-xs', weight: 'Medium / 500', size: '12px', lineHeight: '16px', letterSpacing: '0%' },
      ],
    },
    {
      category: 'Paragraph',
      styles: [
        { name: 'X-Large', class: 'text-paragraph-xl', weight: 'Regular / 400', size: '24px', lineHeight: '32px', letterSpacing: '-1.5%' },
        { name: 'Large', class: 'text-paragraph-lg', weight: 'Regular / 400', size: '18px', lineHeight: '24px', letterSpacing: '-1.5%' },
        { name: 'Medium', class: 'text-paragraph-md', weight: 'Regular / 400', size: '16px', lineHeight: '24px', letterSpacing: '-1.1%' },
        { name: 'Small', class: 'text-paragraph-sm', weight: 'Regular / 400', size: '14px', lineHeight: '20px', letterSpacing: '-0.6%' },
        { name: 'X-Small', class: 'text-paragraph-xs', weight: 'Regular / 400', size: '12px', lineHeight: '16px', letterSpacing: '0%' },
      ],
    },
    {
      category: 'Subheading',
      styles: [
        { name: 'Medium', class: 'text-subheading-md', weight: 'Medium / 500', size: '16px', lineHeight: '24px', letterSpacing: '6%' },
        { name: 'Small', class: 'text-subheading-sm', weight: 'Medium / 500', size: '14px', lineHeight: '20px', letterSpacing: '6%' },
        { name: 'X-Small', class: 'text-subheading-xs', weight: 'Medium / 500', size: '12px', lineHeight: '16px', letterSpacing: '4%' },
        { name: '2X-Small', class: 'text-subheading-2xs', weight: 'Medium / 500', size: '11px', lineHeight: '12px', letterSpacing: '2%' },
      ],
    },
    {
      category: 'Doc',
      styles: [
        { name: 'Label', class: 'text-doc-label', weight: 'Medium / 500', size: '18px', lineHeight: '32px', letterSpacing: '-1.5%' },
        { name: 'Paragraph', class: 'text-doc-paragraph', weight: 'Regular / 400', size: '18px', lineHeight: '32px', letterSpacing: '-1.5%' },
      ],
    },
  ];

  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Typography</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        A clear and consistent typography system that works effortlessly across all kinds of content.
      </p>

      {/* Typography Styles */}
      <section className='mb-12'>
        <div className='space-y-12'>
          {typographyStyles.map((category) => (
            <div key={category.category}>
              <h2 className='text-title-h5 text-text-strong-950 mb-6'>{category.category}</h2>
              <div className='space-y-8'>
                {category.styles.map((style) => (
                  <div key={style.name} className='border-b border-stroke-soft-200 pb-8 last:border-b-0'>
                    <div className='mb-4'>
                      <p className='text-label-sm text-text-sub-600 mb-2'>
                        {category.category} / {style.name}
                      </p>
                      <p className={`${style.class} text-text-strong-950`}>
                        The quick brown fox jumps over the lazy dog.
                      </p>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 text-paragraph-xs text-text-sub-600'>
                      <div>
                        <p className='text-text-soft-400 mb-1'>Weight</p>
                        <p>{style.weight}</p>
                      </div>
                      <div>
                        <p className='text-text-soft-400 mb-1'>Font Size</p>
                        <p>{style.size}</p>
                      </div>
                      <div>
                        <p className='text-text-soft-400 mb-1'>Line Height</p>
                        <p>{style.lineHeight}</p>
                      </div>
                      <div>
                        <p className='text-text-soft-400 mb-1'>Letter Spacing</p>
                        <p>{style.letterSpacing}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <p className='text-paragraph-md text-text-sub-600 mb-4'>
          All typography styles are available as Tailwind utility classes and can be used throughout your application.
        </p>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`// Title styles
<h1 className="text-title-h1">Heading 1</h1>
<h2 className="text-title-h2">Heading 2</h2>

// Label styles
<span className="text-label-md">Medium Label</span>
<span className="text-label-sm">Small Label</span>

// Paragraph styles
<p className="text-paragraph-md">Medium paragraph text</p>
<p className="text-paragraph-sm">Small paragraph text</p>

// Subheading styles (uppercase)
<span className="text-subheading-sm uppercase">Section Title</span>

// Doc styles (for documentation)
<h3 className="text-doc-label">Documentation Heading</h3>
<p className="text-doc-paragraph">Documentation paragraph</p>`}
          </code>
        </pre>
      </section>

      {/* Typography Scale */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Typography Scale</h2>
        <div className='rounded-lg border border-stroke-soft-200 overflow-hidden'>
          <table className='w-full'>
            <thead className='bg-bg-weak-50'>
              <tr>
                <th className='text-left p-4 text-label-sm text-text-strong-950'>Class</th>
                <th className='text-left p-4 text-label-sm text-text-strong-950'>Size</th>
                <th className='text-left p-4 text-label-sm text-text-strong-950'>Line Height</th>
                <th className='text-left p-4 text-label-sm text-text-strong-950'>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>text-title-h1</td>
                <td className='p-4 text-paragraph-sm'>56px</td>
                <td className='p-4 text-paragraph-sm'>64px</td>
                <td className='p-4 text-paragraph-sm'>500</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>text-title-h2</td>
                <td className='p-4 text-paragraph-sm'>48px</td>
                <td className='p-4 text-paragraph-sm'>56px</td>
                <td className='p-4 text-paragraph-sm'>500</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>text-paragraph-md</td>
                <td className='p-4 text-paragraph-sm'>16px</td>
                <td className='p-4 text-paragraph-sm'>24px</td>
                <td className='p-4 text-paragraph-sm'>400</td>
              </tr>
              <tr className='border-t border-stroke-soft-200'>
                <td className='p-4 text-paragraph-sm font-mono'>text-label-sm</td>
                <td className='p-4 text-paragraph-sm'>14px</td>
                <td className='p-4 text-paragraph-sm'>20px</td>
                <td className='p-4 text-paragraph-sm'>500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
