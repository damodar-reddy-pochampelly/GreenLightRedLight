import {FiArrowUp, FiArrowDown} from 'react-icons/fi'
import styled from 'styled-components'

export const LeaderBoardBgContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 75vh;
`
export const DropdownContainer = styled.div``

export const LevelLabel = styled.label``

export const LevelDropdown = styled.select``

export const LevelOption = styled.option``

export const LeaderBoardHeading = styled.h1`
  font-size: 1.5em;
  margin-bottom: 20px;
  text-align: center;
`

export const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  td {
    padding: 10px;
    border-bottom: 1px solid #ecf0f1;
  }

  th {
    background-color: #2c3e50;
    color: #ecf0f1;
    padding: 10px;
    text-align: left;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`
export const TableHeader = styled.thead``

export const TableRow = styled.tr``

export const ColumnName = styled.th``

export const WinPercentageColumn = styled(ColumnName)`
  cursor: pointer;
`

export const TableBody = styled.tbody``

export const TableData = styled.td``

export const EmptyTableData = styled(TableData)`
  text-align: center;
`

export const UpArrowIcon = styled(FiArrowUp)``

export const DownArrowIcon = styled(FiArrowDown)``

export const ArrowSpanElement = styled.span``

export const PaginationContainer = styled.div``

export const PaginationButton = styled.button``
