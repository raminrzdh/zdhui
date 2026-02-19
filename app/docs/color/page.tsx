'use client';

export default function ColorPage() {
  const colorGroups = [
    {
      name: 'Gray',
      colors: [
        { name: 'gray-alpha-24', var: '--gray-alpha-24' },
        { name: 'gray-alpha-16', var: '--gray-alpha-16' },
        { name: 'gray-alpha-10', var: '--gray-alpha-10' },
      ],
    },
    {
      name: 'Slate',
      colors: [
        { name: 'slate-100', var: '--slate-100' },
        { name: 'slate-200', var: '--slate-200' },
        { name: 'slate-300', var: '--slate-300' },
        { name: 'slate-400', var: '--slate-400' },
        { name: 'slate-500', var: '--slate-500' },
        { name: 'slate-600', var: '--slate-600' },
        { name: 'slate-700', var: '--slate-700' },
        { name: 'slate-800', var: '--slate-800' },
        { name: 'slate-900', var: '--slate-900' },
        { name: 'slate-950', var: '--slate-950' },
        { name: 'slate-alpha-24', var: '--slate-alpha-24' },
        { name: 'slate-alpha-16', var: '--slate-alpha-16' },
        { name: 'slate-alpha-10', var: '--slate-alpha-10' },
      ],
    },
    {
      name: 'Blue',
      colors: [
        { name: 'blue-alpha-24', var: '--blue-alpha-24' },
        { name: 'blue-alpha-16', var: '--blue-alpha-16' },
        { name: 'blue-alpha-10', var: '--blue-alpha-10' },
      ],
    },
    {
      name: 'Orange',
      colors: [
        { name: 'orange-50', var: '--orange-50' },
        { name: 'orange-100', var: '--orange-100' },
        { name: 'orange-200', var: '--orange-200' },
        { name: 'orange-300', var: '--orange-300' },
        { name: 'orange-400', var: '--orange-400' },
        { name: 'orange-500', var: '--orange-500' },
        { name: 'orange-600', var: '--orange-600' },
        { name: 'orange-700', var: '--orange-700' },
        { name: 'orange-800', var: '--orange-800' },
        { name: 'orange-900', var: '--orange-900' },
        { name: 'orange-950', var: '--orange-950' },
        { name: 'orange-alpha-24', var: '--orange-alpha-24' },
        { name: 'orange-alpha-16', var: '--orange-alpha-16' },
        { name: 'orange-alpha-10', var: '--orange-alpha-10' },
      ],
    },
    {
      name: 'Red',
      colors: [
        { name: 'red-alpha-24', var: '--red-alpha-24' },
        { name: 'red-alpha-16', var: '--red-alpha-16' },
        { name: 'red-alpha-10', var: '--red-alpha-10' },
      ],
    },
    {
      name: 'Green',
      colors: [
        { name: 'green-100', var: '--green-100' },
        { name: 'green-200', var: '--green-200' },
        { name: 'green-300', var: '--green-300' },
        { name: 'green-400', var: '--green-400' },
        { name: 'green-500', var: '--green-500' },
        { name: 'green-600', var: '--green-600' },
        { name: 'green-700', var: '--green-700' },
        { name: 'green-800', var: '--green-800' },
        { name: 'green-900', var: '--green-900' },
        { name: 'green-950', var: '--green-950' },
        { name: 'green-alpha-24', var: '--green-alpha-24' },
        { name: 'green-alpha-16', var: '--green-alpha-16' },
        { name: 'green-alpha-10', var: '--green-alpha-10' },
      ],
    },
    {
      name: 'Yellow',
      colors: [
        { name: 'yellow-50', var: '--yellow-50' },
        { name: 'yellow-100', var: '--yellow-100' },
        { name: 'yellow-200', var: '--yellow-200' },
        { name: 'yellow-300', var: '--yellow-300' },
        { name: 'yellow-400', var: '--yellow-400' },
        { name: 'yellow-500', var: '--yellow-500' },
        { name: 'yellow-600', var: '--yellow-600' },
        { name: 'yellow-700', var: '--yellow-700' },
        { name: 'yellow-800', var: '--yellow-800' },
        { name: 'yellow-900', var: '--yellow-900' },
        { name: 'yellow-950', var: '--yellow-950' },
        { name: 'yellow-alpha-24', var: '--yellow-alpha-24' },
        { name: 'yellow-alpha-16', var: '--yellow-alpha-16' },
        { name: 'yellow-alpha-10', var: '--yellow-alpha-10' },
      ],
    },
    {
      name: 'Purple',
      colors: [
        { name: 'purple-50', var: '--purple-50' },
        { name: 'purple-100', var: '--purple-100' },
        { name: 'purple-200', var: '--purple-200' },
        { name: 'purple-300', var: '--purple-300' },
        { name: 'purple-400', var: '--purple-400' },
        { name: 'purple-500', var: '--purple-500' },
        { name: 'purple-600', var: '--purple-600' },
        { name: 'purple-700', var: '--purple-700' },
        { name: 'purple-800', var: '--purple-800' },
        { name: 'purple-900', var: '--purple-900' },
        { name: 'purple-950', var: '--purple-950' },
        { name: 'purple-alpha-24', var: '--purple-alpha-24' },
        { name: 'purple-alpha-16', var: '--purple-alpha-16' },
        { name: 'purple-alpha-10', var: '--purple-alpha-10' },
      ],
    },
    {
      name: 'Sky',
      colors: [
        { name: 'sky-alpha-24', var: '--sky-alpha-24' },
        { name: 'sky-alpha-16', var: '--sky-alpha-16' },
        { name: 'sky-alpha-10', var: '--sky-alpha-10' },
      ],
    },
    {
      name: 'Pink',
      colors: [
        { name: 'pink-alpha-24', var: '--pink-alpha-24' },
        { name: 'pink-alpha-16', var: '--pink-alpha-16' },
        { name: 'pink-alpha-10', var: '--pink-alpha-10' },
      ],
    },
    {
      name: 'Teal',
      colors: [
        { name: 'teal-alpha-24', var: '--teal-alpha-24' },
        { name: 'teal-alpha-16', var: '--teal-alpha-16' },
        { name: 'teal-alpha-10', var: '--teal-alpha-10' },
      ],
    },
  ];

  const semanticColors = [
    {
      name: 'Static',
      colors: [
        { name: 'static-black', var: '--static-black' },
        { name: 'static-white', var: '--static-white' },
      ],
    },
    {
      name: 'Text',
      colors: [
        { name: 'text-strong-950', var: '--text-strong-950' },
        { name: 'text-sub-600', var: '--text-sub-600' },
        { name: 'text-soft-400', var: '--text-soft-400' },
        { name: 'text-disabled-300', var: '--text-disabled-300' },
        { name: 'text-white-0', var: '--text-white-0' },
      ],
    },
    {
      name: 'Background',
      colors: [
        { name: 'bg-strong-950', var: '--bg-strong-950' },
        { name: 'bg-surface-800', var: '--bg-surface-800' },
        { name: 'bg-sub-300', var: '--bg-sub-300' },
        { name: 'bg-soft-200', var: '--bg-soft-200' },
        { name: 'bg-weak-50', var: '--bg-weak-50' },
        { name: 'bg-white-0', var: '--bg-white-0' },
      ],
    },
    {
      name: 'Stroke',
      colors: [
        { name: 'stroke-strong-950', var: '--stroke-strong-950' },
        { name: 'stroke-sub-300', var: '--stroke-sub-300' },
        { name: 'stroke-soft-200', var: '--stroke-soft-200' },
        { name: 'stroke-white-0', var: '--stroke-white-0' },
      ],
    },
    {
      name: 'Primary',
      colors: [
        { name: 'primary-dark', var: '--primary-dark' },
        { name: 'primary-darker', var: '--primary-darker' },
        { name: 'primary-base', var: '--primary-base' },
        { name: 'primary-alpha-24', var: '--primary-alpha-24' },
        { name: 'primary-alpha-16', var: '--primary-alpha-16' },
        { name: 'primary-alpha-10', var: '--primary-alpha-10' },
      ],
    },
    {
      name: 'Status Colors',
      groups: [
        {
          name: 'Information',
          colors: [
            { name: 'information-dark', var: '--information-dark' },
            { name: 'information-base', var: '--information-base' },
            { name: 'information-light', var: '--information-light' },
            { name: 'information-lighter', var: '--information-lighter' },
          ],
        },
        {
          name: 'Warning',
          colors: [
            { name: 'warning-dark', var: '--warning-dark' },
            { name: 'warning-base', var: '--warning-base' },
            { name: 'warning-light', var: '--warning-light' },
            { name: 'warning-lighter', var: '--warning-lighter' },
          ],
        },
        {
          name: 'Error',
          colors: [
            { name: 'error-dark', var: '--error-dark' },
            { name: 'error-base', var: '--error-base' },
            { name: 'error-light', var: '--error-light' },
            { name: 'error-lighter', var: '--error-lighter' },
          ],
        },
        {
          name: 'Success',
          colors: [
            { name: 'success-dark', var: '--success-dark' },
            { name: 'success-base', var: '--success-base' },
            { name: 'success-light', var: '--success-light' },
            { name: 'success-lighter', var: '--success-lighter' },
          ],
        },
      ],
    },
  ];

  return (
    <div className='max-w-4xl'>
      <h1 className='text-title-h2 text-text-strong-950 mb-4'>Color Palette</h1>
      <p className='text-paragraph-md text-text-sub-600 mb-8'>
        A set of core colors that stay consistent across themes, alongside themeable colors that adapt seamlessly to the active theme.
      </p>

      {/* Core Colors */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-6'>Core Colors</h2>
        <div className='space-y-8'>
          {colorGroups.map((group) => (
            <div key={group.name}>
              <h3 className='text-label-md text-text-strong-950 mb-3'>{group.name}</h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
                {group.colors.map((color) => (
                  <div key={color.name} className='flex flex-col gap-2'>
                    <div
                      className='h-16 rounded-lg border border-stroke-soft-200'
                      style={{ backgroundColor: `var(${color.var})` }}
                    />
                    <div>
                      <p className='text-paragraph-xs text-text-strong-950 font-mono'>
                        {color.name}
                      </p>
                      <p className='text-paragraph-xs text-text-sub-600 font-mono'>
                        var({color.var})
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Semantic Colors */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-6'>Semantic Colors</h2>
        <div className='space-y-8'>
          {semanticColors.map((group) => (
            <div key={group.name}>
              <h3 className='text-label-md text-text-strong-950 mb-3'>{group.name}</h3>
              {group.groups ? (
                <div className='space-y-6'>
                  {group.groups.map((subgroup) => (
                    <div key={subgroup.name}>
                      <h4 className='text-label-sm text-text-sub-600 mb-3'>{subgroup.name}</h4>
                      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
                        {subgroup.colors.map((color) => (
                          <div key={color.name} className='flex flex-col gap-2'>
                            <div
                              className='h-16 rounded-lg border border-stroke-soft-200'
                              style={{ backgroundColor: `var(${color.var})` }}
                            />
                            <div>
                              <p className='text-paragraph-xs text-text-strong-950 font-mono'>
                                {color.name}
                              </p>
                              <p className='text-paragraph-xs text-text-sub-600 font-mono'>
                                var({color.var})
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
                  {group.colors.map((color) => (
                    <div key={color.name} className='flex flex-col gap-2'>
                      <div
                        className='h-16 rounded-lg border border-stroke-soft-200'
                        style={{ backgroundColor: `var(${color.var})` }}
                      />
                      <div>
                        <p className='text-paragraph-xs text-text-strong-950 font-mono'>
                          {color.name}
                        </p>
                        <p className='text-paragraph-xs text-text-sub-600 font-mono'>
                          var({color.var})
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Usage */}
      <section className='mb-12'>
        <h2 className='text-title-h4 text-text-strong-950 mb-4'>Usage</h2>
        <p className='text-paragraph-md text-text-sub-600 mb-4'>
          All colors are available as CSS variables and can be used in your Tailwind configuration or directly in your styles.
        </p>
        <pre className='bg-bg-weak-50 rounded-lg p-4 overflow-x-auto'>
          <code className='text-paragraph-sm font-mono'>
{`// In Tailwind classes
<div className="bg-primary-base text-text-white-0">
  Primary button
</div>

// In CSS
.custom-element {
  background-color: var(--primary-base);
  color: var(--text-white-0);
}`}
          </code>
        </pre>
      </section>
    </div>
  );
}
