# 🐾 Pet Health Tracker

A free, **offline** app for tracking your pet's medications, coughs, symptoms, and vet visits — then producing a clean, printable summary to bring to the vet.

**Anyone can use it for their own pet(s).** Your records and photos are stored **only on your own device, inside your own copy of the app** — nothing is ever uploaded, there are no accounts, and there is no tracking.

---

## ▶️ Use it now

**Open the app:** https://y-007.github.io/dog-health-tracker/

That's it — it works in any modern browser, on phone or computer. To make it a real app on your phone, install it (below).

---

## 📲 Install it like a normal app (recommended)

Open the link above on your phone, then:

- **iPhone (Safari):** tap the **Share** button → **Add to Home Screen**.
- **Android (Chrome):** tap the **⋮** menu → **Install app** / **Add to Home screen**.

You'll get a **🐾 paw icon** on your home screen. Tap it and the app opens **full-screen, like any other app, and works offline**. Everything you enter stays inside that app on your device.

> 💡 You can also download `dog-health-tracker.html` from this repo and open it directly — but installing from the link gives the proper app icon and offline experience.

---

## 🔒 Your data is yours

- Records are saved in your browser's **localStorage**; photos in **IndexedDB** — both **on your device only**.
- The app makes **no network calls**, has **no accounts**, and collects **no analytics**.
- Each person's data is completely separate — there is no shared server, so one user can never see another's pets.
- The only time data leaves your device is when **you** choose to **Export a backup** or **Print** a report.

⚠️ Because data is local, **clearing your browser's data or deleting the app can erase your history.** Use **Vet tab → Export backup** now and then, and keep the file somewhere safe. (On iPhone, deleting the home-screen app can clear its data — back up first.)

---

## 🔄 Updates

When a new version is published, the app handles updates for you:

1. Next time you open it **while online**, it detects the new version.
2. A banner appears: **"🔄 New version available — Update."**
3. Tap **Update** and the app reloads on the latest version.

No app store, no reinstalling — the icon stays the same, and **your data is never touched by an update**. If you ignore the banner, it updates automatically next time you fully close and reopen the app. The current version is shown at the bottom of the **Vet** tab.

---

## ✨ Features

- **🐶 Multi-pet** — track several pets, each with completely separate records and its own photo.
- **💊 Medication logging** — name, dosage as **Amount + Form** (Tablet, Capsule, Liquid mL, Drops, Syringe, Injection, Sachet, Spray…), with quick ½/1/2 chips and one-tap presets.
- **⏰ AM/PM reminders** — get notified when a dose is due (while the app is open).
- **📅 Weekly grid** — 7 days × AM/PM; tap to mark a dose taken (✅) or missed (⭕).
- **📦 Inventory** — set current stock + a low threshold; doses auto-subtract, with a **🛒 refill** alert.
- **😮‍💨 Cough logging** — time, condition (sleeping, excitement, activity…), severity, notes.
- **🩺 Symptom logging with photos** — diarrhea, vomiting, injury, rash, etc., with camera photos.
- **🏥 Vet info & visits** — clinic/doctor/phone/address, plus visits with diagnosis and price (running total).
- **📋 Vet report** — pick a date range; see totals, **avg coughs/day**, a coughs-per-day **bar chart**, breakdowns, and a detailed log. **Print / Save as PDF**.
- **🌙 Dark mode** — a calmer view for evening care.
- **💾 Backup & restore** — export/import all pets and photos as a single file.

---

## ⚠️ Limitations

- **Reminders/notifications only fire while the app is open** in the browser. A purely client-side app cannot wake itself in the background.
- **Inventory matching is by name + form** — if a logged dose's name/form doesn't match an inventory item, the dose is recorded but stock won't change.
- Deleting a dose from **Recent medications** doesn't return it to stock (use the inventory **＋**). Undoing via the weekly grid *does*.

---

## 🛠️ Technical notes

- Pure **HTML + CSS + vanilla JavaScript** in a single file (`dog-health-tracker.html`). No build step, no dependencies.
- **PWA** support via `manifest.json` + `service-worker.js` (offline + installable). `index.html` redirects to the app.
- Storage: `localStorage` (records, namespaced per pet, e.g. `dht_meds_v1_<petId>`) and `IndexedDB` (`dht_db` → `images`) for compressed photos.
- Backups are plain JSON (version 2 = multi-pet; version 1 single-pet backups still import).

### Releasing an update (for maintainers)
1. Edit `dog-health-tracker.html` (and/or other files).
2. Bump the version in **two places**: `CACHE` in `service-worker.js` (e.g. `v1.0.1`) and the version line at the bottom of the Vet tab in `dog-health-tracker.html`.
3. Commit and push to `main`. GitHub Pages redeploys; users get the in-app update banner.

---

## 📄 License

[MIT](LICENSE) — free to use, modify, and share.
