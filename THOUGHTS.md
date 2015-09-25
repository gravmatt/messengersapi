# My Thoughts

I unified the facebook, telegram and whatsapp message.

You can see this in the unified.json file.

I also implemented my own ID field (its a UUID at the moment), for my own unified message tracking.

I decided to use the json format because its simple and node knows how to deal with it.

Inside the *index.js* file, everything gets initialized and on the bottom, the server starts.

I separated the routes and the **message converter / Controller**.

If its a real project, more routes would follow, so the index/entry point stays clean.

I also separated the message converter.

I called it *messageTranslater*, because thats what he do.

I tried to make it object oriented, even with no class liken in the MessageController.php.

But thats Javascript, no classes just objects.

### App

What I have done so fare is not just a theoretical work.

I actually really works.

You can POST data to the server.

What you have to do is:

1. Download Node.js (if its not already installed on your system).

2. clone the git repo

3. Change into the messengerapi/src folder and install the dependencies for this project.

Just type:
```
cd messengerapi/src && npm install
```

4. Start the server!

```
node index.js
```

5. Open your browser and go to the (Demo)[http://localhost:1337/demo] page.

**Default Port: 1337**

If you want to change the server port, export an environment variable PORT.

e.g.
```
$ export PORT=1234
```

### Demo

If you have started the server.

You can use the demo page or curl or whatever POST messages to the server.

### Routes

If you want to test it with curl or something else, the routes are:

**Facebook**
/message/facebook
**Telegram**
/mesasge/telegram
**WhatsApp**
/message/whatsapp

You have to choose the POST method to process a message.

### What I Have Learned

If you read this text, I learned something!

I learned how to FORK a project on GIT.
