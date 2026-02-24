# Chronos - Musical Time Calculator ⏱️🎼

[![Deployed on Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)](https://chronosscore.vercel.app)

**Chronos** is a minimalist and professional web tool designed for conductors, composers, and music producers. It allows you to calculate the exact duration of complex musical pieces by creating multiple sections (or movements) with different BPMs, time signatures, and reference note values.

🔗 **Live Demo:** [https://chronosscore.vercel.app](https://chronosscore.vercel.app)

## ✨ Features

* **Dynamic Calculation**: Instantly calculates total duration based on BPM, Time Signature, and the number of measures.
* **Reference Note Support**: Choose the specific note value that dictates the pulse (from Whole Note to Sixteenth Note).
* **Dotted Note Support**: Full support for pulse markings based on dotted notes (essential for compound meters like 6/8, 9/8, or 12/8).
* **Multilingual (i18n)**: Interface available in **English** and **Portuguese**, using standard technical musical terminology.
* **Drag & Drop Organization**: Reorder sections of your piece using an intuitive interface; the total time is recalculated in real-time.
* **Local Persistence**: Your project is automatically saved to the browser (`localStorage`), so you never lose your work when refreshing or closing the tab.
* **Responsive Design**: Mobile-first approach, optimized for use in rehearsals or recording sessions.

## 🚀 Tech Stack

* [React.js](https://reactjs.org/) - UI Library (v19).
* [Tailwind CSS](https://tailwindcss.com/) - Modern styling (v4).
* [Framer Motion](https://www.framer.com/motion/) - Animations and Drag & Drop.
* [Vite](https://vitejs.dev/) - Fast frontend tooling (v7).

## 🛠️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/jmirand4/ChronosScoreWebApp.git](https://github.com/jmirand4/ChronosScoreWebApp.git)
    ```

2.  **Install dependencies:**
    ```bash
    cd ChronosScoreWebApp
    npm install --legacy-peer-deps
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in your browser:**
    `http://localhost:5173`

## 🎼 Musical Logic Example

If you configure a section with:
- **BPM**: 120
- **Time Signature**: 6/8
- **Reference**: Dotted Quarter Note
- **Measures**: 8

Chronos applies compound meter logic (2 pulses per measure) to return the exact duration of **8 seconds**.



## 📂 Project Structure

```text
src/
├── assets/          # Musical note icons and images
├── components/      # React components (Summary, SectionForm, SectionItem)
├── constants/       # Translations and musical symbols
├── context/         # Translation Context (LanguageContext)
├── hooks/           # Custom hooks (useSections)
└── utils/           # Musical math logic (musicMath)
