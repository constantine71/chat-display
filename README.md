## Introduction

This app is build to show Messages such as text, image, notifications.
Also add a control pannel to test the functionalities.

Applied Functionalities:
-By type text in the different input area, the app can tell who send this message, and display the message accordingly.
-Must input a vaild image url to send images.
-By click on join/leave group to show notifications
-By right click on a message to recall the message

Where do we need to improve:
-Data Storage: We use memory, so the history will be distroied when refresh. A back end on a server/cloud needed to perform more properate. By do so, we can remember and show the message history.
-Partial Function: we can recall the other user's message. Can easily be solved, but leave it active for testing purpose. And we will not always go to the very bottom of the messages. We can use some functions such as ScrollIntoView() to solve this.
-Performance: since we do not cached anything, it is a little bit slow, when we loading an image or user's avatar. Use a cache to solve this.
-UI: Not a perfect display, the message and avatar will sit on wired order, if a message is very short and sometimes, we get some overflow. We can solve this by adding more UI controls.

## Instructions

In the project directory, we can run:

### `npm install`

To install the application

### `npm start`

Runs the app in the development mode
