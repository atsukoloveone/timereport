import React from "react";
import PropTypes from "prop-types";
import s from "../index.css";
import Modal from "@material-ui/core/Modal";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class ClientInfoView extends React.Component {
  state = {
    clientId: null,
    companyNumber: null,
    companyType: null,
    address: null,
    contactPerson: null,
    email: null,
    name: null,
    telephone: null,
    web: null
  };

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps start");
    console.log(props);
    console.log(state);
    if (!state.clientId && props.client.length > 0) {
      console.log("getDerivedStateFromProps");
      console.log(props.client[0]);
      console.log(state);
      return {
        clientId: props.client[0].clientId,
        companyNumber: props.client[0].companyNumber,
        companyType: props.client[0].companyType,
        address: props.client[0].address,
        contactPerson: props.client[0].contactPerson,
        email: props.client[0].email,
        name: props.client[0].name,
        telephone: props.client[0].telephone,
        web: props.client[0].web
      };
    }
    console.log("getDerivedStateFromProps is null");

    // Return null if the state hasn't changed
    return null;
  }

  handleClose = () => {
    console.log("handleClose");
    this.props.hideModal();
  };

  handleChange = name => event => {
    console.log("handleChange");
    console.log([name]);
    console.log(event.target.value);
    this.setState({ [name]: event.target.value });
  };

  updateHandleClick = event => {
    console.log("updateHandleClick");
    console.log(this.state);
    this.props.updateClient(this.state.clientId, this.state);
  };

  render() {
    const { modalIsOpen, client } = this.props;
    console.log("ClientInfoView render");
    console.log(this.props);
    console.log(this.state);
    let clientView = null;
    if (client.length > 0) {
      clientView = client[0];
    }
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={modalIsOpen}
          onClose={this.handleClose}
        >
          <div className={s.paper}>
            <h2 id="simple-modal-title">Klienten information</h2>
            <p id="simple-modal-description"></p>
            <Button
              variant="contained"
              color="primary"
              onClick={this.updateHandleClick}
            >
              Spara
            </Button>
            {clientView && (
              <div>
                <Container maxWidth="sm">
                  <TextField
                    id="outlined-name"
                    label="Kundnummer"
                    className={s.input_activity}
                    onChange={this.handleChange("companyNumber")}
                    margin="normal"
                    variant="outlined"
                    defaultValue={this.state.companyNumber}
                  />
                  <TextField
                    id="outlined-name"
                    label="Kund name"
                    className={s.input_activity}
                    onChange={this.handleChange("name")}
                    margin="normal"
                    variant="outlined"
                    defaultValue={this.state.name}
                  />
                  <TextField
                    id="outlined-name"
                    label="Bolagsform"
                    className={s.input_activity}
                    onChange={this.handleChange("companyType")}
                    margin="normal"
                    variant="outlined"
                    defaultValue={this.state.companyType}
                  />
                  <TextField
                    id="outlined-name"
                    label="Referens"
                    className={s.input_activity}
                    onChange={this.handleChange("contactPerson")}
                    margin="normal"
                    variant="outlined"
                    defaultValue={this.state.contactPerson}
                  />
                  <TextField
                    id="outlined-name"
                    label="Postadress"
                    className={s.input_activity}
                    onChange={this.handleChange("address")}
                    margin="normal"
                    variant="outlined"
                    defaultValue={this.state.address}
                  />
                  <TextField
                    id="outlined-name"
                    label="E-Post"
                    className={s.input_activity}
                    onChange={this.handleChange("email")}
                    margin="normal"
                    variant="outlined"
                    defaultValue={this.state.email}
                  />
                  <TextField
                    id="outlined-name"
                    label="Telefon"
                    className={s.input_activity}
                    onChange={this.handleChange("telephone")}
                    margin="normal"
                    variant="outlined"
                    defaultValue={this.state.telephone}
                  />
                  <TextField
                    id="outlined-name"
                    label="Hemsida"
                    className={s.input_activity}
                    onChange={this.handleChange("web")}
                    margin="normal"
                    variant="outlined"
                    defaultValue={this.state.web}
                  />
                </Container>
              </div>
            )}
          </div>
        </Modal>
      </div>
    );
  }
}
// 制約の指定
ClientInfoView.propTypes = {
  client: PropTypes.arrayOf(
    PropTypes.shape({
      clientId: PropTypes.number.isRequired,
      companyNumber: PropTypes.string,
      companyType: PropTypes.string,
      address: PropTypes.string,
      name: PropTypes.string
    })
  ),
  hideModal: PropTypes.func
};
export default ClientInfoView;
