import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card, Icon } from 'antd';
import { getPostsAction, deletePostAction } from '../../@store/actions';

const Posts = props => {
  const {
    postList,
    getPostsAction,
    match: { params }
  } = props;

  const idUser = params.id;

  const fetchData = useCallback(() => {
    getPostsAction(idUser);
  }, []);

  const deletePost = id => {
    deletePostAction(id);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {!!postList.length &&
          postList.map((val, idx) => (
            <Col span={24} key={val.id}>
              <Card
                title={val.title}
                actions={[
                  <Link to={`/${val.id}/comments`}>
                    <Icon key="message" type="message" />
                  </Link>,
                  <Link to={`/${val.id}/albums`}>
                    <Icon key="edit" type="edit" />
                  </Link>,
                  <div onClick={() => deletePostAction(val.id)}>
                    <Icon key="delete" type="delete" />
                  </div>
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
  return {
    postList: state.getPostsReducer
  };
};

export default connect(mapStateToProps, { getPostsAction, deletePostAction })(
  Posts
);
