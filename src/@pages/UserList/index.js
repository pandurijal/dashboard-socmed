import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'antd';
import { getUserListAction } from '../../@store/actions';

const UserList = props => {
  const { userList, getUserListAction } = props;

  const fetchData = useCallback(() => {
    getUserListAction();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log({ userList });

  return (
    <div>
      <Row>
        {!!userList.length &&
          userList.map((val, idx) => (
            <Col span={6} key={val.id}>
              <Link to={`/${val.id}/post`}>
                <Card>
                  <p>{val.name}</p>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userList: state.getUserListReducer
  };
};

export default connect(mapStateToProps, { getUserListAction })(UserList);
