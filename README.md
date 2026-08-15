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
- `assets/img/hero-de.jpg` / `hero-en.jpg` - Hauptbildschirm-Screenshots für Hero und
  Schritt 3 der Demo; `vorlagen-de.jpg` / `templates-en.jpg` - Vorlagen-Liste für Schritt 2.
  Quelle: `~/personal/apps/potd_images/` (mit `sips` auf 760px verkleinert, Statusleiste
  abgeschnitten).
- `assets/js/demo.js` - schaltet die Drei-Schritte-Demo (Klick auf einen Schritt zeigt den
  passenden Screen, Auto-Durchlauf bis zum ersten Klick).

## Offene Punkte

- [ ] **Echte Kontaktdaten** in `impressum.md`, `en/imprint.md`, `datenschutz.md` und
      `en/privacy.md` eintragen - aktuell steht überall "Max Mustermann" als Platzhalter.
      Alle vier Dateien gleichzeitig anfassen.
- [ ] **App-Store-Link** setzen: in `index.html` und `en/index.html` zeigen drei `href="#"` auf
      nichts (Nav-Button, Hero-Button, Abschluss-Button).
- [ ] **Original-Foto für Schritt 1** der Demo ergänzen (das Eibsee-Foto unbeschriftet, DE und
      EN identisch) - bis dahin zeigt Schritt 1 einen gestreiften Platzhalter, die Seite bleibt
      heil.
- [ ] **Bildschirmaufnahme** des kompletten Ablaufs (Foto wählen → Vorlage → Sichern) als
      loopendes `<video>` in die Demo-Sektion einbauen, sobald die Aufnahme vorliegt.

## Herkunft

Die Landing Page entstand als Entwurf in Claude Design (Projekt "Maxi test", privat:
<https://claude.ai/design/p/9323d520-be86-4f2f-a618-0da0c9a8cb79>) und wurde von dort in dieses
Repo überführt. **Maßgeblich ist ab jetzt dieses Repo** - der Entwurf wird nicht mitgepflegt und
divergiert mit jeder Änderung hier weiter.

Vorgänger-Repo `stillmadmax/potd-privacy` (nur Datenschutz, Support, Impressum) ist am
2026-08-09 hier aufgegangen und gelöscht worden; die alten URLs sind bewusst tot.

## Lokal ansehen

Die Landing Pages laufen ohne Buildschritt, `index.html` im Browser öffnen genügt. Für die
Markdown-Seiten braucht es Jekyll:

```bash
bundle exec jekyll serve
```
