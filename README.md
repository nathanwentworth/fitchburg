# Fitchburg State Game Design and Communications Media showcase

Here's a quick tutorial on how to modify and maintain this site. 

## Setup

### via Github.com

Simply go to [the repo on Github](https://github.com/nathanwentworth/fitchburg) and edit the files in the `_games`, `_events`, or `_drafts` folders. When you save and commit these files the site will automatically rebuild.

(**Note:** this requires having editing privileges on the repo. Ideally this will be uploaded to a school-owned account.)

### Locally

If you want to edit this project locally, then clone the repo into whatever folder you want on your computer `git clone https://github.com/nathanwentworth/fitchburg.git`. Jekyll also needs to be installed `gem install jekyll` for this to build. Once you make your local changes, run `jekyll build` and push changes to Github. 

## Making a New Site Entry

Go into the folder for the type of post you want to make, whether it be `_games`, `_events`, etc. Create a new file, and name it in the format of `YYYY-MM-DD-url-goes-here.md`. It *must* be in this format. Year, month, day, separated by dashes, with leading 0s, and then the url after the date and a .md extension. The date will be what sorts the post, in chronological order, so make it the release date of the game. 

Once this file is made, insert two sets of `---` at the top of the post. In between the two dash sets, insert the variables that you need. 

### The only required variables for games are:

- **title**
- **main_image**
  - _please make this 16:9!_

### Additional optional variables are:

- images
  - This is the images on the right side of the page, and in the hover gallery.
- videos
  - This is for videos that are placed on the right-hand side, along with images. These do not appear in the hover gallery.
- header_video
  - This puts a video where the main image usually goes. If this variable exists, it will override the main image.
- ext_url
  - This is a URL you want to point to that will override the project page URL on the gallery page. Meaning, if this is set, the user cannot navigate to the project page without a direct link.
- ext_links
  - This is a list of titles and urls in the following format:

```
ext_links:
  "itch.io": "https://itch.io"
  "google": "https://google.com"
```

- authors
  - This is a list of names and urls in the same format as ext_urls.
  - If you don't have a site to link to, just leave the second part blank (as can be see with "Fake Person").

```
authors:
  "Nathan Wentworth": "https://nathanwentworth.co"
  "Ethan Thibault": "http://ethanthibault.xyz"
  "Connor Botts": "http://connors.games"
  "Fake Person": ""
```

- tools
  - This is an array of names of tools used.
  - Format: [Unity, 3DS Max, Adobe Illustrator]

All posts are written in [markdown](https://daringfireball.net/projects/markdown/syntax) format. You can also insert any normal html into a post and it will render normally (this is good for embedding youtube videos or itch download widgets). 

Check out the test file in `_drafts` for an example! An easy method to create a new post is to just copy and paste another project's file and edit the pasted fields.

Images should be uploaded into `/assets/img/category`

## Editing Communications Media Category Descriptions

Go into `_communications-media`, open the file with the title of the concentration you want to edit, and change the text below the second set of `---`. 

## Editing Main Category Pages

All of these are `name-of-page.md`, so `index.md`, `about.md`, etc. 


