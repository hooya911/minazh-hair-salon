# Photos

Drop your own JPGs in this folder using these exact filenames. The site picks
them up automatically, no code changes needed. Until a file exists, that slot
shows a warm colour wash instead of a broken image, so the page still looks
finished while you gather photos.

| Filename       | Where it shows      | Best shape        | Suggestion                                   |
|----------------|---------------------|-------------------|----------------------------------------------|
| `hero.jpg`     | Top of the page     | Tall (3:4)        | Your strongest finished-hair shot            |
| `studio.jpg`   | About section       | Tall (4:5)        | The room: the chair, the lit mirror, the wood floor |
| `work-01.jpg`  | Gallery (tall)      | Tall (3:4)        | Long layers (added, but only 384px wide)     |
| `work-02.jpg`  | Gallery             | Square            | Sharp bob                                    |
| `work-03.jpg`  | Gallery             | Square            | Root colour and toner                        |
| `work-04.jpg`  | Gallery (tall)      | Tall (3:4)        | Smoothing treatment                          |
| `work-05.jpg`  | Gallery             | Square            | Brunette bob                                 |
| `work-06.jpg`  | Gallery             | Square            | Colour correction, before and after          |

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
