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
- `assets/img/app-hauptbildschirm.jpg` - Screenshot für den Hero.

## Offene Punkte

- [ ] **Echte Kontaktdaten** in `impressum.md`, `en/imprint.md`, `datenschutz.md` und
      `en/privacy.md` eintragen - aktuell steht überall "Max Mustermann" als Platzhalter.
      Alle vier Dateien gleichzeitig anfassen.
- [ ] **App-Store-Link** setzen: in `index.html` und `en/index.html` zeigen drei `href="#"` auf
      nichts (Nav-Button, Hero-Button, Abschluss-Button).
- [ ] `assets/img/demo-foto.jpg` ergänzen - ein unbeschriftetes Reisefoto im Hochformat als
      Hintergrund der Schritt-Animation. Fehlt die Datei, bleibt ein gestreifter Platzhalter
      stehen, die Seite bleibt heil.

## Lokal ansehen

Die Landing Pages laufen ohne Buildschritt, `index.html` im Browser öffnen genügt. Für die
Markdown-Seiten braucht es Jekyll:

```bash
bundle exec jekyll serve
```
