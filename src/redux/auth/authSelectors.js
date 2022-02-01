const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getIsRefreshUser = state => state.auth.isRefreshUser;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getIsRefreshUser
};

export default authSelectors;