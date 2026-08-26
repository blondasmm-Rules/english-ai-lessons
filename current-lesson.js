// ============================================================
// Данные Урока №6 — тема "AI-инструменты в маркетинге"
// Это единственный файл, который меняется от урока к уроку.
// Движок (engine.html) остаётся одним и тем же.
// ============================================================
const LESSON = {
  id: "lesson-06",
  dateLabel: "26 августа 2026",
  topic: "AI-инструменты в маркетинге: платная реклама, A/B-тесты и прозрачность алгоритмов",

  // Слово + перевод — раздел 1
  targetWords: [
    { word: "bid", translation: "ставка (в аукционе за рекламный показ)" },
    { word: "retarget", translation: "ретаргетировать (показывать рекламу тем, кто уже был на сайте)" },
    { word: "variant", translation: "вариант (в A/B-тесте)" },
    { word: "significance", translation: "значимость (статистическая)" },
    { word: "incrementality", translation: "инкрементальность (реальный эффект от кампании)" },
    { word: "fatigue", translation: "усталость (от рекламы)" },
    { word: "allocate", translation: "распределять, выделять (бюджет)" },
    { word: "lookalike", translation: "похожая аудитория" },
    { word: "pacing", translation: "темп расходования бюджета" },
    { word: "anomaly", translation: "аномалия, отклонение" },
    { word: "threshold", translation: "порог (значение-триггер)" },
    { word: "transparency", translation: "прозрачность" }
  ],

  // Слово + значение НА АНГЛИЙСКОМ — раздел 2 (упражнение на сопоставление)
  matching: [
    { word: "bid", meaning: "an offer of a specific amount of money in a real-time auction for ad space" },
    { word: "retarget", meaning: "to show ads again to people who already visited your site or app" },
    { word: "variant", meaning: "one specific version being tested against others in an experiment" },
    { word: "significance", meaning: "the likelihood that a result is real and not simply due to chance" },
    { word: "incrementality", meaning: "the extra outcome a campaign genuinely caused, above what would have happened anyway" },
    { word: "fatigue", meaning: "the drop in effectiveness that happens when an audience sees the same ad too many times" },
    { word: "allocate", meaning: "to assign a portion of a budget or resource to a specific purpose" },
    { word: "lookalike", meaning: "a new audience built to resemble an existing group of customers" },
    { word: "pacing", meaning: "the rate at which a budget is spent over the course of a campaign" },
    { word: "anomaly", meaning: "something in the data that doesn't fit the usual pattern" },
    { word: "threshold", meaning: "a specific value that, once crossed, triggers an action or alert" },
    { word: "transparency", meaning: "being open and clear about how something works or is measured" }
  ],

  // Текст — раздел 3. Таргет-слова подсветятся автоматически.
  readingText: [
    "Every time a person opens a page that carries an ad slot, a system somewhere places a bid within milliseconds, weighing how much that particular viewer is worth against what a competitor might offer for the same impression.",
    "Once someone visits a product page without buying, most platforms will retarget them within days, showing the exact item they looked at. The same customer data can also build a lookalike audience — a fresh group of people the algorithm judges similar enough to the buyers a brand already has, even though none of them has ever visited the site.",
    "Testing which headline performs better used to mean guessing; now a team can run two variant ads side by side and let the platform split traffic automatically. The tricky part is knowing when to trust the result — a small lift in clicks can look promising for a week and then vanish, which is exactly why marketers wait for statistical significance before declaring a winner.",
    "A test can show that a campaign 'worked' and still be misleading, because some of those buyers would have purchased anyway. That's the question incrementality tries to answer: how much of the outcome is genuinely caused by the spend, rather than merely correlated with it.",
    "Even a strong ad wears out. Once fatigue sets in and the same faces keep seeing the same creative, engagement drops no matter how well it was written, so a team needs to allocate fresh assets before that happens — and pacing tools spread the spend evenly across a campaign's timeline instead of burning through it in the first two days.",
    "When spend suddenly spikes overnight, an alert should flag the anomaly before a human even opens the dashboard, usually by comparing today's numbers against a threshold set from the account's normal range. None of this replaces judgment, though, and as automated systems make more of these decisions, both regulators and customers are asking for more transparency about how an algorithm decided who saw what, and why."
  ],

  // RU -> EN — раздел 4. Проверка идёт на точное совпадение (без учёта регистра и пунктуации).
  translationSentences: [
    { ru: "Система делает ставку за каждый показ за миллисекунды.", en: "The system places a bid for every impression within milliseconds." },
    { ru: "Нам нужно ретаргетировать пользователей, которые посмотрели товар, но не купили.", en: "We need to retarget users who viewed the product but didn't buy." },
    { ru: "Этот вариант объявления сработал лучше, чем оригинал.", en: "This variant of the ad performed better than the original." },
    { ru: "Дождись статистической значимости, прежде чем объявлять победителя.", en: "Wait for statistical significance before declaring a winner." },
    { ru: "Инкрементальность показывает, насколько кампания реально повлияла на результат.", en: "Incrementality shows how much the campaign truly caused." },
    { ru: "Усталость от рекламы — вот почему вовлечённость упала на этой неделе.", en: "Ad fatigue is why engagement dropped this week." },
    { ru: "Нам нужно выделить больше бюджета на самый эффективный канал.", en: "We need to allocate more budget to the best-performing channel." },
    { ru: "Создай похожую аудиторию на основе наших лучших клиентов.", en: "Build a lookalike audience based on our best customers." },
    { ru: "Проверь темп расходования бюджета кампании, прежде чем его увеличивать.", en: "Check the pacing of the campaign before increasing the budget." },
    { ru: "Система обнаружила аномалию во вчерашних расходах.", en: "The system flagged an anomaly in yesterday's spend." },
    { ru: "Оповещение срабатывает, как только расходы превышают этот порог.", en: "An alert triggers once spend crosses this threshold." },
    { ru: "Клиенты ожидают большей прозрачности в том, как работает алгоритм.", en: "Customers expect more transparency about how the algorithm works." }
  ]
};
