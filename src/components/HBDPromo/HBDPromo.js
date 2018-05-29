import React from "react";
import { Button,Input, Row, NavItem, Dropdown} from 'react-materialize';
import Icon from 'react-materialize/lib/Icon';

const hbdPromo = (props) => {
    return (
        <div > 
           <div className="row">
                <div className="col s12">
                    <h5> Select a screen for trigger </h5>
                    <Dropdown trigger={
                        <Button>DMP Name</Button>
                    }>
                        <NavItem>Screen 1</NavItem>
                        <NavItem divider />
                        <NavItem>Screen 2</NavItem>
                        <NavItem divider />
                        <NavItem>Screen 3</NavItem>
                    </Dropdown>
                </div>
 
                <div className="col s12">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <Row >
                        <Input placeholder="Name" s={8} />        
                    </Row>
                </div>

                <div className="col12">
                    <Button className="btn waves-effect waves-light" type="submit" name="action">Apply
                        <Icon className="material-icons right">done</Icon>
                    </Button>
                </div>
           </div>
        </div>
)
}

export default hbdPromo;
