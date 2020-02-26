import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';
import { getPostsAction } from '../../@store/actions';

const PostList = props => {
  const {
    postList,
    getPostsAction,
    match: { params }
  } = props;

  const idUser = params.id;
  console.log({ postList, idUser });

  const fetchData = useCallback(() => {
    getPostsAction(idUser);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Row>
        {!!postList.length &&
          postList.map((val, idx) => (
            <Col span={24} key={val.id}>
              <Link to={`/${val.id}/post`}>
                <Card>
                  <p>{val.title}</p>
                  <p>{val.body}</p>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  console.log({ state });
  return {
    postList: state.getPostsReducer
  };
};

export default connect(mapStateToProps, { getPostsAction })(PostList);
