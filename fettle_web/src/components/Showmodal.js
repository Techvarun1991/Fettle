import { Button, Modal } from "react-bootstrap";

export class Showmodal {
    openDialog = () => {
        this.setState({ modalOpeningStatus: true });
    }
    closeDialog = () => {
        this.setState({ modalOpeningStatus: false });
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.closeDialog}>
                <Modal.Header closeButton>
                    <Modal.Title><h2></h2></Modal.Title>
                </Modal.Header>
                <Modal.Body><p></p></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.closeDialog}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}