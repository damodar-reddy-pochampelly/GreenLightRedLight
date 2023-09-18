import {createContext, useState} from 'react'

const GameContext = createContext()

const GameProvider = ({children}) => {
  const [userData, setUserData] = useState(null)
  const [games, setGames] = useState([])

  const updateGameStats = (email, result) => {
    setGames(prevGames => {
      const updatedGames = [...prevGames]

      let userIndex = updatedGames.findIndex(user => user.email === email)

      if (userIndex === -1) {
        userIndex = updatedGames.length
        updatedGames.push({
          email,
          name: userData.name,
          mobile: userData.mobileNumber,
          gamesPlayed: 0,
          gamesWon: 0,
          winPercentage: 0,
          levelStats: {
            Easy: {played: 0, won: 0, winPercentage: 0},
            Medium: {played: 0, won: 0, winPercentage: 0},
            Hard: {played: 0, won: 0, winPercentage: 0},
          },
        })
      }
      const {difficultyLevel} = userData

      updatedGames[userIndex].levelStats[difficultyLevel].played += 1

      if (result === 'Won') {
        updatedGames[userIndex].gamesWon += 1
        updatedGames[userIndex].levelStats[difficultyLevel].won += 1
      }

      updatedGames[userIndex].gamesPlayed += 1

      const difficultyLevelArray = ['Easy', 'Medium', 'Hard']

      difficultyLevelArray.forEach(level => {
        const levelStats = updatedGames[userIndex].levelStats[level]
        levelStats.winPercentage =
          (levelStats.won / levelStats.played) * 100 || 0
      })

      const totalWeightedWinPercentage =
        (updatedGames[userIndex].levelStats.Easy.won * 20 +
          updatedGames[userIndex].levelStats.Medium.won * 30 +
          updatedGames[userIndex].levelStats.Hard.won * 50) /
        updatedGames[userIndex].gamesPlayed

      updatedGames[userIndex].winPercentage = totalWeightedWinPercentage || 0

      return updatedGames
    })
  }

  return (
    <GameContext.Provider
      value={{userData, setUserData, games, setGames, updateGameStats}}
    >
      {children}
    </GameContext.Provider>
  )
}

export {GameProvider, GameContext}
