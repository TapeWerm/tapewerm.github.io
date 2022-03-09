https://github.com/TapeWerm/tapewerm.github.io
https://tapewerm.github.io/
# 3-7-2021
Writing a website from scratch is harder than adding to an existing one.
Aside from `<!DOCTYPE html>`, I couldn't remember where to start because it was always supplied by the assignments.
The class slides showed `<head>`, and I read about the elements again to figure out what I needed.
When I first read about the final project, I thought the easiest choice was to use Bootstrap.
My capstone team is using React, NextJS, and Chakra UI which are nice, but Bootstrap is easier to use.
I've used Bootstrap both in homework and in the Computer Action Team, but I never got good at web dev.
Michael Wilson and other students' websites look like they use Bootstrap which validates my suspicions.
I got stuck on what to name the HTML file for GitHub Pages but their website says it's `index.html`.
I've seen that filename before, I wish I thought of that earlier.
I write a Hello World and push it to verify my workflow is functioning.
I put the rest off for the next day.
# 3-8-2021
Now I have to do real work.
Technically what I did yesterday was real, but Hello World sure doesn't look like that to other people.
Like always, I spent a lot of time figuring out a clean solution to a simple problem.
Paragraphs are easier to read when they're not too wide.
<kbd>F12</kbd> dev tools show Ars Technica's paragraphs are 760 pixels wide.
Bootstrap XXL containers' max width is 1320px, and `760 / (1320 / 12) = 6.90 repeating`.
Rounding up to even XXL column number 8 fits 760px, as does 8 XL columns and 10 LG columns.
Google found centering columns is done by class mx-auto.
Google also found Y margins and circle images.
Now I have to make a navbar, the one thing besides GitHub Pages that I haven't done before.