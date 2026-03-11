# 🌙 Asma Ul Husna — Learn the 99 Names of Allah ﷻ

An interactive, Duolingo-style web application to help Muslims and learners memorise the **99 Beautiful Names of Allah ﷻ** (*Asma Ul Husna*), with correct Arabic diacriticals and meanings in **English, German, and Turkish**.

> *"Allah has ninety-nine names, one hundred minus one. Whoever memorises them will enter Paradise."*
> — Sahih al-Bukhari 2736

---

## ✨ Features

| Feature | Description |
|---|---|
| 🃏 **Flashcards** | Study names with flip animations — mark what you know |
| ✏️ **Quiz** | Arabic name shown — choose the correct meaning (4 options) |
| 🔄 **Reverse Quiz** | Meaning shown — identify the correct Arabic name |
| 🔗 **Matching Game** | Pair Arabic names to their translations |
| 📖 **Browse All** | Full grid of all 99 names — click any for details |
| 🌍 **3 Languages** | English, Deutsch, Türkçe |
| ⭐ **Progress Tracking** | XP, streak, and memorised count saved locally |

---

## 🕌 Islamic Content Standards

- All 99 Names include **correct Arabic script with full diacritical marks (Tashkeel/Harakat)**
- Transliterations follow academic standards with proper macrons and dots
- Meanings and descriptions drawn from established Islamic scholarship
- The honour marker **ﷻ** (Jalla Jalaaluhu) is used where appropriate
- No images of animate beings — aesthetic uses Islamic geometric patterns

---

## 🚀 Deployment (GitHub Pages)

1. **Fork or clone** this repository
2. Go to your repo → **Settings → Pages**
3. Set Source to `Deploy from a branch` → `main` → `/ (root)`
4. Your app will be live at `https://yourusername.github.io/asma-ul-husna/`

No build tools, no dependencies, no server needed — pure HTML, CSS, and JavaScript.

---

## 📁 Project Structure

```
asma-ul-husna/
├── index.html          # App shell & all screens
├── css/
│   └── style.css       # Islamic geometric dark theme
├── js/
│   ├── data.js         # All 99 Names (Arabic + EN/DE/TR)
│   └── app.js          # Game logic & state management
└── README.md
```

---

## 🎨 Design

- **Theme**: Deep midnight blue with Islamic gold accents and emerald highlights
- **Typography**: Amiri (Arabic) + Cinzel Decorative (display) + Lato (UI)
- **Background**: Subtle Islamic hexagonal geometric pattern
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|---|---|
| `Space` / `Enter` | Reveal flashcard |
| `→` / `1` | Mark as known |
| `←` / `2` | Mark for review |
| `Esc` | Close modal |

---

## 🤝 Contributing

Contributions are welcome! If you find an error in any Arabic name, transliteration, or translation, please open an issue with a citation from a reliable Islamic source.

**Suggested improvements:**
- Add more languages (Arabic explanations, French, Urdu, etc.)
- Audio pronunciation for each name
- Spaced repetition algorithm (SM-2)
- Offline PWA support

---

## 📜 Licence

This project is open source under the **MIT Licence**.

Content (the 99 Names and their meanings) is drawn from classical Islamic scholarship and is in the public domain.

---

<div align="center">
  <strong>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</strong><br/>
  Made with intention for the sake of Allah ﷻ
</div>
