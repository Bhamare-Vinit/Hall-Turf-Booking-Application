//@ts-check
import React from "react";
// bootstrap imports
import Container from "react-bootstrap/Container";
//import Button from "react-bootstrap/Button";
// styled components
import styled from "styled-components";

const Styles = styled.div`
  .main-footer {
    background-color: #9ca3af;
    color: #4b5563;
    letter-spacing: 1px;
  }
  .footer-copyright-text {
    background-color: #d1d5db;
    color: #1f2937;
  }
  a {
    color: #204e56;
    text-decoration: none;
    &:hover {
      color: #204e56;
      text-decoration: none;
    }
  }
  .foot-header {
    color: #374151 !important;
  }
  .foot-para {
    color: #0f172a !important;
  }
`;

const Footer = () => {
  return (
    <>
      <Styles>
        <footer className="page-footer font-small">
          <div className="container-fluid text-center text-center main-footer">
            <Container>
              <div className="row">
                <div className="m-2 mb-md-0 mb-3">
                  <h5 className="font-weight-bold pt-2 foot-header">
                    An initiative by IT Department of SFIT
                  </h5>
                  
                  <p className="foot-para">
                  Mount Poinsur, S.V.P. Road, Borivali (West), Mumbai 400 103.
                  022-28928585 / +91 9136951119
                  022-28954787
                  sfedu@sfit.ac.in
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </footer>
      </Styles>
    </>
  );
};

export default Footer;
