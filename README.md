# BracketRandomizer

Based on a statistics project I did in high school, where we made a bracket for the NCAA basketball tournament with all of our own picks, then made a randomly selected bracket with picks selected by weighted seeding.

The random selection process looks like this:
1) Add the two seeds together (Ex. 1 and 16 to get 17)
2) The better seed gets every number through the worse seed (Ex. The 1 seed would get 1 through 16 and the 16 seed would get 17)
3) Use a randomly generated number between 1 and the two summed seeds to get your pick

I believe the result of the experiment was that there wasn't really any significant difference between making picks yourself and generating your bracket with random weighted selections. 

I don't really watch basketball, so I've been doing my brackets this way every year since I took that class. I end up doing a few brackets every year, so I figured I could write this script to cut down on time. Should be reusable in the future, just need to change out the team names
