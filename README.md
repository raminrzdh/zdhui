# ZDH-UI Component Library

A production-ready UI component library built with React, TypeScript, and Tailwind CSS. Copy and paste components directly into your project - no package installation required.

![ZDH-UI](https://img.shields.io/badge/ZDH--UI-v0.1.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## 🎯 Purpose

This repository serves as a **component reference library** for building modern web applications. Unlike traditional npm packages, you can:

- 📋 **Copy & Paste** - Take only the components you need
- 🎨 **Customize Freely** - Modify components to match your design system
- 🔍 **Learn & Reference** - See live examples and implementation details
- 🚀 **Zero Dependencies** - No package lock-in, full control over your code

## ✨ Features

- 🎨 **50+ Components** - Comprehensive UI component collection
- 🔧 **TypeScript** - Full type safety and IntelliSense support
- 🎯 **Tailwind CSS** - Utility-first CSS with custom design tokens
- ♿ **Accessible** - Built with Radix UI primitives for accessibility
- 🌗 **Dark Mode** - Built-in theme switching support
- 🌍 **RTL Support** - Full Right-to-Left language support (Arabic, Hebrew, Persian, etc.)
- 📱 **Responsive** - Mobile-first responsive design
- ⚡ **Production Ready** - Battle-tested components
- 🎭 **Fully Customizable** - Own the code, modify as needed

## 🚀 Quick Start

### Option 1: Browse Components Online

Visit the live demo to explore all components:
```
npm run dev
```
Then open [http://localhost:3000/components](http://localhost:3000/components)

### Option 2: Use in Your Project

#### Step 1: Copy Required Files

Copy the components you need from `components/ui/` to your project:

```bash
# Example: Copy button component
cp components/ui/button.tsx your-project/components/ui/
```

#### Step 2: Copy Utility Files

Copy the required utility files:

```bash
cp utils/cn.ts your-project/utils/
cp utils/tv.ts your-project/utils/
cp utils/polymorphic.ts your-project/utils/
cp utils/recursive-clone-children.tsx your-project/utils/
```

#### Step 3: Install Dependencies

Install the required peer dependencies in your project:

```bash
npm install @radix-ui/react-slot tailwind-variants clsx tailwind-merge
npm install @remixicon/react  # For icons
```

#### Step 4: Configure Tailwind

Add the ZDH-UI color tokens to your `tailwind.config.ts`:

```typescript
// Copy color configuration from tailwind.config.ts
```

### Option 3: Clone for Reference

Clone the entire repository to browse and reference:

```bash
git clone https://github.com/raminrzdh/zdhui.git
cd zdhui
npm install
npm run dev
```

## 📦 Available Components

### Form Components
- **Button** - Multiple variants (primary, neutral, danger) with sizes and states
- **Input** - Text inputs with icons, labels, and error states
- **Textarea** - Multi-line text input with character counter
- **Select** - Dropdown select with search and custom options
- **Checkbox** - Checkboxes with indeterminate state
- **Radio** - Radio button groups
- **Switch** - Toggle switches
- **Digit Input** - OTP/PIN code input

### Data Display
- **Badge** - Status and label badges with multiple colors
- **Status Badge** - Status indicators with dots
- **Tag** - Removable tags for filters and selections
- **Avatar** - User avatars with fallbacks and status indicators
- **Avatar Group** - Grouped avatars with overflow
- **Progress Bar** - Linear progress indicators
- **Progress Circle** - Circular progress indicators
- **Kbd** - Keyboard shortcut display

### Navigation
- **Breadcrumb** - Navigation breadcrumbs
- **Pagination** - Page navigation with multiple variants
- **Tab Menu** - Horizontal and vertical tabs
- **Segmented Control** - Toggle between options

### Feedback
- **Alert** - Contextual feedback messages
- **Notification** - Toast notifications
- **Modal** - Dialog and modal windows
- **Tooltip** - Contextual help tooltips

### Layout
- **Divider** - Content dividers with text support
- **Accordion** - Collapsible content sections
- **Stepper** - Step-by-step progress indicators (horizontal, vertical, dot)

### Buttons
- **Button Group** - Grouped buttons
- **Compact Button** - Icon-only buttons
- **Fancy Button** - Animated buttons
- **Link Button** - Link-styled buttons
- **Social Button** - Social media buttons

### Other
- **Dropdown** - Context menus and dropdowns
- **Command Menu** - Command palette
- **File Upload** - File upload with drag & drop
- **Hint** - Helper text and hints
- **Label** - Form labels

## 🎨 Component Showcase

Visit the `/components` route to see all components in action with live examples and different variants.

## 📁 Project Structure

```
zdhui/
├── app/                    # Next.js app directory
│   ├── components/        # Component showcase page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/               # UI component library
│   ├── header.tsx        # Header component
│   └── theme-switch.tsx  # Theme switcher
├── hooks/                # Custom React hooks
├── utils/                # Utility functions
├── public/               # Static assets
└── tailwind.config.ts    # Tailwind configuration
```

## 🛠️ Usage Example

After copying components to your project:

```tsx
import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';
import { RiMailLine } from '@remixicon/react';

export default function MyForm() {
  return (
    <form className="space-y-4">
      <Input.Root>
        <Input.Wrapper>
          <Input.Icon as={RiMailLine} />
          <Input.Input 
            type="email" 
            placeholder="Enter your email" 
          />
        </Input.Wrapper>
      </Input.Root>
      
      <Button.Root variant="primary" size="lg">
        Submit
      </Button.Root>
    </form>
  );
}
```

## 📚 Component Documentation

Each component in `components/ui/` is:
- **Self-contained** - Minimal dependencies
- **Well-typed** - Full TypeScript support
- **Documented** - Clear prop types and examples
- **Customizable** - Accepts className for styling

### Component Structure

```
components/ui/button.tsx
├── Root          # Main button component
├── Icon          # Button icon wrapper
└── variants      # Style variants (primary, neutral, danger, etc.)
```

## 🎨 Customization

### Method 1: Modify Component Files

Since you own the code, directly edit the component files:

```tsx
// components/ui/button.tsx
export const buttonVariants = tv({
  variants: {
    variant: {
      primary: 'bg-blue-600 hover:bg-blue-700', // Change colors
      // ... your custom variants
    },
  },
});
```

### Method 2: Use className Prop

Override styles without modifying the component:

```tsx
<Button.Root 
  variant="primary"
  className="bg-purple-600 hover:bg-purple-700"
>
  Custom Button
</Button.Root>
```

### Method 3: Extend with Tailwind Config

Add your design tokens to `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          base: '#your-brand-color',
          dark: '#your-dark-shade',
          // ... more shades
        },
      },
    },
  },
};
```

## 🔗 Dependencies

### Required Peer Dependencies

When using components in your project, install:

```bash
# Core dependencies
npm install @radix-ui/react-slot tailwind-variants clsx tailwind-merge

# Component-specific (install as needed)
npm install @radix-ui/react-accordion      # For Accordion
npm install @radix-ui/react-checkbox       # For Checkbox
npm install @radix-ui/react-dialog         # For Modal
npm install @radix-ui/react-dropdown-menu  # For Dropdown
npm install @radix-ui/react-radio-group    # For Radio
npm install @radix-ui/react-select         # For Select
npm install @radix-ui/react-switch         # For Switch
npm install @radix-ui/react-tabs           # For Tabs
npm install @radix-ui/react-tooltip        # For Tooltip
npm install @remixicon/react               # For Icons
```

### Optional Dependencies

```bash
npm install next-themes                    # For dark mode
npm install sonner                         # For notifications
npm install cmdk                           # For command menu
```

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format:write` - Format code with Prettier

## 🔧 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Primitives:** Radix UI
- **Icons:** Remix Icon
- **Animations:** Tailwind CSS Animate

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Best Practices

### When Using in Your Project

1. **Copy Only What You Need** - Don't copy the entire library
2. **Review Dependencies** - Check which Radix UI packages each component needs
3. **Customize Early** - Modify components to match your design system
4. **Keep Utils Updated** - The utility files are shared across components
5. **Test Thoroughly** - Test components in your specific use cases

### File Organization

Recommended structure in your project:

```
your-project/
├── components/
│   └── ui/              # Copied ZDH-UI components
│       ├── button.tsx
│       ├── input.tsx
│       └── ...
├── utils/               # Copied utility files
│   ├── cn.ts
│   ├── tv.ts
│   └── ...
└── tailwind.config.ts   # With ZDH-UI tokens
```

## 🤝 Contributing

Contributions are welcome! This library is meant to be a community resource.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/NewComponent`)
3. Add your component with examples
4. Commit your changes (`git commit -m 'Add NewComponent'`)
5. Push to the branch (`git push origin feature/NewComponent`)
6. Open a Pull Request

### Component Guidelines

- Use TypeScript for type safety
- Follow the existing component structure
- Include usage examples
- Ensure accessibility with Radix UI
- Add to the showcase page

## ❓ FAQ

**Q: Do I need to install ZDH-UI as an npm package?**  
A: No! Copy the components directly into your project.

**Q: Can I modify the components?**  
A: Absolutely! That's the whole point. You own the code.

**Q: What if I only need a few components?**  
A: Just copy those specific components and their dependencies.

**Q: How do I update components?**  
A: Check this repository for updates and manually copy changes you want.

**Q: Can I use this in a commercial project?**  
A: Yes! It's MIT licensed.

**Q: Do I need Next.js?**  
A: No! Components work with any React project (Next.js, Vite, CRA, etc.)

## 📧 Support

- 🐛 **Bug Reports:** [Open an issue](https://github.com/raminrzdh/zdhui/issues)
- 💡 **Feature Requests:** [Open an issue](https://github.com/raminrzdh/zdhui/issues)
- 📖 **Documentation:** Browse the `/components` page
- 💬 **Questions:** [GitHub Discussions](https://github.com/raminrzdh/zdhui/discussions)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI primitives from [Radix UI](https://www.radix-ui.com/)
- Icons from [Remix Icon](https://remixicon.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ by the ZDH-UI team
