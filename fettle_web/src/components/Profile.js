import React, { useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../Redux/actions/Action';
import { Link } from 'react-router-dom';
import { Delete } from '../services/customerapiservice';
import { Button, Modal } from 'react-bootstrap';


export function Profile() {
  
  const [modalOpeningStatus, setModal] = useState(false);
  const getdata = useSelector((state) => state.viewreducer.logininfo);


  const openDialog = () => {
    setModal(true)
  }
  const closeDialog = () => {
    setModal(false)
  }
  const dispatch = useDispatch();

  const handlelogout = (item) => {
    dispatch(LOGOUT(item));
  }

  const deactivate = async () => {
    handlelogout(getdata);
    const response = await Delete(getdata);
  }
  return (
    <>
      <section className="vh-100" style={{ background: "linear-gradient(-180deg, #c3e8a7, #bbe2ed)" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="6" className="mb-4 mb-lg-0">
              <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                <MDBRow className="g-0">
                  <MDBCol md="4" className="gradient-custom text-center text-white"
                    style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                      alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                    <MDBTypography tag="h5">Marie Horwitz</MDBTypography>
                    <MDBCardText>Web Designer</MDBCardText>
                    <MDBIcon far icon="edit mb-5" />
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="p-4">
                      <MDBTypography tag="h6">User Information</MDBTypography>
                      <hr className="mt-0 mb-4" />
                      <MDBRow className="pt-1">
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Name</MDBTypography>
                          <MDBCardText className="text-muted">{getdata.name}</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Address</MDBTypography>
                          <MDBCardText className="text-muted">Taloja</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">City</MDBTypography>
                          <MDBCardText className="text-muted">Raigad</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Pin Code</MDBTypography>
                          <MDBCardText className="text-muted">420012</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Email</MDBTypography>
                          <MDBCardText className="text-muted">{getdata.email}</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-3">
                          <MDBTypography tag="h6">Phone</MDBTypography>
                          <MDBCardText className="text-muted">9895852459</MDBCardText>
                        </MDBCol>
                        <MDBCol size="6" className="mb-">
                          <MDBTypography tag="h6">Subscription</MDBTypography>
                          <hr></hr>
                          <MDBCardText className="text-muted">Plan example</MDBCardText>
                        </MDBCol><br></br><br></br>
                      </MDBRow>
                      <hr></hr>
                      <Link to={'/'}>
                        <button className="btn btn-outline-info mx-1" type="submit" width="450" onClick={() => handlelogout(getdata)}>
                          Logout
                        </button></Link>
                      <button className="btn btn-outline-info mx-1" type="submit" onClick={openDialog}>
                        Deactivate Account
                      </button>

                      <Modal show={modalOpeningStatus} onHide={closeDialog}>
                        <Modal.Header closeButton>
                          <Modal.Title>Warning</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure,you want to delete your account!</Modal.Body>
                        <Modal.Footer>
                          <Link to={'/'}>
                            <Button variant="primary" onClick={deactivate}>
                              Sure
                            </Button></Link>
                          <Button variant="primary" onClick={closeDialog}>
                            NO
                          </Button>
                        </Modal.Footer>
                      </Modal>

                      <div className="d-flex justify-content-start">
                        <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                        <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                        <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                      </div>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}