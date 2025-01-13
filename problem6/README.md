 
- [Software Requirements](#software-requirements)
- [Big rock](#big-rock)
- [Introduction](#introduction)
  - [Explanation](#explanation)
  - [API](#api)
  - [DB schema](#db-schema)
- [Improve](#improve)

# Software Requirements
1. We have a website with a score board, which shows the top 10 user’s scores.
2. We want live update of the score board.
3. User can do an action (which we do not need to care what the action is), completing this action will increase the user’s score.
4. Upon completion the action will dispatch an API call to the application server to update the score.
5. We want to prevent malicious users from increasing scores without authorisation.

# Big rock
- Estimate number of users can use our web?

# Introduction
## Explanation
- We have a website with a score board, with a lot of user, we will have some apis bellow here, with data base 1 user have many game to plays and earns points
- When user earn points successfully 
- action api, update scores of user api, we will authorization foreach user, if not correct we block and prevent malicious users
- We will use socket.io to keep the connection realtime
- To improve query execution time, we will index userId and score

## API
- check user exist api -> It means to create if have not account in our system
- register api -> create account in our system
- login api -> verify account and provide the jwt token for user to access our system
- action api -> user need to token to playgame/or do somnething to earn points
- update scores of user api -> user need to token to update own score
- get top 10 -> query get top 10

## DB schema

User
{
  id: string
  name: string
  avatar: string
}

User_score
{
  id: string,
  userId: string
  gameId: string,
  status: PLAYED, NOT_PLAY,
  score: number
}

# Improve

- Use cache mechanism to enhance performance

