# Fitchburg State Game Design and Communications Media showcase

Here's a quick tutorial on how to modify and maintain this site. 

## Setup

### via Github.com

Simply go to [the repo on Github](https://github.com/nathanwentworth/fitchburg) and edit the files in the `_games`, `_events`, or `_drafts` folders. When you save and commit these files the site will automatically rebuild.

### locally

If you want to edit this project locally, then clone the repo into whatever folder you want on your computer `git clone https://github.com/nathanwentworth/fitchburg.git`. Jekyll also needs to be installed `gem install jekyll` for this to build. Once you make your local changes, run `jekyll build` and push changes to Github. 

## Making a new site entry

Go into the folder for the type of post you want to make, whether it be `_games`, `_events`, etc. Create a new file, and name it in the format of `YYYY-MM-DD-url-goes-here.md`. It *must* be in this format. Year, month, day, separated by dashes, with leading 0s, and then the url after the date and a .md extension. The date will be what sorts the post, in chronological order, so make it the release date of the game. 

Once this file is made, insert two sets of `---` at the top of the post. In between the two dash sets, insert the variables that you need. 

The only required variables for games are:

- title
- main_image

Additional optional variables are:

- images
  - this is the images on the right side of the page, and in the hover gallery
- videos
  - this is for videos that are placed on the right-hand side, along with images. these do not appear in the hover gallery
- header_video
  - this puts a video where the main image usually goes. if this variable exists, it will override the main image
- ext_url
  - this is a url you want to point to that will override the project page url on the gallery page. meaning, if this is set, the user cannot navigate to the project page without a direct link
- ext_links
  - this is a list of titles and urls in the following format:

```
    ext_links:
      "itch.io": "https://itch.io"
      "google": "https://google.com"
```

- authors
  - this is a list of names and urls in the same format as ext_urls
- tools
  - this is an array of names of tools used
  - format: [Unity, 3DS Max, Adobe Illustrator]

All posts are written in [markdown](https://daringfireball.net/projects/markdown/syntax) format.

Check out the test file in `_drafts` for an example!




