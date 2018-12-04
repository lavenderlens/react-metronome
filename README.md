# react-metronome
Based on an example by Dave Ceddia:
added a visual component with animation-duration synced to audio. 
This needs a musical timing API to bulletproof against side-effects from the JS event loop. 
Some people say it would be nice to change tempo without stopping, but this isn't how you would use an old-school metronome. 
It would be much more cool in my opinion to get it plugged in to Garage Band or other DAW software, with a lead-in count. 
The SVG image is widely available but I didn't check the license. 
Supplied without node modules: use >yarn install or >npm install.
Bootstrapped using create-react-app from Facebook.
