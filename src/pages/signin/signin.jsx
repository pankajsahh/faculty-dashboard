import React from "react";
import { MDBRadio, MDBBtnGroup } from 'mdb-react-ui-kit';

const Signin = () => {
    return (
        <>
            <div>
                <h2>hello</h2>
                <h4>login</h4>
                <MDBBtnGroup>
                    <MDBRadio btn btnColor='secondary' id='btn-radio' name='options' wrapperTag='span' label='Radio button' />
                    <MDBRadio btn btnColor='secondary' id='btn-radio2' name='options' wrapperClass='mx-2' wrapperTag='span' label='Radio button' defaultChecked/>
                </MDBBtnGroup>
            </div>
        </>
    )
}
export default Signin;