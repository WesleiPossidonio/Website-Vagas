import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ListVacancyProps } from '../../index'
import {
  ListRequerimentTable,
  TableContentList,
  TableHeader2,
  TableRowContentList,
} from './styled'

interface VacancyProps {
  listVacancy: ListVacancyProps[]
}

export const ListVacancy = ({ listVacancy }: VacancyProps) => {
  const navigate = useNavigate()

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 5))
    setPage(0)
  }

  const handleSelectAList = (id: number) => {
    const VacancyList = listVacancy.filter(
      (data: ListVacancyProps) => data.vacancies_id === id,
    )

    const VacancyListSelected = Object.fromEntries(
      VacancyList.map((item, index) => [`objeto${index + 1}`, item]),
    )

    navigate('/vagas', {
      state: VacancyListSelected.objeto1,
    })
  }

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, listVacancy.length - page * rowsPerPage)

  return (
    <ListRequerimentTable>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableHeader2>Nome da Vaga</TableHeader2>
              <TableHeader2>Nº Vagas</TableHeader2>
              <TableHeader2>Descrição da Vaga</TableHeader2>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              (rowsPerPage > 0
                ? listVacancy.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage,
                  )
                : listVacancy,
              listVacancy.map((data) => {
                return (
                  <TableRowContentList
                    key={data.vacancies_id}
                    onClick={() =>
                      data.vacancies_id && handleSelectAList(data.vacancies_id)
                    }
                  >
                    <TableContentList>{data.name_vacancies}</TableContentList>
                    <TableContentList>
                      {data.number_of_vacancies}
                    </TableContentList>
                    <TableContentList>{data.job_description}</TableContentList>
                  </TableRowContentList>
                )
              }))
            }
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={listVacancy.length}
          rowsPerPage={rowsPerPage}
          labelRowsPerPage="Itens por página:"
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </ListRequerimentTable>
  )
}
