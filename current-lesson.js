// ============================================================
// Данные Урока №3 — тема "AI-инструменты в маркетинге"
// Это единственный файл, который меняется от урока к уроку.
// Движок (engine.html) остаётся одним и тем же.
// ============================================================
const LESSON = {
  id: "lesson-03",
  dateLabel: "5 августа 2026",
  topic: "AI-инструменты в маркетинге: прогнозирование, воронки и интеграция систем",

  // Слово + перевод — раздел 1
  targetWords: [
    { word: "forecast", translation: "прогнозировать / прогноз" },
    { word: "sentiment", translation: "тональность (эмоциональная окраска текста)" },
    { word: "cohort", translation: "когорта (группа пользователей с общим признаком)" },
    { word: "friction", translation: "трение, препятствие в пользовательском опыте" },
    { word: "funnel", translation: "воронка продаж" },
    { word: "deploy", translation: "внедрять, запускать в работу (модель, инструмент)" },
    { word: "integrate", translation: "интегрировать, встраивать в существующую систему" },
    { word: "dashboard", translation: "аналитическая панель, дашборд" },
    { word: "granular", translation: "детализированный, гранулярный" },
    { word: "proprietary", translation: "собственный, запатентованный (об алгоритме)" },
    { word: "augment", translation: "дополнять, расширять возможности" },
    { word: "inference", translation: "инференс (этап, когда модель выдаёт предсказание)" }
  ],

  // Слово + значение НА АНГЛИЙСКОМ — раздел 2 (упражнение на сопоставление)
  matching: [
    { word: "forecast", meaning: "to estimate what will happen in the future based on current and past data" },
    { word: "sentiment", meaning: "the overall emotional tone expressed in a piece of text, such as positive or negative" },
    { word: "cohort", meaning: "a group of users who share a common starting point, tracked together over time" },
    { word: "friction", meaning: "anything that makes a process harder or slower than it needs to be for the user" },
    { word: "funnel", meaning: "the sequence of stages a potential customer moves through before making a purchase" },
    { word: "deploy", meaning: "to put a model or tool into active use in a live environment" },
    { word: "integrate", meaning: "to connect a new tool with existing systems so they work together smoothly" },
    { word: "dashboard", meaning: "a visual screen that displays key metrics and data at a glance" },
    { word: "granular", meaning: "broken down into fine, specific detail rather than shown as a broad summary" },
    { word: "proprietary", meaning: "owned exclusively by a company and not shared publicly or with competitors" },
    { word: "augment", meaning: "to add capability to something that already exists, making it more powerful" },
    { word: "inference", meaning: "the step where a trained model applies what it learned to produce a prediction" }
  ],

  // Текст — раздел 3. Таргет-слова подсветятся автоматически.
  readingText: [
    "Marketing teams that used to wait until the end of a quarter to find out whether a campaign had worked are now expected to forecast performance within days, if not hours, of a launch, and any team unable to do so risks losing budget to a department that can.",
    "Much of that shift has been driven by how easily sentiment can now be extracted from thousands of reviews, support tickets, and social comments at once — not merely whether a post received praise or criticism, but the finer emotional register underneath it, the sarcasm a simple keyword search would have missed entirely.",
    "Rather than treating an entire customer base as one undifferentiated mass, analysts increasingly track a cohort — everyone who signed up during a particular week, say — as it moves through the funnel, which makes it far easier to spot exactly where friction is causing people to abandon the process rather than guessing at the cause after the fact.",
    "None of this insight is worth much, however, unless a team can actually deploy a model where the people who need it can see it; a brilliant prediction sitting in a data scientist's notebook helps no one, but the same output, once a marketer can integrate it into a dashboard they check every morning, can change a decision before it's too late.",
    "What makes this genuinely useful is being granular: a dashboard that reports only a single company-wide conversion rate is barely more helpful than no dashboard at all, while a granular breakdown by channel, region, and cohort lets a manager act on Tuesday's numbers rather than waiting for a monthly report to confirm what already went wrong.",
    "The tools themselves increasingly fall into two camps: proprietary systems built in-house, which a company can tune to its exact needs but must maintain itself, and third-party platforms that promise to augment existing workflows with far less setup, at the cost of depending on someone else's inference engine — the very system quietly generating every prediction a team relies on without ever fully seeing how it got there."
  ],

  // RU -> EN — раздел 4. Проверка идёт на точное совпадение (без учёта регистра и пунктуации).
  translationSentences: [
    { ru: "Команда научилась прогнозировать выручку ещё до окончания квартала.", en: "The team learned to forecast revenue before the end of the quarter." },
    { ru: "Анализ тональности показал рост негативных отзывов на этой неделе.", en: "Sentiment analysis showed an increase in negative reviews this week." },
    { ru: "Мы отслеживаем эту когорту пользователей с момента регистрации.", en: "We track this cohort of users from the moment they sign up." },
    { ru: "Слишком много трения на этом этапе заставляет клиентов уходить, не оформив заказ.", en: "Too much friction at this stage makes customers leave without completing the order." },
    { ru: "Только треть посетителей доходит до нижней части воронки продаж.", en: "Only a third of visitors reach the bottom of the sales funnel." },
    { ru: "Новую модель развернули в боевой среде на прошлой неделе.", en: "The new model was deployed to the live environment last week." },
    { ru: "Нам нужно интегрировать этот инструмент с существующей CRM-системой.", en: "We need to integrate this tool with the existing CRM system." },
    { ru: "Этот дашборд обновляется в реальном времени.", en: "This dashboard updates in real time." },
    { ru: "Отчёт должен быть более детализированным, чтобы увидеть разницу по регионам.", en: "The report needs to be more granular to see the difference by region." },
    { ru: "Компания использует собственный запатентованный алгоритм для сегментации.", en: "The company uses a proprietary algorithm for segmentation." },
    { ru: "Эти данные должны дополнить, а не заменить экспертную оценку.", en: "This data should augment, not replace, expert judgment." },
    { ru: "Задержка на этапе инференса влияет на скорость ответа чат-бота.", en: "Latency during inference affects how fast the chatbot responds." }
  ]
};
