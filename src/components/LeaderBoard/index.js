/* eslint-disable jsx-a11y/label-has-associated-control */
import {useState, useContext} from 'react'
import {GameContext} from '../../Context/UserContext'
import Header from '../Header'
import Sidebar from '../Sidebar'
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
  ViewBoardPageBgContainer,
  SidebarTableContainer,
} from './styledComponents'

const Leaderboard = () => {
  const {userData, sideBarStatus} = useContext(GameContext)
  const [selectedLevel, setSelectedLevel] = useState(
    userData[userData.length - 1].difficultyLevel,
  )
  const [sortOrder, setSortOrder] = useState('desc')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // filtering based on Difficulty Level
  const filteredGames = userData.filter(
    data =>
      data.difficultyLevel === selectedLevel && data.gamesPlayed !== undefined,
  )

  // Sorted based on win percentage
  const getSortedArray = () => {
    if (sortOrder === 'desc') {
      return filteredGames
        .slice()
        .sort((a, b) => b.winPercentage - a.winPercentage)
    }
    return filteredGames
      .slice()
      .sort((a, b) => a.winPercentage - b.winPercentage)
  }

  // toggling the sort order
  const toggleSortOrder = () => {
    setSortOrder(prev => (prev === 'asc' ? 'desc' : 'asc'))
  }

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber)
  }

  const sortedArray = getSortedArray()
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = sortedArray.slice(indexOfFirstItem, indexOfLastItem)

  // pagination

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
    <ViewBoardPageBgContainer>
      <Header />
      <SidebarTableContainer>
        <Sidebar />
        <LeaderBoardBgContainer show={sideBarStatus.toString()}>
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
                <ColumnName>Position</ColumnName>
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
              {sortedArray.length > 0 ? (
                currentItems.map((data, index) => (
                  <TableRow key={data.email}>
                    <TableData>
                      {sortOrder === 'desc'
                        ? index + 1
                        : sortedArray.length - index}
                    </TableData>
                    <TableData>{data.name}</TableData>
                    <TableData>{data.email}</TableData>
                    <TableData>{data.gamesPlayed}</TableData>
                    <TableData>{data.gamesWon}</TableData>
                    <TableData>
                      {(data.winPercentage || 0).toFixed(2)}%
                    </TableData>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <EmptyTableData colSpan="5">
                    No games to display
                  </EmptyTableData>
                </TableRow>
              )}
            </TableBody>
          </TableElement>
          {filteredGames.length > itemsPerPage && (
            <PaginationContainer>{renderPageNumbers()}</PaginationContainer>
          )}
        </LeaderBoardBgContainer>
      </SidebarTableContainer>
    </ViewBoardPageBgContainer>
  )
}

export default Leaderboard
