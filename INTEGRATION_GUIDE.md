# ZDH-UI Integration Guide

Quick reference for integrating ZDH-UI components into your existing project.

## 🚀 Quick Integration (5 Minutes)

### Step 1: Copy Core Files

```bash
# Create directories
mkdir -p your-project/components/ui
mkdir -p your-project/utils

# Copy utilities (required for all components)
cp utils/cn.ts your-project/utils/
cp utils/tv.ts your-project/utils/
cp utils/polymorphic.ts your-project/utils/
cp utils/recursive-clone-children.tsx your-project/utils/
```

### Step 2: Install Core Dependencies

```bash
npm install @radix-ui/react-slot tailwind-variants clsx tailwind-merge
```

### Step 3: Copy Components You Need

```bash
# Example: Button component
cp components/ui/button.tsx your-project/components/ui/

# Example: Input component
cp components/ui/input.tsx your-project/components/ui/
```

### Step 4: Update Tailwind Config

Add to your `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Copy color tokens from ZDH-UI tailwind.config.ts
        primary: {
          base: 'hsl(var(--primary-base))',
          // ... more colors
        },
      },
    },
  },
};
```

### Step 5: Add CSS Variables

Add to your global CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Copy CSS variables from app/globals.css */
    --primary-base: 217 91% 60%;
    /* ... more variables */
  }
}
```

## 📦 Component Dependencies

### Button
```bash
npm install @radix-ui/react-slot
# Files: button.tsx
```

### Input
```bash
npm install @radix-ui/react-slot
# Files: input.tsx
```

### Select
```bash
npm install @radix-ui/react-select @radix-ui/react-scroll-area
# Files: select.tsx
```

### Modal
```bash
npm install @radix-ui/react-dialog
# Files: modal.tsx, compact-button.tsx
```

### Dropdown
```bash
npm install @radix-ui/react-dropdown-menu
# Files: dropdown.tsx
```

### Tooltip
```bash
npm install @radix-ui/react-tooltip
# Files: tooltip.tsx
```

### Accordion
```bash
npm install @radix-ui/react-accordion
# Files: accordion.tsx
```

### Checkbox
```bash
npm install @radix-ui/react-checkbox
# Files: checkbox.tsx
```

### Radio
```bash
npm install @radix-ui/react-radio-group
# Files: radio.tsx
```

### Switch
```bash
npm install @radix-ui/react-switch
# Files: switch.tsx
```

### Tabs
```bash
npm install @radix-ui/react-tabs
# Files: tab-menu-horizontal.tsx, tab-menu-vertical.tsx
```

### Alert
```bash
# No additional dependencies
# Files: alert.tsx
```

### Badge
```bash
npm install @radix-ui/react-slot
# Files: badge.tsx
```

### Avatar
```bash
npm install @radix-ui/react-slot
# Files: avatar.tsx, avatar-empty-icons.tsx
```

## 🎨 Customization Examples

### Change Primary Color

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: {
        base: '#6366f1', // Your brand color
        dark: '#4f46e5',
        darker: '#4338ca',
      },
    },
  },
}
```

### Modify Button Styles

```tsx
// components/ui/button.tsx
export const buttonVariants = tv({
  variants: {
    variant: {
      primary: 'bg-primary-base hover:bg-primary-dark', // Uses your colors
      custom: 'bg-gradient-to-r from-purple-500 to-pink-500', // Add new variant
    },
  },
});
```

### Add Custom Size

```tsx
// components/ui/button.tsx
export const buttonVariants = tv({
  variants: {
    size: {
      xs: 'h-7 px-2 text-xs', // Add extra small
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-12 px-6 text-lg',
      xl: 'h-14 px-8 text-xl', // Add extra large
    },
  },
});
```

## 🔧 Framework-Specific Setup

### Next.js (App Router)

```typescript
// app/layout.tsx
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

### Next.js (Pages Router)

```typescript
// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

### Vite + React

```typescript
// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import Tailwind CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Create React App

```typescript
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import Tailwind CSS
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## 🎯 Common Use Cases

### Form with Validation

```tsx
import * as Input from '@/components/ui/input';
import * as Button from '@/components/ui/button';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  return (
    <form className="space-y-4">
      <Input.Root hasError={error}>
        <Input.Wrapper>
          <Input.Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Input.Wrapper>
      </Input.Root>
      
      <Button.Root variant="primary" className="w-full">
        Sign In
      </Button.Root>
    </form>
  );
}
```

### Modal Dialog

```tsx
import * as Modal from '@/components/ui/modal';
import * as Button from '@/components/ui/button';
import { RiInformationLine } from '@remixicon/react';

export default function ConfirmDialog() {
  return (
    <Modal.Root>
      <Modal.Trigger asChild>
        <Button.Root>Open Dialog</Button.Root>
      </Modal.Trigger>
      
      <Modal.Content>
        <Modal.Header
          icon={RiInformationLine}
          title="Confirm Action"
          description="Are you sure you want to proceed?"
        />
        <Modal.Footer>
          <Modal.Close asChild>
            <Button.Root variant="neutral">Cancel</Button.Root>
          </Modal.Close>
          <Button.Root variant="primary">Confirm</Button.Root>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Root>
  );
}
```

### Dropdown Menu

```tsx
import * as Dropdown from '@/components/ui/dropdown';
import * as Button from '@/components/ui/button';
import { RiSettings3Line, RiLogoutBoxLine } from '@remixicon/react';

export default function UserMenu() {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        <Button.Root variant="neutral">Menu</Button.Root>
      </Dropdown.Trigger>
      
      <Dropdown.Content>
        <Dropdown.Item>
          <Dropdown.ItemIcon as={RiSettings3Line} />
          Settings
        </Dropdown.Item>
        <Dropdown.Separator />
        <Dropdown.Item>
          <Dropdown.ItemIcon as={RiLogoutBoxLine} />
          Logout
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
```

## 🐛 Troubleshooting

### Import Errors

**Problem:** `Cannot find module '@/components/ui/button'`

**Solution:** Check your `tsconfig.json` has path aliases:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Styling Not Applied

**Problem:** Components have no styles

**Solution:** 
1. Ensure Tailwind CSS is properly configured
2. Check that `globals.css` is imported
3. Verify CSS variables are defined

### Type Errors

**Problem:** TypeScript errors with component props

**Solution:** 
1. Copy the utility types from `utils/polymorphic.ts`
2. Ensure TypeScript version is 5.0+
3. Check `tsconfig.json` has `"strict": true`

### Dark Mode Not Working

**Problem:** Theme switching doesn't work

**Solution:**
```bash
npm install next-themes
```

Then wrap your app:
```tsx
import { ThemeProvider } from 'next-themes';

export default function App({ children }) {
  return (
    <ThemeProvider attribute="class">
      {children}
    </ThemeProvider>
  );
}
```

## 📚 Additional Resources

- **Live Demo:** Run `npm run dev` and visit `/components`
- **Component Source:** Browse `components/ui/` folder
- **Examples:** Check `app/components/page.tsx`
- **Tailwind Config:** See `tailwind.config.ts`
- **Type Definitions:** Review `utils/polymorphic.ts`
- **RTL Guide:** See [RTL_GUIDE.md](RTL_GUIDE.md) for Right-to-Left language support
- **Integration Guide:** See [INTEGRATION_GUIDE.md](INTEGRATION_GUIDE.md)

## 💡 Tips

1. **Start Small:** Copy one component at a time
2. **Test Thoroughly:** Test in your specific use case
3. **Customize Early:** Modify to match your design system
4. **Keep Utils Updated:** Utility files are shared across components
5. **Version Control:** Track changes to copied components

## 🤝 Need Help?

- Open an issue on GitHub
- Check the component showcase page
- Review the source code
- Ask in GitHub Discussions
