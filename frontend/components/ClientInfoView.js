import React from "react";
import PropTypes from "prop-types";
import Select from "@material-ui/core/Select";
import MenuItem from "material-ui/MenuItem";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import s from "../index.css";
import Modal from "@material-ui/core/Modal";

class ClientInfoView extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  handleClose = () => {
    this.setState({ modalopen: false });
  };
  render() {
    const { modalIsOpen } = this.props;
    console.log("ClientInfoView render");
    console.log(this.props);
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={modalIsOpen}
          onClose={this.handleClose}
        >
          <div className={s.paper}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </div>
        </Modal>
      </div>
    );
  }
}

export default ClientInfoView;
