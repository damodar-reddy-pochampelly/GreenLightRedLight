import {FiArrowUp, FiArrowDown} from 'react-icons/fi'
import styled from 'styled-components'

export const ViewBoardPageBgContainer = styled.div``

export const SidebarTableContainer = styled.div`
  display: flex;
`

export const LeaderBoardBgContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f2f2f2;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: 90vh;
  width: ${props => {
    if (props.show === 'true') {
      return '50vw'
    }
    return '100vw'
  }};
  overflow-x: auto;
  @media screen and (min-width: 768px) {
    width: 70vw;
  }
  @media screen and (min-width: 992px) {
    width: 82vw;
    padding-left: 20px;
    padding-right: 20px;
    height: 88vh;
  }
`
export const DropdownContainer = styled.div``

export const LevelLabel = styled.label`
  color: #333333;
  font-weight: normal;
`

export const LevelDropdown = styled.select`
  background-color: #33adff;
  color: #333333;
  padding: 5px;
  font-size: 14px;
`

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
  border: 1px solid #ccc;

  td {
    padding: 10px;
    border: 1px solid #ccc;
  }

  th {
    background-color: #4a90e2;
    color: #ffffff;
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
