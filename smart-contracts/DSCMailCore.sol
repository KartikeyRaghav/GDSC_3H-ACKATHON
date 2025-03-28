// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import {DSCMailRegistry} from "./DSCMailRegistry.sol";
import {UserContract} from "./UserContract.sol";

/// @title DSCMailCore (Core Contract)
/// @notice Handles user registration, login, and deletion. Inherits from the Registry contract.
contract DSCMailCore is DSCMailRegistry {
    event Registered(address indexed user, string username, address userContract);
    event Deleted(address indexed user);
    
    /// @notice Register a new user.
    /// @param _username The chosen username (can be empty).
    function register(string memory _username) external returns (address)  {
        require(!users[msg.sender].exists, "Already registered");
        
        // Deploy a new User Contract for the user.
        UserContract userContract = new UserContract(msg.sender);
        
        // Add the user to the registry.
        _addUser(msg.sender, _username, address(userContract));

        return(address(userContract));
        
        emit Registered(msg.sender, _username, address(userContract));
    }
    
    /// @notice Log in by checking if the caller is registered.
    /// @return isRegistered, username, and the deployed user contract address.
    function login() external view returns (bool, string memory, address) {
        require(users[msg.sender].exists==true,"This account address is not registered on protocol!"); //check on this
        if (users[msg.sender].exists) {
            UserInfo memory info = users[msg.sender];
            return (true, info.username, info.userContract);
        } else {
            return (false, "", address(0));
        }
    }
    
    /// @notice Delete the caller's user registration.
    function deleteUser() external {
        require(users[msg.sender].exists, "Not registered");
        _removeUser(msg.sender);
        emit Deleted(msg.sender);
    }
}
