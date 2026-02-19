'use client';

import * as Button from '@/components/ui/button';
import * as Badge from '@/components/ui/badge';
import * as StatusBadge from '@/components/ui/status-badge';
import * as Tag from '@/components/ui/tag';
import * as Avatar from '@/components/ui/avatar';
import * as ProgressBar from '@/components/ui/progress-bar';
import * as Input from '@/components/ui/input';
import * as Textarea from '@/components/ui/textarea';
import * as Select from '@/components/ui/select';
import * as Checkbox from '@/components/ui/checkbox';
import * as Switch from '@/components/ui/switch';
import * as Radio from '@/components/ui/radio';
import * as Divider from '@/components/ui/divider';
import * as Kbd from '@/components/ui/kbd';
import * as Accordion from '@/components/ui/accordion';
import * as Alert from '@/components/ui/alert';
import * as Breadcrumb from '@/components/ui/breadcrumb';
import * as Dropdown from '@/components/ui/dropdown';
import * as Modal from '@/components/ui/modal';
import * as Tooltip from '@/components/ui/tooltip';
import * as Pagination from '@/components/ui/pagination';
import { useRTL } from '@/components/rtl-provider';
import { 
  RiHome2Line, 
  RiStarFill, 
  RiMailLine, 
  RiSearchLine,
  RiInformationLine,
  RiCheckboxCircleLine,
  RiErrorWarningLine,
  RiAlertLine,
  RiArrowRightSLine,
  RiArrowLeftSLine,
  RiMoreLine,
  RiSettings3Line,
  RiUser3Line,
  RiLogoutBoxLine,
  RiDeleteBinLine
} from '@remixicon/react';
import Link from 'next/link';
import { useState } from 'react';

export default function ComponentsPage() {
  const [textValue, setTextValue] = useState('');
  const [switchChecked, setSwitchChecked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { direction } = useRTL();
  
  return (
    <div className='container mx-auto px-5 py-12'>
      <div className='mb-8'>
        <Link href='/' className='text-text-sub-600 hover:text-text-strong-950 flex items-center gap-2'>
          <RiHome2Line size={20} />
          {direction === 'rtl' ? 'العودة للرئيسية' : 'Back to Home'}
        </Link>
      </div>

      <h1 className='text-title-h2 text-text-strong-950 mb-2'>
        {direction === 'rtl' ? 'عرض مكونات الواجهة' : 'UI Components Showcase'}
      </h1>
      <p className='text-text-sub-600 mb-12'>
        {direction === 'rtl' 
          ? 'جميع مكونات ZDH-UI المتاحة في مكان واحد مع دعم RTL' 
          : 'All available ZDH-UI components in one place with RTL support'}
      </p>

      <div className='space-y-16'>
        {/* RTL Support Demo */}
        <section className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-xl p-8'>
          <h2 className='text-title-h4 text-text-strong-950 mb-4'>
            {direction === 'rtl' ? '🌍 دعم اللغات من اليمين لليسار (RTL)' : '🌍 RTL Language Support'}
          </h2>
          <p className='text-text-sub-600 mb-6'>
            {direction === 'rtl' 
              ? 'جميع المكونات تدعم اللغات من اليمين لليسار (RTL) مثل العربية والعبرية والفارسية. استخدم زر RTL/LTR في الأعلى للتبديل بين الاتجاهات.'
              : 'All components support Right-to-Left (RTL) languages like Arabic, Hebrew, and Persian. Use the RTL/LTR toggle in the header to switch directions.'}
          </p>
          
          <div className='grid md:grid-cols-2 gap-6'>
            {/* RTL Form Example */}
            <div className='bg-bg-white-0 rounded-lg p-6 space-y-4'>
              <h3 className='text-label-md text-text-strong-950 mb-4'>
                {direction === 'rtl' ? 'مثال على نموذج' : 'Form Example'}
              </h3>
              <Input.Root>
                <Input.Wrapper>
                  <Input.Icon as={RiMailLine} />
                  <Input.Input 
                    placeholder={direction === 'rtl' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'} 
                  />
                </Input.Wrapper>
              </Input.Root>
              <Input.Root>
                <Input.Wrapper>
                  <Input.Icon as={RiSearchLine} />
                  <Input.Input 
                    placeholder={direction === 'rtl' ? 'ابحث هنا...' : 'Search here...'} 
                  />
                </Input.Wrapper>
              </Input.Root>
              <Button.Root variant='primary' className='w-full'>
                {direction === 'rtl' ? 'إرسال' : 'Submit'}
              </Button.Root>
            </div>

            {/* RTL Content Example */}
            <div className='bg-bg-white-0 rounded-lg p-6 space-y-4'>
              <h3 className='text-label-md text-text-strong-950 mb-4'>
                {direction === 'rtl' ? 'مثال على المحتوى' : 'Content Example'}
              </h3>
              <Alert.Root status='information' variant='light'>
                <Alert.Icon as={RiInformationLine} />
                <div>
                  <div className='font-semibold'>
                    {direction === 'rtl' ? 'معلومات' : 'Information'}
                  </div>
                  <div className='text-sm'>
                    {direction === 'rtl' 
                      ? 'هذا مثال على رسالة تنبيه بالعربية'
                      : 'This is an example alert message'}
                  </div>
                </div>
              </Alert.Root>
              
              <div className='flex flex-wrap gap-2'>
                <Badge.Root color='blue'>
                  {direction === 'rtl' ? 'جديد' : 'New'}
                </Badge.Root>
                <Badge.Root color='green'>
                  {direction === 'rtl' ? 'نشط' : 'Active'}
                </Badge.Root>
                <Badge.Root color='orange'>
                  {direction === 'rtl' ? 'قيد الانتظار' : 'Pending'}
                </Badge.Root>
              </div>

              <Breadcrumb.Root>
                <Breadcrumb.Item asChild>
                  <Link href='/'>
                    <Breadcrumb.Icon as={RiHome2Line} />
                    {direction === 'rtl' ? 'الرئيسية' : 'Home'}
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.ArrowIcon as={RiArrowRightSLine} />
                <Breadcrumb.Item>
                  {direction === 'rtl' ? 'المكونات' : 'Components'}
                </Breadcrumb.Item>
              </Breadcrumb.Root>
            </div>
          </div>

          <div className='mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg'>
            <p className='text-sm text-text-sub-600'>
              <strong>{direction === 'rtl' ? '💡 نصيحة:' : '💡 Tip:'}</strong>{' '}
              {direction === 'rtl'
                ? 'يتم تطبيق دعم RTL تلقائياً على جميع المكونات. لا حاجة لتكوين إضافي!'
                : 'RTL support is automatically applied to all components. No additional configuration needed!'}
            </p>
          </div>
        </section>

        {/* Buttons */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Buttons</h2>
          <div className='flex flex-wrap gap-4'>
            <Button.Root>Default Button</Button.Root>
            <Button.Root variant='primary'>Primary</Button.Root>
            <Button.Root variant='neutral'>Neutral</Button.Root>
            <Button.Root variant='danger'>Danger</Button.Root>
            <Button.Root variant='primary' mode='stroke'>Stroke</Button.Root>
            <Button.Root variant='primary' mode='ghost'>Ghost</Button.Root>
            <Button.Root size='sm'>Small</Button.Root>
            <Button.Root size='lg'>Large</Button.Root>
            <Button.Root>
              <Button.Icon as={RiStarFill} />
              With Icon
            </Button.Root>
            <Button.Root disabled>Disabled</Button.Root>
          </div>
        </section>

        {/* Badges */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Badges</h2>
          <div className='flex flex-wrap gap-4 items-center'>
            <Badge.Root color='gray'>Gray</Badge.Root>
            <Badge.Root color='blue'>Blue</Badge.Root>
            <Badge.Root color='green'>Green</Badge.Root>
            <Badge.Root color='orange'>Orange</Badge.Root>
            <Badge.Root color='red'>Red</Badge.Root>
            <Badge.Root color='purple'>Purple</Badge.Root>
            <Badge.Root variant='light' color='blue'>Light</Badge.Root>
            <Badge.Root variant='lighter' color='green'>Lighter</Badge.Root>
            <Badge.Root variant='stroke' color='blue'>Stroke</Badge.Root>
          </div>
        </section>

        {/* Status Badges */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Status Badges</h2>
          <div className='flex flex-wrap gap-4'>
            <StatusBadge.Root status='completed'>
              <StatusBadge.Dot />
              Completed
            </StatusBadge.Root>
            <StatusBadge.Root status='pending'>
              <StatusBadge.Dot />
              Pending
            </StatusBadge.Root>
            <StatusBadge.Root status='failed'>
              <StatusBadge.Dot />
              Failed
            </StatusBadge.Root>
            <StatusBadge.Root status='disabled'>
              <StatusBadge.Dot />
              Disabled
            </StatusBadge.Root>
            <StatusBadge.Root variant='light' status='completed'>
              <StatusBadge.Dot />
              Light Variant
            </StatusBadge.Root>
          </div>
        </section>

        {/* Tags */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Tags</h2>
          <div className='flex flex-wrap gap-3'>
            <Tag.Root>React</Tag.Root>
            <Tag.Root>Next.js</Tag.Root>
            <Tag.Root>TypeScript</Tag.Root>
            <Tag.Root>Tailwind CSS</Tag.Root>
            <Tag.Root variant='gray'>Gray Variant</Tag.Root>
            <Tag.Root disabled>Disabled</Tag.Root>
          </div>
        </section>

        {/* Inputs */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Input Fields</h2>
          <div className='space-y-4 max-w-md'>
            <Input.Root>
              <Input.Wrapper>
                <Input.Input placeholder='Enter your email' />
              </Input.Wrapper>
            </Input.Root>
            
            <Input.Root>
              <Input.Wrapper>
                <Input.Icon as={RiMailLine} />
                <Input.Input placeholder='With icon' />
              </Input.Wrapper>
            </Input.Root>

            <Input.Root>
              <Input.Wrapper>
                <Input.Icon as={RiSearchLine} />
                <Input.Input placeholder='Search...' />
              </Input.Wrapper>
            </Input.Root>

            <Input.Root size='small'>
              <Input.Wrapper>
                <Input.Input placeholder='Small size' />
              </Input.Wrapper>
            </Input.Root>

            <Input.Root hasError>
              <Input.Wrapper>
                <Input.Input placeholder='Error state' />
              </Input.Wrapper>
            </Input.Root>

            <Input.Root>
              <Input.Wrapper>
                <Input.Input placeholder='Disabled' disabled />
              </Input.Wrapper>
            </Input.Root>
          </div>
        </section>

        {/* Textarea */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Textarea</h2>
          <div className='space-y-4 max-w-md'>
            <Textarea.Root 
              simple 
              placeholder='Simple textarea...'
              value={textValue}
              onChange={(e) => setTextValue(e.target.value)}
            />
            <Textarea.Root placeholder='Textarea with character counter' maxLength={200}>
              <Textarea.CharCounter current={textValue.length} max={200} />
            </Textarea.Root>
          </div>
        </section>

        {/* Select */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Select Dropdown</h2>
          <div className='space-y-4 max-w-md'>
            <Select.Root>
              <Select.Trigger>
                <Select.Value placeholder='Select an option' />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value='option1'>Option 1</Select.Item>
                <Select.Item value='option2'>Option 2</Select.Item>
                <Select.Item value='option3'>Option 3</Select.Item>
                <Select.Item value='option4'>Option 4</Select.Item>
              </Select.Content>
            </Select.Root>

            <Select.Root size='small'>
              <Select.Trigger>
                <Select.Value placeholder='Small select' />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value='small1'>Small Option 1</Select.Item>
                <Select.Item value='small2'>Small Option 2</Select.Item>
              </Select.Content>
            </Select.Root>
          </div>
        </section>

        {/* Checkboxes */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Checkboxes</h2>
          <div className='flex flex-col gap-3'>
            <label className='flex items-center gap-2 cursor-pointer'>
              <Checkbox.Root defaultChecked />
              <span className='text-paragraph-sm text-text-strong-950'>Accept terms and conditions</span>
            </label>
            <label className='flex items-center gap-2 cursor-pointer'>
              <Checkbox.Root />
              <span className='text-paragraph-sm text-text-strong-950'>Subscribe to newsletter</span>
            </label>
            <label className='flex items-center gap-2 cursor-pointer'>
              <Checkbox.Root checked='indeterminate' />
              <span className='text-paragraph-sm text-text-strong-950'>Indeterminate state</span>
            </label>
            <label className='flex items-center gap-2'>
              <Checkbox.Root disabled />
              <span className='text-paragraph-sm text-text-disabled-300'>Disabled checkbox</span>
            </label>
          </div>
        </section>

        {/* Switches */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Switches</h2>
          <div className='flex flex-col gap-3'>
            <label className='flex items-center gap-2 cursor-pointer'>
              <Switch.Root checked={switchChecked} onCheckedChange={setSwitchChecked} />
              <span className='text-paragraph-sm text-text-strong-950'>Enable notifications</span>
            </label>
            <label className='flex items-center gap-2 cursor-pointer'>
              <Switch.Root defaultChecked />
              <span className='text-paragraph-sm text-text-strong-950'>Auto-save</span>
            </label>
            <label className='flex items-center gap-2'>
              <Switch.Root disabled />
              <span className='text-paragraph-sm text-text-disabled-300'>Disabled switch</span>
            </label>
          </div>
        </section>

        {/* Radio Buttons */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Radio Buttons</h2>
          <Radio.Group defaultValue='option1'>
            <div className='flex flex-col gap-3'>
              <label className='flex items-center gap-2 cursor-pointer'>
                <Radio.Item value='option1' />
                <span className='text-paragraph-sm text-text-strong-950'>Option 1</span>
              </label>
              <label className='flex items-center gap-2 cursor-pointer'>
                <Radio.Item value='option2' />
                <span className='text-paragraph-sm text-text-strong-950'>Option 2</span>
              </label>
              <label className='flex items-center gap-2 cursor-pointer'>
                <Radio.Item value='option3' />
                <span className='text-paragraph-sm text-text-strong-950'>Option 3</span>
              </label>
              <label className='flex items-center gap-2'>
                <Radio.Item value='option4' disabled />
                <span className='text-paragraph-sm text-text-disabled-300'>Disabled option</span>
              </label>
            </div>
          </Radio.Group>
        </section>

        {/* Avatars */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Avatars</h2>
          <div className='flex flex-wrap gap-4 items-center'>
            <Avatar.Root size='80'>
              <Avatar.Image src='https://i.pravatar.cc/150?img=1' alt='User' />
            </Avatar.Root>
            <Avatar.Root size='64'>
              <Avatar.Image src='https://i.pravatar.cc/150?img=2' alt='User' />
            </Avatar.Root>
            <Avatar.Root size='48'>
              <Avatar.Image src='https://i.pravatar.cc/150?img=3' alt='User' />
            </Avatar.Root>
            <Avatar.Root size='40' color='blue'>JD</Avatar.Root>
            <Avatar.Root size='32' color='purple'>AB</Avatar.Root>
            <Avatar.Root size='24' color='red'>CD</Avatar.Root>
            <Avatar.Root size='40' color='green'>EF</Avatar.Root>
          </div>
        </section>

        {/* Progress Bars */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Progress Bars</h2>
          <div className='space-y-4 max-w-md'>
            <div className='space-y-2'>
              <div className='flex justify-between text-sm text-text-sub-600'>
                <span>Progress</span>
                <span>30%</span>
              </div>
              <ProgressBar.Root value={30} color='blue' />
            </div>
            <div className='space-y-2'>
              <div className='flex justify-between text-sm text-text-sub-600'>
                <span>Success</span>
                <span>60%</span>
              </div>
              <ProgressBar.Root value={60} color='green' />
            </div>
            <div className='space-y-2'>
              <div className='flex justify-between text-sm text-text-sub-600'>
                <span>Warning</span>
                <span>90%</span>
              </div>
              <ProgressBar.Root value={90} color='orange' />
            </div>
            <div className='space-y-2'>
              <div className='flex justify-between text-sm text-text-sub-600'>
                <span>Error</span>
                <span>45%</span>
              </div>
              <ProgressBar.Root value={45} color='red' />
            </div>
          </div>
        </section>

        {/* Dividers */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Dividers</h2>
          <div className='space-y-6 max-w-md'>
            <Divider.Root variant='line' />
            <Divider.Root variant='line-spacing' />
            <Divider.Root variant='line-text'>OR</Divider.Root>
            <Divider.Root variant='text'>Section Title</Divider.Root>
            <Divider.Root variant='solid-text'>Solid Text</Divider.Root>
          </div>
        </section>

        {/* Keyboard Shortcuts */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Keyboard Shortcuts</h2>
          <div className='flex flex-wrap gap-3'>
            <Kbd.Root>⌘</Kbd.Root>
            <Kbd.Root>K</Kbd.Root>
            <Kbd.Root>Ctrl</Kbd.Root>
            <Kbd.Root>Shift</Kbd.Root>
            <Kbd.Root>Enter</Kbd.Root>
            <Kbd.Root>Esc</Kbd.Root>
            <div className='flex gap-1'>
              <Kbd.Root>⌘</Kbd.Root>
              <span className='text-text-sub-600'>+</span>
              <Kbd.Root>K</Kbd.Root>
            </div>
          </div>
        </section>

        {/* Accordion */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Accordion</h2>
          <div className='max-w-2xl'>
            <Accordion.Root type='single' collapsible className='space-y-3'>
              <Accordion.Item value='item-1'>
                <Accordion.Header>
                  <Accordion.Trigger>
                    <Accordion.Arrow />
                    <span>What is ZDH-UI?</span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  ZDH-UI is a comprehensive design system and component library built with React, TypeScript, and Tailwind CSS. It provides a collection of accessible, customizable components for building modern web applications.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value='item-2'>
                <Accordion.Header>
                  <Accordion.Trigger>
                    <Accordion.Arrow />
                    <span>How do I get started?</span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  Simply install the dependencies with npm or pnpm, and start importing components from the components/ui folder. All components are fully typed and documented.
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item value='item-3'>
                <Accordion.Header>
                  <Accordion.Trigger>
                    <Accordion.Arrow />
                    <span>Is it customizable?</span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content>
                  Yes! All components are built with Tailwind CSS and support custom styling through className props. You can also modify the design tokens in your Tailwind configuration.
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </section>

        {/* Alerts */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Alerts</h2>
          <div className='space-y-4 max-w-2xl'>
            <Alert.Root status='information' variant='filled'>
              <Alert.Icon as={RiInformationLine} />
              <div>
                <div className='font-semibold'>Information</div>
                <div className='text-sm opacity-90'>This is an informational alert message.</div>
              </div>
            </Alert.Root>

            <Alert.Root status='success' variant='light'>
              <Alert.Icon as={RiCheckboxCircleLine} />
              <div>
                <div className='font-semibold'>Success</div>
                <div className='text-sm'>Your action was completed successfully.</div>
              </div>
            </Alert.Root>

            <Alert.Root status='warning' variant='lighter'>
              <Alert.Icon as={RiAlertLine} />
              <div>
                <div className='font-semibold'>Warning</div>
                <div className='text-sm'>Please review this warning message.</div>
              </div>
            </Alert.Root>

            <Alert.Root status='error' variant='stroke'>
              <Alert.Icon as={RiErrorWarningLine} />
              <div>
                <div className='font-semibold'>Error</div>
                <div className='text-sm'>An error occurred. Please try again.</div>
              </div>
            </Alert.Root>
          </div>
        </section>

        {/* Breadcrumb */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Breadcrumb</h2>
          <Breadcrumb.Root>
            <Breadcrumb.Item asChild>
              <Link href='/'>
                <Breadcrumb.Icon as={RiHome2Line} />
                Home
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.ArrowIcon as={RiArrowRightSLine} />
            <Breadcrumb.Item asChild>
              <Link href='/components'>Components</Link>
            </Breadcrumb.Item>
            <Breadcrumb.ArrowIcon as={RiArrowRightSLine} />
            <Breadcrumb.Item active>Current Page</Breadcrumb.Item>
          </Breadcrumb.Root>
        </section>

        {/* Dropdown Menu */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Dropdown Menu</h2>
          <Dropdown.Root>
            <Dropdown.Trigger asChild>
              <Button.Root variant='neutral'>
                <Button.Icon as={RiMoreLine} />
                Open Menu
              </Button.Root>
            </Dropdown.Trigger>
            <Dropdown.Content>
              <Dropdown.Group>
                <Dropdown.Label>My Account</Dropdown.Label>
                <Dropdown.Item>
                  <Dropdown.ItemIcon as={RiUser3Line} />
                  Profile
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown.ItemIcon as={RiSettings3Line} />
                  Settings
                </Dropdown.Item>
              </Dropdown.Group>
              <Dropdown.Separator className='my-1 h-px bg-stroke-soft-200' />
              <Dropdown.Item>
                <Dropdown.ItemIcon as={RiLogoutBoxLine} />
                Logout
              </Dropdown.Item>
              <Dropdown.Item>
                <Dropdown.ItemIcon as={RiDeleteBinLine} />
                <span className='text-error-base'>Delete Account</span>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Root>
        </section>

        {/* Modal */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Modal</h2>
          <Modal.Root open={modalOpen} onOpenChange={setModalOpen}>
            <Modal.Trigger asChild>
              <Button.Root variant='primary'>Open Modal</Button.Root>
            </Modal.Trigger>
            <Modal.Content>
              <Modal.Header
                icon={RiInformationLine}
                title='Modal Title'
                description='This is a modal description'
              />
              <Modal.Body>
                <p className='text-paragraph-sm text-text-sub-600'>
                  This is the modal body content. You can add any content here including forms, text, images, and more.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Modal.Close asChild>
                  <Button.Root variant='neutral' mode='ghost'>Cancel</Button.Root>
                </Modal.Close>
                <Button.Root variant='primary' onClick={() => setModalOpen(false)}>
                  Confirm
                </Button.Root>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Root>
        </section>

        {/* Tooltip */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Tooltip</h2>
          <Tooltip.Provider>
            <div className='flex flex-wrap gap-4'>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Button.Root variant='neutral'>Dark Tooltip</Button.Root>
                </Tooltip.Trigger>
                <Tooltip.Content variant='dark'>
                  This is a dark tooltip
                </Tooltip.Content>
              </Tooltip.Root>

              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Button.Root variant='neutral'>Light Tooltip</Button.Root>
                </Tooltip.Trigger>
                <Tooltip.Content variant='light'>
                  This is a light tooltip
                </Tooltip.Content>
              </Tooltip.Root>

              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Button.Root variant='neutral'>Small</Button.Root>
                </Tooltip.Trigger>
                <Tooltip.Content size='small'>
                  Small tooltip
                </Tooltip.Content>
              </Tooltip.Root>

              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Button.Root variant='neutral'>Medium</Button.Root>
                </Tooltip.Trigger>
                <Tooltip.Content size='medium'>
                  Medium tooltip with more content
                </Tooltip.Content>
              </Tooltip.Root>
            </div>
          </Tooltip.Provider>
        </section>

        {/* Pagination */}
        <section>
          <h2 className='text-title-h4 text-text-strong-950 mb-6'>Pagination</h2>
          <div className='space-y-6'>
            <div>
              <p className='text-sm text-text-sub-600 mb-3'>Basic variant</p>
              <Pagination.Root variant='basic'>
                <Pagination.NavButton onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
                  <Pagination.NavIcon as={RiArrowLeftSLine} />
                </Pagination.NavButton>
                <Pagination.Item current={currentPage === 1} onClick={() => setCurrentPage(1)}>1</Pagination.Item>
                <Pagination.Item current={currentPage === 2} onClick={() => setCurrentPage(2)}>2</Pagination.Item>
                <Pagination.Item current={currentPage === 3} onClick={() => setCurrentPage(3)}>3</Pagination.Item>
                <Pagination.Item current={currentPage === 4} onClick={() => setCurrentPage(4)}>4</Pagination.Item>
                <Pagination.Item current={currentPage === 5} onClick={() => setCurrentPage(5)}>5</Pagination.Item>
                <Pagination.NavButton onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}>
                  <Pagination.NavIcon as={RiArrowRightSLine} />
                </Pagination.NavButton>
              </Pagination.Root>
            </div>

            <div>
              <p className='text-sm text-text-sub-600 mb-3'>Rounded variant</p>
              <Pagination.Root variant='rounded'>
                <Pagination.NavButton>
                  <Pagination.NavIcon as={RiArrowLeftSLine} />
                </Pagination.NavButton>
                <Pagination.Item current>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.NavButton>
                  <Pagination.NavIcon as={RiArrowRightSLine} />
                </Pagination.NavButton>
              </Pagination.Root>
            </div>

            <div>
              <p className='text-sm text-text-sub-600 mb-3'>Group variant</p>
              <Pagination.Root variant='group'>
                <Pagination.NavButton>
                  <Pagination.NavIcon as={RiArrowLeftSLine} />
                </Pagination.NavButton>
                <Pagination.Item current>1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                <Pagination.NavButton>
                  <Pagination.NavIcon as={RiArrowRightSLine} />
                </Pagination.NavButton>
              </Pagination.Root>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
