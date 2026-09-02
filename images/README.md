# Photos

Drop your photos in this folder using these exact base names. The extension
doesn't matter: .jpg, .jpeg, .png and .webp all work, so a screenshot saved as
a PNG is fine as long as it's named `work-02.png` and not `Screenshot 5.png`. The site picks
them up automatically, no code changes needed. Until a file exists, that slot
shows a warm colour wash instead of a broken image, so the page still looks
finished while you gather photos.

| Filename       | Where            | Shape      | What's in it now                      |
|----------------|------------------|------------|---------------------------------------|
| `hero.jpg`     | Top of the page  | Tall 3:4   | Honey blonde, big curls, in the studio |
| `studio.jpg`   | About section    | Tall 4:5   | The room. Still needed                 |
| `work-01.jpg`  | Gallery, tall    | Tall 3:4   | Long layers on dark hair               |
| `work-02.jpg`  | Gallery          | Square     | Ash blonde with a shadow root          |
| `work-03.jpg`  | Gallery, tall    | Tall 3:4   | Keratin smoothing                      |
| `work-04.jpg`  | Gallery          | Square     | Glossed bronde                         |
| `work-05.jpg`  | Gallery          | Square     | Caramel face framing                   |
| `work-06.jpg`  | Gallery, tall    | Tall 3:4   | Men's cut                              |
| `work-07.jpg`  | Gallery          | Square     | Glass straight, very long              |
| `work-08.jpg`  | Gallery          | Square     | Soft blonde, mid length                |

The gallery sits on a near-black band, so photos shot against a light wall
will pop there. Send me the original files rather than screenshots. Screenshots
of your Google photos come out soft and carry the Google interface around the
edges.

## Cropping

`tools/crop.html` does the cropping and the naming for you. Open it in any
browser (double click the file), pick a slot, paste or drop a photo, drag the
box, hit save. It writes the file with the right name at the right shape.
Everything runs in the browser tab, nothing is uploaded.

Tips:
- Shoot in daylight near a window. It beats any filter.
- Save them around 1600px on the long edge and under 400KB each so the page
  stays fast on phones. Anything under about 800px wide will look soft.
- On Google Maps, click a photo so it opens full screen BEFORE you right click
  and save. Saving straight from the grid gives you a 384px thumbnail.
- The gallery captions live in `index.html` under the `work` section. Change
  them to match whatever photos you use.
- Ask clients before posting their photos.
