import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Globe,
  Layers3,
  Menu,
  Moon,
  Palette,
  Sparkles,
  Sun,
  Zap,
  Cpu,
  Smartphone,
  Briefcase,
  MessageSquare,
  Mail,
  Phone,
  Instagram,
  Dribbble,
  Github,
  Linkedin,
  Star,
  ShieldCheck,
  Boxes,
  Rocket,
  MonitorSmartphone,
} from 'lucide-react';

type ThemeMode = 'light' | 'dark' | 'bright';

const themeClasses: Record<ThemeMode, string> = {
  light: 'bg-[#f7f3ff] text-slate-900',
  dark: 'dark bg-[#090914] text-white',
  bright: 'bg-[#f4ecff] text-[#1a1127]',
};

const menuItems = ['Услуги', 'Проекты', 'Процесс', 'Цены', 'Команда', 'Контакты'];

const services = [
  {
    icon: Globe,
    title: 'Сайты и landing pages',
    text: 'Корпоративные сайты, презентационные страницы и каталоги для бизнеса любого уровня.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Web-приложения',
    text: 'Интерфейсы, панели управления, CRM, платформы и сложные пользовательские системы.',
  },
  {
    icon: Smartphone,
    title: 'Мобильные интерфейсы',
    text: 'UI/UX для мобильных приложений и адаптивных решений под разные устройства.',
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    text: 'Визуальная идентичность, фирменный стиль и улучшение текущего пользовательского опыта.',
  },
  {
    icon: Layers3,
    title: '3D и визуализация',
    text: 'Интерактивные 3D-элементы, анимации и эффектная презентация продукта в интернете.',
  },
  {
    icon: Rocket,
    title: 'Сопровождение и рост',
    text: 'Поддержка, оптимизация, анимации, аналитика и улучшение конверсий после запуска.',
  },
];

const projectCards = [
  {
    title: 'Marketplace platform',
    tag: 'E-commerce',
    text: 'Платформа для массовой торговли с гибкой структурой каталога и адаптивным UX.',
  },
  {
    title: 'FinTech dashboard',
    tag: 'Finance',
    text: 'Панель управления финансами с визуальной аналитикой и быстродействующим интерфейсом.',
  },
  {
    title: 'Startup landing',
    tag: 'SaaS',
    text: 'Лендинг для роста подписки, повышенной конверсии и сильного брендинга.',
  },
  {
    title: '3D brand showcase',
    tag: 'Motion',
    text: 'Интерактивный визуальный сайт с 3D эффектами и динамикой пользовательского сценария.',
  },
];

const process = [
  'Анализ цели, аудит и постановка задач',
  'Прототип и UX-структура интерфейса',
  'Дизайн и визуальная концепция',
  'Разработка и интеграции',
  'Тестирование и доработка по фидбеку',
  'Запуск и дальнейшая поддержка',
];

const team = [
  {
    name: 'Алексей',
    role: 'Founder / Product Lead',
    bio: 'Строит стратегию продукта и превращает идеи в понятные, сильные digital-системы.',
  },
  {
    name: 'Екатерина',
    role: 'Creative Director',
    bio: 'Формирует визуальный язык и айдентику, чтобы продукт выглядел премиально и продавал.',
  },
  {
    name: 'Дмитрий',
    role: 'Frontend Engineer',
    bio: 'Отвечает за быстрые, масштабируемые интерфейсы и качественную пользовательскую логику.',
  },
  {
    name: 'Мария',
    role: 'UX / Motion Designer',
    bio: 'Создает анимации, ощущение продукта и плавность взаимодействия на всех этапах.',
  },
];

const pricingPlans = [
  {
    name: 'Старт',
    description: 'Для нового проекта или MVP.',
    highlight: false,
    includes: [
      'Визуальная концепция и структура',
      '1 ключевой раздел сайта',
      'Адаптивная верстка',
      'Поддержка после запуска',
    ],
  },
  {
    name: 'Бизнес',
    description: 'Для компании, которой нужен сильный и продающий сайт.',
    highlight: true,
    includes: [
      'Полный сайт под бренд',
      'Интерактивные элементы',
      '3D/анимации и эффектная подача',
      'SEO-структура и оптимизация',
    ],
  },
  {
    name: 'Премиум',
    description: 'Для масштабного продукта, платформы или digital-проекта.',
    highlight: false,
    includes: [
      'Кастомная архитектура продукта',
      'Сложные интерфейсы и интеграции',
      'Advanced UX / Motion design',
      'Сопровождение и развитие проекта',
    ],
  },
];

const stats = [
  { value: '5+', label: 'лет опыта' },
  { value: '40+', label: 'завершённых проектов' },
  { value: '24/7', label: 'сопровождение' },
  { value: '100%', label: 'индивидуальный подход' },
];

const testimonials = [
  'Сделали современную презентацию под наш бренд — всё выглядит дорого и качественно.',
  'Команда умеет сочетать стиль, функциональность и реальные бизнес-цели.',
  'Благодаря им мы получили внятный сайт, который действительно помогает продавать.',
];

function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark', 'light', 'bright');
    root.classList.add(theme === 'dark' ? 'dark' : theme === 'bright' ? 'bright' : 'light');
  }, [theme]);

  const wrapperClass = useMemo(() => themeClasses[theme], [theme]);

  return (
    <div className={wrapperClass + ' min-h-screen overflow-x-hidden'}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(168,118,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(123,92,255,0.18),transparent_35%)]" />

      <header className="sticky top-0 z-50 border-b border-white/20 bg-white/50 backdrop-blur-xl dark:bg-[#0d1020]/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-lg font-bold text-white shadow-lg shadow-violet-500/30">
              D
            </div>
            <div>
              <div className="text-lg font-semibold tracking-[0.14em] text-slate-900 dark:text-white">DEV3D</div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">web studio</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
            {menuItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-violet-600 dark:hover:text-violet-300">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex rounded-full border border-violet-200 bg-white/80 p-1 shadow-sm dark:border-violet-400/20 dark:bg-slate-900/80">
              {(['light', 'dark', 'bright'] as ThemeMode[]).map((option) => (
                <button
                  key={option}
                  onClick={() => setTheme(option)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${
                    theme === option ? 'bg-violet-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-300'
                  }`}
                  aria-label={`Set ${option} theme`}
                >
                  {option === 'light' ? <Sun size={16} /> : option === 'dark' ? <Moon size={16} /> : <Sparkles size={16} />}
                </button>
              ))}
            </div>
            <button className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:bg-violet-700">
              Обсудить проект
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen((v) => !v)} aria-label="Open menu">
            <Menu size={26} className="text-slate-800 dark:text-slate-200" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white/90 p-4 md:hidden dark:border-slate-800 dark:bg-[#0d1020]/95">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-2 rounded-full border border-violet-200 bg-white/80 p-1 dark:border-violet-500/20 dark:bg-slate-900/80">
                {(['light', 'dark', 'bright'] as ThemeMode[]).map((option) => (
                  <button
                    key={option}
                    onClick={() => setTheme(option)}
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${
                      theme === option ? 'bg-violet-600 text-white' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {option === 'light' ? <Sun size={15} /> : option === 'dark' ? <Moon size={15} /> : <Sparkles size={15} />}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
              {menuItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="главная" className="relative mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-2 text-xs font-medium text-violet-700 shadow-sm backdrop-blur dark:border-violet-500/20 dark:bg-slate-900/70 dark:text-violet-200">
                <Sparkles size={14} />
                Креативные digital решения для роста бизнеса
              </div>

              <h1 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
                Создаём сайты, которые <span className="gradient-text">продают и запоминаются</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                Мы проектируем и разрабатываем цифровые продукты для бизнеса: брендинг, интерфейсы, сайты, приложения и 3D-сцены, которые усиливают впечатление от вашего проекта.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-500/25 hover:bg-violet-700">
                  Заказать проект <ArrowRight size={18} />
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 hover:border-violet-400 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100">
                  Посмотреть работы <ChevronRight size={18} />
                </button>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-violet-100 bg-white/70 p-4 shadow-sm dark:border-violet-500/10 dark:bg-slate-900/70">
                    <div className="text-2xl font-black text-slate-900 dark:text-white">{item.value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-[520px] rounded-[32px] border border-white/30 bg-white/50 p-4 shadow-[0_30px_80px_rgba(109,87,168,0.25)] backdrop-blur-xl dark:border-violet-500/10 dark:bg-slate-900/60">
                <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top,_rgba(168,118,255,0.35),transparent_40%)]" />
                <div className="relative overflow-hidden rounded-[28px] border border-violet-100 bg-[linear-gradient(135deg,#f4ecff,#f9f5ff,#eef2ff)] p-6 dark:border-violet-500/10 dark:bg-[linear-gradient(135deg,#0f172a,#171f35,#120d24)]">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex gap-2">
                      {['#f87171', '#fbbf24', '#34d399'].map((dot) => (
                        <span key={dot} className="h-3 w-3 rounded-full" style={{ background: dot }} />
                      ))}
                    </div>
                    <div className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-violet-700 dark:bg-violet-900/50 dark:text-violet-200">
                      live project
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-2xl bg-white/70 p-4 shadow-sm dark:bg-slate-950/40">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">3D scene</div>
                        <div className="flex items-center gap-1 text-violet-600 dark:text-violet-300">
                          <Boxes size={16} />
                          <span className="text-xs font-semibold">render</span>
                        </div>
                      </div>

                      <div className="relative h-56 overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_center,_rgba(168,118,255,0.35),_rgba(15,23,42,0.9)_50%,_rgba(8,10,22,1)_100%)]">
                        <div className="absolute left-5 top-8 h-20 w-20 rounded-full bg-violet-400/50 blur-2xl" />
                        <div className="absolute bottom-6 right-10 h-24 w-24 rounded-full bg-indigo-400/40 blur-2xl" />
                        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[30%] border border-violet-200/40 bg-white/5 shadow-[0_0_50px_rgba(168,118,255,0.4)] backdrop-blur-md" />
                        <div className="absolute left-1/2 top-1/2 h-8 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/30 shadow-[0_0_50px_rgba(168,118,255,0.4)]" />
                        <div className="absolute left-1/2 top-1/2 h-28 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-violet-500/40" />
                        <div className="absolute left-1/2 top-1/2 h-28 w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-violet-500/40" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-slate-200">
                          <span>brand</span>
                          <span>site</span>
                          <span>3D</span>
                          <span>app</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl bg-white/70 p-4 shadow-sm dark:bg-slate-950/40">
                        <div className="mb-3 inline-flex rounded-full bg-violet-100 p-2 text-violet-600 dark:bg-violet-900/40 dark:text-violet-200">
                          <Cpu size={18} />
                        </div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">Разработка</div>
                        <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">Веб, UI, логика, интеграции</div>
                      </div>

                      <div className="rounded-2xl bg-white/70 p-4 shadow-sm dark:bg-slate-950/40">
                        <div className="mb-3 inline-flex rounded-full bg-violet-100 p-2 text-violet-600 dark:bg-violet-900/40 dark:text-violet-200">
                          <BoltIcon />
                        </div>
                        <div className="text-sm font-semibold text-slate-800 dark:text-slate-100">Анимации</div>
                        <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">3D-эффекты и премиальный UX</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="услуги" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-violet-700 dark:border-violet-500/20 dark:bg-slate-900/60 dark:text-violet-200">
              <Zap size={12} />
              услуги
            </div>
            <h2 className="mt-6 text-3xl font-black sm:text-4xl">То, что мы создаём для современных брендов</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-[28px] border border-violet-100 bg-white/70 p-6 shadow-[0_16px_40px_rgba(123,92,255,0.08)] backdrop-blur dark:border-violet-500/10 dark:bg-slate-900/70"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-br from-violet-100 to-purple-50 p-3 text-violet-700 shadow-sm dark:from-violet-900/30 dark:to-purple-950/20 dark:text-violet-200">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-300">
                  Узнать подробнее <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="проекты" className="bg-white/50 py-20 dark:bg-[#0d1020]/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-violet-700 dark:border-violet-500/20 dark:bg-slate-900/70 dark:text-violet-200">
                  <Briefcase size={12} />
                  проекты
                </div>
                <h2 className="mt-6 text-3xl font-black sm:text-4xl">Примеры подходов в работе</h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {projectCards.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[28px] border border-violet-100 bg-white/80 p-5 shadow-[0_16px_40px_rgba(123,92,255,0.08)] dark:border-violet-500/10 dark:bg-slate-900/75"
                >
                  <div className="mb-5 h-40 rounded-[22px] bg-[linear-gradient(135deg,#f3ebff,#e0ecff,#f7e9ff)] p-4 dark:bg-[linear-gradient(135deg,#1b1730,#2d335a,#17152b)]">
                    <div className="flex h-full items-end justify-between">
                      <div className="h-16 w-16 rounded-2xl bg-white/50 shadow-inner dark:bg-slate-900/30" />
                      <div className="h-20 w-20 rounded-full border border-violet-300/50 bg-violet-200/40 dark:border-violet-400/40 dark:bg-violet-800/30" />
                    </div>
                  </div>
                  <div className="mb-3 inline-flex rounded-full bg-violet-100 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-violet-700 dark:bg-violet-900/50 dark:text-violet-200">
                    {item.tag}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="процесс" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-violet-700 dark:border-violet-500/20 dark:bg-slate-900/70 dark:text-violet-200">
              <Rocket size={12} />
              процесс
            </div>
            <h2 className="mt-6 text-3xl font-black sm:text-4xl">Как мы превращаем задачу в результат</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {process.map((item, index) => (
              <div key={item} className="relative rounded-[28px] border border-violet-100 bg-white/70 p-6 shadow-[0_16px_40px_rgba(123,92,255,0.08)] dark:border-violet-500/10 dark:bg-slate-900/70">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <Check className="text-violet-500" size={18} />
                </div>
                <p className="text-base font-medium leading-7 text-slate-700 dark:text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="цены" className="bg-white/50 py-20 dark:bg-[#0d1020]/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-violet-700 dark:border-violet-500/20 dark:bg-slate-900/70 dark:text-violet-200">
                <ShieldCheck size={12} />
                цены
              </div>
              <h2 className="mt-6 text-3xl font-black sm:text-4xl">Гибкие предложения под разные задачи</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-[30px] border p-7 shadow-[0_20px_50px_rgba(123,92,255,0.08)] ${
                    plan.highlight
                      ? 'border-violet-500 bg-gradient-to-b from-violet-600 to-violet-700 text-white shadow-violet-500/25'
                      : 'border-violet-100 bg-white/80 text-slate-800 dark:border-violet-500/10 dark:bg-slate-900/80 dark:text-slate-100'
                  }`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <div className={`text-sm uppercase tracking-[0.2em] ${plan.highlight ? 'text-violet-100' : 'text-violet-600 dark:text-violet-300'}`}>
                        {plan.name}
                      </div>
                    </div>
                    {plan.highlight && (
                      <div className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white">
                        popular
                      </div>
                    )}
                  </div>

                  <div className="mb-5 text-sm leading-7 opacity-80">{plan.description}</div>

                  <div className="mb-6 h-px w-full bg-white/10" />

                  <div className="space-y-3">
                    {plan.includes.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ${plan.highlight ? 'bg-white/20' : 'bg-violet-100 dark:bg-violet-900/40'}`}>
                          <Check size={12} className={plan.highlight ? 'text-white' : 'text-violet-700 dark:text-violet-200'} />
                        </div>
                        <span className="text-sm leading-6">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`mt-8 w-full rounded-full px-5 py-3 font-semibold ${plan.highlight ? 'bg-white text-violet-700 hover:bg-violet-50' : 'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-400'}`}>
                    Согласовать задачу
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="команда" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-violet-700 dark:border-violet-500/20 dark:bg-slate-900/70 dark:text-violet-200">
              <Star size={12} />
              команда
            </div>
            <h2 className="mt-6 text-3xl font-black sm:text-4xl">Люди, которые создают продукт с нуля</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[28px] border border-violet-100 bg-white/80 p-5 shadow-[0_16px_40px_rgba(123,92,255,0.08)] dark:border-violet-500/10 dark:bg-slate-900/80"
              >
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-[22px] bg-gradient-to-br from-violet-200 via-purple-100 to-white text-2xl font-black text-violet-700 shadow-sm dark:from-violet-800 dark:via-violet-900 dark:to-slate-900 dark:text-violet-200">
                  {member.name[0]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="mt-1 text-sm text-violet-600 dark:text-violet-300">{member.role}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-violet-100 bg-gradient-to-r from-violet-600 to-purple-700 p-[1px] shadow-[0_25px_60px_rgba(123,92,255,0.2)]">
            <div className="grid gap-8 rounded-[31px] bg-[#120d22] p-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-violet-100">
                  <MessageSquare size={12} />
                  отзывы
                </div>
                <h2 className="text-3xl font-black text-white sm:text-4xl">Мы делаем продукт, который хочется рекомендовать</h2>
              </div>
              <div className="space-y-4">
                {testimonials.map((text) => (
                  <div key={text} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-violet-50/90">
                    “{text}”
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="контакты" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[32px] border border-violet-100 bg-white/80 p-8 shadow-[0_20px_50px_rgba(123,92,255,0.08)] dark:border-violet-500/10 dark:bg-slate-900/80 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-violet-700 dark:border-violet-500/20 dark:bg-violet-950/20 dark:text-violet-200">
                <Mail size={12} />
                контакты
              </div>
              <h2 className="mt-6 text-3xl font-black sm:text-4xl">Обсудим ваш проект и подберём правильное решение</h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-slate-600 dark:text-slate-300">
                Напишите, что нужно сделать: сайт, приложение, редизайн, запуск продукта, 3D-эффекты или стратегия развития.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-200">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">phone</div>
                    <div className="text-base font-semibold">+7 (999) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-200">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">email</div>
                    <div className="text-base font-semibold">hello@dev3d.studio</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-6 dark:border-violet-500/10 dark:from-slate-900 dark:to-[#101827]">
              <div className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Напишите нам</div>
              <div className="space-y-4">
                <input className="w-full rounded-2xl border border-violet-100 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-violet-400 dark:border-violet-500/20 dark:bg-slate-950 dark:text-white" placeholder="Ваше имя" />
                <input className="w-full rounded-2xl border border-violet-100 bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-violet-400 dark:border-violet-500/20 dark:bg-slate-950 dark:text-white" placeholder="Email" />
                <textarea rows={5} className="w-full rounded-2xl border border-violet-100 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-violet-400 dark:border-violet-500/20 dark:bg-slate-950 dark:text-white" placeholder="Расскажите о задаче" />
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 hover:bg-violet-700">
                  Отправить запрос <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-violet-100 bg-white/50 py-8 dark:border-violet-500/10 dark:bg-[#0d1020]/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 lg:flex-row lg:px-8">
          <div className="text-sm text-slate-600 dark:text-slate-300">© 2026 DEV3D Studio. Все права защищены.</div>
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-300">
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-violet-600 dark:hover:text-violet-300"><Instagram size={18} /></a>
            <a href="https://dribbble.com" aria-label="Dribbble" className="hover:text-violet-600 dark:hover:text-violet-300"><Dribbble size={18} /></a>
            <a href="https://github.com" aria-label="GitHub" className="hover:text-violet-600 dark:hover:text-violet-300"><Github size={18} /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-violet-600 dark:hover:text-violet-300"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[18px] w-[18px]">
      <path d="M13 2L4 13h6l-1 9 9-11h-6l1-9z" />
    </svg>
  );
}

export default App;
