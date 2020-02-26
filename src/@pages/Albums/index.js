import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card, Icon } from 'antd';
import { getAlbumsAction } from '../../@store/actions';

const Albums = props => {
  const {
    albumList,
    getAlbumsAction,
    match: { params }
  } = props;

  const idUser = params.id;

  const fetchData = useCallback(() => {
    getAlbumsAction(idUser);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {!!albumList.length &&
          albumList.map((val, idx) => (
            <Col span={12} key={val.id}>
              <Card
                actions={[
                  <Link to={`/${val.id}/albums`}>
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
    albumList: state.getAlbumsReducer
  };
};

export default connect(mapStateToProps, { getAlbumsAction })(Albums);
