# Farkle Dice Game

## Description

This project contains a web-based application for the Farkle dice game. This implementation always aims to target the highest, or most risky score. For example, even though you may want to count individual 5's separately when a triple is available, this program will always count the triple first. This program also totals all available points, tracks rounds played, and prevents further play when a Farkle is rolled. For more information, try launching and playing.


Notice: This implementation is not perfect, nor is it entirely complete at the moment. This was completed as part of a technical challenge for an interview, and as such, needed to be completed on a time limit. Thank you for understanding.

## Original Prompt

Attached you’ll find some imperfect starting code for the dice game, Farkle. We want to see how you can improve it! It's up to you to decide how to make the game better: you can focus on implementing the features, building something more interactive, or making it visually appealing. You have three hours, so show us what you can do best! 
 
Here are the rules of Farkle:
 
On your turn, you roll six dice. Points are earned every time you roll a 1, 5, or three of a kind. 

| Dice Combo    | Score     |
| ------------- | --------- |
| Each 1 rolled |	100     | 
| Each 5 rolled |	50      | 
| Three 1’s     |	1000    | 
| Three 2’s     |	200     | 
| Three 3’s     |	300     | 
| Three 4’s     |	400     | 
| Three 5’s     |	500     | 
| Three 6’s     |	600     | 

If none of the dice rolled earned points, that's a Farkle! Your turn is over and you earn no points.

If you roll at least one scoring die, you can either bank your point total and pass your turn, or you can risk these points by putting aside the dice you’ve scored (at least one) and continuing to roll the remaining dice. The remaining dice may earn you additional points, but if you Farkle, you lose everything you’ve earned during your turn. 

Scoring is based only on the dice in each roll. You cannot earn points by combining dice from different rolls. You can continue rolling the dice until you either Pass or Farkle. 

For example, if a player rolls 2-4-5-5-5-6, they can choose to do any of the following:

-	Score a single 5 for 50 points and risk their points by rolling the remaining 5 dice.
-	Score the set of 5’s for 500 points and risk their points by rolling the remaining 3 dice.
-	Score the set of 5’s for 500 points and end their turn, banking those points.

In the first scenario, the player rolls five dice in their second throw. If they were to roll 2-3-4-5-5 in this throw, they can not combine these 5’s with the 5 rolled in the first throw. The player would only have the option to score these two 5’s individually for 100 points.

If the game is played by multiple players, then each player takes their turn in order until one player has 10,000 points at the end of their turn. Each player then has one more chance to score points, and whoever has the most points at the end of that round wins.

It’s completely up to you how you decide to portray gameplay and scoring. Be creative, and be sure to make a note of any assumptions or important decisions that you make along the way. We don’t expect you to complete this entire project in 3 hours, so part of the challenge is seeing how you prioritize the work.
