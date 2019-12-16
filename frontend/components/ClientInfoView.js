import React from "react";
import PropTypes from "prop-types";
import Modal from "@material-ui/core/Modal";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import s from "../index.css";

class ClientInfoView extends React.Component {
  constructor(props) {
    console.log("constructor");
    console.log(props);
    super(props);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    console.log(nextProps);
    console.log(prevState);
    if (!nextProps.modalIsOpen) {
      return null;
    }
    if (!prevState) {
      return nextProps.client;
    }
    if (nextProps.client.clientId !== prevState.clientId) {
      return nextProps.client;
    }
    return null;
  }

  handleClose = () => {
    console.log("handleClose");
    this.setState({ clientId: null });
    this.props.hideModal();
  };

  handleChange = (name) => (event) => {
    console.log("handleChange");
    console.log([name]);
    console.log(event.target.value);
    this.setState({ [name]: event.target.value });
  };

  saveHandleClick = () => {
    console.log("saveHandleClick");
    console.log(this.state);
    if (this.state.clientId) {
      this.props.updateClient(this.state.clientId, this.state);
    } else this.props.addClient(this.state);
  };

  render() {
    const { modalIsOpen, client } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={modalIsOpen}
          // onClose={this.handleClose}
        >
          <div className={s.paper}>
            <h2 id="simple-modal-title">Klienten information</h2>
            <p id="simple-modal-description" />
            <Button
              variant="contained"
              color="primary"
              onClick={this.saveHandleClick}
            >
              Spara
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleClose}
            >
              Avbryt
            </Button>

            <div>
              <Container maxWidth="sm">
                <TextField
                  id="outlined-name"
                  label="Kundnummer"
                  className={s.input_activity}
                  onChange={this.handleChange("companyNumber")}
                  margin="normal"
                  variant="outlined"
                  defaultValue={client.companyNumber}
                />
                <TextField
                  id="outlined-name"
                  label="Kund name"
                  className={s.input_activity}
                  onChange={this.handleChange("name")}
                  margin="normal"
                  variant="outlined"
                  defaultValue={client.name}
                />
                <TextField
                  id="outlined-name"
                  label="Bolagsform"
                  className={s.input_activity}
                  onChange={this.handleChange("companyType")}
                  margin="normal"
                  variant="outlined"
                  defaultValue={client.companyType}
                />
                <TextField
                  id="outlined-name"
                  label="Referens"
                  className={s.input_activity}
                  onChange={this.handleChange("contactPerson")}
                  margin="normal"
                  variant="outlined"
                  defaultValue={client.contactPerson}
                />
                <TextField
                  id="outlined-name"
                  label="Postadress"
                  className={s.input_activity}
                  onChange={this.handleChange("address")}
                  margin="normal"
                  variant="outlined"
                  defaultValue={client.address}
                />
                <TextField
                  id="outlined-name"
                  label="E-Post"
                  className={s.input_activity}
                  onChange={this.handleChange("email")}
                  margin="normal"
                  variant="outlined"
                  defaultValue={client.email}
                />
                <TextField
                  id="outlined-name"
                  label="Telefon"
                  className={s.input_activity}
                  onChange={this.handleChange("telephone")}
                  margin="normal"
                  variant="outlined"
                  defaultValue={client.telephone}
                />
                <TextField
                  id="outlined-name"
                  label="Hemsida"
                  className={s.input_activity}
                  onChange={this.handleChange("web")}
                  margin="normal"
                  variant="outlined"
                  defaultValue={client.web}
                />
              </Container>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
// 制約の指定
ClientInfoView.propTypes = {
  client: PropTypes.shape({
    clientId: PropTypes.number.isRequired,
    companyNumber: PropTypes.string,
    companyType: PropTypes.string,
    address: PropTypes.string,
    name: PropTypes.string,
    contactPerson: PropTypes.string,
    email: PropTypes.string,
    telephone: PropTypes.string,
    web: PropTypes.string,
  }).isRequired,
  updateClient: PropTypes.func.isRequired,
  addClient: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
};
export default ClientInfoView;
