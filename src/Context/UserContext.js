import {createContext, useState} from 'react'

const GameContext = createContext()

const GameProvider = ({children}) => {
  const stringfiedPlayerData = localStorage.getItem('playerData')
  const parsedPlayerData = JSON.parse(stringfiedPlayerData)
  const [userData, setUserData] = useState(
    parsedPlayerData === null ? [] : parsedPlayerData,
  )
  const [sideBarStatus, setSideBarStatus] = useState(false)

  const updateGameStats = (currentPlayer, result) => {
    setUserData(prevData => {
      const updatedData = prevData.map(eachData => {
        const sameMail = eachData.email === currentPlayer.email
        // const sameName = eachData.name === currentPlayer.name
        const sameLevel =
          eachData.difficultyLevel === currentPlayer.difficultyLevel
        // const sameMobile = eachData.mobile === currentPlayer.mobile
        const condition = sameMail && sameLevel
        if (condition) {
          if (currentPlayer.gamesPlayed !== undefined) {
            const newObject = {...currentPlayer}
            if (result === 'Won') {
              return {
                ...newObject,
                gamesPlayed: currentPlayer.gamesPlayed + 1,
                gamesWon: currentPlayer.gamesWon + 1,
                winPercentage:
                  ((currentPlayer.gamesWon + 1) /
                    (currentPlayer.gamesPlayed + 1)) *
                  100,
              }
            }
            return {
              ...newObject,
              gamesPlayed: currentPlayer.gamesPlayed + 1,
              winPercentage:
                (currentPlayer.gamesWon / (currentPlayer.gamesPlayed + 1)) *
                100,
            }
          }
          const newObject = {...currentPlayer}
          if (result === 'Won') {
            return {
              ...newObject,
              gamesPlayed: 1,
              gamesWon: 1,
              winPercentage: 100,
            }
          }
          return {
            ...newObject,
            gamesPlayed: 1,
            gamesWon: 0,
            winPercentage: 0,
          }
        }
        return eachData
      })
      localStorage.setItem('playerData', JSON.stringify(updatedData))
      return updatedData
    })
  }

  return (
    <GameContext.Provider
      value={{
        userData,
        setUserData,
        updateGameStats,
        sideBarStatus,
        setSideBarStatus,
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export {GameProvider, GameContext}
