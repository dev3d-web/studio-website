import { motion } from 'framer-motion'
import {
  ArrowRight,
  Briefcase,
  Check,
  Cpu,
  Dribbble,
  Github,
  Globe,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MessageSquare,
  MonitorSmartphone,
  Moon,
  Palette,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Zap,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

type ThemeMode = 'light' | 'dark' | 'bright'

const navLinks = ['Услуги', 'Проекты', 'Процесс', 'Цены', 'Команда', 'Контакты']

const services = [
  {
    icon: Globe,
    title: 'Сайты и landing pages',
    text: 'Корпоративные сайты, презентационные страницы, product landing и digital-решения под бизнес цели.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Web-applications',
    text: 'Панели управления, внутренние системы, CRM, сервисы для клиентов и масштабируемые платформы.',
  },
  {
    icon: Palette,
    title: 'Branding & UX',
    text: 'Фирменный стиль, упаковка интерфейса, визуальная идентичность и UX-методика для роста конверсии.',
  },
  {
    icon: Layers3,
    title: '3D / imagine',
    text: '3D-элементы, анимации, работоспособная product-иллюстрация и эффектная презентация работы.',
  },
  {
    icon: Cpu,
    title: 'Разработка и интеграции',
    text: 'Чистый код, логика продукта, интеграции, формы, бэкенд-часть и бизнес-процессы.',
  },
  {
    icon: Rocket,
    title: 'Запуск и поддержка',
    text: 'Готовим проект к запуску, проверяем стабильность и помогаем развивать его после релиза.',
  },
]

const projects = [
  { title: 'Marketplace platform', tag: 'E-commerce', text: 'Сервис с гибкой структурой категорий и товарным UX для массового роста продаж.' },
  { title: 'FinTech dashboard', tag: 'Finance', text: 'Аналитическая панель с понятным интерфейсом и бизнес-метриками в одном взгляде.' },
  { title: 'SaaS landing', tag: 'Startups', text: 'Продающая страница для digital-продукта с сильной визуальной подачей и конверсией.' },
  { title: '3D showcase', tag: 'Motion', text: 'Презентационный сайт с анимацией и эффектным 3D-стилем для продукта или бренда.' },
]

const process = [
  'Сбор задач и анализ бизнеса',
  'UX-структура и прототип',
  'Visual design и концепция',
  'Разработка интерфейса',
  'Тестирование и доработка',
  'Запуск и сопровождение',
]

const team = [
  { name: 'Алексей', role: 'Founder / Strategy', bio: 'Стратегия продукта и решения, которые связывают идею, бизнес и пользовательский опыт.' },
  { name: 'Екатерина', role: 'Design Director', bio: 'Визуальная концепция, фирменный стиль и создание сильного впечатления от интерфейса.' },
  { name: 'Дмитрий', role: 'Frontend Engineer', bio: 'Сборка быстрых и качественных интерфейсов под любые устройства и задачи.' },
  { name: 'Мария', role: 'Motion / UX', bio: 'Анимации, интерактивность и чувство плавности, которое помогает удерживать внимание.' },
]

const pricing = [
  {
    name: 'Старт',
    description: 'Подходящий вариант для MVP, нового проекта или стартовой digital-презентации.',
    highlight: false,
    items: ['Структура и визуальный концепт', '1 базовый блок / модуль', 'Адаптивная вёрстка', 'Поддержка после запуска'],
  },
  {
    name: 'Бизнес',
    description: 'Сильный продающий сайт или сервис для активного роста бренда и клиентов.',
    highlight: true,
    items: ['Полный сайт/лендинг', '3D-элементы и анимации', 'UX и дизайн под ключ', 'SEO-структура и оптимизация'],
  },
  {
    name: 'Премиум',
    description: 'Кастомный digital-проект для масштабной идеи, нового сервиса или продукта.',
    highlight: false,
    items: ['Сложные интерфейсы и логика', 'Интеграции и продуктовые модули', 'Motion design и визуальные эффекты', 'Дальнейшее развитие проекта'],
  },
]

const stats = [
  { value: '5+', label: 'лет опыта' },
  { value: '40+', label: 'проектов' },
  { value: '24/7', label: 'поддержка' },
  { value: '100%', label: 'индивидуальный подход' },
]

const themeClasses: Record<ThemeMode, string> = {
  light: 'bg-[#f7f4ff] text-slate-900',
  dark: 'bg-[#090d18] text-white',
  bright: 'bg-[#f5eeff] text-[#180f28]',
}

function App() {
  const [theme, setTheme] = useState<ThemeMode>('light')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'bright', 'light')
    document.documentElement.classList.add(theme)
  }, [theme])

  const pageClass = useMemo(() => themeClasses[theme], [theme])

  return (
    <div className={`${pageClass} min-h-screen overflow-x-hidden transition-colors duration-300`}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.16),transparent_35%)]" />

      <header className="sticky top-0 z-50 border-b border-violet-100/70 bg-white/60 backdrop-blur-xl dark:border-violet-500/10 dark:bg-[#0b1120]/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 font-black text-white shadow-lg shadow-violet-500/30">
              D
            </div>
            <div>
              <div className="text-base font-black tracking-[0.18em]">DEV3D</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">studio</div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex dark:text-slate-300">
            {navLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-violet-600 dark:hover:text-violet-300">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex items-center gap-1 rounded-full border border-violet-200 bg-white/80 p-1 shadow-sm dark:border-violet-500/20 dark:bg-slate-900/80">
              {(['light', 'dark', 'bright'] as ThemeMode[]).map((option) => (
                <button
                  key={option}
                  onClick={() => setTheme(option)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${
                    theme === option ? 'bg-violet-600 text-white shadow-md' : 'text-slate-600 dark:text-slate-300'
                  }`}
                  aria-label={`Enable ${option} mode`}
                >
                  {option === 'light' ? <Sun size={16} /> : option === 'dark' ? <Moon size={16} /> : <Sparkles size={16} />}
                </button>
              ))}
            </div>
            <button className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xl shadow-violet-500/20 transition hover:bg-violet-700">
              Обсудить проект
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen((v) => !v)} aria-label="Toggle mobile menu">
            <Menu size={26} className="text-slate-800 dark:text-slate-100" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-violet-100 bg-white/90 p-4 md:hidden dark:border-violet-500/10 dark:bg-[#0b1120]/90">
            <div className="mb-4 flex justify-between">
              <div className="flex gap-2 rounded-full border border-violet-200 bg-white/80 p-1 dark:border-violet-500/20 dark:bg-slate-900/80">
                {(['light', 'dark', 'bright'] as ThemeMode[]).map((option) => (
                  <button
                    key={option}
                    onClick={() => setTheme(option)}
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${theme === option ? 'bg-violet-600 text-white' : 'text-slate-600 dark:text-slate-300'}`}
                  >
                    {option === 'light' ? <Sun size={14} /> : option === 'dark' ? <Moon size={14} /> : <Sparkles size={14} />}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
              {navLinks.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="главная" className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-violet-700 shadow-sm dark:border-violet-500/20 dark:bg-slate-900/70 dark:text-violet-200">
                <Sparkles size={12} />
                digital studio
              </div>

              <h1 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
                Создаём <span className="gradient-text">сайты и digital-продукты</span>, которые работают на результат
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                Мы разрабатываем интерфейсы, брендинг, web-сервисы и 3D-визуализацию для бизнеса, который хочет выделяться и продавать сильнее.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-500/20 transition hover:bg-violet-700">
                  Заказать проект <ArrowRight size={16} />
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-violet-400 hover:text-violet-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100">
                  Посмотреть работы <ArrowRight size={16} />
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-violet-100 bg-white/70 p-4 shadow-sm dark:border-violet-500/10 dark:bg-slate-900/70">
                    <div className="text-2xl font-black text-slate-900 dark:text-white">{item.value}</div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
              <div className="relative mx-auto max-w-[520px] rounded-[32px] border border-white/30 bg-white/50 p-4 shadow-[0_30px_80px_rgba(109,87,168,0.18)] backdrop-blur-xl dark:border-violet-500/10 dark:bg-slate-900/60">
                <div className="relative overflow-hidden rounded-[28px] border border-violet-100 bg-[linear-gradient(135deg,#f8f3ff,#eef4ff,#f6ebff)] p-5 dark:border-violet-500/10 dark:bg-[linear-gradient(135deg,#0f172a,#101827,#190f2b)]">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex gap-2">
                      {[ '#ff6b6b', '#fbbf24', '#34d399' ].map((dot) => (
                        <span key={dot} className="h-3 w-3 rounded-full" style={{ background: dot }} />
                      ))}
                    </div>
                    <div className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-violet-700 dark:bg-violet-900/30 dark:text-violet-200">
                      live render
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-[24px] bg-white/65 p-4 shadow-sm dark:bg-slate-950/40">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">3D scene</div>
                        <div className="flex items-center gap-1 text-violet-600 dark:text-violet-300">
                          <Layers3 size={16} />
                          <span className="text-xs">render</span>
                        </div>
                      </div>

                      <div className="relative h-60 overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.35),_rgba(15,23,42,0.9)_60%,_rgba(7,9,15,1)_100%)]">
                        <div className="absolute left-7 top-7 h-20 w-20 rounded-full bg-violet-400/40 blur-3xl" />
                        <div className="absolute right-8 bottom-8 h-24 w-24 rounded-full bg-indigo-400/35 blur-3xl" />
                        <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[30%] border border-violet-200/50 bg-white/5 shadow-[0_0_60px_rgba(168,85,247,0.35)]" />
                        <div className="absolute left-1/2 top-1/2 h-6 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/30" />
                        <div className="absolute left-1/2 top-1/2 h-28 w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-violet-500/40" />
                        <div className="absolute left-1/2 top-1/2 h-28 w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-violet-500/40" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-slate-200">
                          <span>brand</span>
                          <span>site</span>
                          <span>app</span>
                          <span>3D</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-[22px] bg-white/70 p-4 shadow-sm dark:bg-slate-950/40">
                        <div className="mb-3 inline-flex rounded-full bg-violet-100 p-2 text-violet-700 dark:bg-violet-900/40 dark:text-violet-200">
                          <Cpu size={18} />
                        </div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-100">Разработка</div>
                        <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">UI / логика / интеграции</div>
                      </div>

                      <div className="rounded-[22px] bg-white/70 p-4 shadow-sm dark:bg-slate-950/40">
                        <div className="mb-3 inline-flex rounded-full bg-violet-100 p-2 text-violet-700 dark:bg-violet-900/40 dark:text-violet-200">
                          <Sparkles size={18} />
                        </div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-100">Анимации</div>
                        <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">3D / motion / premium UX</div>
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
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-violet-700 dark:border-violet-500/20 dark:bg-slate-900/70 dark:text-violet-200">
              <Zap size={12} /> услуги
            </div>
            <h2 className="mt-6 text-3xl font-black sm:text-4xl">Что мы делаем для бизнеса</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group rounded-[28px] border border-violet-100 bg-white/80 p-6 shadow-[0_16px_40px_rgba(123,92,255,0.08)] dark:border-violet-500/10 dark:bg-slate-900/80"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-br from-violet-100 to-purple-50 p-3 text-violet-700 shadow-sm dark:from-violet-900/30 dark:to-slate-900/70 dark:text-violet-200">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{text}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 dark:text-violet-300">
                  Узнать больше <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="проекты" className="bg-white/50 py-20 dark:bg-[#0d1020]/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-violet-700 dark:border-violet-500/20 dark:bg-slate-900/70 dark:text-violet-200">
                  <Briefcase size={12} /> проекты
                </div>
                <h2 className="mt-6 text-3xl font-black sm:text-4xl">Примеры задач, которые решаем</h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {projects.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[28px] border border-violet-100 bg-white/80 p-5 shadow-[0_16px_40px_rgba(123,92,255,0.08)] dark:border-violet-500/10 dark:bg-slate-900/80"
                >
                  <div className="mb-5 h-40 rounded-[22px] bg-[linear-gradient(135deg,#f4ebff,#e1ebff,#f9efff)] p-4 dark:bg-[linear-gradient(135deg,#191a2f,#2b335c,#1d122d)]">
                    <div className="flex h-full items-end justify-between">
                      <div className="h-16 w-16 rounded-2xl bg-white/60 shadow-inner dark:bg-slate-900/30" />
                      <div className="h-20 w-20 rounded-full border border-violet-300/50 bg-violet-200/40 dark:border-violet-500/30 dark:bg-violet-900/20" />
                    </div>
                  </div>
                  <div className="mb-3 inline-flex rounded-full bg-violet-100 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-violet-700 dark:bg-violet-900/30 dark:text-violet-200">
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
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-violet-700 dark:border-violet-500/20 dark:bg-slate-900/70 dark:text-violet-200">
              <Rocket size={12} /> процесс
            </div>
            <h2 className="mt-6 text-3xl font-black sm:text-4xl">Как строится работа</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {process.map((item, index) => (
              <div key={item} className="rounded-[28px] border border-violet-100 bg-white/80 p-6 shadow-[0_16px_40px_rgba(123,92,255,0.08)] dark:border-violet-500/10 dark:bg-slate-900/80">
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-sm font-black text-white">{index + 1}</span>
                  <Check size={18} className="text-violet-500" />
                </div>
                <p className="text-base font-medium leading-7 text-slate-700 dark:text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="цены" className="bg-white/50 py-20 dark:bg-[#0d1020]/70">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-violet-700 dark:border-violet-500/20 dark:bg-slate-900/70 dark:text-violet-200">
                <ShieldCheck size={12} /> цены
              </div>
              <h2 className="mt-6 text-3xl font-black sm:text-4xl">Гибкие тарифы под разные задачи</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {pricing.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-[30px] border p-7 shadow-[0_20px_50px_rgba(123,92,255,0.08)] ${
                    plan.highlight
                      ? 'border-violet-500 bg-gradient-to-b from-violet-600 to-violet-700 text-white shadow-violet-500/25'
                      : 'border-violet-100 bg-white/80 dark:border-violet-500/10 dark:bg-slate-900/80'
                  }`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className={`text-sm uppercase tracking-[0.2em] ${plan.highlight ? 'text-violet-100' : 'text-violet-600 dark:text-violet-300'}`}>
                      {plan.name}
                    </div>
                    {plan.highlight && <div className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em]">popular</div>}
                  </div>

                  <div className={`mb-5 text-sm leading-7 ${plan.highlight ? 'text-violet-50/90' : 'text-slate-600 dark:text-slate-300'}`}>
                    {plan.description}
                  </div>

                  <div className={`mb-6 h-px w-full ${plan.highlight ? 'bg-white/15' : 'bg-violet-100 dark:bg-violet-500/10'}`} />

                  <div className="space-y-3">
                    {plan.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full ${plan.highlight ? 'bg-white/15' : 'bg-violet-100 dark:bg-violet-900/30'}`}>
                          <Check size={12} className={plan.highlight ? 'text-white' : 'text-violet-700 dark:text-violet-200'} />
                        </div>
                        <span className={`text-sm leading-6 ${plan.highlight ? 'text-white' : 'text-slate-700 dark:text-slate-200'}`}>{item}</span>
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
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-violet-700 dark:border-violet-500/20 dark:bg-slate-900/70 dark:text-violet-200">
              <Star size={12} /> команда
            </div>
            <h2 className="mt-6 text-3xl font-black sm:text-4xl">Люди, которые создают продукт с нуля</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
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
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-violet-100">
                  <MessageSquare size={12} /> отзывы
                </div>
                <h2 className="text-3xl font-black text-white sm:text-4xl">Сильный дизайн и логика под реальные задачи</h2>
              </div>
              <div className="space-y-4">
                {[
                  'Сделали современную презентацию с ощущением премиальности и сильной структуры.',
                  'Команда понимает не только дизайн, но и бизнес-цель сайта.',
                  'Результат выглядит дорого, работает быстро и понятно для клиента.',
                ].map((quote) => (
                  <div key={quote} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-violet-50/90">
                    “{quote}”
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="контакты" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[32px] border border-violet-100 bg-white/80 p-8 shadow-[0_20px_50px_rgba(123,92,255,0.08)] dark:border-violet-500/10 dark:bg-slate-900/80 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-violet-700 dark:border-violet-500/20 dark:bg-violet-950/20 dark:text-violet-200">
                <Mail size={12} /> контакты
              </div>
              <h2 className="mt-6 text-3xl font-black sm:text-4xl">Напишите нам — обсудим задачу и подход</h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-slate-600 dark:text-slate-300">
                Если нужен сайт, landing, digital-продукт, аудит UX, редизайн или 3D-элементы — с удовольствием поможем сформировать решение.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-200">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">phone</div>
                    <div className="text-base font-semibold">+7 (999) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-200">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">email</div>
                    <div className="text-base font-semibold">hello@dev3d.studio</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-6 dark:border-violet-500/10 dark:from-slate-900 dark:to-[#101827]">
              <div className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Напишите нам</div>
              <div className="space-y-4">
                <input className="w-full rounded-2xl border border-violet-100 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-violet-400 dark:border-violet-500/20 dark:bg-slate-950 dark:text-white" placeholder="Ваше имя" />
                <input className="w-full rounded-2xl border border-violet-100 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-violet-400 dark:border-violet-500/20 dark:bg-slate-950 dark:text-white" placeholder="Email" />
                <textarea rows={5} className="w-full rounded-2xl border border-violet-100 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-violet-400 dark:border-violet-500/20 dark:bg-slate-950 dark:text-white" placeholder="Расскажите о задаче" />
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-700">
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
            <a href="https://instagram.com" aria-label="Instagram" className="transition hover:text-violet-600 dark:hover:text-violet-300"><Instagram size={18} /></a>
            <a href="https://dribbble.com" aria-label="Dribbble" className="transition hover:text-violet-600 dark:hover:text-violet-300"><Dribbble size={18} /></a>
            <a href="https://github.com" aria-label="GitHub" className="transition hover:text-violet-600 dark:hover:text-violet-300"><Github size={18} /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="transition hover:text-violet-600 dark:hover:text-violet-300"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
