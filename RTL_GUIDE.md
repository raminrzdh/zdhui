# RTL (Right-to-Left) Language Support Guide

ZDH-UI provides built-in support for RTL languages like Arabic (العربية), Hebrew (עברית), Persian (فارسی), and Urdu (اردو).

## 🌍 Features

- ✅ **Automatic Direction Switching** - Toggle between LTR and RTL with one click
- ✅ **All Components Supported** - Every component works seamlessly in RTL mode
- ✅ **No Configuration Required** - RTL support is built-in
- ✅ **Bidirectional Text** - Proper handling of mixed LTR/RTL content
- ✅ **Icon Mirroring** - Directional icons automatically flip in RTL mode
- ✅ **Layout Adaptation** - Margins, paddings, and alignments adjust automatically

## 🚀 Quick Start

### Using the Built-in RTL Provider

The RTL provider is already set up in the layout. Just use the toggle button in the header!

```tsx
// Already configured in app/layout.tsx
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
}
```

### Using RTL in Your Components

```tsx
'use client';

import { useRTL } from '@/components/rtl-provider';

export default function MyComponent() {
  const { direction, setDirection, toggleDirection } = useRTL();

  return (
    <div>
      <p>Current direction: {direction}</p>
      <button onClick={toggleDirection}>
        Toggle Direction
      </button>
    </div>
  );
}
```

## 📝 Examples

### RTL Form

```tsx
import * as Input from '@/components/ui/input';
import * as Button from '@/components/ui/button';
import { RiMailLine } from '@remixicon/react';

export default function RTLForm() {
  return (
    <form className="space-y-4">
      <Input.Root>
        <Input.Wrapper>
          <Input.Icon as={RiMailLine} />
          <Input.Input placeholder="أدخل بريدك الإلكتروني" />
        </Input.Wrapper>
      </Input.Root>
      
      <Button.Root variant="primary">
        إرسال
      </Button.Root>
    </form>
  );
}
```

### RTL Alert

```tsx
import * as Alert from '@/components/ui/alert';
import { RiInformationLine } from '@remixicon/react';

export default function RTLAlert() {
  return (
    <Alert.Root status='information' variant='light'>
      <Alert.Icon as={RiInformationLine} />
      <div>
        <div className='font-semibold'>معلومات</div>
        <div className='text-sm'>هذا مثال على رسالة تنبيه بالعربية</div>
      </div>
    </Alert.Root>
  );
}
```

### RTL Navigation

```tsx
import * as Breadcrumb from '@/components/ui/breadcrumb';
import { RiHome2Line, RiArrowRightSLine } from '@remixicon/react';

export default function RTLBreadcrumb() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.Item>
        <Breadcrumb.Icon as={RiHome2Line} />
        الرئيسية
      </Breadcrumb.Item>
      <Breadcrumb.ArrowIcon as={RiArrowRightSLine} />
      <Breadcrumb.Item>المكونات</Breadcrumb.Item>
    </Breadcrumb.Root>
  );
}
```

## 🎨 Styling for RTL

### Automatic RTL Styles

The following styles are automatically applied in RTL mode:

```css
/* Direction */
[dir='rtl'] {
  direction: rtl;
}

/* Text Alignment */
[dir='rtl'] .text-left {
  text-align: right;
}

[dir='rtl'] .text-right {
  text-align: left;
}

/* Margins */
[dir='rtl'] .ml-auto {
  margin-left: 0;
  margin-right: auto;
}

/* Flex Direction */
[dir='rtl'] .flex-row {
  flex-direction: row-reverse;
}
```

### Custom RTL Styles

Add custom RTL styles using the `[dir='rtl']` selector:

```css
/* Custom RTL styles */
[dir='rtl'] .my-component {
  padding-right: 1rem;
  padding-left: 0;
}
```

Or use Tailwind's arbitrary variants:

```tsx
<div className="ml-4 [dir='rtl']:mr-4 [dir='rtl']:ml-0">
  Content
</div>
```

## 🔧 Advanced Usage

### Programmatic Direction Control

```tsx
'use client';

import { useRTL } from '@/components/rtl-provider';
import { useEffect } from 'react';

export default function LanguageSelector() {
  const { setDirection } = useRTL();

  const handleLanguageChange = (lang: string) => {
    // Set direction based on language
    const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
    setDirection(rtlLanguages.includes(lang) ? 'rtl' : 'ltr');
  };

  return (
    <select onChange={(e) => handleLanguageChange(e.target.value)}>
      <option value="en">English</option>
      <option value="ar">العربية</option>
      <option value="he">עברית</option>
      <option value="fa">فارسی</option>
    </select>
  );
}
```

### Detecting User's Preferred Direction

```tsx
'use client';

import { useRTL } from '@/components/rtl-provider';
import { useEffect } from 'react';

export default function AutoDetectRTL() {
  const { setDirection } = useRTL();

  useEffect(() => {
    // Detect browser language
    const userLang = navigator.language.split('-')[0];
    const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
    
    if (rtlLanguages.includes(userLang)) {
      setDirection('rtl');
    }
  }, [setDirection]);

  return null;
}
```

### Persisting Direction Preference

```tsx
'use client';

import { useRTL } from '@/components/rtl-provider';
import { useEffect } from 'react';

export default function PersistDirection() {
  const { direction, setDirection } = useRTL();

  // Load saved direction on mount
  useEffect(() => {
    const saved = localStorage.getItem('direction');
    if (saved === 'rtl' || saved === 'ltr') {
      setDirection(saved);
    }
  }, [setDirection]);

  // Save direction when it changes
  useEffect(() => {
    localStorage.setItem('direction', direction);
  }, [direction]);

  return null;
}
```

## 🌐 Supported Languages

### RTL Languages

- **Arabic (العربية)** - ar
- **Hebrew (עברית)** - he
- **Persian/Farsi (فارسی)** - fa
- **Urdu (اردو)** - ur
- **Pashto (پښتو)** - ps
- **Sindhi (سنڌي)** - sd
- **Kurdish (کوردی)** - ku
- **Yiddish (ייִדיש)** - yi

### LTR Languages

All other languages including:
- English, Spanish, French, German, etc.

## 📱 Responsive RTL

RTL works seamlessly with responsive design:

```tsx
<div className="
  flex flex-col 
  md:flex-row 
  gap-4
">
  {/* Content automatically adjusts in RTL */}
</div>
```

## 🎯 Best Practices

### 1. Use Logical Properties

Prefer logical properties over physical ones:

```tsx
// ✅ Good - Uses logical properties
<div className="ps-4 pe-2">  {/* padding-inline-start, padding-inline-end */}

// ❌ Avoid - Uses physical properties
<div className="pl-4 pr-2">  {/* padding-left, padding-right */}
```

### 2. Test Both Directions

Always test your components in both LTR and RTL modes:

```tsx
// Use the RTL toggle in the header to test
```

### 3. Handle Icons Properly

Some icons should flip in RTL, others shouldn't:

```tsx
// ✅ Directional icons (arrows) - should flip
<RiArrowRightSLine className="rtl:rotate-180" />

// ✅ Non-directional icons - shouldn't flip
<RiStarFill /> {/* Stars don't need to flip */}
```

### 4. Use Semantic HTML

Semantic HTML helps with RTL:

```tsx
// ✅ Good
<nav>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
</nav>

// Browser handles RTL automatically
```

## 🐛 Troubleshooting

### Issue: Components not flipping in RTL

**Solution:** Ensure RTLProvider wraps your app:

```tsx
// app/layout.tsx
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
}
```

### Issue: Custom styles not working in RTL

**Solution:** Use the `[dir='rtl']` selector:

```css
[dir='rtl'] .my-class {
  /* RTL-specific styles */
}
```

### Issue: Icons not flipping

**Solution:** Add the rotation class:

```tsx
<Icon className="rtl:rotate-180" />
```

## 📚 Additional Resources

- [MDN: CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties)
- [W3C: Structural Markup and Right-to-Left Text](https://www.w3.org/International/questions/qa-html-dir)
- [Tailwind CSS: RTL Support](https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support)

## 🤝 Contributing

Found an RTL issue? Please report it on GitHub!

---

Made with ❤️ for global accessibility
