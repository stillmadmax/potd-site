# potd-site

Website zur iPhone-App **Pic of the Day** ([Code-Repo](https://github.com/stillmadmax/potd)).
Ausgeliefert über GitHub Pages: <https://stillmadmax.github.io/potd-site/>

## Struktur

| Pfad | Seite |
|------|-------|
| `index.html` | Landing Page (Deutsch) |
| `datenschutz.md` | Datenschutzerklärung |
| `support.md` | Support / FAQ |
| `impressum.md` | Impressum |
| `en/index.html` | Landing page (English) |
| `en/privacy.md`, `en/support.md`, `en/imprint.md` | englische Fassungen |

Die beiden Landing Pages sind statisches HTML und gehen unverändert durch Jekyll. Die vier
Textseiten sind Markdown und nutzen `_layouts/default.html`.

**Sprachumschalter:** Jede Textseite trägt `lang`, `alt_url` und `alt_label` im Front Matter, das
Layout baut daraus den Link auf die andere Sprache. Die Landing Pages verlinken sich direkt.

## Assets

- `assets/css/fonts.css` + `assets/fonts/` - **selbst gehostete** Schriften (Playfair Display,
  Raleway, Caveat, jeweils Latin-Subset als woff2). Bewusst kein Google-CDN: die Seite verspricht
  "keine Tracker" und würde sonst bei jedem Aufruf die IP der Besucher an Google übertragen.
  Alle drei Familien stehen unter SIL OFL 1.1, die Lizenztexte liegen als `OFL-*.txt` daneben und
  müssen beim Ausliefern mitgehen.
- `assets/css/site.css` - Farben und Abstände spiegeln das "Quiet Studio"-Theme der App
  (`AppTheme` in `potd/ModernDesign.swift`).
- `assets/img/hero-de.jpg` / `hero-en.jpg` - Hero-Bild: der rohe Hauptbildschirm-Screenshot
  (DE: `~/personal/apps/potd_images/IMG_2479.jpg`; EN: `potd_en/IMG_2491.PNG` mit
  abgeschnittener Statusleiste), auf 760px verkleinert und per CSS als Karte gerundet
  (32px, mobil 28px) mit blauem Schatten. Frühere Varianten (Store-Bild mit/ohne
  Marketing-Rahmen, Geräte-Crop) wirkten reingeklebt bzw. abgeschnitten.
- `assets/img/app-store-badge-{de,en}.svg` - offizielle Apple-Badges ("Laden im App Store" /
  "Download on the App Store", schwarz), geladen von tools.applemediaservices.com; ersetzen
  die eigenen Pill-Buttons in Hero und Abschluss-CTA (der Nav-Button bleibt Text).
- `assets/img/store-{02,05,06,07}-{de,en}.jpg` - Bilderleiste unter den Funktionen-Karten
  (horizontal scrollbar, Scroll-Snap): Variablen-Katalog, Formen-Menü, Vollbild-Editor,
  Dark Mode. Gleiche Quelle, mit `sips` auf 660px verkleinert. 03/04 bewusst weggelassen,
  die zeigt das Video schon.
- `assets/video/potd-flow.mp4` / `potd-flow-en.mp4` - Bildschirmaufnahmen des Ablaufs
  (App auf Deutsch bzw. Englisch), laufen als stummer Loop in der Drei-Schritte-Sektion.
  Aus `~/personal/apps/potd_images/potd_flow{,_en}.MP4` mit ffmpeg erzeugt: Statusleiste
  abgeschnitten, Foto-Picker geblurrt (bis auf die gewählte Kachel oben links), Schnitt
  beim "Gesichert"/"Saved"-Popup (der Mediathek-Teil dahinter ist raus), danach 4 s das
  fertige Bild (`finished_{de,en}.JPEG`) als Standbild; 810px, 30 fps, ohne Ton.

## Offene Punkte

- [ ] **App-Store-Link verifizieren**: `id6780421556` ist in beiden Landing Pages verlinkt
      (DE mit `/de/`, EN mit `/us/`), gab aber vor dem Release noch 404 - nach der
      App-Freigabe einmal klicken und prüfen.

## Herkunft

Die Landing Page entstand als Entwurf in Claude Design (Projekt "Maxi test", privat:
<https://claude.ai/design/p/9323d520-be86-4f2f-a618-0da0c9a8cb79>) und wurde von dort in dieses
Repo überführt. **Maßgeblich ist ab jetzt dieses Repo** - der Entwurf wird nicht mitgepflegt und
divergiert mit jeder Änderung hier weiter.

Vorgänger-Repo `stillmadmax/potd-privacy` (nur Datenschutz, Support, Impressum) ist am
2026-08-09 hier aufgegangen und gelöscht worden; die alten URLs sind bewusst tot.

## Kontaktadresse (bewusst nicht im Repo)

In `datenschutz.md`, `impressum.md`, `en/privacy.md` und `en/imprint.md` steht der Platzhalter
`%%KONTAKT_ADRESSE%%`. Der Pages-Workflow (`.github/workflows/pages.yml`) ersetzt ihn beim
Deploy durch das Repository-Secret **`KONTAKT_ADRESSE`** (Format: `Straße Nr<br>PLZ Ort`).
So steht die Anschrift nur im Secret und auf der gerenderten Seite, nicht im öffentlichen
Repo oder seiner Historie. Bei einer Adressänderung: nur das Secret ändern und den Workflow
neu laufen lassen ("Run workflow"); liegt die neue Adresse außerhalb Bayerns, zusätzlich die
Aufsichtsbehörde im Abschnitt "Beschwerderecht" anpassen.

## Lokal ansehen

Die Landing Pages laufen ohne Buildschritt, `index.html` im Browser öffnen genügt. Für die
Markdown-Seiten braucht es Jekyll:

```bash
bundle exec jekyll serve
```
