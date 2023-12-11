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

import { CouponsProps } from '../../index'
import {
  ListRequerimentTable,
  TableContentList,
  TableHeader2,
  TableRowContentList,
} from './styled'

interface ListCouponsProps {
  listCoupons: CouponsProps[]
}

export const ListCoupons = ({ listCoupons }: ListCouponsProps) => {
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
    const VacancyList = listCoupons.filter(
      (data: CouponsProps) => data.coupons_id === id,
    )

    const VacancyListSelected = Object.fromEntries(
      VacancyList.map((item, index) => [`objeto${index + 1}`, item]),
    )

    navigate('/vagas', {
      state: VacancyListSelected.objeto1,
    })
  }

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, listCoupons.length - page * rowsPerPage)

  return (
    <ListRequerimentTable>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableHeader2>Nome do Cupom</TableHeader2>
              <TableHeader2>Valor de Desconto</TableHeader2>
              <TableHeader2>Data de Validade</TableHeader2>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              (rowsPerPage > 0
                ? listCoupons.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage,
                  )
                : listCoupons,
              listCoupons.map((data) => {
                return (
                  <TableRowContentList
                    key={data.coupons_id}
                    onClick={() =>
                      data.coupons_id && handleSelectAList(data.coupons_id)
                    }
                  >
                    <TableContentList>{data.name_coupons}</TableContentList>
                    <TableContentList>{data.coupon_discount}</TableContentList>
                    <TableContentList>{data.expiry_date}</TableContentList>
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
          count={listCoupons.length}
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
