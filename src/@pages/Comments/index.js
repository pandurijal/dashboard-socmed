import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card, Icon } from 'antd';
import { getCommentsAction } from '../../@store/actions';

const Comments = props => {
  const {
    commentList,
    getCommentsAction,
    match: { params }
  } = props;

  const idPost = params.id;

  const fetchData = useCallback(() => {
    getCommentsAction(idPost);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {!!commentList.length &&
          commentList.map((val, idx) => (
            <Col span={12} key={val.id}>
              <Card
                title={val.name}
                extra={val.email}
                actions={[
                  <Link to={`/${val.id}/comments`}>
                    <Icon key="picture" type="picture" />
                  </Link>
                ]}
              >
                <p>{val.body}</p>
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
    commentList: state.getCommentsReducer
  };
};

export default connect(mapStateToProps, { getCommentsAction })(Comments);
