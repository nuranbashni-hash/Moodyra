var MOODS = {

  happy: {
    heading:            "Keep shining ✨",
    subtitle:           "Do something you love today 💛",
    backBtn:            "⬅ Back",
    musicTitle:         "🎵 Music for your mood",
    quotes: [
      "Smile more, worry less 💛",
      "Happiness looks good on you ✨",
      "Do what makes your soul shine 🌼",
      "Small moments, big happiness 💫",
      "Today is a good day 🌞"
    ],
    tips: [
      "• Listen to your favorite song 🎵",
      "• Go for a walk 🚶‍♀️",
      "• Call someone you love ☎️"
    ],
    music: [
      { genre: "Indie Pop",       emoji: "🎸", query: "indie pop happy playlist" },
      { genre: "Dance / Upbeat",  emoji: "💃", query: "upbeat feel good music" },
      { genre: "Summer Vibes",    emoji: "☀️", query: "summer vibes playlist" },
      { genre: "Feel Good Hits",  emoji: "🎉", query: "feel good happy hits playlist" }
    ],
    quotesTitle:        "✨ Happy Vibes",
    journalTitle:       "💭 Write something happy",
    journalPlaceholder: "Write what made you happy today...",
    tipsTitle:          "🌼 Things to do",
    savedText:          "✅ Saved successfully 💖",
    saveBtnText:        "Save ✨",
    savedMemoriesTitle: "💖 Your Memories",
    isLight: true
  },

  sad: {
    heading:            "It's okay to feel sad 💙",
    subtitle:           "You don't have to be strong all the time 🫂",
    backBtn:            "⬅ Back",
    musicTitle:         "🎵 Music for your mood",
    quotes: [
      "This feeling will pass 💙",
      "You are not alone 🫂",
      "It's okay to cry sometimes 💧",
      "Take your time to heal 🌙",
      "You matter, always 🤍"
    ],
    tips: [
      "• Talk to someone you trust 💬",
      "• Listen to soft music 🎧",
      "• Give yourself time 🤍"
    ],
    music: [
      { genre: "Acoustic & Soft", emoji: "🎸", query: "acoustic sad soft playlist" },
      { genre: "Lo-fi Chill",     emoji: "🌙", query: "lofi chill sad playlist" },
      { genre: "Healing Songs",   emoji: "🫂", query: "healing emotional music playlist" },
      { genre: "Rainy Day",       emoji: "🌧️", query: "rainy day sad songs playlist" }
    ],
    quotesTitle:        "💧 Soft Words",
    journalTitle:       "💭 Let your feelings out",
    journalPlaceholder: "Write what's making you sad...",
    tipsTitle:          "🌙 Gentle care",
    savedText:          "💙 Saved safely",
    saveBtnText:        "Save 💙",
    savedMemoriesTitle: "🫂 Your Feelings",
    isLight: false
  },

  calm: {
    heading:            "Relax & Breathe 🌿",
    subtitle:           "Take a moment for yourself 💙",
    backBtn:            "⬅ Back",
    musicTitle:         "🎵 Music for your mood",
    quotes: [
      "Breathe in, breathe out 🌿",
      "Peace begins with you 🤍",
      "Slow down, you're doing fine 🌊",
      "Quiet mind, calm soul 🌙",
      "Just relax 💙"
    ],
    tips: [
      "• Listen to calm music 🎧",
      "• Take deep breaths 🧘‍♀️",
      "• Sit quietly for a moment 🌙"
    ],
    music: [
      { genre: "Lo-fi Hip Hop",  emoji: "🎧", query: "lofi hip hop chill beats" },
      { genre: "Nature Sounds",  emoji: "🌿", query: "nature sounds relaxing music" },
      { genre: "Meditation",     emoji: "🧘", query: "meditation calm music" },
      { genre: "Ambient Piano",  emoji: "🎹", query: "ambient piano calm playlist" }
    ],
    quotesTitle:        "🌙 Calm Vibes",
    journalTitle:       "💭 Clear your mind",
    journalPlaceholder: "Write what's on your mind...",
    tipsTitle:          "🌿 Things to do",
    savedText:          "✅ Saved successfully 💖",
    saveBtnText:        "Save ✨",
    savedMemoriesTitle: "💖 Your Thoughts",
    isLight: false
  },

  angry: {
    heading:            "Let it out 😤",
    subtitle:           "Your feelings are valid ❤️‍🔥",
    backBtn:            "⬅ Back",
    musicTitle:         "🎵 Music for your mood",
    quotes: [
      "It's okay to feel angry 😤",
      "Breathe before you react 🌬️",
      "Let it out, don't hold it in 💥",
      "You are in control 🔥",
      "This feeling will pass ❤️‍🔥"
    ],
    tips: [
      "• Take deep breaths 🌬️",
      "• Walk away for a moment 🚶‍♀️",
      "• Listen to music 🎧"
    ],
    music: [
      { genre: "Rock / Metal",       emoji: "🤘", query: "rock metal release anger playlist" },
      { genre: "Empowerment Rap",    emoji: "🔥", query: "empowerment rap powerful playlist" },
      { genre: "Workout Hype",       emoji: "💪", query: "workout hype music playlist" },
      { genre: "Classical Intense",  emoji: "🎻", query: "intense classical music playlist" }
    ],
    quotesTitle:        "🔥 Angry Vibes",
    journalTitle:       "💭 Vent your thoughts",
    journalPlaceholder: "Write what's making you angry...",
    tipsTitle:          "⚡ Cool down",
    savedText:          "💥 Released successfully",
    saveBtnText:        "Release 💥",
    savedMemoriesTitle: "🧠 Released Thoughts",
    isLight: false
  },

  tired: {
    heading:            "Rest a little 😴",
    subtitle:           "You've done enough for today 💙",
    backBtn:            "⬅ Back",
    musicTitle:         "🎵 Music for your mood",
    quotes: [
      "It's okay to rest 😴",
      "You don't have to do everything today 💙",
      "Slow down and breathe 🌙",
      "Rest is productive too ✨",
      "Take care of yourself 🤍"
    ],
    tips: [
      "• Take a short nap 🛌",
      "• Drink something warm ☕",
      "• Stay away from screens 📵"
    ],
    music: [
      { genre: "Sleep Sounds",   emoji: "😴", query: "sleep sounds white noise relaxing" },
      { genre: "Lo-fi Sleepy",   emoji: "🌙", query: "lofi sleepy tired music playlist" },
      { genre: "Soft Acoustic",  emoji: "🎸", query: "soft acoustic calm tired music" },
      { genre: "Binaural Beats", emoji: "🧠", query: "binaural beats deep relaxation" }
    ],
    quotesTitle:        "🌙 Tired Vibes",
    journalTitle:       "💭 Let it out gently",
    journalPlaceholder: "Write what's making you tired...",
    tipsTitle:          "🌿 Rest ideas",
    savedText:          "🌙 Saved successfully",
    saveBtnText:        "Save 🌙",
    savedMemoriesTitle: "💤 Your Thoughts",
    isLight: false
  }

};

var MOODS_AR = {

  happy: {
    heading:            "استمر في التألق ✨",
    subtitle:           "افعل ما يجعل روحك تتألق 💛",
    backBtn:            "⬅ العودة",
    musicTitle:         "🎵 موسيقى تناسب مزاجك",
    quotes: [
      "ابتسم أكثر، قلق أقل 💛",
      "السعادة تبدو رائعة عليك ✨",
      "افعل ما يُضيء روحك 🌼",
      "لحظات صغيرة، سعادة كبيرة 💫",
      "اليوم يوم جميل 🌞"
    ],
    tips: [
      "• استمع لأغنيتك المفضلة 🎵",
      "• اخرج للمشي 🚶‍♀️",
      "• تواصل مع شخص تحبه ☎️"
    ],
    music: [
      { genre: "بوب مستقل",    emoji: "🎸", query: "indie pop happy playlist" },
      { genre: "رقص / حماسي", emoji: "💃", query: "upbeat feel good music" },
      { genre: "أجواء صيفية", emoji: "☀️", query: "summer vibes playlist" },
      { genre: "أغاني البهجة", emoji: "🎉", query: "feel good happy hits playlist" }
    ],
    quotesTitle:        "✨ أجواء السعادة",
    journalTitle:       "💭 اكتب شيئاً سعيداً",
    journalPlaceholder: "اكتب ما جعلك سعيداً اليوم...",
    tipsTitle:          "🌼 أشياء يمكنك فعلها",
    savedText:          "✅ تم الحفظ 💖",
    saveBtnText:        "احفظ ✨",
    savedMemoriesTitle: "💖 ذكرياتك",
    isLight: true
  },

  sad: {
    heading:            "لا بأس أن تحزن 💙",
    subtitle:           "لا يجب أن تكون قوياً دائماً 🫂",
    backBtn:            "⬅ العودة",
    musicTitle:         "🎵 موسيقى تناسب مزاجك",
    quotes: [
      "هذا الشعور سيمر 💙",
      "لست وحدك 🫂",
      "لا بأس بالبكاء أحياناً 💧",
      "خذ وقتك للتعافي 🌙",
      "أنت مهم دائماً 🤍"
    ],
    tips: [
      "• تحدث مع شخص تثق به 💬",
      "• استمع لموسيقى هادئة 🎧",
      "• أعطِ نفسك وقتاً 🤍"
    ],
    music: [
      { genre: "أكوستيك وناعم", emoji: "🎸", query: "acoustic sad soft playlist" },
      { genre: "لو-فاي هادئ",   emoji: "🌙", query: "lofi chill sad playlist" },
      { genre: "أغاني شفاء",    emoji: "🫂", query: "healing emotional music playlist" },
      { genre: "يوم ممطر",      emoji: "🌧️", query: "rainy day sad songs playlist" }
    ],
    quotesTitle:        "💧 كلمات ناعمة",
    journalTitle:       "💭 أخرج مشاعرك",
    journalPlaceholder: "اكتب ما يجعلك حزيناً...",
    tipsTitle:          "🌙 اعتنِ بنفسك",
    savedText:          "💙 تم الحفظ بأمان",
    saveBtnText:        "احفظ 💙",
    savedMemoriesTitle: "🫂 مشاعرك",
    isLight: false
  },

  calm: {
    heading:            "استرخِ وتنفس 🌿",
    subtitle:           "خذ لحظة لنفسك 💙",
    backBtn:            "⬅ العودة",
    musicTitle:         "🎵 موسيقى تناسب مزاجك",
    quotes: [
      "تنفس للداخل، تنفس للخارج 🌿",
      "السلام يبدأ منك 🤍",
      "تمهّل، أنت بخير 🌊",
      "عقل هادئ، روح مطمئنة 🌙",
      "فقط استرخِ 💙"
    ],
    tips: [
      "• استمع لموسيقى هادئة 🎧",
      "• خذ أنفاساً عميقة 🧘‍♀️",
      "• اجلس بهدوء لحظة 🌙"
    ],
    music: [
      { genre: "لو-فاي هيب هوب", emoji: "🎧", query: "lofi hip hop chill beats" },
      { genre: "أصوات الطبيعة",  emoji: "🌿", query: "nature sounds relaxing music" },
      { genre: "تأمل",            emoji: "🧘", query: "meditation calm music" },
      { genre: "بيانو هادئ",     emoji: "🎹", query: "ambient piano calm playlist" }
    ],
    quotesTitle:        "🌙 أجواء الهدوء",
    journalTitle:       "💭 صفّ ذهنك",
    journalPlaceholder: "اكتب ما يدور في ذهنك...",
    tipsTitle:          "🌿 أشياء يمكنك فعلها",
    savedText:          "✅ تم الحفظ 💖",
    saveBtnText:        "احفظ ✨",
    savedMemoriesTitle: "💖 أفكارك",
    isLight: false
  },

  angry: {
    heading:            "أخرج ما بداخلك 😤",
    subtitle:           "مشاعرك صحيحة ❤️‍🔥",
    backBtn:            "⬅ العودة",
    musicTitle:         "🎵 موسيقى تناسب مزاجك",
    quotes: [
      "لا بأس بالشعور بالغضب 😤",
      "تنفس قبل أن تتصرف 🌬️",
      "أخرجه، لا تحتفظ به 💥",
      "أنت تتحكم في نفسك 🔥",
      "هذا الشعور سيمر ❤️‍🔥"
    ],
    tips: [
      "• خذ أنفاساً عميقة 🌬️",
      "• ابتعد لحظة 🚶‍♀️",
      "• استمع لموسيقى 🎧"
    ],
    music: [
      { genre: "روك / ميتال",   emoji: "🤘", query: "rock metal release anger playlist" },
      { genre: "راب تحفيزي",    emoji: "🔥", query: "empowerment rap powerful playlist" },
      { genre: "موسيقى رياضية", emoji: "💪", query: "workout hype music playlist" },
      { genre: "كلاسيكي مكثف", emoji: "🎻", query: "intense classical music playlist" }
    ],
    quotesTitle:        "🔥 أجواء الغضب",
    journalTitle:       "💭 فرّغ ما بداخلك",
    journalPlaceholder: "اكتب ما يغضبك...",
    tipsTitle:          "⚡ تبريد الأعصاب",
    savedText:          "💥 تم التفريغ",
    saveBtnText:        "أفرغ 💥",
    savedMemoriesTitle: "🧠 أفكار مُفرَّغة",
    isLight: false
  },

  tired: {
    heading:            "خذ قسطاً من الراحة 😴",
    subtitle:           "لقد فعلت الكثير اليوم 💙",
    backBtn:            "⬅ العودة",
    musicTitle:         "🎵 موسيقى تناسب مزاجك",
    quotes: [
      "لا بأس بالراحة 😴",
      "لا يجب أن تفعل كل شيء اليوم 💙",
      "تمهّل وتنفس 🌙",
      "الراحة أيضاً إنتاج ✨",
      "اعتنِ بنفسك 🤍"
    ],
    tips: [
      "• خذ قيلولة قصيرة 🛌",
      "• اشرب شيئاً دافئاً ☕",
      "• ابتعد عن الشاشات 📵"
    ],
    music: [
      { genre: "أصوات النوم",  emoji: "😴", query: "sleep sounds white noise relaxing" },
      { genre: "لو-فاي نعسان", emoji: "🌙", query: "lofi sleepy tired music playlist" },
      { genre: "أكوستيك ناعم", emoji: "🎸", query: "soft acoustic calm tired music" },
      { genre: "موجات ثنائية", emoji: "🧠", query: "binaural beats deep relaxation" }
    ],
    quotesTitle:        "🌙 أجواء التعب",
    journalTitle:       "💭 أخرجها بلطف",
    journalPlaceholder: "اكتب ما يجعلك متعباً...",
    tipsTitle:          "🌿 أفكار للراحة",
    savedText:          "🌙 تم الحفظ",
    saveBtnText:        "احفظ 🌙",
    savedMemoriesTitle: "💤 أفكارك",
    isLight: false
  }

};

var HISTORY_KEY = "moodyra_mood_history";
var MAX_HISTORY = 30;

var MOOD_META = {
  happy: { emoji: "😊", color: "#fcb69f" },
  sad:   { emoji: "😔", color: "#a1c4fd" },
  calm:  { emoji: "😌", color: "#a8dadc" },
  angry: { emoji: "😡", color: "#f85032" },
  tired: { emoji: "😴", color: "#c3cfe2" }
};

function logMood(mood) {
  var entry    = { mood: mood, timestamp: Date.now() };
  var existing = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  var updated  = [entry].concat(existing).slice(0, MAX_HISTORY);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  renderHistoryWidget();
}

function getMoodHistory() {
  return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
}

function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
  renderHistoryWidget();
}

function timeAgo(timestamp) {
  var diff = Date.now() - timestamp;
  var mins = Math.floor(diff / 60000);
  var hrs  = Math.floor(diff / 3600000);
  var days = Math.floor(diff / 86400000);

  if (currentLang === "ar") {
    if (mins < 1)  return "الآن";
    if (mins < 60) return "منذ " + mins + "د";
    if (hrs  < 24) return "منذ " + hrs  + "س";
    return "منذ " + days + "ي";
  }

  if (mins < 1)  return "just now";
  if (mins < 60) return mins + "m ago";
  if (hrs  < 24) return hrs  + "h ago";
  return days + "d ago";
}

function getTopMood(history) {
  var counts = {};

  history.forEach(function(entry) {
    counts[entry.mood] = (counts[entry.mood] || 0) + 1;
  });

  var topMood  = null;
  var topCount = 0;
  Object.keys(counts).forEach(function(mood) {
    if (counts[mood] > topCount) {
      topMood  = mood;
      topCount = counts[mood];
    }
  });

  return topMood ? [topMood, topCount] : null;
}

function renderHistoryWidget() {
  var widget = document.getElementById("history-widget");
  if (!widget) return;

  var history = getMoodHistory();

  if (history.length === 0) {
    widget.style.display = "none";
    return;
  }

  widget.style.display = "block";

  var isAr = (currentLang === "ar");

  function moodLabel(moodId) {
    return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][moodId]) || moodId;
  }

  var topMood = getTopMood(history);
  var topHtml = "";
  if (topMood) {
    var meta = MOOD_META[topMood[0]];
    topHtml =
      '<div class="history-top">' +
        '<span class="top-emoji">' + meta.emoji + '</span>' +
        '<div>' +
          '<div class="top-label">' + (isAr ? "المزاج الأكثر تكراراً" : "Most common mood") + '</div>' +
          '<div class="top-name">' + moodLabel(topMood[0]) +
            ' <span style="color:#bbb;font-weight:400;font-size:0.85rem">(' + topMood[1] + '×)</span>' +
          '</div>' +
        '</div>' +
        '<span class="trophy">🏆</span>' +
      '</div>';
  }

  var recent     = history.slice(0, 10);
  var bubblesHtml = recent.map(function(entry) {
    var meta = MOOD_META[entry.mood] || { emoji: "🌀", color: "#ccc" };
    return (
      '<div class="history-bubble" style="' +
        'background:' + meta.color + '44;' +
        'border:1.5px solid ' + meta.color + '">' +
        '<span>' + meta.emoji + '</span>' +
        '<span>' + moodLabel(entry.mood) + '</span>' +
        '<span class="b-time">' + timeAgo(entry.timestamp) + '</span>' +
      '</div>'
    );
  }).join("");

  widget.innerHTML =
    '<div class="history-header">' +
      '<h3>📊 ' + (isAr ? "سجل المزاج" : "Mood History") + '</h3>' +
      '<button class="history-clear" onclick="clearHistory()">' + (isAr ? "مسح" : "Clear") + '</button>' +
    '</div>' +
    topHtml +
    '<div class="history-bubbles">' + bubblesHtml + '</div>' +
    '<p class="history-note">' + (isAr ? "محفوظ في متصفحك · يُمسح عند مسح بيانات المتصفح" : "Saved in your browser · clears when you clear browser data") + '</p>';
}

function showPage(pageId) {

  document.querySelectorAll(".page").forEach(function(page) {
    page.classList.remove("active");
  });

  var target = document.getElementById("page-" + pageId);
  if (target) {
    target.classList.add("active");
  }

  window.scrollTo(0, 0);
}

function openMood(mood) {
  logMood(mood);
  showPage(mood);
  fillMoodPage(mood);
}

function fillMoodPage(mood) {
  var data = (currentLang === "ar" && MOODS_AR[mood]) ? MOODS_AR[mood] : MOODS[mood];
  var page = document.getElementById("page-" + mood);
  if (!page || !data) return;

  var isLight = data.isLight;

  function itemBg() {
    return isLight ? "background:rgba(255,255,255,0.40)" : "background:rgba(255,255,255,0.12)";
  }

  var h1El        = page.querySelector("h1");
  var subtitleEl  = page.querySelector(".subtitle");
  var backBtnEl   = page.querySelector(".back-btn");
  var musicTitleEl = page.querySelector(".music-section h3");
  if (h1El        && data.heading)    h1El.textContent        = data.heading;
  if (subtitleEl  && data.subtitle)   subtitleEl.textContent  = data.subtitle;
  if (backBtnEl   && data.backBtn)    backBtnEl.textContent   = data.backBtn;
  if (musicTitleEl && data.musicTitle) musicTitleEl.textContent = data.musicTitle;

  var quotesTitle = page.querySelector(".quotes-title");
  var quotesList  = page.querySelector(".quotes-list");
  if (quotesTitle) quotesTitle.textContent = data.quotesTitle;
  if (quotesList) {
    quotesList.innerHTML = data.quotes.map(function(q) {
      return '<li style="' + itemBg() + '">' + q + '</li>';
    }).join("");
  }

  var tipsTitle = page.querySelector(".tips-title");
  var tipsList  = page.querySelector(".tips-list");
  if (tipsTitle) tipsTitle.textContent = data.tipsTitle;
  if (tipsList) {
    tipsList.innerHTML = data.tips.map(function(t) {
      return '<li style="' + itemBg() + '">' + t + '</li>';
    }).join("");
  }

  var musicGrid = page.querySelector(".music-grid");
  if (musicGrid) {
    var playLabel = currentLang === "ar" ? "▶ شغّل على يوتيوب" : "▶ Play on YouTube";
    musicGrid.innerHTML = data.music.map(function(m) {
      var cardClass = "music-card" + (isLight ? " light" : "");
      return (
        '<a class="' + cardClass + '" ' +
           'href="https:
           'target="_blank" rel="noopener noreferrer">' +
          '<span class="mc-emoji">' + m.emoji    + '</span>' +
          '<span class="mc-genre">' + m.genre    + '</span>' +
          '<span class="mc-play">'  + playLabel  + '</span>' +
        '</a>'
      );
    }).join("");
  }

  var journalTitle  = page.querySelector(".journal-title");
  var journalArea   = page.querySelector(".journal-area");
  var saveBtn       = page.querySelector(".save-btn");
  var savedMsg      = page.querySelector(".saved-msg");
  var savedEntries  = page.querySelector(".saved-entries");
  var memoriesTitle = page.querySelector(".memories-title");

  if (journalTitle)  journalTitle.textContent  = data.journalTitle;
  if (journalArea)   journalArea.placeholder   = data.journalPlaceholder;
  if (saveBtn)       saveBtn.textContent       = data.saveBtnText;
  if (memoriesTitle) memoriesTitle.textContent = data.savedMemoriesTitle;

  if (journalArea)  journalArea.value         = "";
  if (savedMsg)     savedMsg.style.display    = "none";
  if (savedEntries) savedEntries.innerHTML    = "";

  if (saveBtn && journalArea && savedMsg && savedEntries) {

    saveBtn.onclick = function() {
      var text = journalArea.value.trim();
      if (!text) return;

      var entry       = document.createElement("div");
      entry.className = "saved-entry" + (isLight ? " light" : "");
      entry.textContent = "• " + text;
      savedEntries.insertBefore(entry, savedEntries.firstChild);

      var memoriesSection = page.querySelector(".memories-section");
      if (memoriesSection) memoriesSection.style.display = "block";

      journalArea.value = "";

      savedMsg.textContent    = data.savedText;
      savedMsg.style.display  = "inline";
      setTimeout(function() {
        savedMsg.style.display = "none";
      }, 3000);
    };
  }
}

function toggleComfort() {
  var panel = document.getElementById("comfort-panel");
  if (!panel) return;
  panel.classList.toggle("open");
}

var MOTIVATIONAL = [
  { text: "Amazing work! Every focused minute brings you closer to your goal.", emoji: "🏆" },
  { text: "You did it! Consistent effort is the secret to success. Keep going!", emoji: "🔥" },
  { text: "Session complete! You're building incredible study habits.", emoji: "✨" },
  { text: "Brilliant focus! Your brain is stronger than you think.", emoji: "💡" },
  { text: "Well done! You've earned every second of the break ahead.", emoji: "🎉" },
  { text: "Incredible discipline! One session at a time is how champions study.", emoji: "⭐" },
  { text: "Look at you go! Small steps every day lead to giant results.", emoji: "🚀" },
  { text: "You showed up and did the work — that's what matters most.", emoji: "💎" },
  { text: "Another session down! Your future self is already thanking you.", emoji: "🙌" }
];

var CONFETTI_COLORS = [
  "#ff6b6b","#feca57","#48dbfb","#ff9ff3",
  "#54a0ff","#5f27cd","#00d2d3","#1dd1a1"
];

var ACHIEVEMENTS_KEY = "moodyra_achievements";

var focus = {
  duration:      25 * 60,
  breakDuration: 5  * 60,
  timeLeft:      25 * 60,
  phase:         "idle",
  interval:      null,
  sessions:      0,
  lastMsgIdx:    -1
};

function focusTone(ac, freq, startTime, vol, decay, type) {
  type = type || "sine";
  var osc  = ac.createOscillator();
  var gain = ac.createGain();
  osc.connect(gain);
  gain.connect(ac.destination);
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(vol, startTime + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + decay);
  osc.start(startTime);
  osc.stop(startTime + decay);
}

function playDing() {
  try {
    var ac = new (window.AudioContext || window.webkitAudioContext)();
    [880, 1108, 1318].forEach(function(f, i) {
      focusTone(ac, f, ac.currentTime + i * 0.18, 0.3, 1.4);
    });
  } catch(e) {}
}

function playBreakSound() {
  try {
    var ac = new (window.AudioContext || window.webkitAudioContext)();
    [523, 440, 349, 294].forEach(function(f, i) {
      focusTone(ac, f, ac.currentTime + i * 0.22, 0.22, 1.6);
    });
  } catch(e) {}
}

function playSuccess() {
  try {
    var ac = new (window.AudioContext || window.webkitAudioContext)();
    [659, 784, 1047].forEach(function(f, i) {
      focusTone(ac, f, ac.currentTime + i * 0.1, 0.2, 0.8);
    });
  } catch(e) {}
}

function playReadyChime() {
  try {
    var ac = new (window.AudioContext || window.webkitAudioContext)();
    [523, 659, 784, 1047].forEach(function(f, i) {
      focusTone(ac, f, ac.currentTime + i * 0.14, 0.18, 1.2);
    });
  } catch(e) {}
}

function launchConfetti() {
  var container = document.getElementById("focus-confetti");
  if (!container) return;

  container.innerHTML = "";

  for (var i = 0; i < 40; i++) {
    var piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left            = Math.random() * 100 + "%";
    piece.style.backgroundColor = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    piece.style.animationDelay  = (Math.random() * 0.8) + "s";
    piece.style.width           = (8 + Math.random() * 8) + "px";
    piece.style.height          = (8 + Math.random() * 8) + "px";
    container.appendChild(piece);
  }

  setTimeout(function() {
    if (container) container.innerHTML = "";
  }, 3000);
}

function focusSetPhase(phase) {
  focus.phase = phase;

  var durationRow  = document.getElementById("focus-duration-row");
  var breakBanner  = document.getElementById("break-banner");
  var display      = document.getElementById("focus-display");
  var sublabel     = document.getElementById("focus-sublabel");
  var mainBtn      = document.getElementById("focus-main-btn");
  var resetBtn     = document.getElementById("focus-reset-btn");
  var donePanel    = document.getElementById("focus-done-panel");
  var breakDonePanel = document.getElementById("break-done-panel");

  if (durationRow)    durationRow.style.display    = "none";
  if (breakBanner)    breakBanner.style.display    = "none";
  if (donePanel)      donePanel.style.display      = "none";
  if (breakDonePanel) breakDonePanel.style.display = "none";
  if (resetBtn)       resetBtn.style.display       = "none";

  if (phase === "idle") {

    if (durationRow) durationRow.style.display = "flex";
    if (mainBtn) {
      mainBtn.style.display   = "";
      mainBtn.textContent     = "▶ Start Focus";
    }
    if (sublabel) sublabel.textContent = focus.duration / 60 + "-minute session";
    updateFocusDisplay();

  } else if (phase === "focusing") {

    if (mainBtn) {
      mainBtn.style.display = "";
      mainBtn.textContent   = "⏸ Pause";
    }
    if (resetBtn) resetBtn.style.display = "";
    if (sublabel) sublabel.textContent   = "Stay focused 🎯";

  } else if (phase === "paused") {

    if (mainBtn) {
      mainBtn.style.display = "";
      mainBtn.textContent   = "▶ Resume";
    }
    if (resetBtn) resetBtn.style.display = "";
    if (sublabel) sublabel.textContent   = "Session paused";

  } else if (phase === "focus-done") {

    if (mainBtn) mainBtn.style.display = "none";
    if (donePanel) donePanel.style.display = "";

    if (sublabel) sublabel.textContent = "🎊 Session complete!";

    var msgBox = document.getElementById("focus-message-box");
    if (msgBox) {
      var idx;
      do { idx = Math.floor(Math.random() * MOTIVATIONAL.length); }
      while (idx === focus.lastMsgIdx);
      focus.lastMsgIdx = idx;
      var msg = MOTIVATIONAL[idx];
      msgBox.innerHTML =
        '<span class="msg-emoji">' + msg.emoji + '</span>' +
        '<span class="msg-text">'  + msg.text  + '</span>';
    }

    var ta = document.getElementById("achievement-input");
    if (ta) ta.value = "";
    var flash = document.getElementById("saved-flash");
    if (flash) flash.style.display = "none";

  } else if (phase === "breaking") {

    if (mainBtn) mainBtn.style.display = "none";
    if (breakBanner) {
      breakBanner.style.display = "";
      var label = document.getElementById("break-duration-label");
      if (label) label.textContent = focus.breakDuration / 60;
    }
    if (sublabel) sublabel.textContent = "Take a breather ☕";

  } else if (phase === "break-done") {

    if (mainBtn) mainBtn.style.display = "none";
    if (breakDonePanel) breakDonePanel.style.display = "";
    if (sublabel) sublabel.textContent = "Break finished!";
  }
}

function updateFocusDisplay() {
  var mins = String(Math.floor(focus.timeLeft / 60)).padStart(2, "0");
  var secs = String(focus.timeLeft % 60).padStart(2, "0");
  var el = document.getElementById("focus-display");
  if (el) el.textContent = mins + ":" + secs;
}

function setFocusDuration(mins) {
  if (focus.phase !== "idle") return;
  focus.duration = mins * 60;
  focus.timeLeft = mins * 60;
  updateFocusDisplay();

  var btn25 = document.getElementById("fd-25");
  var btn45 = document.getElementById("fd-45");
  if (btn25) btn25.classList.toggle("active", mins === 25);
  if (btn45) btn45.classList.toggle("active", mins === 45);

  var sublabel = document.getElementById("focus-sublabel");
  if (sublabel) sublabel.textContent = mins + "-minute session";
}

function setBreakDuration(mins) {
  focus.breakDuration = mins * 60;

  var bd5  = document.getElementById("bd-5");
  var bd10 = document.getElementById("bd-10");
  if (bd5)  bd5.classList.toggle("active",  mins === 5);
  if (bd10) bd10.classList.toggle("active", mins === 10);
}

function focusMainAction() {
  if (focus.phase === "idle") {
    startFocusCounting();

  } else if (focus.phase === "focusing") {

    clearInterval(focus.interval);
    focusSetPhase("paused");

  } else if (focus.phase === "paused") {

    startFocusCounting();
  }
}

function startFocusCounting() {
  focusSetPhase("focusing");

  focus.interval = setInterval(function() {
    focus.timeLeft--;
    updateFocusDisplay();

    if (focus.timeLeft <= 0) {

      clearInterval(focus.interval);
      focus.sessions++;
      focusUpdateSessions();
      playDing();
      launchConfetti();
      focusSetPhase("focus-done");
    }
  }, 1000);
}

function resetFocusTimer() {
  clearInterval(focus.interval);
  focus.timeLeft = focus.duration;
  focusSetPhase("idle");
}

function saveAchievement() {
  var ta   = document.getElementById("achievement-input");
  var text = ta ? ta.value.trim() : "";
  if (!text) {

    startBreakTimer();
    return;
  }

  var existing = [];
  try { existing = JSON.parse(localStorage.getItem(ACHIEVEMENTS_KEY) || "[]"); } catch(e) {}

  existing.unshift({
    text:    text,
    date:    new Date().toLocaleDateString(),
    session: focus.sessions
  });

  localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(existing));

  playSuccess();
  var flash = document.getElementById("saved-flash");
  if (flash) flash.style.display = "";

  setTimeout(startBreakTimer, 1200);

  renderAchievements();
}

function startBreakTimer() {
  clearInterval(focus.interval);
  focus.timeLeft = focus.breakDuration;
  focusSetPhase("breaking");
  playBreakSound();
  updateFocusDisplay();

  focus.interval = setInterval(function() {
    focus.timeLeft--;
    updateFocusDisplay();

    if (focus.timeLeft <= 0) {

      clearInterval(focus.interval);
      playReadyChime();
      focusSetPhase("break-done");

      var el = document.getElementById("focus-display");
      if (el) el.textContent = "00:00";
    }
  }, 1000);
}

function startNewSession() {
  focus.timeLeft = focus.duration;
  focusSetPhase("idle");
}

function focusUpdateSessions() {
  var row = document.getElementById("focus-sessions");
  if (!row) return;
  if (focus.sessions === 0) { row.textContent = ""; return; }
  var stars = "";
  for (var i = 0; i < focus.sessions; i++) { stars += "🌟 "; }
  row.innerHTML = "Sessions completed: " + stars;
}

function renderAchievements() {
  var section = document.getElementById("achievements-section");
  var list    = document.getElementById("achievements-list");
  var title   = document.getElementById("achievements-title");
  if (!section || !list) return;

  var items = [];
  try { items = JSON.parse(localStorage.getItem(ACHIEVEMENTS_KEY) || "[]"); } catch(e) {}

  if (items.length === 0) {
    section.style.display = "none";
    return;
  }

  section.style.display = "";
  if (title) title.textContent = "🏅 Your Achievements (" + items.length + ")";

  list.innerHTML = items.map(function(item) {
    return (
      '<div class="achievement-item">' +
        '<div class="ach-text">' + escapeHtml(item.text) + '</div>' +
        '<div class="ach-meta">Session ' + item.session + ' · ' + item.date + '</div>' +
      '</div>'
    );
  }).join("");
}

function clearAchievements() {
  localStorage.removeItem(ACHIEVEMENTS_KEY);
  renderAchievements();
}

function escapeHtml(str) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

var BREATH_PHASES = [
  {
    label:       "Breathe In",
    duration:    4,
    color:       "#a8dadc",
    instruction: "Inhale slowly through your nose...",
    scale:       1.4
  },
  {
    label:       "Hold",
    duration:    7,
    color:       "#e2b4f0",
    instruction: "Hold your breath gently...",
    scale:       1.4
  },
  {
    label:       "Breathe Out",
    duration:    8,
    color:       "#fcb69f",
    instruction: "Exhale slowly through your mouth...",
    scale:       1.0
  }
];

var breath = {
  active:   false,
  phase:    0,
  count:    4,
  interval: null
};

function updateBreathDisplay() {
  var current = BREATH_PHASES[breath.phase];
  var circle  = document.getElementById("breath-circle");
  var label   = document.getElementById("breath-label");
  var instr   = document.getElementById("breath-instruction");
  var count   = document.getElementById("breath-count");

  if (circle) {
    circle.style.backgroundColor = current.color;
    circle.style.transform       = "scale(" + current.scale + ")";
    circle.textContent           = "";
  }
  if (label) label.textContent = current.label;
  if (instr) instr.textContent = current.instruction;
  if (count) count.textContent = breath.count;
}

function toggleBreathing() {
  breath.active = !breath.active;
  var btn = document.getElementById("breath-btn");

  if (breath.active) {

    if (btn) btn.textContent = TRANSLATIONS[currentLang].breathStop;
    breath.phase = 0;
    breath.count = BREATH_PHASES[0].duration;
    updateBreathDisplay();

    breath.interval = setInterval(function() {
      breath.count--;

      if (breath.count <= 0) {

        breath.phase = (breath.phase + 1) % BREATH_PHASES.length;
        breath.count = BREATH_PHASES[breath.phase].duration;
      }

      updateBreathDisplay();
    }, 1000);

  } else {

    if (btn) btn.textContent = TRANSLATIONS[currentLang].breathStart;
    clearInterval(breath.interval);

    var circle = document.getElementById("breath-circle");
    if (circle) {
      circle.style.transform       = "scale(1)";
      circle.style.backgroundColor = "rgba(255,255,255,0.22)";
      circle.textContent           = "🌬️";
    }

    var label = document.getElementById("breath-label");
    var instr = document.getElementById("breath-instruction");
    var count = document.getElementById("breath-count");
    if (label) label.textContent = TRANSLATIONS[currentLang].breathIdle;
    if (instr) instr.textContent = TRANSLATIONS[currentLang].breathingSub;
    if (count) count.textContent = "";
  }
}

var studyTips = {
  happy: {
    gradient: "linear-gradient(135deg,#ffecd2,#fcb69f)",
    tips: [
      "🔥 Great energy! Tackle your hardest subject first",
      "📝 Write a summary of what you've already learned",
      "🎯 Set ambitious goals — you're in the zone today",
      "🤝 Study with a friend and quiz each other",
      "💡 This is the best time to learn something new"
    ]
  },
  sad: {
    gradient: "linear-gradient(135deg,#1e3c72,#2a5298)",
    tips: [
      "🎧 Put on calm background music and just review notes",
      "📖 Try passive reading — no pressure to memorize",
      "✏️ Doodle diagrams or mind maps instead of reading",
      "🧘 Give yourself a 10-min break between every topic",
      "💬 Talk through concepts out loud"
    ]
  },
  calm: {
    gradient: "linear-gradient(135deg,#a8dadc,#457b9d)",
    tips: [
      "📚 Perfect time for deep reading and focused study",
      "🗂️ Organize your notes and create neat summaries",
      "🧠 Review difficult concepts while your mind is clear",
      "📅 Plan your study schedule for the week",
      "✍️ Write practice answers slowly and carefully"
    ]
  },
  angry: {
    gradient: "linear-gradient(135deg,#5c0000,#8b0000)",
    tips: [
      "🚶 Step away for 10 minutes before opening your books",
      "💥 Channel the energy into intense practice problems",
      "🌬️ Do 3 deep breaths before each study session",
      "⏱️ Use short Focus Timer sessions — don't force long blocks",
      "📵 Put your phone away — distractions make it worse"
    ]
  },
  tired: {
    gradient: "linear-gradient(135deg,#2c3e50,#4ca1af)",
    tips: [
      "⏱️ Use the Focus Timer: only 25 min focus, then a full break",
      "☕ Have a light snack and water before studying",
      "🔁 Review old material instead of learning new things",
      "🎙️ Listen to recorded lectures instead of reading",
      "🛌 A 20-min nap beats 2 hours of bad studying"
    ]
  }
};

var studyTips_AR = {
  happy: {
    gradient: "linear-gradient(135deg,#ffecd2,#fcb69f)",
    tips: [
      "🔥 طاقتك رائعة! ابدأ بالمادة الأصعب أولاً",
      "📝 اكتب ملخصاً لما تعلمته حتى الآن",
      "🎯 ضع أهدافاً طموحة — أنت في قمة تركيزك",
      "🤝 ادرس مع صديق واختبرا بعضكما",
      "💡 هذا أفضل وقت لتعلم شيء جديد"
    ]
  },
  sad: {
    gradient: "linear-gradient(135deg,#1e3c72,#2a5298)",
    tips: [
      "🎧 شغّل موسيقى هادئة في الخلفية وراجع ملاحظاتك فقط",
      "📖 اقرأ بشكل خفيف — لا ضغط للحفظ الآن",
      "✏️ ارسم مخططات أو خرائط ذهنية بدلاً من القراءة",
      "🧘 خذ استراحة ١٠ دقائق بين كل موضوع",
      "💬 اشرح المفاهيم بصوت عالٍ لنفسك"
    ]
  },
  calm: {
    gradient: "linear-gradient(135deg,#a8dadc,#457b9d)",
    tips: [
      "📚 وقت مثالي للقراءة العميقة والدراسة المركّزة",
      "🗂️ رتّب ملاحظاتك وأنشئ ملخصات منظمة",
      "🧠 راجع المفاهيم الصعبة وعقلك صافٍ",
      "📅 خطّط جدول دراستك للأسبوع",
      "✍️ اكتب إجابات تدريبية بهدوء وعناية"
    ]
  },
  angry: {
    gradient: "linear-gradient(135deg,#5c0000,#8b0000)",
    tips: [
      "🚶 ابتعد ١٠ دقائق قبل فتح كتبك",
      "💥 حوّل هذه الطاقة إلى حل مسائل مكثّف",
      "🌬️ خذ ٣ أنفاس عميقة قبل كل جلسة دراسة",
      "⏱️ استخدم جلسات قصيرة في المؤقت — لا تُرغم نفسك",
      "📵 ضع هاتفك جانباً — المشتتات تزيد الأمر سوءاً"
    ]
  },
  tired: {
    gradient: "linear-gradient(135deg,#2c3e50,#4ca1af)",
    tips: [
      "⏱️ استخدم المؤقت: ٢٥ دقيقة تركيز فقط ثم استراحة كاملة",
      "☕ تناول وجبة خفيفة واشرب ماءً قبل الدراسة",
      "🔁 راجع مادة قديمة بدلاً من تعلم أشياء جديدة",
      "🎙️ استمع لمحاضرات مسجّلة بدلاً من القراءة",
      "🛌 قيلولة ٢٠ دقيقة أفضل من ساعتين دراسة بلا تركيز"
    ]
  }
};

function selectStudyMood(mood) {
  document.querySelectorAll(".mood-sel-btn").forEach(function(btn) {
    btn.classList.toggle("active", btn.dataset.mood === mood);
  });

  var isAr  = currentLang === "ar";
  var data   = isAr ? studyTips_AR[mood] : studyTips[mood];
  var result = document.getElementById("study-tips-result");
  if (!result || !data) return;

  var moodLabels = isAr ? {
    happy: "سعيد 😊",
    sad:   "حزين 😔",
    calm:  "هادئ 😌",
    angry: "غاضب 😡",
    tired: "متعب 😴"
  } : {
    happy: "Happy 😊",
    sad:   "Sad 😔",
    calm:  "Calm 😌",
    angry: "Angry 😡",
    tired: "Tired 😴"
  };

  var heading = isAr
    ? "نصائح الدراسة حين تشعر أنك " + moodLabels[mood]
    : "Study tips when you feel " + moodLabels[mood];

  result.style.background = data.gradient;
  result.innerHTML =
    '<h4>' + heading + ':</h4>' +
    '<ul>' +
      data.tips.map(function(tip) { return "<li>" + tip + "</li>"; }).join("") +
    '</ul>';

  result.classList.add("show");
}

var USERS_KEY   = "moodyra_users";
var SESSION_KEY = "moodyra_session";

var authMode = "login";

var currentUser = null;

function getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY) || "{}"); }
  catch(e) { return {}; }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function openAuthModal() {
  authMode = "login";
  updateAuthModalUI();
  clearAuthFields();
  var overlay = document.getElementById("auth-overlay");
  if (overlay) overlay.style.display = "flex";
}

function closeAuthModal() {
  var overlay = document.getElementById("auth-overlay");
  if (overlay) overlay.style.display = "none";
}

function switchAuthMode() {
  authMode = (authMode === "login") ? "signup" : "login";
  updateAuthModalUI();
  clearAuthFields();
}

function updateAuthModalUI() {
  var isLogin = (authMode === "login");

  document.getElementById("auth-icon").textContent     = isLogin ? "👋" : "✨";
  document.getElementById("auth-title").textContent    = isLogin ? "Welcome back!" : "Create your account";
  document.getElementById("auth-subtitle").textContent = isLogin
    ? "Log in to track your mood journey"
    : "Join Moodyra and start your wellness journey";
  document.getElementById("auth-submit-text").textContent  = isLogin ? "Log In 🚀" : "Create Account ✨";
  document.getElementById("auth-switch-label").textContent = isLogin ? "Don't have an account?" : "Already have an account?";
  document.getElementById("auth-switch-btn").textContent   = isLogin ? "Sign up" : "Log in";

  var nameWrap = document.getElementById("auth-name-wrap");
  if (nameWrap) nameWrap.style.display = isLogin ? "none" : "";

  showAuthError("");
}

function clearAuthFields() {
  ["auth-name","auth-username","auth-password"].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.value = "";
  });
  showAuthError("");
}

function showAuthError(msg) {
  var el = document.getElementById("auth-error");
  if (!el) return;
  if (msg) {
    el.textContent    = msg;
    el.style.display  = "";
  } else {
    el.style.display  = "none";
    el.textContent    = "";
  }
}

function handleAuthSubmit() {
  var username = (document.getElementById("auth-username").value || "").trim().toLowerCase();
  var password = (document.getElementById("auth-password").value || "");
  var name     = (document.getElementById("auth-name")     ? document.getElementById("auth-name").value.trim() : "");

  var error = (authMode === "login")
    ? authLogin(username, password)
    : authSignup(name, username, password);

  if (error) {
    showAuthError(error);
  } else {
    closeAuthModal();
  }
}

function authLogin(username, password) {
  if (!username || !password) return "Please fill in all fields.";
  var users = getUsers();
  var record = users[username];
  if (!record) return "Account not found. Please sign up first.";
  if (record.password !== password) return "Incorrect password. Please try again.";

  currentUser = { username: username, name: record.name };
  localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));
  updateNavAuth();
  return null;
}

function authSignup(name, username, password) {
  if (!name)            return "Please enter your name.";
  if (username.length < 3) return "Username must be at least 3 characters.";
  if (password.length < 6) return "Password must be at least 6 characters.";

  var users = getUsers();
  if (users[username])  return "Username already taken. Please choose another.";

  users[username] = { name: name, password: password };
  saveUsers(users);

  currentUser = { username: username, name: name };
  localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));
  updateNavAuth();
  return null;
}

function authLogout() {
  currentUser = null;
  localStorage.removeItem(SESSION_KEY);
  updateNavAuth();

  var dd = document.getElementById("user-dropdown");
  if (dd) dd.style.display = "none";
}

function toggleUserMenu() {
  var dd = document.getElementById("user-dropdown");
  if (!dd) return;
  dd.style.display = (dd.style.display === "none" || !dd.style.display) ? "" : "none";
}

document.addEventListener("click", function(e) {
  var wrap = document.getElementById("nav-user-wrap");
  if (wrap && !wrap.contains(e.target)) {
    var dd = document.getElementById("user-dropdown");
    if (dd) dd.style.display = "none";
  }
});

function updateNavAuth() {
  var loginBtn  = document.getElementById("nav-login-btn");
  var userWrap  = document.getElementById("nav-user-wrap");
  var initial   = document.getElementById("nav-user-initial");
  var nameEl    = document.getElementById("nav-user-name");
  var ddName    = document.getElementById("dd-name");
  var ddUser    = document.getElementById("dd-username");

  if (currentUser) {

    if (loginBtn) loginBtn.style.display = "none";
    if (userWrap) userWrap.style.display = "";
    if (initial)  initial.textContent    = currentUser.name.charAt(0).toUpperCase();
    if (nameEl)   nameEl.textContent     = currentUser.name;
    if (ddName)   ddName.textContent     = currentUser.name;
    if (ddUser)   ddUser.textContent     = "@" + currentUser.username;
  } else {

    if (loginBtn) loginBtn.style.display = "";
    if (userWrap) userWrap.style.display = "none";
  }
}

function loadSession() {
  try { currentUser = JSON.parse(localStorage.getItem(SESSION_KEY) || "null"); }
  catch(e) { currentUser = null; }
  updateNavAuth();
}

var TRANSLATIONS = {
  en: {
    home: "Home",
    about: "About",
    students: "Students",
    login: "👤 Login",
    feelingToday: "How are you feeling today?",
    happy: "Happy",
    sad: "Sad",
    calm: "Calm",
    angry: "Angry",
    tired: "Tired",
    needComfort: "Make me feel better",
    chooseBetter: "Choose something to feel better:",
    studentSub: "Focus timer · Study tips · Exam stress relief",

    aboutTitle:        "About Moodyra 🌈",
    aboutSub:          "A mood-based wellness website for university students",
    goalTitle:         "Our Goal",
    goalDesc:          "Help students manage their emotions and mental wellbeing through music, journaling, and self-care tools.",
    fiveMoodsTitle:    "5 Moods",
    fiveMoodsDesc:     "Each mood has its own playlist, journal, quotes, and personalized tips to match how you feel.",
    toolsTitle:        "Student Tools",
    toolsDesc:         "Focus timer, breathing exercises, exam tips, and daily affirmations — all designed for student life.",
    privacyTitle:      "Privacy First",
    privacyDesc:       "Everything is saved locally in your browser. No accounts needed, no data shared.",
    meetTeam:          "👩‍💻 Meet the Team",
    teamSub:           "Made with ❤️ by Noran Hussien & Fatima Essa — university students who believe in mental wellness.",
    backHome:          "⬅ Back to Home",

    studentTitle:      "Student Mode 📚",
    studentDesc:       "Your study companion — tools and tips to study smarter 🎓",
    studyTipsTitle:    "📖 Study Tips Based on Your Mood",
    studyTipsSub:      "How are you feeling right now? Pick your mood for personalized study advice.",
    focusTimerTitle:   "🎯 Focus Timer",
    breathingTitle:    "🫁 Breathing Exercise",
    breathingSub:      "4-7-8 breathing technique to reduce exam anxiety",
    breathStart:       "▶ Start Breathing",
    breathStop:        "⏹ Stop",
    breathIdle:        "Press Start",
    examTipsTitle:     "💡 Exam Stress Relief Tips",
    examCard1Title:    "Review, don't re-read",
    examCard1Desc:     "Close your book and try to recall key points first. Only look when you're stuck.",
    examCard2Title:    "Practice past papers",
    examCard2Desc:     "Past exam questions are the best predictor of what's coming. Time yourself.",
    examCard3Title:    "Teach it out loud",
    examCard3Desc:     "Explain the topic as if teaching a friend. If you can teach it, you know it.",
    examCard4Title:    "Sleep before the exam",
    examCard4Desc:     "Memory consolidates during sleep. A rested brain outperforms an all-nighter.",
    examCard5Title:    "Stay hydrated",
    examCard5Desc:     "Dehydration reduces focus by up to 20%. Keep a water bottle at your desk.",
    examCard6Title:    "Done is better than perfect",
    examCard6Desc:     "Attempt every question. A partial answer is always better than a blank.",
    affirmTitle:       "🌟 You've Got This",
    affirm1:           "I am prepared and capable 💪",
    affirm2:           "Every study session counts ✅",
    affirm3:           "Mistakes help me learn faster 🧠",
    affirm4:           "I deserve rest and success 🌙",
    affirm5:           "One step at a time is enough 🚶",
    affirm6:           "My effort will pay off 🌱",
    chatgptTitle:      "🤖 Ask ChatGPT",
    chatgptDesc:       "Have a question? Want to summarize a topic? Open ChatGPT directly",
    chatgptSC1:        "Explain this topic to me",
    chatgptSC2:        "Summarize this text",
    chatgptSC3:        "Give me review questions",
    chatgptBtn:        "🤖 Open ChatGPT ↗",
  },
  ar: {
    home: "الرئيسية",
    about: "عن المشروع",
    students: "الطلاب",
    login: "👤 تسجيل الدخول",
    feelingToday: "كيف حالك اليوم؟",
    happy: "سعيد",
    sad: "حزين",
    calm: "هادئ",
    angry: "غاضب",
    tired: "متعب",
    needComfort: "أحتاج دعماً",
    chooseBetter: "اختر شيئاً لتشعر بتحسن:",
    studentSub: "مؤقت التركيز · نصائح الدراسة · تخفيف ضغط الامتحانات",

    aboutTitle:        "عن موديرا 🌈",
    aboutSub:          "موقع عافية يعتمد على المزاج لطلاب الجامعة",
    goalTitle:         "هدفنا",
    goalDesc:          "مساعدة الطلاب على إدارة مشاعرهم وصحتهم النفسية من خلال الموسيقى واليوميات وأدوات العناية بالنفس.",
    fiveMoodsTitle:    "٥ مزاجات",
    fiveMoodsDesc:     "لكل مزاج قوائم تشغيل خاصة به ويوميات واقتباسات ونصائح مخصصة تناسب شعورك.",
    toolsTitle:        "أدوات الطالب",
    toolsDesc:         "مؤقت التركيز وتمارين التنفس ونصائح الامتحانات والتأكيدات اليومية — كلها مصممة لحياة الطالب.",
    privacyTitle:      "الخصوصية أولاً",
    privacyDesc:       "كل شيء محفوظ محلياً في متصفحك. لا حاجة لحسابات، ولا مشاركة بيانات.",
    meetTeam:          "👩‍💻 تعرف على الفريق",
    teamSub:           "صُنع بـ ❤️ من نوران حسين وفاطمة عيسى — طالبتان جامعيتان تؤمنان بالصحة النفسية.",
    backHome:          "العودة للرئيسية ⬅",

    studentTitle:      "وضع الطالب 📚",
    studentDesc:       "رفيقك في الدراسة — أدوات ونصائح لتدرس بذكاء 🎓",
    studyTipsTitle:    "📖 نصائح الدراسة حسب مزاجك",
    studyTipsSub:      "كيف تشعر الآن؟ اختر مزاجك للحصول على نصائح مخصصة.",
    focusTimerTitle:   "🎯 مؤقت التركيز",
    breathingTitle:    "🫁 تمرين التنفس",
    breathingSub:      "تقنية التنفس ٤-٧-٨ لتقليل قلق الامتحانات",
    breathStart:       "▶ ابدأ التنفس",
    breathStop:        "⏹ إيقاف",
    breathIdle:        "اضغط ابدأ",
    examTipsTitle:     "💡 نصائح تخفيف ضغط الامتحانات",
    examCard1Title:    "راجع، لا تُعيد القراءة",
    examCard1Desc:     "أغلق كتابك وحاول تذكر النقاط الرئيسية أولاً. انظر فقط حين تتعثر.",
    examCard2Title:    "تدرّب على أسئلة سابقة",
    examCard2Desc:     "أسئلة الامتحانات السابقة أفضل مؤشر لما سيأتي. وقّت نفسك.",
    examCard3Title:    "اشرحها بصوت عالٍ",
    examCard3Desc:     "اشرح الموضوع كأنك تعلّم صديقاً. إن استطعت تعليمه، فأنت تعرفه.",
    examCard4Title:    "نم قبل الامتحان",
    examCard4Desc:     "تتوطد الذاكرة أثناء النوم. دماغ مرتاح يتفوق على ليلة سهر.",
    examCard5Title:    "اشرب ماءً كافياً",
    examCard5Desc:     "الجفاف يقلل التركيز بنسبة ٢٠٪. احرص على زجاجة ماء على مكتبك.",
    examCard6Title:    "المكتمل أفضل من المثالي",
    examCard6Desc:     "أجب على كل سؤال. الإجابة الجزئية دائماً أفضل من الفراغ.",
    affirmTitle:       "🌟 أنت قادر",
    affirm1:           "أنا مستعد وقادر 💪",
    affirm2:           "كل جلسة دراسة مهمة ✅",
    affirm3:           "الأخطاء تساعدني على التعلم أسرع 🧠",
    affirm4:           "أستحق الراحة والنجاح 🌙",
    affirm5:           "خطوة واحدة في كل مرة كافية 🚶",
    affirm6:           "جهدي سيؤتي ثماره 🌱",
    chatgptTitle:      "🤖 اسأل ChatGPT",
    chatgptDesc:       "عندك سؤال؟ تريد تلخيص موضوع؟ افتح ChatGPT مباشرةً",
    chatgptSC1:        "اشرح لي هذا الموضوع",
    chatgptSC2:        "لخّص هذا النص",
    chatgptSC3:        "أعطني أسئلة مراجعة",
    chatgptBtn:        "🤖 افتح ChatGPT ↗",
  }
};

var COMFORT_ITEMS = {
  en: [
    "✨ You are stronger than you think",
    "🎧 Listen to your favorite song",
    "🌿 Take a deep breath",
    "🍫 Eat something you love",
    "📞 Talk to someone you trust",
    "💖 This feeling will pass",
  ],
  ar: [
    "✨ أنت أقوى مما تعتقد",
    "🎧 استمع لأغنيتك المفضلة",
    "🌿 خذ نفساً عميقاً",
    "🍫 كل شيئاً تحبه",
    "📞 تحدث مع شخص تثق به",
    "💖 هذا الشعور سيمر",
  ]
};

var currentLang = "en";

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("moodyra_lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(function(el) {
    var key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang][key] !== undefined) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  var grid = document.getElementById("comfort-grid-items");
  if (grid) {
    grid.innerHTML = COMFORT_ITEMS[lang].map(function(item) {
      return '<div class="comfort-item">' + item + '</div>';
    }).join("");
  }

  var btn = document.getElementById("lang-btn");
  if (btn) btn.textContent = lang === "en" ? "AR" : "EN";

  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", lang);

  var moodEmojis = { happy:"😊", sad:"😔", calm:"😌", angry:"😡", tired:"😴" };
  document.querySelectorAll(".mood-sel-btn").forEach(function(btn) {
    var m = btn.getAttribute("data-mood");
    if (m && TRANSLATIONS[lang][m]) {
      btn.textContent = moodEmojis[m] + " " + TRANSLATIONS[lang][m];
    }
  });

  renderHistoryWidget();

  ["happy","sad","calm","angry","tired"].forEach(function(m) {
    var pg = document.getElementById("page-" + m);
    if (pg && pg.classList.contains("active")) {
      fillMoodPage(m);
    }
  });

  var breathBtn   = document.getElementById("breath-btn");
  var breathLabel = document.getElementById("breath-label");
  var T = TRANSLATIONS[lang];
  if (breathBtn && breathBtn.dataset.running !== "true") {
    breathBtn.textContent = T.breathStart;
  } else if (breathBtn) {
    breathBtn.textContent = T.breathStop;
  }
  if (breathLabel && !breathLabel.dataset.running) {
    breathLabel.textContent = T.breathIdle;
  }
}

function toggleLang() {
  applyLang(currentLang === "en" ? "ar" : "en");
}

window.addEventListener("DOMContentLoaded", function() {
  showPage("home");
  renderHistoryWidget();
  focusSetPhase("idle");
  renderAchievements();
  loadSession();
  applyLang(currentLang);
});
