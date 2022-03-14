https://github.com/TapeWerm/tapewerm.github.io

https://tapewerm.github.io/

# 3-7-2022
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

# 3-8-2022
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

# 3-9-2022
I realize the page doesn't even have my name or a proper introduction.
Outside sources are also missing a link.
I'm pretty sure outside sources only exists to show we aren't glueing a bunch of Stack Overflow code together, but I should try to keep it complete.
I looked at my capstone resume and summarized my best skills in 1 sentance.
It could be longer, but other students kept it short too.
Short is probably best for a website, which is not a resume.
The nav bar wouldn't expand when I clicked the hamburger button, nothing logged in console.
After 15 minutes, I realized I needed to import Bootstrap's JS script.
I forgot what ARIA was and looked at the Wikipedia page for it.
Now I know why a blind student I met hated hamburger menus, I bet many web devs don't put ARIA attributes in them.
I'm not 100% certain I did it right, but I put what the example had as it looked reasonable.

I chose an unordered list for work, I saw Shawn used dropdowns which were nice but I'll save more detail for a resume.
I forgot how to put a newline in HTML lists, now I remember what `<br>` is for.
I removed the line about my skills from about because my work and projects demo that better.
It felt out of place and like a cheap flex.
Now that I have my work and projects listed, it's starting to feel like a real site.
I kinda want to add more images to the site to make it feel less bland, but then it takes longer to load and read.
I decided to add an image of a Nether Portal to make the projects section more lively.
A Nether Portal is small, square, and recognizable, so I already had the image I'm using for my Minecraft server's Discord server.
One challenge with the form was button width.
I found out you can change the width of an element to a percentage of its parent, so I did that in a grid in its parent grid.
I also was stuck on the message box because I couldn't remember what input a scrollable text box is called.
I found HTML element textarea, and it got the job done.
After that I tested accessibility in Firefox and Edge, and it passed.
I also tested the tab key to make sure tab key selection was usable.
I finally added a warning that the form is non functional.
A modal would both involve JavaScript and waste the user's time.
The finished product is a bit basic and I might improve it at some point.
For now, I got more homework to do, and I could use a break after.

# 3-14-2022
I changed the buttons to use d-grid like the bootstrap example.
Sometimes a day makes a difference, today I noticed the journal dates were typo'd 2021 instead of 2022.
I know animations were suggested, but I like my website being still.
To fulfill the JavaScript requirement, I'll log the contact form in the console instead.
That was something I didn't do very well in homework 4.
I didn't use console groups, I queried the DOM multiple times instead of using form's elements, and more.
I also noticed form JS or not, I didn't use the input required attribute on this website.
The form may still be non functional but at least the HTML is correct now.

# Outside sources
- Class slides
  - HTML
  - Bootstrap
- https://developer.mozilla.org/en-US/docs/Web/API/console/group
- https://getbootstrap.com/docs/5.1/components/buttons/
- https://getbootstrap.com/docs/5.1/getting-started/introduction/
- https://getbootstrap.com/docs/5.1/layout/containers/
- https://getbootstrap.com/docs/5.1/layout/grid/
- https://getbootstrap.com/docs/5.1/utilities/display/
- https://getbootstrap.com/docs/5.1/utilities/sizing/
- https://getbootstrap.com/docs/5.1/utilities/spacing/
- https://getbootstrap.com/docs/5.1/utilities/text/
- https://pages.github.com/
- https://stackoverflow.com/questions/39325414/line-break-in-html-with-n
- https://www.tutorialrepublic.com/faq/how-to-center-a-column-in-bootstrap.php
- https://www.w3schools.com/bootstrap4/bootstrap_images.asp
- https://www.w3schools.com/html/html_form_input_types.asp
- https://www.w3schools.com/tags/tag_script.asp
- https://www.w3schools.com/tags/tag_textarea.asp
