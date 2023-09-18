import {Switch, Route} from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm'
import GreenLightRedLight from './components/GreenLightRedLight'
import {GameProvider} from './Context/UserContext'
import LeaderBoard from './components/LeaderBoard'

import GlobalStyle from './styledComponents'

const App = () => (
  <>
    <GlobalStyle />
    <GameProvider>
      <Switch>
        <Route exact path="/" component={RegistrationForm} />
        <Route exact path="/play" component={GreenLightRedLight} />
        <Route exact path="/leaderboard" component={LeaderBoard} />
      </Switch>
    </GameProvider>
  </>
)

export default App
