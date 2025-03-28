// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;



contract DSCMailCore {
    using Clones for address;

    // Address of the deployed Inbox implementation.
    address public immutable inboxImplementation;

    // Mapping from user address to their cloned Inbox contract.
    mapping(address => address) public inboxes;

    // Mapping to store additional user information (like username).
    mapping(address => string) public usernames;

    event UserRegistered(address indexed user, address inbox, string username);
    event MailSent(address indexed sender, address indexed recipient, string subject);

    /// @notice Constructor sets the deployed Inbox implementation.
    /// @param _inboxImplementation Address of the deployed Inbox contract.
    constructor(address _inboxImplementation) {
        inboxImplementation = _inboxImplementation;
    }

    /// @notice Register a new user and deploy a clone of the Inbox contract.
    /// @param _username An optional username.
    function registerUser(string memory _username) external {
        require(inboxes[msg.sender] == address(0), "User already registered");

        // Create a clone of the Inbox contract.
        address cloneInbox = inboxImplementation.clone();
        inboxes[msg.sender] = cloneInbox;
        usernames[msg.sender] = _username;

        emit UserRegistered(msg.sender, cloneInbox, _username);
    }

    /// @notice Send a mail from the sender to a registered recipient.
    /// @param _recipient The address of the recipient.
    /// @param _subject The subject of the mail.
    /// @param _body The body of the mail.
    function sendMail(
        address _recipient,
        string memory _subject,
        string memory _body
    ) external {
        require(inboxes[msg.sender] != address(0), "Sender not registered");
        require(inboxes[_recipient] != address(0), "Recipient not registered");

        // Forward the mail to the recipient's Inbox contract.
        Inbox(inboxes[_recipient]).receiveMail(msg.sender, _subject, _body);

        emit MailSent(msg.sender, _recipient, _subject);
    }
}
