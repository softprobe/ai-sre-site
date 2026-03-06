/**
 * Softprobe i18n translations
 * 
 * HOW TO EDIT:
 * - Each key under `en` is the English source string.
 * - Provide the matching translation under `zh` (Chinese Simplified).
 * - Do NOT rename the keys — they are referenced in the HTML via data-i18n="<key>".
 * - After editing, save the file and rebuild the site.
 *
 * 如何编辑:
 * - `en` 下每个键对应英文原文。
 * - 在 `zh`（简体中文）下提供对应翻译。
 * - 请勿重命名键名，它们通过 data-i18n="<key>" 在 HTML 中引用。
 * - 编辑完成后保存文件并重新构建站点。
 */

export type Locale = 'en' | 'zh';

export const translations: Record<Locale, Record<string, string>> = {
    en: {
        // ── Navigation ──────────────────────────────────────────────────────────
        'nav.howItWorks': 'How it Works',
        'nav.contact': 'Contact',
        'nav.bookDemo': 'Book a Demo',

        // ── Footer ───────────────────────────────────────────────────────────────
        'footer.tagline': 'Deploy with Absolute Confidence.',
        'footer.product': 'Product',
        'footer.resources': 'Resources',
        'footer.company': 'Company',
        'footer.howItWorks': 'How it Works',
        'footer.integrations': 'Integrations',
        'footer.blog': 'Blog',
        'footer.contact': 'Contact',
        'footer.rights': 'All rights reserved.',

        // ── Homepage – Hero ──────────────────────────────────────────────────────
        'home.hero.title1': 'AI Writes Code.',
        'home.hero.title2': 'Softprobe Validates It.',
        'home.hero.lead': 'AI made development 10× faster. It made breaking things 10× faster too. Softprobe is the AI-powered shadow testing layer that catches bugs before they\'re ever deployed.',
        'home.hero.howItWorks': 'How it works',
        'home.hero.benefit1': 'Never write a regression test again.',
        'home.hero.benefit2': 'Generate millions of tests instantly.',
        'home.hero.benefit3': '100% coverage of real user behavior.',

        // ── Homepage – Problem Section ───────────────────────────────────────────
        'home.problem.badge': 'The Problem',
        'home.problem.title': 'The AI Coding Explosion',
        'home.problem.lead': 'Every release now carries more hidden risk.',
        'home.problem.highlight': 'With AI, every commit changes more surface area.',
        'home.problem.item1.title': 'Entire endpoints',
        'home.problem.item1.desc': 'Shipped in single commits with huge surface area.',
        'home.problem.item2.title': 'Massive refactors',
        'home.problem.item2.desc': 'Global changes that manual tests miss.',
        'home.problem.item3.title': 'Production-ready features',
        'home.problem.item3.desc': 'Released at a velocity QA teams can\'t match.',
        'home.problem.punch': 'AI can ship bugs faster than humans can test for them.',

        // ── Homepage – Solution Section ──────────────────────────────────────────
        'home.solution.badge': 'The Solution',
        'home.solution.title': 'AI-Powered Large Scale Regression Testing',
        'home.solution.lead': 'Softprobe learns from live production traffic end to end—including all dependencies and exact environment states—and creates millions of test cases.',
        'home.solution.punch': 'Every production request becomes a test. Instantly.',
        'home.solution.table.capability': 'Capability',
        'home.solution.table.standard': 'Standard Testing',
        'home.solution.table.softprobe': 'SOFTPROBE AI',
        'home.solution.table.row1.label': 'Test Code',
        'home.solution.table.row1.standard': 'Manual + AI generated',
        'home.solution.table.row1.sp': 'No Code',
        'home.solution.table.row2.label': 'Data Source',
        'home.solution.table.row2.standard': 'Manually Created Test Samples',
        'home.solution.table.row2.sp': 'Real World Use Cases (100% Coverage)',
        'home.solution.table.row3.label': 'Dependencies',
        'home.solution.table.row3.standard': 'Manual Mocks',
        'home.solution.table.row3.sp': 'Captured From Real Traffic & Injected',
        'home.solution.table.row4.label': 'Environment',
        'home.solution.table.row4.standard': 'Test Environment',
        'home.solution.table.row4.sp': 'Test Env that 100% Mirrors Production',
        'home.solution.table.row5.label': 'Flaky Tests',
        'home.solution.table.row5.standard': 'Difficult to Reproduce',
        'home.solution.table.row5.sp': '100% Reproducible',
        'home.solution.table.row6.label': 'Canary Testing',
        'home.solution.table.row6.standard': 'Impacts Real Users. Slows Releases.',
        'home.solution.table.row6.sp': 'Zero User impact. Faster Releases.',

        // ── Homepage – CTA ───────────────────────────────────────────────────────
        'home.cta.title1': 'Write code at AI speed.',
        'home.cta.title2': 'Deploy with absolute confidence.',
        'home.cta.talkExpert': 'Talk to an expert',

        // ── How It Works page ────────────────────────────────────────────────────
        'hiw.title': 'How It Works',
        'hiw.lead': 'Testing architecture for the AI era that perfectly replicates production, guarantees full test coverage, manages dependencies, and diagnoses flaky test results.',

        'hiw.step1.title': 'We Learn From Real Traffic',
        'hiw.step1.p1': 'Manually written tests can\'t cover all features. Synthetic test data can\'t cover all scenarios. Softprobe passively observes live production requests.',
        'hiw.step1.li1': 'API inputs and Auth context',
        'hiw.step1.li2': 'Downstream calls and DB queries',
        'hiw.step1.li3': 'External API responses',
        'hiw.step1.punch': 'Ensure 100% coverage of real user behavior.',

        'hiw.step2.title': 'We Capture the Full Execution State',
        'hiw.step2.p1': 'Flaky tests aren\'t flaky. They\'re missing context.',
        'hiw.step2.p2': 'We snapshot the entire runtime environment so every test case becomes deterministic and reproducible.',
        'hiw.step2.li1': 'Dependency responses and database result sets',
        'hiw.step2.li2': 'Feature flags and environment configuration',
        'hiw.step2.li3': 'Time-based inputs',
        'hiw.step2.li4': 'External API interactions',
        'hiw.step2.punch': 'All failures are reproducible.',

        'hiw.step3.title': 'We Generate Millions of Tests Automatically',
        'hiw.step3.p1': 'We don\'t generate test code. We generate executable replays from real traffic. No writing tests. No maintaining mocks. No brittle fixtures.',
        'hiw.step3.li1': 'Parameterized regression cases',
        'hiw.step3.li2': 'Injected dependencies',
        'hiw.step3.li3': 'Mirrored environment',
        'hiw.step3.punch': 'Every request becomes a permanent test. Instantly.',

        'hiw.step4.title': 'We Replay Against Your New Version',
        'hiw.step4.p1': 'When you ship new code, we compare the output of the Old version vs. the New version. If behavior changes unexpectedly, we catch it before users see it.',
        'hiw.step4.li1': 'JSON Responses and Structure',
        'hiw.step4.li2': 'Side effects (DB writes, events)',
        'hiw.step4.li3': 'Schema changes',
        'hiw.step4.punch': 'Zero production risk. Faster releases.',

        'hiw.step5.title': 'See the Exact Cause of Test Failures',
        'hiw.step5.p1': 'Our session graph architecture retraces errors & behavior changes to the exact point of failure.',
        'hiw.step5.li1': 'Visualize preserved states and execution paths',
        'hiw.step5.li2': 'Replay full API requests and response bodies',
        'hiw.step5.li3': 'Trace the regression to the exact breaking change',
        'hiw.step5.punch': 'Every failure is traceable to its exact cause.',

        'hiw.cta.title': 'Deploy with absolute confidence',
        'hiw.cta.talkExpert': 'Talk to an expert',

        // ── Contact page ─────────────────────────────────────────────────────────
        'contact.title1': 'Deploy with',
        'contact.title2': 'Absolute Confidence',
        'contact.lead': 'Schedule a demo and tell us about your specific environment.',
        'contact.email.title': 'Email Us',
        'contact.email.desc': 'Drop us a line anytime',
        'contact.demo.title': 'Book a Demo',
        'contact.demo.desc': 'Schedule a time that works for you',
        'contact.demo.cta': 'Select a Date →',
    },

    zh: {
        // ── Navigation ──────────────────────────────────────────────────────────
        'nav.howItWorks': '工作原理',
        'nav.contact': '联系我们',
        'nav.bookDemo': '预约演示',

        // ── Footer ───────────────────────────────────────────────────────────────
        'footer.tagline': '以绝对的信心部署。',
        'footer.product': '产品',
        'footer.resources': '资源',
        'footer.company': '公司',
        'footer.howItWorks': '工作原理',
        'footer.integrations': '集成',
        'footer.blog': '博客',
        'footer.contact': '联系我们',
        'footer.rights': '版权所有。',

        // ── Homepage – Hero ──────────────────────────────────────────────────────
        'home.hero.title1': 'AI 编写代码。',
        'home.hero.title2': 'Softprobe 验证它。',
        'home.hero.lead': 'AI 让开发速度提升了10倍，但引入缺陷的速度也同样快了10倍。Softprobe 是 AI 驱动的影子测试层，在代码部署之前捕获所有缺陷。',
        'home.hero.howItWorks': '了解工作原理',
        'home.hero.benefit1': '永远不需要再手写回归测试。',
        'home.hero.benefit2': '即时生成数百万个测试。',
        'home.hero.benefit3': '100% 覆盖真实用户行为。',

        // ── Homepage – Problem Section ───────────────────────────────────────────
        'home.problem.badge': '问题所在',
        'home.problem.title': 'AI 编码爆炸式增长',
        'home.problem.lead': '每次发布都潜藏着更多隐性风险。',
        'home.problem.highlight': '有了 AI，每次提交都会改变更大的代码面。',
        'home.problem.item1.title': '整个接口',
        'home.problem.item1.desc': '单次提交即可发布，影响面巨大。',
        'home.problem.item2.title': '大规模重构',
        'home.problem.item2.desc': '全局变更让手工测试无从覆盖。',
        'home.problem.item3.title': '生产级功能',
        'home.problem.item3.desc': '发布速度远超 QA 团队的测试能力。',
        'home.problem.punch': 'AI 引入缺陷的速度，远比人工测试发现缺陷的速度更快。',

        // ── Homepage – Solution Section ──────────────────────────────────────────
        'home.solution.badge': '解决方案',
        'home.solution.title': 'AI 驱动的大规模回归测试',
        'home.solution.lead': 'Softprobe 从实时生产流量中端到端学习——包括所有依赖项和精确的环境状态——并自动生成数百万个测试用例。',
        'home.solution.punch': '每一个生产请求都即时成为测试用例。',
        'home.solution.table.capability': '能力',
        'home.solution.table.standard': '传统测试',
        'home.solution.table.softprobe': 'SOFTPROBE AI',
        'home.solution.table.row1.label': '测试代码',
        'home.solution.table.row1.standard': '手动 + AI 生成',
        'home.solution.table.row1.sp': '无需编写代码',
        'home.solution.table.row2.label': '数据来源',
        'home.solution.table.row2.standard': '手动创建的测试样本',
        'home.solution.table.row2.sp': '真实世界用例（100% 覆盖）',
        'home.solution.table.row3.label': '依赖项',
        'home.solution.table.row3.standard': '手动 Mock',
        'home.solution.table.row3.sp': '从真实流量中捕获并注入',
        'home.solution.table.row4.label': '运行环境',
        'home.solution.table.row4.standard': '测试环境',
        'home.solution.table.row4.sp': '100% 镜像生产的测试环境',
        'home.solution.table.row5.label': '不稳定测试',
        'home.solution.table.row5.standard': '难以复现',
        'home.solution.table.row5.sp': '100% 可复现',
        'home.solution.table.row6.label': '金丝雀测试',
        'home.solution.table.row6.standard': '影响真实用户，拖慢发布。',
        'home.solution.table.row6.sp': '零用户影响，加速发布。',

        // ── Homepage – CTA ───────────────────────────────────────────────────────
        'home.cta.title1': '以 AI 的速度编写代码。',
        'home.cta.title2': '以绝对的信心部署。',
        'home.cta.talkExpert': '联系专家',

        // ── How It Works page ────────────────────────────────────────────────────
        'hiw.title': '工作原理',
        'hiw.lead': '专为 AI 时代打造的测试架构，完美复现生产环境、保障全面测试覆盖、管理依赖项，并诊断不稳定测试结果。',

        'hiw.step1.title': '我们从真实流量中学习',
        'hiw.step1.p1': '手工编写的测试无法覆盖所有功能，合成测试数据无法涵盖所有场景。Softprobe 被动观察生产环境中的真实请求。',
        'hiw.step1.li1': 'API 输入和认证上下文',
        'hiw.step1.li2': '下游调用和数据库查询',
        'hiw.step1.li3': '外部 API 响应',
        'hiw.step1.punch': '确保对真实用户行为的 100% 覆盖。',

        'hiw.step2.title': '我们捕获完整的执行状态',
        'hiw.step2.p1': '不稳定的测试并非真的不稳定，而是缺少上下文。',
        'hiw.step2.p2': '我们对整个运行时环境进行快照，使每个测试用例都具有确定性和可复现性。',
        'hiw.step2.li1': '依赖响应和数据库结果集',
        'hiw.step2.li2': '功能开关和环境配置',
        'hiw.step2.li3': '基于时间的输入',
        'hiw.step2.li4': '外部 API 交互',
        'hiw.step2.punch': '所有失败均可复现。',

        'hiw.step3.title': '我们自动生成数百万个测试',
        'hiw.step3.p1': '我们不生成测试代码，而是从真实流量中生成可执行的回放。无需编写测试，无需维护 Mock，无需脆弱的 Fixtures。',
        'hiw.step3.li1': '参数化回归用例',
        'hiw.step3.li2': '注入式依赖项',
        'hiw.step3.li3': '镜像环境',
        'hiw.step3.punch': '每一个请求即时成为永久测试用例。',

        'hiw.step4.title': '我们对新版本进行回放验证',
        'hiw.step4.p1': '当您发布新代码时，我们会对比旧版本与新版本的输出结果。如果行为发生意外变化，我们会在用户察觉之前捕获它。',
        'hiw.step4.li1': 'JSON 响应与结构',
        'hiw.step4.li2': '副作用（数据库写入、事件）',
        'hiw.step4.li3': 'Schema 变更',
        'hiw.step4.punch': '零生产风险，加速发布。',

        'hiw.step5.title': '精准定位测试失败的根本原因',
        'hiw.step5.p1': '我们的会话图架构将错误和行为变化追溯至精确的失败节点。',
        'hiw.step5.li1': '可视化保留状态和执行路径',
        'hiw.step5.li2': '回放完整的 API 请求和响应体',
        'hiw.step5.li3': '将回归追溯至确切的破坏性变更',
        'hiw.step5.punch': '每一次失败都可追溯至其根本原因。',

        'hiw.cta.title': '以绝对的信心部署',
        'hiw.cta.talkExpert': '联系专家',

        // ── Contact page ─────────────────────────────────────────────────────────
        'contact.title1': '以',
        'contact.title2': '绝对的信心',
        'contact.lead': '预约演示，告诉我们您的具体环境需求。',
        'contact.email.title': '发送邮件',
        'contact.email.desc': '随时联系我们',
        'contact.demo.title': '预约演示',
        'contact.demo.desc': '选择适合您的时间',
        'contact.demo.cta': '选择日期 →',
    },
};

export const defaultLocale: Locale = 'en';
export const supportedLocales: Locale[] = ['en', 'zh'];
