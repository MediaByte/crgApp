import React from 'react';

//UI Components
import { 
    Row, 
    Col, 
    Spin 
} from 'antd';

export default class Loading extends React.Component {

    render() {
        return (
            <Row>
                <div className='mt6'>
                    <Col offset={11} span={4}>
                        <br/><br/><br/><br/>
                        <Spin color='' size='large' spinning={true} tip={'Loading...'} />
                    </Col>
                </div>
            </Row>
        )

    }

}