// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract FundCreators {
    /*State Variables */

    uint256 private s_minFundAmount;

    struct User {
        address payable walletAddress;
        string name;
        bool isDisabled;
        bool isCreator;
        uint256 totalContributorsCount;
        uint256 totalFundsReceieved;
        uint256 totalCreatorsFundedCount;
        uint256 totalFundsSent;
    }

    struct Creator {
        string name;
        string country;
        string img;
        string description;
        string emailId;
        string youtubeAddress;
        string instagram;
    }

    mapping(address => mapping(address => uint256)) private s_sentFundsList;
    mapping(address => mapping(address => uint256)) private s_receivedFundsList;

    mapping(address => User) private addressToUser;
    mapping(address => Creator) private addressToCreator;

    address[] private usersList;
    address[] private creatorsList;

    constructor(uint256 _minFundAmount) {
        s_minFundAmount = _minFundAmount;
    }

    /* Events */
    event NewUserCreated(address indexed newUser);
    event CreatorUpdatedOrCreated(address indexed creator);
    event CreatorPaid(address indexed send, address indexed receiver);

    /* modifer*/
    modifier isUser() {
        require(
            addressToUser[msg.sender].walletAddress != address(0),
            "Register the user"
        );
        _;
    }

    function createUser(string memory _name) public returns (bool) {
        require(
            addressToUser[msg.sender].walletAddress == address(0),
            "Already a existing user"
        );
        address payable walletAdd = payable(msg.sender);
        addressToUser[msg.sender] = User(
            walletAdd,
            _name,
            false,
            false,
            0,
            0,
            0,
            0
        );
        usersList.push(msg.sender);
        emit NewUserCreated(msg.sender);
        return true;
    }

    function createOrUpdateCreators(
        string memory _name,
        string memory _country,
        string memory _img,
        string memory _description,
        string memory _emailId,
        string memory _youtubeAdd,
        string memory _instagram
    ) public isUser returns (bool) {
        User storage user = addressToUser[msg.sender];
        if (user.isCreator == false) {
            creatorsList.push(msg.sender);
        }
        user.isCreator = true;
        addressToCreator[msg.sender] = Creator(
            _name,
            _country,
            _img,
            _description,
            _emailId,
            _youtubeAdd,
            _instagram
        );
        emit CreatorUpdatedOrCreated(msg.sender);
        return true;
    }

    function donateCreator(address payable _creator)
        public
        payable
        returns (bool)
    {
        require(
            addressToUser[_creator].isCreator == true,
            "User is not a creator"
        );
        require(
            addressToUser[_creator].isDisabled == false,
            "Creators is disabled"
        );
        require(msg.value >= s_minFundAmount, "Donation amount too low");
        (bool success, ) = _creator.call{value: msg.value}("");
        if (success) {
            if (s_sentFundsList[msg.sender][_creator] == 0) {
                addressToUser[msg.sender].totalCreatorsFundedCount++;
            }
            s_sentFundsList[msg.sender][_creator] += msg.value;
            addressToUser[msg.sender].totalFundsSent += msg.value;
            if (s_receivedFundsList[_creator][msg.sender] == 0) {
                addressToUser[msg.sender].totalContributorsCount++;
            }
            s_receivedFundsList[_creator][msg.sender] += msg.value;
            addressToUser[msg.sender].totalFundsReceieved += msg.value;
            emit CreatorPaid(msg.sender, _creator);
            return true;
        }
    }

    function getMinDonation() public view returns (uint256) {
        return s_minFundAmount;
    }

    function getUserList() public view returns (address[] memory) {
        return usersList;
    }

    function getUser(address _user) public view returns (User memory) {
        return addressToUser[_user];
    }

    function getCreators(address _creator)
        public
        view
        returns (Creator memory)
    {
        return addressToCreator[_creator];
    }

    function getCreatorsList() public view returns (address[] memory) {
        return creatorsList;
    }

    function getAmountFundedToCreator(address _creator)
        public
        view
        returns (uint256)
    {
        return s_sentFundsList[msg.sender][_creator];
    }

    function getAmountReceivedByCreator(address _funder)
        public
        view
        returns (uint256)
    {
        require(addressToUser[msg.sender].isCreator == true, "Not a creator");
        return s_receivedFundsList[msg.sender][_funder];
    }
}
