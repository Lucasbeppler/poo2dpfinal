import { Container, Table, Content, LabelStyle, Form, Input, Button, ButtonIcon } from "./styles";
import { Header } from '../../components/Header'
import api from "../../services/api";
import { useEffect, useState } from "react";

interface Invoice {
  id: string;
  client: string;
  description: string;
  issue_date: string;
  invoice_value: number;
  tax?: number;
  liqNf?: number;
}

export function ListInvoice() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);

  function getInvoices() {
    api({
      url: "invoice"
    })
    .then(res => {
      const newInvoices = res.data.map((invoice: Invoice) => {
        let newInvoice = {
          ...invoice,
          tax: calcTax(invoice.invoice_value),
          liqNf: 0
        }
        
        newInvoice.liqNf = calcLiqNf(invoice.invoice_value ,newInvoice.tax);
        return newInvoice;
      })
      setInvoices(newInvoices);
      console.log(invoices);
    })
  }

  useEffect(() => {
    getInvoices();
  }, [])

  return (
    <Container>
      <Header title="Totais" /> 
      <Content>
        <LabelStyle>Total do valor da NF do Cliente ABC: R$ { calcTotalNf(invoices, "ABC") } </LabelStyle>

        <LabelStyle>Total do Valor Liquido da NF do Cliente ABC: R$ { calcTotalLiqNf(invoices, "ABC") } </LabelStyle>

        <LabelStyle>Total do valor da NF do Cliente XYZ: R$ { calcTotalNf(invoices, "XYZ") } </LabelStyle>

        <LabelStyle>Total do Valor Liquido da NF do Cliente XYZ: R$ { calcTotalLiqNf(invoices, "XYZ") } </LabelStyle>
      </Content>

      <Header title="Listagem de Notas Fiscais" />
      <Table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Data de emissão</th>
            <th>Cliente</th>
            <th>Valor da NF</th>
            <th>Valor do imposto</th>
            <th>Valor Liq NF</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => 
            (<tr key={invoice.id} >
              <td>{invoice.description}</td>
              <td>{invoice.issue_date}</td>
              <td>{invoice.client}</td>
              <td>R$ {invoice.invoice_value}</td>
              <td>R$ {invoice.tax}</td>
              <td>R$ {invoice.liqNf}</td>
            </tr>)
          )}
        </tbody>
      </Table>

    </Container>
  )
}

function calcTax(nf: number) {
  return (11 / 100) * nf;
}
function calcLiqNf(nf: number, tax: number) {
  return nf - tax;
}
function calcTotalNf(array: Invoice[], client: string) {
  const nArray = array.filter((invoice) => invoice.client === client);
  return nArray.reduce((previousValue, item) => Number(item.invoice_value) + previousValue, 0)
}
function calcTotalLiqNf(array: Invoice[], client: string) {
  const nArray = array.filter((invoice) => invoice.client === client);
  return nArray.reduce((previousValue, item) => Number(item.liqNf) + previousValue, 0)
}

