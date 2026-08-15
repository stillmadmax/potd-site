---
title: Support - POTD (Pic of the Day)
lang: en
alt_url: https://stillmadmax.github.io/potd-site/support
alt_label: Deutsch
---

# Support for POTD (Pic of the Day)

POTD captions your photos with capture data such as place, date and weather - right on the iPhone,
without your images ever leaving the device.

## Contact

Questions, problems or feedback? Write to
[potd.picoftheday@gmail.com](mailto:potd.picoftheday@gmail.com).

## Quick start

1. **Create a template** - Settings → Libraries → Templates → "+". Write your text and insert
   variables like `{location}` or `{date}` - they are filled in automatically with the photo's
   data when applied. The picker lives in the editor under "Variables", a full list with examples
   in Settings → Defaults → All variables.
2. **Mark as favorite** - Tap the star on the left in the template list. Favorites show up as
   chips right on the main screen - tap one to apply it.
3. **Create a style** - Adjust font, size, color and background in the "Style" section and save it
   as a style - or create a new one in Settings → Libraries → Styles → "+".
4. **Link a style to a template** - Choose a style while editing a template. When the template is
   applied, it picks up that style automatically as a starting point.
5. **Apply and fine-tune** - Pick a template and style using the cards on the main screen or the
   favorite chips. In the full-screen editor you can move, scale and rotate the text - rotating
   snaps noticeably to the right angles (0°, 90°, 180°, 270°).
6. **Save** - "Save" creates a new image in your library (original name + "-potd"). Your original
   photo stays untouched.

## Photos, saving & sharing

### Does this overwrite my original photo?

No. Saving always creates a new, separate image in your photo library (original name + "-potd").
Your original photo stays untouched.

### Where are the images saved?

To your photo library - optionally also into an album of your choice (Settings → Save location).

### Can I edit several photos at once?

Yes - just pick several photos when opening (up to 20). Swipe in the preview to switch between
them. Each photo fills the variables with its own data (location, date, weather); the style
applies to all of them. "Save" creates a separate new image for each photo.

### What happens to my location when I share?

If the photo contains GPS data, the app asks before sharing: "Share with location" or "Share
without location". With "without location", the GPS data is removed from the shared copy only.
When saving to your library, the image data is kept in full.

## Data & variables

### Where do location, date and weather come from?

For a photo from your library, the values come from the data stored in the image itself
(EXIF/GPS); the weather is looked up for the moment the photo was taken. For a new capture in the
app, the current location and current weather are used. If data is missing (e.g. no GPS in the
image), the field stays empty - the app never guesses.

### Why do some fields stay empty when I take a photo in the app?

When you take a photo directly in the app, the technical camera data (aperture, ISO, lens, etc.)
isn't written into the image - those fields stay empty. Location, date and weather are filled in
live from your current location instead. "Show more" in the notice lists exactly which fields are
affected.

### Why are weather fields sometimes empty?

Weather data is looked up over the internet. It stays empty when there is no connection right now,
or when the photo lacks a GPS position or capture time - without both, no weather can be matched.
Here too: better empty than guessed.

### What does the peak field show?

The nearest peak recorded in OpenStreetMap, measured from the photo's GPS position - that is not
necessarily the peak visible in the picture. Without GPS data the field stays empty, and the
lookup can take a moment.

### Why is the peak field sometimes empty?

There are two reasons. First, the app only searches within about five kilometres - if no peak is
recorded there, the field stays empty instead of naming some far-away mountain. Second, the lookup
uses a free public map service that only allows a few requests in quick succession. If one fails,
the app pauses further attempts for about a minute so the other fields aren't held up - during that
time the peak field stays empty. Just pick the photo again a little later and it will usually work.

### When does the app need my location?

Only when taking a photo directly in the app - there, your current location and current weather
fill the variables. Photos from your library use only the data stored in the image; no location
access is needed for that.

## Templates & styles

### Can a template contain several texts?

Yes. Add more text fields in the template editor - each can be placed freely on the photo and
sized individually. Font, color and background apply to all fields together.

### How do I sort templates and styles?

Use the sort icon at the top of each list: Name A-Z / Z-A or "Custom order" (arrange by dragging).
The chosen order also applies to the favorite chips and the selection on the main screen.

### How do I duplicate or delete an entry?

Use the "•••" menu on the right of each row: Edit, Duplicate, Delete. Tapping the row itself opens
editing directly.

## Privacy

The full privacy policy is available here:
[Privacy policy for POTD](privacy)
