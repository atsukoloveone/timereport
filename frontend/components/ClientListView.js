import React from "react";
import PropTypes from "prop-types";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import { deleteClient, deleteClientIfNeeded } from "../actions/activity";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import s from "../index.css";
import ClientInfo from "../containers/ClientInfo";

class ClientListView extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {};
  }

  updateHandleClick = event => {
    console.log("updateHandleClick");
    this.props.updateClientInfo(1);
  };

  componentDidMount() {
    this.props.getClientsIfNeeded();
  }
  render() {
    const { clients } = this.props;
    console.log("ClientListView");
    console.log(this.props);

    return (
      <div>
        <ClientInfo></ClientInfo>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Klientnamn</TableCell>
              <TableCell>Referens</TableCell>
              <TableCell>Ändra klient</TableCell>
              <TableCell>Ta bort klient</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clients &&
              clients.map(client => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {client.name}
                  </TableCell>
                  <TableCell> {client.contactPerson}</TableCell>
                  <TableCell>
                    {" "}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.updateHandleClick}
                    >
                      Ändra
                    </Button>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={this.deleteHandleClick}
                    >
                      Ta bort
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

// 制約の指定
ClientListView.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      clientId: PropTypes.number.isRequired,
      companyNumber: PropTypes.string,
      companyType: PropTypes.string,
      address: PropTypes.string,
      name: PropTypes.string
    })
  ),
  getClientsIfNeeded: PropTypes.func,
  onClientClick: PropTypes.func.isRequired,
  updateClientInfo: PropTypes.func
};

export default ClientListView;
