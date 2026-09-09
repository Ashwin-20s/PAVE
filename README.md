# CV Jewellery — WhatsApp Automation Demo

A frontend-only, rule-based WhatsApp-style chat demo built to showcase
CV Jewellery's ₹4,000 WhatsApp Business Automation Starter package.
No AI, no backend, no database — every reply is predefined in
`src/data/chatbotFlow.js`.

## Tech stack
React 18 + JavaScript (JSX) + Vite + Tailwind CSS + lucide-react icons.

## ⚠️ Replace the logo before showing this to the client
No logo file was provided with the brief this was built from, so
`public/assets/cv-jewellery-logo.jpeg` is currently a placeholder "CV"
monogram. Drop the real CV Jewellery logo into that same file path
(keep the filename, or update the `logo` path in
`src/data/businessData.js` if you rename it). If the file ever fails
to load, the header automatically falls back to an initials badge
instead of a broken image icon.

## Run it locally
1. Install Node.js 18+ if you don't have it.
2. In this folder, run:
   ```
   npm install
   npm run dev
   ```
3. Open the printed `http://localhost:...` link. On a phone, use your
   computer's local network IP instead of `localhost` (Vite prints
   this too when you run `npm run dev -- --host`).

To build a static production version:
```
npm run build
npm run preview
```

## Reusing this for another client
Everything client-specific lives in two files:
- `src/data/businessData.js` — name, tagline, logo path, phone, email, hours.
- `src/data/chatbotFlow.js` — every menu, submenu, and answer the bot gives.

The UI/logic in `src/components/ChatApp.jsx` doesn't need to change.

## Project structure
```
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── assets/
│       └── cv-jewellery-logo.jpeg   # placeholder — replace with the real logo
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   ├── businessData.js
    │   └── chatbotFlow.js
    └── components/
        ├── ChatApp.jsx
        ├── ChatHeader.jsx
        ├── MessageBubble.jsx
        ├── QuickReplyButtons.jsx
        ├── TypingIndicator.jsx
        ├── ChatInput.jsx
        └── BusinessPanel.jsx        # desktop-only "Demo" label, hidden on mobile
```

## Verified conversation flows
- Main Menu → Our Jewellery → Rings → Main Menu
- Main Menu → Our Jewellery → Custom Jewellery → Main Menu
- Main Menu → Manufacturing Services → Custom Manufacturing → Main Menu
- Main Menu → Manufacturing Services → CAD / Jewellery Design → Main Menu
- Main Menu → Bank Auction Jewellery → Available Jewellery → Main Menu
- Main Menu → Bank Auction Jewellery → Current Pricing → Enquire Now
- Main Menu → Bank Auction Jewellery → Auction Information → Main Menu
- Main Menu → Wholesale / Bulk Orders → Contact Sales
- Main Menu → Pricing & Quotations → Request a Quote
- Main Menu → FAQs → any question → Main Menu
- Main Menu → Contact Us → Call Us (demo only) → Main Menu
- Typing an unsupported message → fallback reply → main menu
- "⋮" menu → Restart Demo → clears chat, shows welcome message again

No live gold prices, bank partnerships, or certifications are shown or
implied anywhere — pricing/auction sections direct the customer to
contact the team, exactly as specified.
