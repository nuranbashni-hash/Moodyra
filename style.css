@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  min-height: 100vh;
  overflow-x: hidden;
}

h1, h2, h3, h4 {
  font-family: 'Playfair Display', serif;
}

.page {
  display: none;
  min-height: 100vh;
  padding: 90px 20px 60px;
  transition: background 0.8s ease;
}

.page.active {
  display: block;
}

.bg-home {
  background: linear-gradient(-45deg, #fddde6, #e0c3fc, #c2e9fb, #fddde6);
  background-size: 300% 300%;
  animation: gradientShift 12s ease infinite;
}

@keyframes gradientShift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.bg-happy   { background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); }
.bg-sad     { background: linear-gradient(to bottom, #1e3c72 0%, #2a5298 100%); }
.bg-calm    { background: linear-gradient(to bottom, #a8dadc 0%, #457b9d 100%); }
.bg-angry   { background: linear-gradient(to bottom, #2b0000 0%, #8b0000 100%); }
.bg-tired   { background: linear-gradient(to bottom, #2c3e50 0%, #4ca1af 100%); }
.bg-student { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); }

.glass {
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 24px;
}

.glass-dark {
  background: rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
}

.orbs-container {
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(50px);
  animation: orbFloat linear infinite;
}

@keyframes orbFloat {
  0%   { transform: translate(0, 0) scale(1); }
  25%  { transform: translate(30px, -25px) scale(1.08); }
  50%  { transform: translate(-20px, 20px) scale(0.94); }
  75%  { transform: translate(15px, -10px) scale(1.04); }
  100% { transform: translate(0, 0) scale(1); }
}

.orb-1 { width:300px; height:300px; left:10%; top:15%; background:rgba(255,182,193,0.35); animation-duration:18s; }
.orb-2 { width:200px; height:200px; left:75%; top:10%; background:rgba(176,196,255,0.35); animation-duration:22s; animation-delay:3s; }
.orb-3 { width:250px; height:250px; left:55%; top:60%; background:rgba(200,162,255,0.30); animation-duration:20s; animation-delay:6s; }
.orb-4 { width:180px; height:180px; left:85%; top:70%; background:rgba(255,218,185,0.35); animation-duration:25s; animation-delay:2s; }
.orb-5 { width:220px; height:220px; left:20%; top:75%; background:rgba(152,230,200,0.28); animation-duration:19s; animation-delay:8s; }
.orb-6 { width:150px; height:150px; left:45%; top:25%; background:rgba(255,200,220,0.30); animation-duration:16s; animation-delay:4s; }

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding: 14px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.nav-logo img {
  height: 40px;
  width: auto;
}

.nav-logo span {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  font-weight: 700;
  color: #444;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 6px;
  align-items: center;
}

.nav-links button {
  padding: 8px 18px;
  border: none;
  border-radius: 50px;
  background: transparent;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #444;
  cursor: pointer;
  transition: background 0.2s;
}

.nav-links button:hover {
  background: rgba(255, 255, 255, 0.45);
}

.nav-links .btn-student {
  background: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  gap: 5px;
}

.nav-links .btn-student:hover {
  background: rgba(255, 255, 255, 0.5);
}

.nav-login-btn {
  padding: 8px 18px;
  border: none;
  border-radius: 50px;
  background: rgba(255,255,255,0.25);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #444;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 5px;
}

.nav-login-btn:hover { background: rgba(255,255,255,0.5); }

.nav-toggle-btn {
  padding: 6px 13px;
  border: 1.5px solid rgba(255,255,255,0.3);
  border-radius: 50px;
  background: rgba(255,255,255,0.15);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #444;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  letter-spacing: 0.5px;
}

.nav-toggle-btn:hover {
  background: rgba(255,255,255,0.4);
  transform: scale(1.06);
}

.nav-user-wrap { position: relative; }

.nav-user-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px 6px 6px;
  border: none;
  border-radius: 50px;
  background: rgba(255,255,255,0.25);
  cursor: pointer;
  transition: background 0.2s;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #444;
}

.nav-user-btn:hover { background: rgba(255,255,255,0.45); }

.nav-user-initial {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f472b6, #a855f7);
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-dropdown {
  position: absolute;
  top: 46px;
  right: 0;
  min-width: 170px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  background: rgba(20,20,40,0.95);
  border: 1px solid rgba(255,255,255,0.12);
  z-index: 300;
}

.dd-name {
  padding: 12px 16px 2px;
  color: #fff;
  font-weight: 700;
  font-size: 0.88rem;
}

.dd-username {
  padding: 0 16px 10px;
  color: rgba(255,255,255,0.45);
  font-size: 0.78rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.dd-logout {
  display: block;
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  text-align: left;
  color: #fca5a5;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.2s;
}

.dd-logout:hover { background: rgba(239,68,68,0.15); }

.auth-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.auth-modal {
  position: relative;
  width: 100%;
  max-width: 420px;
  border-radius: 28px;
  padding: 36px 32px 28px;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 80%);
  border: 1px solid rgba(255,255,255,0.14);
  box-shadow: 0 24px 60px rgba(0,0,0,0.4);
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-sizing: border-box;
}

.auth-close {
  position: absolute;
  top: 14px;
  right: 18px;
  background: none;
  border: none;
  color: rgba(255,255,255,0.4);
  font-size: 1.2rem;
  cursor: pointer;
  transition: color 0.2s;
}

.auth-close:hover { color: rgba(255,255,255,0.8); }

.auth-icon {
  text-align: center;
  font-size: 2.8rem;
}

.auth-modal-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  margin: 0;
}

.auth-modal-sub {
  color: rgba(255,255,255,0.55);
  font-size: 0.85rem;
  text-align: center;
  margin: -6px 0 0;
}

.auth-input {
  width: 100%;
  padding: 13px 16px;
  border-radius: 18px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.18);
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  box-sizing: border-box;
  transition: border-color 0.2s;
}

.auth-input::placeholder { color: rgba(255,255,255,0.38); }
.auth-input:focus { outline: none; border-color: rgba(255,255,255,0.5); }

.auth-error {
  background: rgba(239,68,68,0.18);
  color: #fca5a5;
  border-radius: 14px;
  padding: 10px 14px;
  font-size: 0.83rem;
  text-align: center;
  margin: 0;
}

.auth-submit-btn {
  width: 100%;
  padding: 14px;
  font-size: 1rem;
  border-radius: 18px;
  margin-top: 2px;
}

.auth-switch-row {
  text-align: center;
  color: rgba(255,255,255,0.5);
  font-size: 0.85rem;
  margin: 0;
}

.auth-switch-btn {
  background: none;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  font-family: 'Plus Jakarta Sans', sans-serif;
  text-decoration: underline;
  padding: 0;
  margin-left: 4px;
}

.page-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
}

.center { text-align: center; }

.home-hero {
  text-align: center;
  padding: 40px 0 20px;
}

.home-hero h1 {
  font-size: clamp(2rem, 5vw, 3.8rem);
  color: #444;
  margin-bottom: 40px;
  font-weight: 600;
}

.mood-pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-bottom: 60px;
}

.mood-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 24px;
  background: rgba(255, 255, 255, 0.80);
  backdrop-filter: blur(8px);
  border: none;
  border-radius: 50px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: #444;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.mood-pill:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0,0,0,0.14);
}

.mood-pill .mood-icon { font-size: 1.5rem; }

.comfort-btn-main {
  display: block;
  margin: 0 auto 20px;
  padding: 16px 36px;
  background: rgba(255,255,255,0.25);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.4);
  border-radius: 50px;
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: #555;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  box-shadow: 0 2px 10px rgba(0,0,0,0.07);
}

.comfort-btn-main:hover {
  background: rgba(255,255,255,0.45);
  transform: scale(1.02);
}

.comfort-panel {
  display: none;
  margin: 16px auto;
  max-width: 640px;
}

.comfort-panel.open { display: block; }

.comfort-panel-inner { padding: 28px; }

.comfort-panel p {
  text-align: center;
  color: #666;
  font-size: 1rem;
  margin-bottom: 18px;
}

.comfort-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.comfort-item {
  padding: 14px 18px;
  background: rgba(255,255,255,0.45);
  border-radius: 16px;
  text-align: center;
  font-weight: 600;
  color: #555;
  font-size: 0.95rem;
  transition: background 0.2s;
}

.comfort-item:hover { background: rgba(255,255,255,0.70); }

.student-card {
  max-width: 480px;
  margin: 30px auto 0;
  padding: 20px 28px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.student-card:hover {
  background: rgba(255,255,255,0.50);
  transform: scale(1.02);
}

.student-card .s-icon { font-size: 2rem; }

.student-card .s-text .s-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #444;
}

.student-card .s-text .s-sub {
  font-size: 0.82rem;
  color: #888;
  margin-top: 2px;
}

.student-card .s-arrow {
  margin-left: auto;
  color: #aaa;
  font-size: 1.3rem;
}

.history-widget {
  max-width: 640px;
  margin: 0 auto 30px;
  padding: 24px 28px;
}

.history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.history-header h3 { font-size: 1.1rem; color: #444; }

.history-clear {
  font-size: 0.78rem;
  color: #aaa;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px 10px;
  border-radius: 20px;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.history-clear:hover { color: #e74c3c; background: rgba(231,76,60,0.06); }

.history-top {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255,255,255,0.55);
  padding: 12px 16px;
  border-radius: 16px;
  margin-bottom: 14px;
}

.history-top .top-emoji  { font-size: 1.6rem; }
.history-top .top-label  { font-size: 0.72rem; color: #888; font-weight: 600; }
.history-top .top-name   { font-weight: 700; color: #333; font-size: 0.95rem; }
.history-top .trophy     { margin-left: auto; font-size: 1.4rem; }

.history-bubbles {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 10px;
}

.history-bubble {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 14px;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 600;
}

.history-bubble .b-time { color: #999; font-weight: 400; font-size: 0.75rem; }

.history-note { text-align: center; font-size: 0.72rem; color: #bbb; }

.mood-header { text-align: center; margin-bottom: 30px; }

.mood-header h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #fff;
  margin-bottom: 10px;
}

.mood-header .subtitle {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.80);
  margin-bottom: 20px;
}

.back-btn {
  display: inline-block;
  padding: 9px 22px;
  background: rgba(255,255,255,0.18);
  border: 1px solid rgba(255,255,255,0.28);
  border-radius: 50px;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  text-decoration: none;
}

.back-btn:hover { background: rgba(255,255,255,0.30); }

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  margin-bottom: 22px;
}

@media (max-width: 640px) {
  .two-col        { grid-template-columns: 1fr; }
  .comfort-grid   { grid-template-columns: 1fr; }
  .music-grid     { grid-template-columns: 1fr 1fr; }
}

.card { padding: 28px; }

.card h3 {
  font-size: 1.25rem;
  margin-bottom: 16px;
}

.card ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card ul li {
  padding: 11px 15px;
  border-radius: 14px;
  font-size: 0.95rem;
  line-height: 1.5;
}

.journal-area {
  width: 100%;
  min-height: 120px;
  padding: 14px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.25);
  background: rgba(255,255,255,0.12);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.95rem;
  color: #fff;
  resize: none;
  outline: none;
  margin-bottom: 14px;
  transition: border-color 0.2s;
}

.journal-area::placeholder { color: rgba(255,255,255,0.45); }
.journal-area:focus         { border-color: rgba(255,255,255,0.5); }

.journal-area.light {
  background: rgba(255,255,255,0.50);
  color: #555;
  border: 1px solid rgba(255,255,255,0.4);
}

.journal-area.light::placeholder { color: rgba(0,0,0,0.3); }

.save-btn {
  padding: 12px 30px;
  border: none;
  border-radius: 50px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0,0,0,0.15);
  transition: transform 0.2s, box-shadow 0.2s;
}

.save-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.20);
}

.saved-msg {
  display: none;
  font-weight: 600;
  font-size: 0.92rem;
  margin-left: 14px;
}

.save-row {
  display: flex;
  align-items: center;
}

.saved-entries {
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin-top: 14px;
}

.saved-entry {
  padding: 11px 15px;
  border-radius: 14px;
  font-size: 0.9rem;
  background: rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.85);
}

.saved-entry.light {
  background: rgba(255,255,255,0.55);
  color: #555;
}

.music-section {
  padding: 26px 28px;
  margin-bottom: 20px;
}

.music-section h3 {
  font-size: 1.25rem;
  margin-bottom: 16px;
  color: #fff;
}

.music-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.music-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  padding: 16px 10px;
  border-radius: 18px;
  background: rgba(255,255,255,0.10);
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  text-align: center;
}

.music-card:hover {
  background: rgba(255,255,255,0.22);
  transform: translateY(-3px);
}

.music-card .mc-emoji { font-size: 2rem; }
.music-card .mc-genre { font-size: 0.82rem; font-weight: 700; color: rgba(255,255,255,0.9); }
.music-card .mc-play  { font-size: 0.72rem; color: rgba(255,255,255,0.55); }

.music-card.light          { background: rgba(255,255,255,0.45); }
.music-card.light:hover    { background: rgba(255,255,255,0.70); }
.music-card.light .mc-genre { color: #c0392b; }
.music-card.light .mc-play  { color: #888; }

.student-header { text-align: center; margin-bottom: 28px; }

.student-header h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #fff;
  margin-bottom: 8px;
}

.student-header p { color: rgba(255,255,255,0.65); font-size: 1rem; }

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  color: #fff;
  text-align: center;
  margin-bottom: 16px;
}

.mood-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 18px;
}

.mood-sel-btn {
  padding: 10px 20px;
  background: rgba(255,255,255,0.14);
  border: none;
  border-radius: 50px;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 600;
  font-size: 0.92rem;
  cursor: pointer;
  transition: background 0.2s;
}

.mood-sel-btn:hover,
.mood-sel-btn.active {
  background: rgba(255,255,255,0.90);
  color: #1a1a2e;
}

.tips-result {
  display: none;
  border-radius: 18px;
  padding: 20px 24px;
}

.tips-result.show { display: block; }

.tips-result h4 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
  font-size: 0.95rem;
}

.tips-result ul                { list-style: none; display: flex; flex-direction: column; gap: 8px; }
.tips-result ul li             { background: rgba(0,0,0,0.15); padding: 10px 14px; border-radius: 12px; color: rgba(255,255,255,0.9); font-size: 0.88rem; }

.focus-timer-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  overflow: hidden;
}

.focus-confetti {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 10;
}

.confetti-piece {
  position: absolute;
  top: -12px;
  width: 10px; height: 10px;
  border-radius: 2px;
  animation: confettiFall 2.2s ease-in forwards;
}

@keyframes confettiFall {
  0%   { transform: translateY(0) rotate(0deg);    opacity: 1; }
  100% { transform: translateY(500px) rotate(720deg); opacity: 0; }
}

.focus-btn-row {
  display: flex;
  gap: 10px;
}

.duration-btn {
  padding: 8px 20px;
  background: rgba(255,255,255,0.18);
  border: none;
  border-radius: 50px;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.duration-btn.active {
  background: #fff;
  color: #1a1a2e;
}

.break-banner {
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  padding: 10px 28px;
  border-radius: 50px;
  text-align: center;
}

.focus-timer-display {
  font-family: 'Courier New', monospace;
  font-size: 4.5rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 3px;
}

.timer-sublabel {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.55);
  margin-top: -12px;
}

.timer-btns { display: flex; gap: 10px; }

.timer-btn {
  padding: 11px 26px;
  background: #fff;
  color: #1a1a2e;
  border: none;
  border-radius: 50px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  transition: transform 0.15s;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.timer-btn:hover { transform: scale(1.05); }

.timer-btn.secondary {
  background: rgba(255,255,255,0.20);
  color: #fff;
  box-shadow: none;
}

.sessions-row {
  font-size: 0.88rem;
  color: rgba(255,255,255,0.65);
  min-height: 22px;
  text-align: center;
}

.focus-done-panel {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.focus-message-box {
  background: linear-gradient(135deg, rgba(124,58,237,0.35), rgba(168,85,247,0.25));
  border: 1px solid rgba(168,85,247,0.4);
  border-radius: 20px;
  padding: 20px 24px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
}

.focus-message-box .msg-emoji { font-size: 2rem; display: block; margin-bottom: 8px; }
.focus-message-box .msg-text  { color: #fff; font-size: 0.95rem; font-weight: 600; line-height: 1.5; }

.achievement-section {
  width: 100%;
  background: rgba(255,255,255,0.07);
  border-radius: 20px;
  padding: 20px 22px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.achievement-section h4 {
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  margin: 0;
}

.achievement-hint {
  color: rgba(255,255,255,0.5);
  font-size: 0.8rem;
  margin: -6px 0 0;
}

.focus-textarea {
  width: 100%;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 14px;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.9rem;
  padding: 12px 14px;
  resize: vertical;
  box-sizing: border-box;
}

.focus-textarea::placeholder { color: rgba(255,255,255,0.35); }
.focus-textarea:focus { outline: none; border-color: rgba(255,255,255,0.45); }

.achievement-save-row {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.break-pick-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding-top: 4px;
  border-top: 1px solid rgba(255,255,255,0.1);
}

.break-pick-label {
  color: rgba(255,255,255,0.5);
  font-size: 0.8rem;
}

.break-pick-btn {
  padding: 6px 16px;
  background: rgba(255,255,255,0.15);
  border: none;
  border-radius: 50px;
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.break-pick-btn.active {
  background: rgba(124,58,237,0.8);
}

.skip-link {
  background: none;
  border: none;
  color: rgba(255,255,255,0.45);
  font-size: 0.78rem;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  align-self: flex-start;
}

.skip-link:hover { color: rgba(255,255,255,0.75); }

.break-done-panel {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px;
  background: linear-gradient(135deg, rgba(16,185,129,0.25), rgba(5,150,105,0.2));
  border: 1px solid rgba(16,185,129,0.35);
  border-radius: 20px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}

.break-done-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

.break-done-sub {
  color: rgba(255,255,255,0.65);
  font-size: 0.85rem;
  margin: 0 0 6px;
}

.achievements-section {
  width: 100%;
  border-top: 1px solid rgba(255,255,255,0.12);
  padding-top: 18px;
}

.achievements-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

#achievements-title {
  color: rgba(255,255,255,0.85);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
}

.clear-achievements-btn {
  background: rgba(239,68,68,0.25);
  border: none;
  border-radius: 50px;
  color: #fca5a5;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 5px 14px;
  cursor: pointer;
  font-family: 'Plus Jakarta Sans', sans-serif;
  transition: background 0.2s;
}

.clear-achievements-btn:hover { background: rgba(239,68,68,0.45); }

.achievements-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.achievement-item {
  background: rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 12px 16px;
}

.achievement-item .ach-text {
  color: #fff;
  font-size: 0.88rem;
  margin-bottom: 4px;
}

.achievement-item .ach-meta {
  color: rgba(255,255,255,0.4);
  font-size: 0.75rem;
}

.breath-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 28px;
}

.breath-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: rgba(255,255,255,0.22);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  transition: transform 1s ease, background-color 1s ease;
}

.breath-label {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
}

.breath-instruction {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.60);
  text-align: center;
}

.breath-count {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  min-height: 44px;
}

.exam-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 22px;
}

@media (max-width: 640px) {
  .exam-grid  { grid-template-columns: 1fr; }
  .music-grid { grid-template-columns: 1fr 1fr; }
  .two-col    { grid-template-columns: 1fr; }
}

.exam-card {
  background: rgba(255,255,255,0.10);
  border-radius: 18px;
  padding: 20px 16px;
}

.exam-card .e-icon { font-size: 1.8rem; margin-bottom: 8px; }
.exam-card h4      { font-family:'Plus Jakarta Sans',sans-serif; font-weight:700; color:#fff; font-size:0.88rem; margin-bottom:5px; }
.exam-card p       { color:rgba(255,255,255,0.65); font-size:0.80rem; line-height:1.5; }

.affirmations-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 11px;
}

.affirmation {
  background: rgba(255,255,255,0.10);
  padding: 15px 18px;
  border-radius: 16px;
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
}

.chatgpt-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 18px;
}

.chatgpt-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 18px 12px;
  background: rgba(255,255,255,0.10);
  border-radius: 18px;
  text-decoration: none;
  color: #fff;
  font-size: 0.88rem;
  font-weight: 600;
  text-align: center;
  transition: background 0.2s, transform 0.2s;
}

.chatgpt-card:hover {
  background: rgba(255,255,255,0.20);
  transform: translateY(-3px);
}

.cg-emoji { font-size: 1.8rem; }

.open-chatgpt {
  display: inline-block;
  margin-top: 4px;
  padding: 10px 28px;
  background: rgba(255,255,255,0.18);
  border-radius: 50px;
  color: #fff;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background 0.2s;
}

.open-chatgpt:hover { background: rgba(255,255,255,0.30); }

.text-center { text-align: center; }

.about-wrap {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
}

.about-wrap h1 {
  font-size: clamp(2rem, 5vw, 3rem);
  color: #444;
  margin-bottom: 10px;
}

.about-subtitle {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 40px;
}

.about-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

@media (max-width: 640px) {
  .about-cards { grid-template-columns: 1fr; }
}

.about-card {
  padding: 28px 22px;
  text-align: left;
}

.ac-icon {
  font-size: 2rem;
  margin-bottom: 12px;
}

.about-card h3 {
  font-size: 1.15rem;
  color: #333;
  margin-bottom: 8px;
}

.about-card p {
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
}

.about-team {
  text-align: center;
  margin-top: 36px;
  padding: 36px 24px;
  background: rgba(255,255,255,0.55);
  border-radius: 28px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.7);
}

.about-team-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 6px;
}

.about-team-sub {
  color: #888;
  font-size: 0.85rem;
  margin-bottom: 28px;
}

.about-team-members {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.team-avatar {
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f472b6, #a855f7);
  color: #fff;
  font-size: 1.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 20px rgba(168,85,247,0.35);
}

.team-name {
  font-weight: 700;
  color: #333;
  font-size: 1rem;
}

.mb-20 { margin-bottom: 20px; }
.mb-24 { margin-bottom: 24px; }
