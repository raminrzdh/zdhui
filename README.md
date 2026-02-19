# ZDH-UI - Next.js TypeScript Starter

A modern, comprehensive UI component library built with React, TypeScript, and Tailwind CSS. ZDH-UI provides a complete set of accessible, customizable components for building beautiful web applications.

![ZDH-UI](https://img.shields.io/badge/ZDH--UI-v0.1.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## ✨ Features

- 🎨 **50+ Components** - Comprehensive UI component library
- 🔧 **TypeScript** - Full type safety and IntelliSense support
- 🎯 **Tailwind CSS** - Utility-first CSS framework with custom design tokens
- ♿ **Accessible** - Built with accessibility in mind using Radix UI primitives
- 🌗 **Dark Mode** - Built-in dark mode support
- 📱 **Responsive** - Mobile-first responsive design
- ⚡ **Fast** - Optimized for performance with Next.js 14
- 🎭 **Customizable** - Easy to customize and extend

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/raminrzdh/zdhui.git
cd zdhui
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

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

```tsx
import * as Button from '@/components/ui/button';
import * as Input from '@/components/ui/input';

export default function MyForm() {
  return (
    <form>
      <Input.Root>
        <Input.Wrapper>
          <Input.Input placeholder="Enter your email" />
        </Input.Wrapper>
      </Input.Root>
      
      <Button.Root variant="primary">
        Submit
      </Button.Root>
    </form>
  );
}
```

## 🎨 Customization

### Tailwind Configuration

Customize the design tokens in `tailwind.config.ts`:

```typescript
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          base: '#your-color',
          // ... more shades
        },
      },
    },
  },
};
```

### Component Styling

All components accept a `className` prop for custom styling:

```tsx
<Button.Root className="custom-class">
  Custom Button
</Button.Root>
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

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

For questions or support, please open an issue on GitHub.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI primitives from [Radix UI](https://www.radix-ui.com/)
- Icons from [Remix Icon](https://remixicon.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ by the ZDH-UI team
