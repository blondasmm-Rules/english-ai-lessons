// ============================================================
// Данные Урока №1 — тема "AI-инструменты в маркетинге"
// Это единственный файл, который меняется от урока к уроку.
// Движок (engine.html) остаётся одним и тем же.
// ============================================================
const LESSON = {
  id: "lesson-01",
  dateLabel: "29 июля 2026",
  topic: "AI-инструменты в маркетинге",

  // Слово + перевод — раздел 1
  targetWords: [
    { word: "generative", translation: "генеративный" },
    { word: "prompt", translation: "промпт / текстовый запрос к нейросети" },
    { word: "leverage", translation: "использовать в своих интересах" },
    { word: "automate", translation: "автоматизировать" },
    { word: "workflow", translation: "рабочий процесс" },
    { word: "personalization", translation: "персонализация" },
    { word: "scalable", translation: "масштабируемый" },
    { word: "fine-tune", translation: "дообучать, точно настраивать" },
    { word: "hallucination", translation: "галлюцинация (у нейросети)" },
    { word: "bias", translation: "предвзятость, смещение" },
    { word: "iterate", translation: "дорабатывать пошагово" },
    { word: "insights", translation: "инсайты, ценные выводы" }
  ],

  // Слово + значение НА АНГЛИЙСКОМ — раздел 2 (упражнение на сопоставление)
  matching: [
    { word: "generative", meaning: "able to create new content, not just analyze existing data" },
    { word: "prompt", meaning: "the instruction you give an AI model to get a response" },
    { word: "leverage", meaning: "to use something you already have to get an advantage" },
    { word: "automate", meaning: "to make a process run by itself, without manual effort" },
    { word: "workflow", meaning: "the sequence of steps you go through to complete a task" },
    { word: "personalization", meaning: "adjusting content to fit one specific person" },
    { word: "scalable", meaning: "able to grow without breaking down" },
    { word: "fine-tune", meaning: "to make small, precise adjustments to improve performance" },
    { word: "hallucination", meaning: "when an AI confidently states something false" },
    { word: "bias", meaning: "an unfair or uneven tendency in data or answers" },
    { word: "iterate", meaning: "to repeat a process, improving it a little each time" },
    { word: "insights", meaning: "useful understanding gained from data or feedback" }
  ],

  // Текст — раздел 3. Таргет-слова подсветятся автоматически.
  readingText: [
    "Every marketing team today talks about generative AI, but very few people agree on what it actually means for daily work.",
    "At its core, a generative model creates new content based on a prompt you give it. The quality of the output depends heavily on how clearly you write that prompt.",
    "Marketers are starting to leverage these tools to automate repetitive parts of their workflow: writing ad copy, summarizing customer feedback, or building first drafts of a content calendar. Because the models can adjust tone and length instantly, personalization at scale finally feels realistic.",
    "Still, nothing here works out of the box. Teams need to fine-tune their prompts constantly, checking outputs for hallucination — moments when the model states something confidently that simply isn't true. There's also the risk of bias, since a model trained on uneven data will reflect that imbalance.",
    "The smartest approach is to treat every project as something you iterate on: launch a small test, read the insights it produces, adjust, and try again. A scalable process, not a single perfect prompt, is what actually saves time."
  ],

  // RU -> EN — раздел 4. Проверка идёт на точное совпадение (без учёта регистра и пунктуации).
  translationSentences: [
    { ru: "Эта генеративная модель создаёт новый текст.", en: "This generative model creates new text." },
    { ru: "Напиши более чёткий промпт.", en: "Write a clearer prompt." },
    { ru: "Компания использует эти инструменты в своих интересах.", en: "The company leverages these tools." },
    { ru: "Мы хотим автоматизировать этот процесс.", en: "We want to automate this process." },
    { ru: "Опиши свой рабочий процесс.", en: "Describe your workflow." },
    { ru: "Персонализация повышает конверсию.", en: "Personalization increases conversion." },
    { ru: "Нам нужно масштабируемое решение.", en: "We need a scalable solution." },
    { ru: "Команда должна дообучить модель.", en: "The team needs to fine-tune the model." },
    { ru: "Проверяй ответы на галлюцинации.", en: "Check the answers for hallucination." },
    { ru: "В этих данных есть предвзятость.", en: "There is bias in this data." },
    { ru: "Мы будем дорабатывать этот план.", en: "We will iterate on this plan." },
    { ru: "Эти инсайты полезны для команды.", en: "These insights are useful for the team." }
  ]
};
