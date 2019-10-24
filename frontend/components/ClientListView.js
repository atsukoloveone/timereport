import React from "react";
import PropTypes from "prop-types";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import s from "../index.css";
import ClientInfo from "../containers/ClientInfo";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

class ClientListView extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = { alertOpen: false, clientId: null };
  }

  addHandleClick = () => {
    console.log("addHandleClick");
    this.props.newClient();
  };

  updateHandleClick = id => {
    console.log("updateHandleClick");
    console.log(id);
    this.props.getClientInfo(id);
  };

  deleteHandleClick = id => {
    console.log("deleteHandleClick");
    this.setState({ alertOpen: true });
    this.setState({ clientId: id });
  };

  deleteExec = () => {
    console.log("deleteExec");
    console.log(this.state);
    this.props.deleteClient(this.state.clientId);
    this.setState({ alertOpen: false });
  };

  handleClose = () => {
    console.log("handleClose");
    this.setState({ alertOpen: false });
  };

  componentDidMount() {
    this.props.getClientsIfNeeded();
  }
  render() {
    const { clients } = this.props;
    console.log("ClientListView render");
    console.log(this.state);
    console.log(this.props);
    return (
      <div>
        <ClientInfo></ClientInfo>
        <Dialog
          open={this.state.alertOpen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Ta bort?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Avbryt
            </Button>
            <Button onClick={this.deleteExec} color="primary" autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.addHandleClick()}
        >
          Lägga till klient
        </Button>
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
                <TableRow key={client.clientId}>
                  <TableCell component="th" scope="row">
                    {client.name}
                  </TableCell>
                  <TableCell> {client.contactPerson}</TableCell>
                  <TableCell>
                    {" "}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => this.updateHandleClick(client.clientId)}
                    >
                      Ändra
                    </Button>{" "}
                    {/*
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.updateHandleClick.bind(this, client.clientId)}
                   >
                      Ändra
                    </Button>
                    */}
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => this.deleteHandleClick(client.clientId)}
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
  getClientInfo: PropTypes.func,
  newClient: PropTypes.func,
  deleteClient: PropTypes.func,
  modalIsOpen: PropTypes.bool
};

export default ClientListView;
