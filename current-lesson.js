// ============================================================
// Данные Урока №7 — тема "AI-инструменты в маркетинге"
// Это единственный файл, который меняется от урока к уроку.
// Движок (engine.html) остаётся одним и тем же.
// ============================================================
const LESSON = {
  id: "lesson-07",
  dateLabel: "2 сентября 2026",
  topic: "AI-инструменты в маркетинге: персонализация, рекомендательные системы и приватность данных",

  // Слово + перевод — раздел 1
  targetWords: [
    { word: "propensity", translation: "предрасположенность, склонность (например, к покупке)" },
    { word: "touchpoint", translation: "точка контакта (с клиентом)" },
    { word: "omnichannel", translation: "омниканальный (единый опыт на всех каналах)" },
    { word: "embedding", translation: "эмбеддинг, векторное представление данных" },
    { word: "clustering", translation: "кластеризация (группировка похожих объектов)" },
    { word: "recency", translation: "давность (последнего действия, например покупки)" },
    { word: "anonymize", translation: "обезличивать, анонимизировать (данные)" },
    { word: "consent", translation: "согласие (на обработку данных)" },
    { word: "opt-in", translation: "согласие на подписку (явное разрешение)" },
    { word: "compliance", translation: "соответствие требованиям (законодательству)" },
    { word: "footprint", translation: "цифровой след" },
    { word: "latency", translation: "задержка (отклика системы)" }
  ],

  // Слово + значение НА АНГЛИЙСКОМ — раздел 2 (упражнение на сопоставление)
  matching: [
    { word: "propensity", meaning: "a natural tendency to behave in a particular way, such as buying or acting" },
    { word: "touchpoint", meaning: "any point where a customer interacts with a brand, online or offline" },
    { word: "omnichannel", meaning: "describing an approach where all channels are connected into one seamless customer experience" },
    { word: "embedding", meaning: "a numerical representation of data, like text or images, that captures its meaning for a model" },
    { word: "clustering", meaning: "the process of grouping similar data points together without predefined labels" },
    { word: "recency", meaning: "how recently a customer last took an action, such as making a purchase" },
    { word: "anonymize", meaning: "to remove or alter personal details so an individual can no longer be identified" },
    { word: "consent", meaning: "explicit permission a person gives before their data can be collected or used" },
    { word: "opt-in", meaning: "requiring someone to actively agree before they are added to a list or shown certain content" },
    { word: "compliance", meaning: "the state of following relevant laws, regulations, or internal policies" },
    { word: "footprint", meaning: "the trail of data a person leaves behind through their online activity" },
    { word: "latency", meaning: "the delay between an action and a system's response to it" }
  ],

  // Текст — раздел 3. Таргет-слова подсветятся автоматически.
  readingText: [
    "A single customer rarely sticks to one channel anymore, and a modern marketing team has to track every touchpoint — the email opened at breakfast, the ad glanced at on a commute, the product page revisited that evening — and stitch them into one coherent story. That's the promise of an omnichannel strategy: instead of treating each channel as its own silo, the customer experiences one continuous conversation with the brand, regardless of where it starts or ends.",
    "Behind the scenes, a recommendation engine is usually trying to estimate a customer's propensity to buy a particular item before they've even searched for it. To do that, the system converts products and browsing behavior into an embedding — a string of numbers that captures how similar two items or two customers really are, even when nothing in their raw data looks alike on the surface. From there, clustering groups customers with comparable embeddings into segments the marketing team never had to define by hand.",
    "Not every signal carries equal weight, though. A purchase from three years ago says far less about what someone wants today than an order placed last week, which is why many models weigh recency heavily: a customer who bought recently, buys often, and spends a lot is treated very differently from one who ticks only one of those boxes.",
    "None of this works, or is even legal, without the customer's consent. Under most current privacy regulations, a business needs explicit consent — often through an opt-in form — before it can anonymize and use someone's data for this kind of modeling, and proving that consent was properly collected is now a core part of compliance for any company running these systems.",
    "Even a fully compliant, well-consented system leaves a footprint: every click, scroll, and pause becomes another data point feeding the next recommendation. And as these models grow more sophisticated, engineers are just as focused on latency as accuracy — a perfectly personalized suggestion is worthless if it loads two seconds after the customer has already left the page."
  ],

  // RU -> EN — раздел 4. Проверка идёт на точное совпадение (без учёта регистра и пунктуации).
  translationSentences: [
    { ru: "Модель оценивает склонность клиента купить этот продукт.", en: "The model estimates the customer's propensity to buy this product." },
    { ru: "Каждая точка контакта с клиентом должна ощущаться как часть одной истории.", en: "Every touchpoint with the customer should feel like part of one story." },
    { ru: "Мы переходим на омниканальную стратегию в следующем квартале.", en: "We're moving to an omnichannel strategy next quarter." },
    { ru: "Система превращает данные о клиенте в эмбеддинг для сравнения.", en: "The system turns customer data into an embedding for comparison." },
    { ru: "Кластеризация помогла нам найти новые сегменты клиентов.", en: "Clustering helped us find new customer segments." },
    { ru: "Давность последней покупки — самый сильный сигнал в этой модели.", en: "Recency of the last purchase is the strongest signal in this model." },
    { ru: "Нам нужно обезличить эти данные, прежде чем передавать их команде.", en: "We need to anonymize this data before sharing it with the team." },
    { ru: "Мы не можем использовать эти данные без явного согласия клиента.", en: "We can't use this data without the customer's explicit consent." },
    { ru: "Мы используем opt-in форму, чтобы собрать согласие пользователей.", en: "We use an opt-in form to collect user consent." },
    { ru: "Соответствие требованиям GDPR обязательно для этой кампании.", en: "GDPR compliance is mandatory for this campaign." },
    { ru: "Цифровой след клиента помогает нам точнее персонализировать рекламу.", en: "The customer's digital footprint helps us personalize ads more precisely." },
    { ru: "Задержка отклика системы не должна превышать одной секунды.", en: "The system's latency shouldn't exceed one second." }
  ]
};
