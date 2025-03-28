// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MailSystem {

    struct Mail {
        // address[] cc;
        uint256 timestamp;
        address sender;
        address receiver;
        string body;
        string subject;
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
        string memory _subject
    ) public {
        Mail memory newMail = Mail({
            // cc: _cc,
            timestamp: block.timestamp,
            sender: msg.sender,
            receiver: _receiver,
            body: _body,
            subject: _subject
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
