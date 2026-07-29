// ============================================================
// Данные Урока №2 — тема "AI-инструменты в маркетинге"
// Это единственный файл, который меняется от урока к уроку.
// Движок (engine.html) остаётся одним и тем же.
// ============================================================
const LESSON = {
  id: "lesson-02",
  dateLabel: "29 июля 2026",
  topic: "AI-инструменты в маркетинге: чат-боты, сегментация и метрики",

  // Слово + перевод — раздел 1
  targetWords: [
    { word: "chatbot", translation: "чат-бот" },
    { word: "curate", translation: "отбирать и систематизировать (контент)" },
    { word: "segment", translation: "сегментировать (аудиторию)" },
    { word: "benchmark", translation: "эталон, контрольный показатель" },
    { word: "attribution", translation: "атрибуция (источник конверсии)" },
    { word: "churn", translation: "отток клиентов" },
    { word: "engagement", translation: "вовлечённость аудитории" },
    { word: "synthesize", translation: "обобщать, синтезировать данные" },
    { word: "streamline", translation: "оптимизировать, упростить процесс" },
    { word: "amplify", translation: "усиливать, расширять охват" },
    { word: "nuance", translation: "нюанс, тонкость" },
    { word: "versatile", translation: "универсальный, многофункциональный" }
  ],

  // Слово + значение НА АНГЛИЙСКОМ — раздел 2 (упражнение на сопоставление)
  matching: [
    { word: "chatbot", meaning: "a program that simulates conversation with users, often for support or sales" },
    { word: "curate", meaning: "to select and organize content thoughtfully rather than publishing everything" },
    { word: "segment", meaning: "to divide an audience into smaller groups based on shared characteristics" },
    { word: "benchmark", meaning: "a reference point used to judge whether performance is good or bad" },
    { word: "attribution", meaning: "identifying which touchpoint deserves credit for a conversion" },
    { word: "churn", meaning: "the rate at which customers stop using a product or service" },
    { word: "engagement", meaning: "the level of interaction people have with content, such as comments or time spent" },
    { word: "synthesize", meaning: "to combine information from multiple sources into one clear conclusion" },
    { word: "streamline", meaning: "to simplify a process by removing unnecessary steps" },
    { word: "amplify", meaning: "to increase the reach or volume of a message" },
    { word: "nuance", meaning: "a subtle difference in meaning, tone, or detail that is easy to miss" },
    { word: "versatile", meaning: "capable of being used effectively in many different situations" }
  ],

  // Текст — раздел 3. Таргет-слова подсветятся автоматически.
  readingText: [
    "Once a marketing team moves past the novelty of generative AI, a harder question emerges: which of these tools are actually versatile enough to fit into more than one part of the funnel, and which ones only solve a single narrow problem?",
    "A chatbot, for instance, used to be judged purely on how quickly it resolved support tickets, but marketers increasingly measure it by engagement instead — how naturally a conversation flows, and whether people come back to it rather than abandoning the chat halfway through.",
    "Content teams have also started using AI to curate what already exists rather than only generating something new; an algorithm can scan hundreds of assets, segment them by audience and performance, and surface the handful worth repurposing this quarter.",
    "None of this matters, though, without a reliable benchmark. If a team can't agree on what \"good\" looks like, or if its attribution model can't tell it which channel actually drove a sale, even the most sophisticated AI output becomes noise.",
    "Retention teams face a related challenge: predicting churn early enough to act on it. AI models can synthesize signals scattered across support tickets, usage logs, and billing history, then streamline what used to be a manual, week-long investigation into a same-day alert.",
    "The risk is that automation can amplify a message before anyone catches the nuance it's missing — a joke that lands wrong in translation, or a tone that feels robotic to a loyal customer. The teams getting this right treat AI as a first draft, not a final answer."
  ],

  // RU -> EN — раздел 4. Проверка идёт на точное совпадение (без учёта регистра и пунктуации).
  translationSentences: [
    { ru: "Наш чат-бот может обработать сотни запросов одновременно.", en: "Our chatbot can handle hundreds of requests at the same time." },
    { ru: "Редактор отбирает и систематизирует контент перед публикацией.", en: "The editor curates the content before it gets published." },
    { ru: "Мы сегментировали клиентов по частоте покупок.", en: "We segmented customers by purchase frequency." },
    { ru: "Прежде чем менять стратегию, установите чёткий эталон для сравнения.", en: "Before changing the strategy, set a clear benchmark for comparison." },
    { ru: "Без точной атрибуции сложно понять, какой канал сработал.", en: "Without accurate attribution, it's hard to know which channel worked." },
    { ru: "Отток клиентов вырос в этом квартале.", en: "Churn increased this quarter." },
    { ru: "Вовлечённость аудитории упала после смены формата.", en: "Audience engagement dropped after the format changed." },
    { ru: "Модель обобщает данные из разных источников за секунды.", en: "The model synthesizes data from different sources in seconds." },
    { ru: "Эта система упростила процесс согласования контента.", en: "This system streamlined the content approval process." },
    { ru: "Реклама усилила охват органического поста.", en: "The ad amplified the reach of the organic post." },
    { ru: "Переводчик упустил важный нюанс в оригинальном тексте.", en: "The translator missed an important nuance in the original text." },
    { ru: "Этот инструмент достаточно универсален для нескольких отделов.", en: "This tool is versatile enough for several departments." }
  ]
};
