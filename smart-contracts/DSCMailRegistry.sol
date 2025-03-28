// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;


/// @title Registry Contract
/// @notice Maintains a registry of users with their username and deployed user contract address.
contract DSCMailRegistry {
    struct UserInfo {
        string username;
        address userContract;
        bool exists;
    }
    
    // Mapping from user address to their details.
    mapping(address => UserInfo) public users;
    
    event UserAdded(address indexed user, string username, address userContract);
    event UserRemoved(address indexed user);
    
    /// @notice Internal function to add a user to the registry.
    /// @param _user The address of the user.
    /// @param _username The username of the user.
    /// @param _userContract The address of the deployed user contract.
    function _addUser(
        address _user, 
        string memory _username, 
        address _userContract
    ) internal {
        users[_user] = UserInfo({
            username: _username,
            userContract: _userContract,
            exists: true
        });
        emit UserAdded(_user, _username, _userContract);
    }
    
    /// @notice Internal function to remove a user from the registry.
    /// @param _user The address of the user to remove.
    function _removeUser(address _user) internal {
        require(users[_user].exists, "User does not exist");
        delete users[_user];
        emit UserRemoved(_user);
    }
    
    /// @notice Returns user info.
    /// @param _user The address of the user.
    /// @return username, userContract address, and whether the user exists.
    function getUserInfo(address _user) public view returns (string memory, address, bool) {
        UserInfo memory info = users[_user];
        return (info.username, info.userContract, info.exists);
    }
}