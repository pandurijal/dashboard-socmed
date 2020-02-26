import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card, Icon } from 'antd';
import { getPhotosAction } from '../../@store/actions';

const Photos = props => {
  const {
    photoList,
    getPhotosAction,
    match: { params }
  } = props;

  const idUser = params.id;

  const fetchData = useCallback(() => {
    getPhotosAction(idUser);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {!!photoList.length &&
          photoList.map((val, idx) => (
            <Col span={12} key={val.id}>
              <Card
                actions={[
                  <Link to={`/${val.id}/photos`}>
                    <Icon key="picture" type="picture" />
                  </Link>
                ]}
              >
                <p>{val.title}</p>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  console.log({ state });
  return {
    photoList: state.getPhotosReducer
  };
};

export default connect(mapStateToProps, { getPhotosAction })(Photos);
