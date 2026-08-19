// ============================================================
// Данные Урока №5 — тема "AI-инструменты в маркетинге"
// Это единственный файл, который меняется от урока к уроку.
// Движок (engine.html) остаётся одним и тем же.
// ============================================================
const LESSON = {
  id: "lesson-05",
  dateLabel: "19 августа 2026",
  topic: "AI-инструменты в маркетинге: контент, SEO и оптимизация",

  // Слово + перевод — раздел 1
  targetWords: [
    { word: "refine", translation: "дорабатывать, уточнять" },
    { word: "keyword", translation: "ключевое слово" },
    { word: "algorithm", translation: "алгоритм" },
    { word: "optimize", translation: "оптимизировать" },
    { word: "plagiarism", translation: "плагиат" },
    { word: "originality", translation: "оригинальность, уникальность" },
    { word: "repurpose", translation: "переиспользовать (контент в другом формате)" },
    { word: "template", translation: "шаблон" },
    { word: "caption", translation: "подпись (к посту, изображению)" },
    { word: "discoverability", translation: "обнаруживаемость (в поиске)" },
    { word: "consistency", translation: "последовательность, единообразие" },
    { word: "accuracy", translation: "точность" }
  ],

  // Слово + значение НА АНГЛИЙСКОМ — раздел 2 (упражнение на сопоставление)
  matching: [
    { word: "refine", meaning: "to make small improvements to something so it works or reads better" },
    { word: "keyword", meaning: "a specific word or phrase people type into a search engine" },
    { word: "algorithm", meaning: "a set of rules a computer follows to solve a problem or complete a task" },
    { word: "optimize", meaning: "to make something as effective or efficient as possible" },
    { word: "plagiarism", meaning: "presenting someone else's work or words as your own" },
    { word: "originality", meaning: "the quality of being new and not copied from something else" },
    { word: "repurpose", meaning: "to adapt existing content so it works in a new format or channel" },
    { word: "template", meaning: "a pre-built structure you fill in rather than starting from scratch" },
    { word: "caption", meaning: "a short piece of text that accompanies an image or video" },
    { word: "discoverability", meaning: "how easily people can find your content through search or recommendations" },
    { word: "consistency", meaning: "staying the same in style, tone, or quality across everything you publish" },
    { word: "accuracy", meaning: "how closely something matches the true or correct information" }
  ],

  // Текст — раздел 3. Таргет-слова подсветятся автоматически.
  readingText: [
    "Once a team has generated its first batch of AI content, the real work only begins: someone still has to refine every draft before it's fit to publish, checking that the tone matches the brand and that no sentence sounds like it came from a machine.",
    "Search visibility hasn't changed just because a tool is faster. An article still needs the right keyword woven naturally through the text, and the underlying algorithm that ranks pages online cares as much about relevance as it does about speed of publishing.",
    "That's why more teams now use AI specifically to optimize existing pages rather than only to write new ones — feeding an older post back through a tool that suggests where structure or phrasing is holding back its performance.",
    "Editors also have to stay alert to plagiarism: a generative model trained on public text can occasionally echo a sentence too closely, and no brand wants to publish something a reader recognizes from somewhere else. Protecting originality means running every draft through a checker before it goes live.",
    "The upside is how easily one piece of work can now repurpose into several formats: a single blog post becomes a template for a newsletter, a short video, and a handful of social captions, all without starting over each time.",
    "None of this matters if discoverability doesn't improve, so teams track it directly — impressions, click-through rate, and time on page. And none of it matters if the numbers themselves are wrong: consistency in formatting and accuracy in reporting are what let a team trust the dashboard enough to act on it."
  ],

  // RU -> EN — раздел 4. Проверка идёт на точное совпадение (без учёта регистра и пунктуации).
  translationSentences: [
    { ru: "Дорабатывай текст, пока тон не будет соответствовать бренду.", en: "Refine the text until the tone matches the brand." },
    { ru: "Впиши это ключевое слово в первый абзац.", en: "Add this keyword to the first paragraph." },
    { ru: "Алгоритм оценивает релевантность, а не только скорость публикации.", en: "The algorithm evaluates relevance, not just publishing speed." },
    { ru: "Нам нужно оптимизировать эту страницу под поиск.", en: "We need to optimize this page for search." },
    { ru: "Проверь текст на плагиат перед публикацией.", en: "Check the text for plagiarism before publishing." },
    { ru: "Оригинальность контента важна для читателей.", en: "Originality matters to readers." },
    { ru: "Мы можем переиспользовать этот пост в другом формате.", en: "We can repurpose this post in a different format." },
    { ru: "Используй этот шаблон для email-рассылки.", en: "Use this template for the email newsletter." },
    { ru: "Напиши подпись к этому изображению.", en: "Write a caption for this image." },
    { ru: "Обнаруживаемость этой статьи выросла после обновления.", en: "The discoverability of this article improved after the update." },
    { ru: "Последовательность в оформлении укрепляет доверие к бренду.", en: "Consistency in formatting builds trust in the brand." },
    { ru: "Точность отчёта важнее скорости.", en: "Accuracy in the report matters more than speed." }
  ]
};
