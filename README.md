# Connect Four

Connect Four is similar to how Tic Tac Toe is played just with more columns and rows, I use the TTT     homework as a reference point.

In order to produce a DRY code you have to use constructors else I would have 42 different functions represented each cell.

My plan was I asked each object what do I need you to produce. For instance the disk constructor, I needed it to check for value than give the disk a value.

So forth I did the same thing with the table, I asked it what do I need you to produce. I needed my table to store and track the moves.

Finally when I reach the game function I was able to call back my methods and functions.

I ran into trouble when trying to add a click event, I think one of the methods did not flow correctly through the event.

Having trouble with the click event tricked down to me having trouble with finding the winner. Since it kind of impossible to write out each winner combination, I was trying figure out a way to run  the columns through a for loop than compare values in sets of 4.



https://trello.com/b/z8sXRTSP/connect-four'


https://www.gliffy.com/go/html5/launch?app=1b5094b0-6042-11e2-bcfd-0800200c9a66
