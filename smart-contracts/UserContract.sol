// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

/// @title User Contract
/// @notice A minimal contract deployed for each registered user. Can be extended for user-specific logic.
contract UserContract {
    uint256 private constant MAX_MAIL_SUBJECT_LENGTH = 200;
    address public owner;
    string public profile_image;
    
    constructor(address _owner,string memory _profile_image) {
        owner = _owner;
        profile_image = _profile_image;
    }
    
    struct Mail {
        // address[] cc;
        uint256 timestamp;
        address sender;
        address receiver;
        string body;
        string subject;
        string attachment;
    }

    // Storage mappings
    mapping(address => Mail[]) private _sentMails;
    mapping(address => Mail[]) private _receivedMails;

    event MailSent(
        address indexed sender,
        address indexed receiver,
        uint256 timestamp
    );

    function sendMail(
        // address[] memory _cc,
        address _receiver,
        string memory _body,
        string memory _subject,
        string memory _attachment
    ) public {
        require(msg.sender==owner,"You are not owner of the mail account");
        require(_receiver != address(0), "Invalid receiver address");
        require(bytes(_subject).length <= MAX_MAIL_SUBJECT_LENGTH, "Subject too long");
        Mail memory newMail = Mail({
            // cc: _cc,
            timestamp: block.timestamp,
            sender: msg.sender,
            receiver: _receiver,
            body: _body,
            subject: _subject,
            attachment : _attachment
        });

        // Store in both sender's sent and receiver's received
        _sentMails[msg.sender].push(newMail);
        _receivedMails[_receiver].push(newMail);

        emit MailSent(msg.sender, _receiver, block.timestamp);
    }

    // Getter functions
    function getSentMailsCount() public view returns (uint256) {
        return _sentMails[msg.sender].length;
    }

    function getReceivedMailsCount() public view returns (uint256) {
        return _receivedMails[msg.sender].length;
    }

    function getSentMail(uint256 index) public view returns (Mail memory) {
        require(index < _sentMails[msg.sender].length, "Invalid index");
        return _sentMails[msg.sender][index];
    }

    function getReceivedMail(uint256 index) public view returns (Mail memory) {
        require(index < _receivedMails[msg.sender].length, "Invalid index");
        return _receivedMails[msg.sender][index];
    }

    // // Utility function to get CC list
    // function getMailCC(uint256 index, bool isSent) public view returns (address[] memory) {
    //     Mail memory mail = isSent ? 
    //         _sentMails[msg.sender][index] : 
    //         _receivedMails[msg.sender][index];
            
    //     return mail.cc;
    // }
}