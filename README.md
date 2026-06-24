# 🐾 Pet Health Tracker

A single-file, **offline** web app for tracking your pet's medications, coughs, symptoms, and vet visits — then producing a clean, printable summary to bring to the vet.

Everything runs in your browser. There is no server, no account, and no internet required. All data (including photos) is stored **locally on your device**.

---

## 📁 The app

The entire app is one file:

```
dog-health-tracker.html
```

Just open it in a browser. To make it feel like a real app on your phone, see [Install on your phone](#-install-on-your-phone-offline).

---

## ✨ Features

### 🐶 Multi-pet support
- Track several pets, each with **completely separate** records (medications, coughs, symptoms, vet info, visits, reminders, inventory, and photo).
- Switch pets from the dropdown in the header.
- Add / rename / delete pets with the **⚙︎** button.
- Each pet has its own profile photo (tap the avatar to set one).

### 💊 Medication logging
- Record **medication name**, **dosage**, **date/time**, and notes.
- **Dosage uses Amount + Form** — Tablet, Capsule, Chewable, Liquid (mL), Drops, Syringe (mL), Injection (mL), Sachet/Powder, Spray, or Other.
- Quick amount chips (**¼ ½ 1 1½ 2**) make half-tablets one tap.
- **One-tap presets**: previously logged med + dose combos appear as buttons to re-log instantly.
- Edit or delete any entry.

### ⏰ AM/PM reminders
- Set a medication, dose, and **AM time + PM time**.
- While the app is open, you get a browser notification when a dose is due (and an in-app alert).
- See [Limitations](#-limitations) regarding background notifications.

### 📅 Weekly "at a glance" grid
- 7 days across the columns, **AM / PM** as rows.
- **✅** taken (with time) · **⏰** due now · **⭕** missed.
- **Tap a cell** to mark a dose taken (or tap a ✅ to undo). You can also backfill past days.
- Marking/undoing a dose here automatically updates **inventory**.

### 📦 Medication inventory
- Enter **current stock** and a **low-supply threshold** per medication.
- Logged doses (manual, preset, or grid "mark taken") **auto-subtract** from stock when the name + form match.
- When stock hits the threshold you get a **⚠️ Low stock** alert and a **🛒 Time to refill** banner.
- **＋** to refill, plus edit/delete per item.

### 😮‍💨 Cough logging
- Record the **time** and the **condition** when it happened: Sleeping/Resting, Excitement, Activity/Exercise, Eating/Drinking, or Other.
- Add **severity** (Mild / Moderate / Severe) and notes.
- **Log now** button records a cough at the current moment.

### 🩺 Symptom logging with photos
- Track symptoms like Diarrhea, Loose stool, Vomiting, Injury, Skin/Rash, Appetite, or Other.
- **Attach a photo** (opens the camera on a phone) — useful for showing the vet stool, rashes, or injuries.
- Tap a thumbnail to view full-screen. Photos are included in the report.

### 🏥 Vet info & visit records
- Save your **clinic name, doctor, phone, and address**.
- Log visits with **date, reason, diagnosis/treatment, and price paid**.
- See a running **total spent**.

### 📋 Vet report
- Pick a **date range** (7/14/30/90 days, All, or custom From/To).
- Summary: total **Coughs**, **Avg coughs/day** (over the selected range), **Symptoms**, and **Med doses**.
- **Coughs-per-day bar chart**, condition breakdown, severity totals.
- Symptom breakdown, medications given, vet visits & costs.
- A combined **detailed log** timeline (with symptom photos).
- **🖨 Print / Save as PDF** — formatted cleanly for the vet, with your pet's photo and clinic info in the header.

### 🌙 Dark mode
- Toggle with the **🌙 / ☀️** button for a calmer view during evening care. Your choice is remembered.

### 💾 Backup & restore
- **Export backup** saves *all pets* and *all photos* into one `.json` file.
- **Import backup** restores from that file.
- Found at the bottom of the **Vet** tab.

---

## 🚀 Getting started

1. Open `dog-health-tracker.html` in any modern browser (Chrome, Safari, Edge, Firefox).
2. Name your pet (header dropdown → it starts as "My pet"; rename via **⚙︎**).
3. Tap the avatar to add a photo (optional).
4. Start logging from the bottom navigation: **Meds · Cough · Symptom · Report · Vet**.

---

## 📱 Install on your phone (offline)

1. Transfer `dog-health-tracker.html` to your phone (email it to yourself, AirDrop, or a cloud link) and open it once in your mobile browser.
2. **iPhone (Safari):** Share → **Add to Home Screen**.
3. **Android (Chrome):** menu **⋮** → **Add to Home screen**.

It then launches like an app and works fully offline.

---

## 💾 Where your data lives (important)

- Data is stored in your browser's **localStorage** (records) and **IndexedDB** (photos), on **this device only**.
- It is **not** synced across devices and is **not** backed up to any cloud.
- Clearing your browser's site data, or deleting the app, **erases your history**.

👉 **Export a backup regularly** (Vet tab → Export backup) and keep the file somewhere safe.

---

## ⚠️ Limitations

- **Notifications only fire while the app is open** in the browser. A standalone offline file cannot wake itself in the background. True background alarms would require hosting the app on a server (HTTPS) so it can run a background worker.
- **Inventory matching is by name + form.** If a logged dose's medication name and form don't exactly match an inventory item, the dose is still recorded but stock won't change.
- Deleting a logged dose from the **Recent medications** list does not return it to stock (use the inventory **＋** to correct). Undoing via the weekly grid *does* return it to stock.

---

## 🔒 Privacy

Your data never leaves your device. There are no analytics, no accounts, and no network calls. The only time anything leaves the app is when **you** export a backup file or print a report.

---

## 🛠️ Technical notes

- Pure **HTML + CSS + vanilla JavaScript** in a single file. No build step, no dependencies, no frameworks.
- Storage:
  - `localStorage` — text records, namespaced per pet (e.g. `dht_meds_v1_<petId>`).
  - `IndexedDB` (`dht_db` → `images` store) — compressed photos (pet avatars and symptom photos).
- Photos are auto-resized/compressed on upload to keep storage small.
- Backup files are plain JSON (version 2 = multi-pet; older version 1 single-pet backups still import).
