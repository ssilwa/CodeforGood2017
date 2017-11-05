# Handlebars Workshop

The aim of this workshop is to get some practice with using Handlebars in a Node web application.

If you have any trouble at all with the workshop, raise your hand and one of the staff will come help you (or post on [Piazza](http://go.6148.io/piazza)).

We'll be working off of the repository from yesterday's workshop so if you still have it, great! Otherwise, you can clone a copy of it here: [go.6148.io/handlebars-starter](http://go.6148.io/handlebars-starter).

## Part 1: Displaying Userlist

1. Here, we are going to display the userlist as a list of profiles instead of just the JSON. Display a list of profiles for the users. Each profile should include the user's name and the user's favorite fruit. You will need to create a new view file, `userlist.hbs`.

2. If you are having trouble figuring out how to link `userlist.hbs` to the data, look at the code under `router.get('/' ...)` that renders `index.hbs` with title "Sign up". Mimick it!

## Part 2: Displaying Individual User Profiles

Here, we are going to add a page for each user that displays their profile. This will require creating a new route that is dependent on the user (`/users/:username`). You will also need to create a new `profile.hbs` file.

## Part 3: Common Code

For Part 2 and Part 1, note that all the pages can share HTML code since they all display profiles. If you are not sharing code between the two, structure your hbs files so that you do! Note that any partial hbs file must be in **views/partials** (make a new directory!)

