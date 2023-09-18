/* eslint-disable jsx-a11y/label-has-associated-control */
import {useState, useContext} from 'react'
import {GameContext} from '../../Context/UserContext'
import {
  LeaderBoardBgContainer,
  DropdownContainer,
  LevelLabel,
  LevelDropdown,
  LevelOption,
  LeaderBoardHeading,
  TableElement,
  TableHeader,
  TableRow,
  ColumnName,
  TableBody,
  TableData,
  WinPercentageColumn,
  UpArrowIcon,
  DownArrowIcon,
  ArrowSpanElement,
  EmptyTableData,
  PaginationContainer,
  PaginationButton,
} from './styledComponents'

const Leaderboard = () => {
  const {games, userData} = useContext(GameContext)
  const [selectedLevel, setSelectedLevel] = useState('Easy')
  const [sortOrder, setSortOrder] = useState('desc')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredGames = games.filter(
    game => game.levelStats[selectedLevel].played > 0,
  )

  const toggleSortOrder = () => {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))
  }

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredGames.slice(indexOfFirstItem, indexOfLastItem)

  const renderPageNumbers = () => {
    const pageNumbers = Math.ceil(filteredGames.length / itemsPerPage)
    return Array.from({length: pageNumbers}, (_, i) => i + 1).map(number => (
      <PaginationButton
        key={number}
        className={number === currentPage ? 'active' : ''}
        onClick={() => handlePageChange(number)}
        type="button"
      >
        {number}
      </PaginationButton>
    ))
  }

  return (
    <LeaderBoardBgContainer>
      <DropdownContainer>
        <LevelLabel htmlFor="difficulty">Level : </LevelLabel>
        <LevelDropdown
          id="difficulty"
          value={selectedLevel}
          onChange={e => setSelectedLevel(e.target.value)}
        >
          <LevelOption value="Easy">Easy</LevelOption>
          <LevelOption value="Medium">Medium</LevelOption>
          <LevelOption value="Hard">Hard</LevelOption>
        </LevelDropdown>
      </DropdownContainer>
      <LeaderBoardHeading>Leaderboard</LeaderBoardHeading>

      <TableElement>
        <TableHeader>
          <TableRow>
            <ColumnName>Name</ColumnName>
            <ColumnName>Email</ColumnName>
            <ColumnName>Games Played</ColumnName>
            <ColumnName>Games Won</ColumnName>
            <WinPercentageColumn onClick={toggleSortOrder}>
              Win Percentage
              <ArrowSpanElement>
                {sortOrder === 'desc' ? <UpArrowIcon /> : <DownArrowIcon />}
              </ArrowSpanElement>
            </WinPercentageColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredGames.length > 0 ? (
            currentItems.map(game => (
              <TableRow key={game.email}>
                <TableData>{game.name}</TableData>
                <TableData>{game.email}</TableData>
                <TableData>{game.levelStats[selectedLevel].played}</TableData>
                <TableData>{game.levelStats[selectedLevel].won}</TableData>
                <TableData>
                  {(
                    (game.levelStats[selectedLevel].won /
                      game.levelStats[selectedLevel].played) *
                      100 || 0
                  ).toFixed(2)}
                  %
                </TableData>{' '}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <EmptyTableData colSpan="5">No games to display</EmptyTableData>
            </TableRow>
          )}
        </TableBody>
      </TableElement>

      {filteredGames.length > itemsPerPage && (
        <PaginationContainer>{renderPageNumbers()}</PaginationContainer>
      )}
    </LeaderBoardBgContainer>
  )
}

export default Leaderboard
