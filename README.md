# Merit Finance 💰
> **Premium Loan & Interest Management System**

Merit Finance is a sleek, modern, and highly interactive finance dashboard designed for tracking and managing monthly/daily interest loans (e.g., adagu/jewel loans, personal loans, agent-sourced loans). Built using a clean modern design system, the app provides real-time calculations, bilingual localization, dynamic arbitrage splits, and automated PDF exports.

---

## 🌟 Key Features

### 1. Dual Interest Tracking
- **Monthly Loans**: Fixed interest tracking at a 3% monthly rate with automated cycle checks.
- **Daily Loans**: Dynamic daily tracking calculated on flat Rupee amounts per day (e.g., ₹50/day) with flexible custom rates.

### 2. Modern UI & Responsive Layout
- Elegant dark-themed user interface utilizing premium fonts, HSL-tailored variables, and subtle glassmorphic elements.
- Optimized mobile-first experience with:
  - Side-by-side vertical dashboard scaling for Monthly and Daily tracks.
  - Tightly grouped, high-density metric cards.
  - Stacked mobile-friendly layout for complex inputs (Split Config Grid).
  - Quick-Action Interest Status Toggles with color-coded badges (`Paid` / `Unpaid`) directly in lists.

### 3. Smart Profit & Arbitrage Splits
- Auto-calculated split rates for investor share, agent commission, and owner net margins.
- Support for "split percentage" models and "custom absolute rupee payouts" per day.

### 4. Bilingual Localization
- Complete native translation support for **English** and **Tamil (தமிழ்)**.
- Instantly toggles labels, numbers, currency symbols, and PDF reports.

### 5. PDF Statements & Sheets Sync
- Generate professional client payment receipts and full portfolio spreadsheets.
- Integrated mapping helper to pull data directly from Google Sheets rows.

---

## 📂 File Structure

```bash
├── index.html          # Core layout, modals, and sidebar navigation
├── style.css           # Custom design system tokens, typography, and mobile queries
├── app.js              # Business logic, state, translations, and calculations
└── README.md           # Setup and project documentation
```

---

## 🚀 Quick Start / How to Run

Since the application runs entirely as a client-side single-page application (SPA), there is **no compilation step required**.

### 1. Local Server (Recommended)
To run the app locally and ensure all ES6 imports/network assets load correctly, serve the directory using a lightweight web server:

**Using Node.js:**
```bash
# Install and run a static server instantly
npx serve .
```

**Using Python:**
```bash
# For Python 3.x
python -m http.server 8000
```

Open your browser and navigate to `http://localhost:5000` (or `http://localhost:8000`).

### 2. Setup Firebase (Optional)
The system is built to support offline-first local storage by default, but can sync with Firebase Firestore for multi-user access:
1. Open [app.js](file:///c:/Users/ivarc/Desktop/finance%202/app.js).
2. Locate the `firebaseConfig` object at the top of the file.
3. Replace the placeholder values with your Firebase Project Configuration keys.

---

## 🛠️ Tech Stack
- **Structure**: Semantic HTML5 & SVG icons.
- **Styling**: Vanilla CSS3 (Custom Variables, Flexbox, CSS Grid, media query breakpoints).
- **Core Engine**: Vanilla Javascript (ES6+, LocalStorage, Firestore bindings).
- **PDF Engine**: jsPDF library (loaded via CDN).
