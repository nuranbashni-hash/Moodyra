/* ============================================================
   MOODYRA — script.js
   All the JavaScript that makes the website interactive.

   HOW JAVASCRIPT WORKS HERE (beginner summary):
   ─────────────────────────────────────────────
   • We use plain JavaScript — no frameworks, no libraries.
   • Functions are called directly from HTML using onclick="..."
   • Data is stored in variables and saved to localStorage
     (the browser's built-in storage — survives page refresh).
   • setInterval() is used to count down timers every second.

   TABLE OF CONTENTS
   ─────────────────
   1.  All mood content data (quotes, tips, music for each mood)
   2.  Mood history (track which moods the user visited)
   3.  Page navigation (showPage, openMood)
   4.  Fill mood page content dynamically
   5.  Home page comfort panel toggle
   6.  Focus Timer (phases, sounds, confetti, achievements)
   7.  Breathing exercise (4-7-8 technique)
   8.  Student page study tips by mood
   9.  Page initialization (runs when page first loads)
   ============================================================ */


/* ── 1. MOOD CONTENT DATA ────────────────────────────────── */
/*
   This object holds all the text content for each mood page.
   Each mood has: quotes, tips, music tracks, and label text.
   fillMoodPage() reads this and puts the content on the page.
*/
var MOODS = {

  happy: {
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
    isLight: true   /* happy page has a light background, so cards use lighter colors */
  },

  sad: {
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

}; /* end MOODS */


/* ── 2. MOOD HISTORY ─────────────────────────────────────── */
/*
   Every time the user clicks a mood, we save it to localStorage.
   This creates a history shown on the home page.

   localStorage stores text only, so we use JSON.stringify()
   to convert objects to text, and JSON.parse() to convert back.
*/

var HISTORY_KEY = "moodyra_mood_history"; /* key used in localStorage */
var MAX_HISTORY = 30;                      /* keep only the last 30 entries */

/* Emoji and color for each mood (used in history bubbles) */
var MOOD_META = {
  happy: { emoji: "😊", label: "Happy",  color: "#fcb69f" },
  sad:   { emoji: "😔", label: "Sad",    color: "#a1c4fd" },
  calm:  { emoji: "😌", label: "Calm",   color: "#a8dadc" },
  angry: { emoji: "😡", label: "Angry",  color: "#f85032" },
  tired: { emoji: "😴", label: "Tired",  color: "#c3cfe2" }
};

/*
   Save a mood visit.
   Adds the mood + current time to the front of the history array,
   keeps only the last MAX_HISTORY entries, then saves to localStorage.
*/
function logMood(mood) {
  var entry    = { mood: mood, timestamp: Date.now() }; /* Date.now() = current time in ms */
  var existing = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
  var updated  = [entry].concat(existing).slice(0, MAX_HISTORY);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  renderHistoryWidget(); /* update the widget on the home page */
}

/* Read all mood history from localStorage */
function getMoodHistory() {
  return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
}

/* Delete all mood history */
function clearHistory() {
  localStorage.removeItem(HISTORY_KEY);
  renderHistoryWidget();
}

/*
   Convert a timestamp (number of ms since 1970) to a readable string.
   Examples: "just now", "5m ago", "2h ago", "3d ago"
*/
function timeAgo(timestamp) {
  var diff = Date.now() - timestamp; /* how many ms ago */
  var mins = Math.floor(diff / 60000);
  var hrs  = Math.floor(diff / 3600000);
  var days = Math.floor(diff / 86400000);

  if (mins < 1)  return "just now";
  if (mins < 60) return mins + "m ago";
  if (hrs  < 24) return hrs  + "h ago";
  return days + "d ago";
}

/*
   Find the mood the user visited most often.
   Returns [moodName, count] or null if history is empty.
*/
function getTopMood(history) {
  var counts = {};

  /* Count how many times each mood appears */
  history.forEach(function(entry) {
    counts[entry.mood] = (counts[entry.mood] || 0) + 1;
  });

  /* Find the mood with the highest count */
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

/*
   Build the mood history widget HTML and show it on the home page.
   Called on page load and after every mood click.
*/
function renderHistoryWidget() {
  var widget = document.getElementById("history-widget");
  if (!widget) return;

  var history = getMoodHistory();

  /* If no history yet, hide the widget */
  if (history.length === 0) {
    widget.style.display = "none";
    return;
  }

  widget.style.display = "block";

  /* Build the "Most common mood" badge */
  var topMood = getTopMood(history);
  var topHtml = "";
  if (topMood) {
    var meta = MOOD_META[topMood[0]];
    topHtml =
      '<div class="history-top">' +
        '<span class="top-emoji">' + meta.emoji + '</span>' +
        '<div>' +
          '<div class="top-label">Most common mood</div>' +
          '<div class="top-name">' + meta.label +
            ' <span style="color:#bbb;font-weight:400;font-size:0.85rem">(' + topMood[1] + '×)</span>' +
          '</div>' +
        '</div>' +
        '<span class="trophy">🏆</span>' +
      '</div>';
  }

  /* Build the recent mood bubbles (last 10 visits) */
  var recent     = history.slice(0, 10);
  var bubblesHtml = recent.map(function(entry) {
    var meta = MOOD_META[entry.mood] || { emoji: "🌀", label: entry.mood, color: "#ccc" };
    return (
      '<div class="history-bubble" style="' +
        'background:' + meta.color + '44;' +         /* 44 = 27% opacity in hex */
        'border:1.5px solid ' + meta.color + '">' +
        '<span>' + meta.emoji + '</span>' +
        '<span>' + meta.label + '</span>' +
        '<span class="b-time">' + timeAgo(entry.timestamp) + '</span>' +
      '</div>'
    );
  }).join("");

  /* Assemble the full widget HTML */
  widget.innerHTML =
    '<div class="history-header">' +
      '<h3>📊 Mood History</h3>' +
      '<button class="history-clear" onclick="clearHistory()">Clear</button>' +
    '</div>' +
    topHtml +
    '<div class="history-bubbles">' + bubblesHtml + '</div>' +
    '<p class="history-note">Saved in your browser · clears when you clear browser data</p>';
}


/* ── 3. PAGE NAVIGATION ───────────────────────────────────── */
/*
   We have one HTML file with multiple <div id="page-..."> sections.
   Only the section with class "active" is visible (see CSS).
   showPage() hides all pages then shows the one we want.
*/

function showPage(pageId) {
  /* Remove "active" from every page */
  document.querySelectorAll(".page").forEach(function(page) {
    page.classList.remove("active");
  });

  /* Add "active" to the chosen page */
  var target = document.getElementById("page-" + pageId);
  if (target) {
    target.classList.add("active");
  }

  /* Scroll back to the top of the page */
  window.scrollTo(0, 0);
}

/*
   Open a mood page:
   1. Log the visit to history
   2. Navigate to the page
   3. Fill it with the right content
*/
function openMood(mood) {
  logMood(mood);
  showPage(mood);
  fillMoodPage(mood);
}


/* ── 4. FILL MOOD PAGE CONTENT ────────────────────────────── */
/*
   Each mood page has empty containers in the HTML (ul.quotes-list etc.).
   This function reads from the MOODS data above and fills them in.
   It also sets up the save button click handler for the journal.
*/
function fillMoodPage(mood) {
  var data = MOODS[mood];
  var page = document.getElementById("page-" + mood);
  if (!page || !data) return; /* safety check */

  var isLight = data.isLight; /* true for happy, false for all others */

  /* Helper: returns the right background style for a list item */
  function itemBg() {
    return isLight ? "background:rgba(255,255,255,0.40)" : "background:rgba(255,255,255,0.12)";
  }

  /* ─ Fill QUOTES ─ */
  var quotesTitle = page.querySelector(".quotes-title");
  var quotesList  = page.querySelector(".quotes-list");
  if (quotesTitle) quotesTitle.textContent = data.quotesTitle;
  if (quotesList) {
    quotesList.innerHTML = data.quotes.map(function(q) {
      return '<li style="' + itemBg() + '">' + q + '</li>';
    }).join("");
  }

  /* ─ Fill TIPS ─ */
  var tipsTitle = page.querySelector(".tips-title");
  var tipsList  = page.querySelector(".tips-list");
  if (tipsTitle) tipsTitle.textContent = data.tipsTitle;
  if (tipsList) {
    tipsList.innerHTML = data.tips.map(function(t) {
      return '<li style="' + itemBg() + '">' + t + '</li>';
    }).join("");
  }

  /* ─ Fill MUSIC CARDS ─ */
  var musicGrid = page.querySelector(".music-grid");
  if (musicGrid) {
    musicGrid.innerHTML = data.music.map(function(m) {
      var cardClass = "music-card" + (isLight ? " light" : "");
      return (
        '<a class="' + cardClass + '" ' +
           'href="https://www.youtube.com/results?search_query=' + encodeURIComponent(m.query) + '" ' +
           'target="_blank" rel="noopener noreferrer">' +
          '<span class="mc-emoji">' + m.emoji  + '</span>' +
          '<span class="mc-genre">' + m.genre  + '</span>' +
          '<span class="mc-play">▶ Play on YouTube</span>' +
        '</a>'
      );
    }).join("");
  }

  /* ─ Set JOURNAL labels ─ */
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

  /* Reset the journal to empty when switching moods */
  if (journalArea)  journalArea.value         = "";
  if (savedMsg)     savedMsg.style.display    = "none";
  if (savedEntries) savedEntries.innerHTML    = "";

  /* ─ Save button handler ─ */
  if (saveBtn && journalArea && savedMsg && savedEntries) {
    /* Remove any old onclick handler before setting a new one */
    saveBtn.onclick = function() {
      var text = journalArea.value.trim();
      if (!text) return; /* don't save if the textarea is empty */

      /* Create a new entry div and add it at the top of the list */
      var entry       = document.createElement("div");
      entry.className = "saved-entry" + (isLight ? " light" : "");
      entry.textContent = "• " + text;
      savedEntries.insertBefore(entry, savedEntries.firstChild);

      /* Show the memories section (hidden by default) */
      var memoriesSection = page.querySelector(".memories-section");
      if (memoriesSection) memoriesSection.style.display = "block";

      /* Clear the textarea */
      journalArea.value = "";

      /* Show "Saved!" message for 3 seconds, then hide it */
      savedMsg.textContent    = data.savedText;
      savedMsg.style.display  = "inline";
      setTimeout(function() {
        savedMsg.style.display = "none";
      }, 3000);
    };
  }
}


/* ── 5. HOME PAGE — COMFORT PANEL TOGGLE ──────────────────── */
/*
   The "Make me feel better" button shows/hides a panel
   by toggling the CSS class "open" (see .comfort-panel.open in CSS).
*/
function toggleComfort() {
  var panel = document.getElementById("comfort-panel");
  if (!panel) return;
  panel.classList.toggle("open");
}


/* ── 6. FOCUS TIMER ──────────────────────────────────────── */
/*
   The Focus Timer has 5 phases (like a state machine):
   ─────────────────────────────────────────────────────
   idle       → user picks focus duration, clicks "Start Focus"
   focusing   → timer is counting down
   focus-done → session ended: show motivation + achievement input
   breaking   → break countdown (5 or 10 min)
   break-done → break finished: "Break finished. Ready to focus again?"

   State is stored in the `focus` object below.
   All phases are controlled by focusSetPhase() which shows/hides
   the right HTML elements and updates the buttons.
*/

/* ── Motivational messages — picked randomly after each session ── */
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

/* Confetti colours — one per piece */
var CONFETTI_COLORS = [
  "#ff6b6b","#feca57","#48dbfb","#ff9ff3",
  "#54a0ff","#5f27cd","#00d2d3","#1dd1a1"
];

/* localStorage key for saved achievements */
var ACHIEVEMENTS_KEY = "moodyra_achievements";

/* All Focus Timer state in one object */
var focus = {
  duration:      25 * 60,  /* chosen focus duration in seconds (25 or 45 min) */
  breakDuration: 5  * 60,  /* chosen break duration in seconds (5 or 10 min) */
  timeLeft:      25 * 60,  /* current countdown in seconds */
  phase:         "idle",   /* current phase: see state machine above */
  interval:      null,     /* setInterval reference for the countdown */
  sessions:      0,        /* number of focus sessions completed */
  lastMsgIdx:    -1        /* index of last motivational message (avoids repeat) */
};


/* ── SOUNDS (Web Audio API — no mp3 files needed) ─────────── */
/*
   The Web Audio API lets us generate sounds in JavaScript.
   We create an AudioContext, then connect oscillators (tone generators)
   to it. Each sound is a few tones played in quick succession.
*/

/* Helper: create a single tone at a frequency */
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

/* Bright A-major ding — played when focus session ends */
function playDing() {
  try {
    var ac = new (window.AudioContext || window.webkitAudioContext)();
    [880, 1108, 1318].forEach(function(f, i) {
      focusTone(ac, f, ac.currentTime + i * 0.18, 0.3, 1.4);
    });
  } catch(e) {}
}

/* Descending relaxing tones — played when break starts */
function playBreakSound() {
  try {
    var ac = new (window.AudioContext || window.webkitAudioContext)();
    [523, 440, 349, 294].forEach(function(f, i) {
      focusTone(ac, f, ac.currentTime + i * 0.22, 0.22, 1.6);
    });
  } catch(e) {}
}

/* Quick happy pop — played when achievement is saved */
function playSuccess() {
  try {
    var ac = new (window.AudioContext || window.webkitAudioContext)();
    [659, 784, 1047].forEach(function(f, i) {
      focusTone(ac, f, ac.currentTime + i * 0.1, 0.2, 0.8);
    });
  } catch(e) {}
}

/* Gentle rising chime — played when break ends */
function playReadyChime() {
  try {
    var ac = new (window.AudioContext || window.webkitAudioContext)();
    [523, 659, 784, 1047].forEach(function(f, i) {
      focusTone(ac, f, ac.currentTime + i * 0.14, 0.18, 1.2);
    });
  } catch(e) {}
}


/* ── CONFETTI ─────────────────────────────────────────────── */
/*
   Creates 40 coloured squares that fly down the screen.
   Each piece is a <div> with a random colour, position,
   and animation delay — then removed after 2.5 seconds.
*/
function launchConfetti() {
  var container = document.getElementById("focus-confetti");
  if (!container) return;

  /* Remove any old confetti first */
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

  /* Clean up confetti after 3 seconds */
  setTimeout(function() {
    if (container) container.innerHTML = "";
  }, 3000);
}


/* ── PHASE MANAGER ───────────────────────────────────────── */
/*
   This function controls which parts of the UI are visible
   based on the current phase.  Every phase change goes through here.
*/
function focusSetPhase(phase) {
  focus.phase = phase;

  /* Grab all the HTML elements we need */
  var durationRow  = document.getElementById("focus-duration-row");
  var breakBanner  = document.getElementById("break-banner");
  var display      = document.getElementById("focus-display");
  var sublabel     = document.getElementById("focus-sublabel");
  var mainBtn      = document.getElementById("focus-main-btn");
  var resetBtn     = document.getElementById("focus-reset-btn");
  var donePanel    = document.getElementById("focus-done-panel");
  var breakDonePanel = document.getElementById("break-done-panel");

  /* Reset — hide everything first, then show only what's needed */
  if (durationRow)    durationRow.style.display    = "none";
  if (breakBanner)    breakBanner.style.display    = "none";
  if (donePanel)      donePanel.style.display      = "none";
  if (breakDonePanel) breakDonePanel.style.display = "none";
  if (resetBtn)       resetBtn.style.display       = "none";

  if (phase === "idle") {
    /* Show the duration picker; main button says Start */
    if (durationRow) durationRow.style.display = "flex";
    if (mainBtn) {
      mainBtn.style.display   = "";
      mainBtn.textContent     = "▶ Start Focus";
    }
    if (sublabel) sublabel.textContent = focus.duration / 60 + "-minute session";
    updateFocusDisplay();

  } else if (phase === "focusing") {
    /* Timer running — show Pause + Reset */
    if (mainBtn) {
      mainBtn.style.display = "";
      mainBtn.textContent   = "⏸ Pause";
    }
    if (resetBtn) resetBtn.style.display = "";
    if (sublabel) sublabel.textContent   = "Stay focused 🎯";

  } else if (phase === "paused") {
    /* Timer paused — show Resume + Reset */
    if (mainBtn) {
      mainBtn.style.display = "";
      mainBtn.textContent   = "▶ Resume";
    }
    if (resetBtn) resetBtn.style.display = "";
    if (sublabel) sublabel.textContent   = "Session paused";

  } else if (phase === "focus-done") {
    /* Show motivational message + achievement input */
    if (mainBtn) mainBtn.style.display = "none";
    if (donePanel) donePanel.style.display = "";
    /* Hide the confetti container label */
    if (sublabel) sublabel.textContent = "🎊 Session complete!";
    /* Show a random motivational message */
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
    /* Clear the achievement textarea and flash message */
    var ta = document.getElementById("achievement-input");
    if (ta) ta.value = "";
    var flash = document.getElementById("saved-flash");
    if (flash) flash.style.display = "none";

  } else if (phase === "breaking") {
    /* Break countdown running */
    if (mainBtn) mainBtn.style.display = "none";
    if (breakBanner) {
      breakBanner.style.display = "";
      var label = document.getElementById("break-duration-label");
      if (label) label.textContent = focus.breakDuration / 60;
    }
    if (sublabel) sublabel.textContent = "Take a breather ☕";

  } else if (phase === "break-done") {
    /* Break finished */
    if (mainBtn) mainBtn.style.display = "none";
    if (breakDonePanel) breakDonePanel.style.display = "";
    if (sublabel) sublabel.textContent = "Break finished!";
  }
}


/* ── DISPLAY HELPER ──────────────────────────────────────── */
/* Converts focus.timeLeft (seconds) to "MM:SS" and updates the screen */
function updateFocusDisplay() {
  var mins = String(Math.floor(focus.timeLeft / 60)).padStart(2, "0");
  var secs = String(focus.timeLeft % 60).padStart(2, "0");
  var el = document.getElementById("focus-display");
  if (el) el.textContent = mins + ":" + secs;
}


/* ── DURATION PICKERS ─────────────────────────────────────── */

/* Called by the 25 min / 45 min buttons */
function setFocusDuration(mins) {
  if (focus.phase !== "idle") return; /* only change when idle */
  focus.duration = mins * 60;
  focus.timeLeft = mins * 60;
  updateFocusDisplay();

  /* Highlight the correct button */
  var btn25 = document.getElementById("fd-25");
  var btn45 = document.getElementById("fd-45");
  if (btn25) btn25.classList.toggle("active", mins === 25);
  if (btn45) btn45.classList.toggle("active", mins === 45);

  var sublabel = document.getElementById("focus-sublabel");
  if (sublabel) sublabel.textContent = mins + "-minute session";
}

/* Called by the ☕ 5 min / 🛋️ 10 min break buttons */
function setBreakDuration(mins) {
  focus.breakDuration = mins * 60;

  /* Highlight the correct break button */
  var bd5  = document.getElementById("bd-5");
  var bd10 = document.getElementById("bd-10");
  if (bd5)  bd5.classList.toggle("active",  mins === 5);
  if (bd10) bd10.classList.toggle("active", mins === 10);
}


/* ── MAIN BUTTON DISPATCHER ──────────────────────────────── */
/*
   The main button (Start / Pause / Resume) calls this function.
   It checks the current phase and takes the right action.
*/
function focusMainAction() {
  if (focus.phase === "idle") {
    startFocusCounting();

  } else if (focus.phase === "focusing") {
    /* Pause the countdown */
    clearInterval(focus.interval);
    focusSetPhase("paused");

  } else if (focus.phase === "paused") {
    /* Resume the countdown */
    startFocusCounting();
  }
}


/* ── START COUNTING ──────────────────────────────────────── */
/* Begins (or resumes) the focus countdown via setInterval */
function startFocusCounting() {
  focusSetPhase("focusing");

  focus.interval = setInterval(function() {
    focus.timeLeft--;
    updateFocusDisplay();

    if (focus.timeLeft <= 0) {
      /* Focus session finished! */
      clearInterval(focus.interval);
      focus.sessions++;
      focusUpdateSessions();
      playDing();
      launchConfetti();
      focusSetPhase("focus-done");
    }
  }, 1000);
}


/* ── RESET ───────────────────────────────────────────────── */
/* Stops the timer and returns everything to idle state */
function resetFocusTimer() {
  clearInterval(focus.interval);
  focus.timeLeft = focus.duration;
  focusSetPhase("idle");
}


/* ── SAVE ACHIEVEMENT ────────────────────────────────────── */
/*
   Reads the textarea, saves the text (with timestamp) to
   localStorage, then starts the break timer.
*/
function saveAchievement() {
  var ta   = document.getElementById("achievement-input");
  var text = ta ? ta.value.trim() : "";
  if (!text) {
    /* Nothing typed — just start the break */
    startBreakTimer();
    return;
  }

  /* Load existing achievements from localStorage */
  var existing = [];
  try { existing = JSON.parse(localStorage.getItem(ACHIEVEMENTS_KEY) || "[]"); } catch(e) {}

  /* Add the new one with date + session number */
  existing.unshift({
    text:    text,
    date:    new Date().toLocaleDateString(),
    session: focus.sessions
  });

  /* Save back to localStorage */
  localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(existing));

  /* Play success sound and show "Saved!" flash */
  playSuccess();
  var flash = document.getElementById("saved-flash");
  if (flash) flash.style.display = "";

  /* Wait 1.2 seconds then start the break */
  setTimeout(startBreakTimer, 1200);

  /* Refresh the achievements list */
  renderAchievements();
}


/* ── START BREAK ─────────────────────────────────────────── */
/* Starts the break countdown (5 or 10 min) */
function startBreakTimer() {
  clearInterval(focus.interval); /* stop anything still running */
  focus.timeLeft = focus.breakDuration;
  focusSetPhase("breaking");
  playBreakSound();
  updateFocusDisplay();

  focus.interval = setInterval(function() {
    focus.timeLeft--;
    updateFocusDisplay();

    if (focus.timeLeft <= 0) {
      /* Break finished! */
      clearInterval(focus.interval);
      playReadyChime();
      focusSetPhase("break-done");
      /* Show "00:00" */
      var el = document.getElementById("focus-display");
      if (el) el.textContent = "00:00";
    }
  }, 1000);
}


/* ── START NEW SESSION ───────────────────────────────────── */
/* Called by the "🎯 Start New Session" button after break ends */
function startNewSession() {
  focus.timeLeft = focus.duration;
  focusSetPhase("idle");
}


/* ── SESSION COUNTER ─────────────────────────────────────── */
/* Shows one 🌟 per completed focus session */
function focusUpdateSessions() {
  var row = document.getElementById("focus-sessions");
  if (!row) return;
  if (focus.sessions === 0) { row.textContent = ""; return; }
  var stars = "";
  for (var i = 0; i < focus.sessions; i++) { stars += "🌟 "; }
  row.innerHTML = "Sessions completed: " + stars;
}


/* ── RENDER ACHIEVEMENTS ─────────────────────────────────── */
/* Reads localStorage and displays all saved achievements */
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

  /* Build the HTML for each achievement card */
  list.innerHTML = items.map(function(item) {
    return (
      '<div class="achievement-item">' +
        '<div class="ach-text">' + escapeHtml(item.text) + '</div>' +
        '<div class="ach-meta">Session ' + item.session + ' · ' + item.date + '</div>' +
      '</div>'
    );
  }).join("");
}


/* ── CLEAR ACHIEVEMENTS ──────────────────────────────────── */
function clearAchievements() {
  localStorage.removeItem(ACHIEVEMENTS_KEY);
  renderAchievements();
}


/* ── ESCAPE HTML ─────────────────────────────────────────── */
/* Prevents user text from breaking the HTML (basic security) */
function escapeHtml(str) {
  return str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}


/* ── 7. BREATHING EXERCISE (4-7-8 technique) ─────────────── */
/*
   The 4-7-8 technique:
   1. Breathe IN for 4 seconds
   2. HOLD for 7 seconds
   3. Breathe OUT for 8 seconds
   Repeat. This is proven to reduce anxiety and calm the nervous system.

   The circle in the HTML grows/shrinks using CSS transform scale().
*/

/* The three phases of one breathing cycle */
var BREATH_PHASES = [
  {
    label:       "Breathe In",
    duration:    4,            /* seconds */
    color:       "#a8dadc",    /* blue-green — calming */
    instruction: "Inhale slowly through your nose...",
    scale:       1.4           /* circle grows to 140% */
  },
  {
    label:       "Hold",
    duration:    7,
    color:       "#e2b4f0",    /* soft purple */
    instruction: "Hold your breath gently...",
    scale:       1.4           /* circle stays large */
  },
  {
    label:       "Breathe Out",
    duration:    8,
    color:       "#fcb69f",    /* peach — warm */
    instruction: "Exhale slowly through your mouth...",
    scale:       1.0           /* circle shrinks back to normal */
  }
];

/* Current state of the breathing exercise */
var breath = {
  active:   false, /* true while the exercise is running */
  phase:    0,     /* index into BREATH_PHASES (0, 1, or 2) */
  count:    4,     /* seconds remaining in the current phase */
  interval: null   /* reference to setInterval */
};

/*
   Update the breathing circle on screen.
   Changes color, size (scale), label, instruction, and countdown.
*/
function updateBreathDisplay() {
  var current = BREATH_PHASES[breath.phase];
  var circle  = document.getElementById("breath-circle");
  var label   = document.getElementById("breath-label");
  var instr   = document.getElementById("breath-instruction");
  var count   = document.getElementById("breath-count");

  if (circle) {
    circle.style.backgroundColor = current.color;
    circle.style.transform       = "scale(" + current.scale + ")";
    circle.textContent           = ""; /* hide the emoji while active */
  }
  if (label) label.textContent = current.label;
  if (instr) instr.textContent = current.instruction;
  if (count) count.textContent = breath.count;
}

/*
   Start or stop the breathing exercise.
   Called by the Start/Stop button in the HTML.
*/
function toggleBreathing() {
  breath.active = !breath.active;
  var btn = document.getElementById("breath-btn");

  if (breath.active) {
    /* Start the exercise from the beginning */
    if (btn) btn.textContent = "⏹ Stop";
    breath.phase = 0;
    breath.count = BREATH_PHASES[0].duration;
    updateBreathDisplay();

    /* Tick every second */
    breath.interval = setInterval(function() {
      breath.count--;

      if (breath.count <= 0) {
        /* Move to the next phase (loop back to 0 after the last one) */
        breath.phase = (breath.phase + 1) % BREATH_PHASES.length;
        breath.count = BREATH_PHASES[breath.phase].duration;
      }

      updateBreathDisplay();
    }, 1000);

  } else {
    /* Stop the exercise and reset everything */
    if (btn) btn.textContent = "▶ Start Breathing";
    clearInterval(breath.interval);

    /* Reset the circle back to its default look */
    var circle = document.getElementById("breath-circle");
    if (circle) {
      circle.style.transform       = "scale(1)";
      circle.style.backgroundColor = "rgba(255,255,255,0.22)";
      circle.textContent           = "🌬️";
    }

    /* Reset the text labels */
    var label = document.getElementById("breath-label");
    var instr = document.getElementById("breath-instruction");
    var count = document.getElementById("breath-count");
    if (label) label.textContent = "Press Start";
    if (instr) instr.textContent = "4-7-8 breathing to reduce anxiety";
    if (count) count.textContent = "";
  }
}


/* ── 8. STUDY TIPS BY MOOD (student page) ────────────────── */
/*
   When the user clicks a mood in the Student page,
   this function shows a colored box of study tips
   tailored to that mood.
*/

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

/*
   Called when the user clicks a mood button in the student page.
   Highlights the selected button and shows the matching tips.
*/
function selectStudyMood(mood) {
  /* Remove "active" class from all buttons, add it to the clicked one */
  document.querySelectorAll(".mood-sel-btn").forEach(function(btn) {
    btn.classList.toggle("active", btn.dataset.mood === mood);
  });

  var data   = studyTips[mood];
  var result = document.getElementById("study-tips-result");
  if (!result || !data) return;

  /* Readable mood labels for the heading */
  var moodLabels = {
    happy: "Happy 😊",
    sad:   "Sad 😔",
    calm:  "Calm 😌",
    angry: "Angry 😡",
    tired: "Tired 😴"
  };

  /* Set the background gradient and fill in the tips */
  result.style.background = data.gradient;
  result.innerHTML =
    '<h4>Study tips when you feel ' + moodLabels[mood] + ':</h4>' +
    '<ul>' +
      data.tips.map(function(tip) { return "<li>" + tip + "</li>"; }).join("") +
    '</ul>';

  /* Show the tips box (it's hidden until a mood is selected) */
  result.classList.add("show");
}


/* ── 9. AUTH — LOGIN / SIGNUP ────────────────────────────── */
/*
   Authentication uses only the browser's localStorage — no server needed.
   Two keys are used:
   • "moodyra_users"   — stores all accounts: { username: {name, password} }
   • "moodyra_session" — stores the current logged-in user: {name, username}

   The modal has two modes: "login" and "signup".
   switchAuthMode() toggles between them.
*/

/* localStorage keys */
var USERS_KEY   = "moodyra_users";
var SESSION_KEY = "moodyra_session";

/* Current auth mode: "login" or "signup" */
var authMode = "login";

/* The logged-in user object, or null if logged out */
var currentUser = null;


/* ── Read / write users from localStorage ── */

function getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY) || "{}"); }
  catch(e) { return {}; }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}


/* ── Open and close the modal ── */

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

/* Switch between Login ↔ Sign Up */
function switchAuthMode() {
  authMode = (authMode === "login") ? "signup" : "login";
  updateAuthModalUI();
  clearAuthFields();
}

/* Update the modal title, icon, button text, etc. to match the mode */
function updateAuthModalUI() {
  var isLogin = (authMode === "login");

  /* Icon and text */
  document.getElementById("auth-icon").textContent     = isLogin ? "👋" : "✨";
  document.getElementById("auth-title").textContent    = isLogin ? "Welcome back!" : "Create your account";
  document.getElementById("auth-subtitle").textContent = isLogin
    ? "Log in to track your mood journey"
    : "Join Moodyra and start your wellness journey";
  document.getElementById("auth-submit-text").textContent  = isLogin ? "Log In 🚀" : "Create Account ✨";
  document.getElementById("auth-switch-label").textContent = isLogin ? "Don't have an account?" : "Already have an account?";
  document.getElementById("auth-switch-btn").textContent   = isLogin ? "Sign up" : "Log in";

  /* Show/hide the Name field (only needed for signup) */
  var nameWrap = document.getElementById("auth-name-wrap");
  if (nameWrap) nameWrap.style.display = isLogin ? "none" : "";

  /* Hide any error from the previous attempt */
  showAuthError("");
}

/* Clear all input fields and hide error */
function clearAuthFields() {
  ["auth-name","auth-username","auth-password"].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.value = "";
  });
  showAuthError("");
}

/* Show or hide the red error message */
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


/* ── Handle the submit button ── */

function handleAuthSubmit() {
  var username = (document.getElementById("auth-username").value || "").trim().toLowerCase();
  var password = (document.getElementById("auth-password").value || "");
  var name     = (document.getElementById("auth-name")     ? document.getElementById("auth-name").value.trim() : "");

  /* Validate and perform login or signup */
  var error = (authMode === "login")
    ? authLogin(username, password)
    : authSignup(name, username, password);

  if (error) {
    showAuthError(error);
  } else {
    closeAuthModal();
  }
}


/* ── Login logic ── */

function authLogin(username, password) {
  if (!username || !password) return "Please fill in all fields.";
  var users = getUsers();
  var record = users[username];
  if (!record) return "Account not found. Please sign up first.";
  if (record.password !== password) return "Incorrect password. Please try again.";

  /* Save session */
  currentUser = { username: username, name: record.name };
  localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));
  updateNavAuth();
  return null; /* null = success */
}


/* ── Signup logic ── */

function authSignup(name, username, password) {
  if (!name)            return "Please enter your name.";
  if (username.length < 3) return "Username must be at least 3 characters.";
  if (password.length < 6) return "Password must be at least 6 characters.";

  var users = getUsers();
  if (users[username])  return "Username already taken. Please choose another.";

  /* Save the new account */
  users[username] = { name: name, password: password };
  saveUsers(users);

  /* Auto-login after signup */
  currentUser = { username: username, name: name };
  localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));
  updateNavAuth();
  return null; /* null = success */
}


/* ── Logout ── */

function authLogout() {
  currentUser = null;
  localStorage.removeItem(SESSION_KEY);
  updateNavAuth();
  /* Hide the dropdown */
  var dd = document.getElementById("user-dropdown");
  if (dd) dd.style.display = "none";
}


/* ── Toggle the user dropdown menu ── */

function toggleUserMenu() {
  var dd = document.getElementById("user-dropdown");
  if (!dd) return;
  dd.style.display = (dd.style.display === "none" || !dd.style.display) ? "" : "none";
}

/* Close dropdown when clicking anywhere outside it */
document.addEventListener("click", function(e) {
  var wrap = document.getElementById("nav-user-wrap");
  if (wrap && !wrap.contains(e.target)) {
    var dd = document.getElementById("user-dropdown");
    if (dd) dd.style.display = "none";
  }
});


/* ── Update the nav to show Login button or user avatar ── */

function updateNavAuth() {
  var loginBtn  = document.getElementById("nav-login-btn");
  var userWrap  = document.getElementById("nav-user-wrap");
  var initial   = document.getElementById("nav-user-initial");
  var nameEl    = document.getElementById("nav-user-name");
  var ddName    = document.getElementById("dd-name");
  var ddUser    = document.getElementById("dd-username");

  if (currentUser) {
    /* Logged in — show avatar, hide Login button */
    if (loginBtn) loginBtn.style.display = "none";
    if (userWrap) userWrap.style.display = "";
    if (initial)  initial.textContent    = currentUser.name.charAt(0).toUpperCase();
    if (nameEl)   nameEl.textContent     = currentUser.name;
    if (ddName)   ddName.textContent     = currentUser.name;
    if (ddUser)   ddUser.textContent     = "@" + currentUser.username;
  } else {
    /* Logged out — show Login button, hide avatar */
    if (loginBtn) loginBtn.style.display = "";
    if (userWrap) userWrap.style.display = "none";
  }
}

/* Load session from localStorage on page load */
function loadSession() {
  try { currentUser = JSON.parse(localStorage.getItem(SESSION_KEY) || "null"); }
  catch(e) { currentUser = null; }
  updateNavAuth();
}


/* ── 10. LANGUAGE & THEME TOGGLE ─────────────────────────── */

var TRANSLATIONS = {
  en: {
    home: "Home",
    about: "About",
    students: "Students",
    login: "👤 Login",
    logout: "🚪 Log Out",
    feelingToday: "How are you feeling today?",
    happy: "Happy",
    sad: "Sad",
    calm: "Calm",
    angry: "Angry",
    tired: "Tired",
    needComfort: "Make me feel better",
    chooseBetter: "Choose something to feel better:",
    studentSub: "Focus timer · Study tips · Exam stress relief",
    moodHistory: "Your Mood History",
  },
  ar: {
    home: "الرئيسية",
    about: "عن المشروع",
    students: "الطلاب",
    login: "👤 تسجيل الدخول",
    logout: "🚪 تسجيل الخروج",
    feelingToday: "كيف حالك اليوم؟",
    happy: "سعيد",
    sad: "حزين",
    calm: "هادئ",
    angry: "غاضب",
    tired: "متعب",
    needComfort: "أحتاج دعماً",
    chooseBetter: "اختر شيئاً لتشعر بتحسن:",
    studentSub: "مؤقت التركيز · نصائح الدراسة · تخفيف ضغط الامتحانات",
    moodHistory: "سجل مزاجك",
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

var currentLang = localStorage.getItem("moodyra_lang") || "en";
var currentTheme = localStorage.getItem("moodyra_theme") || "dark";

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("moodyra_lang", lang);

  /* Update all elements with data-i18n */
  document.querySelectorAll("[data-i18n]").forEach(function(el) {
    var key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang][key] !== undefined) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  /* Update comfort grid items */
  var grid = document.getElementById("comfort-grid-items");
  if (grid) {
    grid.innerHTML = COMFORT_ITEMS[lang].map(function(item) {
      return '<div class="comfort-item">' + item + '</div>';
    }).join("");
  }

  /* Update lang button label */
  var btn = document.getElementById("lang-btn");
  if (btn) btn.textContent = lang === "en" ? "AR" : "EN";

  /* Set direction */
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", lang);
}

function toggleLang() {
  applyLang(currentLang === "en" ? "ar" : "en");
}

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem("moodyra_theme", theme);
  if (theme === "light") {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }
  var btn = document.getElementById("theme-btn");
  if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
}

function toggleTheme() {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
}


/* ── 11. PAGE INITIALIZATION ─────────────────────────────── */
/*
   This block runs automatically when the page finishes loading.
   DOMContentLoaded fires when the browser has read all the HTML
   and built the elements — safe to start using getElementById etc.
*/
window.addEventListener("DOMContentLoaded", function() {
  showPage("home");        /* show the home page first */
  renderHistoryWidget();   /* show mood history if the user has any */
  focusSetPhase("idle");   /* set the Focus Timer to its starting state */
  renderAchievements();    /* load saved achievements from localStorage */
  loadSession();           /* restore login state if user was logged in before */
  applyLang(currentLang);  /* restore language preference */
  applyTheme(currentTheme); /* restore theme preference */
});
