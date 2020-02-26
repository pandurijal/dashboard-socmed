import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col, Card, Icon } from 'antd';
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
      <Row gutter={[16, 16]}>
        {!!userList.length &&
          userList.map((val, idx) => (
            <Col span={12} key={val.id}>
              <Card
                actions={[
                  <Link to={`/${val.id}/post`}>
                    <Icon key="read" type="read" />
                  </Link>,
                  <Link>
                    <Icon key="picture" type="picture" />
                  </Link>
                ]}
              >
                <p>
                  {val.name} | <b>{val.username}</b>
                </p>
                <p>
                  {val.email} | <a href={val.website}>{val.website}</a>
                </p>
                <p>{val.phone}</p>
              </Card>
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
