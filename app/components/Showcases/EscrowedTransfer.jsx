import React, {Component} from "react";
import PropTypes from "prop-types";
import Icon from "../Icon/Icon";
import Translate from "react-translate-component";
import {Input, Card, Col, Row, Button} from "bitshares-ui-style-guide";
import AccountSelector from "../Account/AccountSelector";
import AccountAssets from "../Account/AccountAssets";

export default class Showcase extends Component {
    constructor() {
        super();
    }

    render() {
        let smallScreen = window.innerWidth < 850 ? true : false;
        let account = (
            <Card style={{borderRadius: "10px"}}>
                <AccountSelector
                    label="escrowed_transfer.account"
                    placeholder="placeholder"
                    allowPubKey={true}
                    allowUppercase={true}
                />

                <Translate
                    className="showcase-label padding"
                    content="escrowed_transfer.asset"
                />
                {/* <AccountAssets 
                    symbol="BTS"
                />  */}
                <Input addonAfter="BTSv" />
            </Card>
        );
        let offers = (
            <Card style={{borderRadius: "10px"}}>
                Some text
                <Input addonAfter="X/Y" />
            </Card>
        );

        return (
            <div
                className="container no-overflow wrap shrink"
                style={{padding: "10px"}}
            >
                <Card>
                    {smallScreen ? (
                        <div>
                            <Row>
                                <Col style={{padding: "10px"}}>{account}</Col>
                            </Row>
                            <Row>
                                <Col style={{padding: "10px"}}>{account}</Col>
                            </Row>
                            <Row>
                                <Col style={{padding: "10px"}}>{offers}</Col>
                            </Row>
                        </div>
                    ) : (
                        <div>
                            <Row>
                                <Col span={12} style={{padding: "10px"}}>
                                    {account}
                                </Col>
                                <Col span={12} style={{padding: "10px"}}>
                                    {account}
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{padding: "10px"}}>{offers}</Col>
                            </Row>
                        </div>
                    )}
                    <Button>Propose</Button>
                </Card>
            </div>
        );
    }
}
