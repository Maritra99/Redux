import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../Redux/actionCreators";

const UserContainer = (props) => {
  useEffect(() => {
    props.fetchUser();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      {props.userData.loading ? (
        <>Loading...</>
      ) : (
        <>
          {props.userData.errorMessage ? (
            <>{props.userData.errorMessage}</>
          ) : (
            <>
              {props.userData.users &&
                props.userData.users.map((user, index) => (
                  <p key={index}>{user.name}</p>
                ))}
            </>
          )}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
