// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract FundMe {

    struct FundRise{
        address owner;
        string title;
        string description;
        uint256 target ;
        uint256 deadline ;
        uint256 amountCollected;
        string image ;
        string uni;
        address[] donators;
        uint256[] donations;

    }

    mapping(uint256 => FundRise) public fundRises ;

    uint256 public numOfFundRises =  0 ;

    // what functionality our contract has ?
    function createFundRise(address _owner, string memory _title , string memory _uni, string memory _description , uint256 _target , uint256 _dealine , string memory _image ) public returns (uint256) {
       FundRise storage fundrise = fundRises[numOfFundRises];
       // is all good ?
       require(fundrise.deadline < block.timestamp , "The deadline should be a date in future");
       fundrise.owner = _owner;
       fundrise.title = _title;
       fundrise.description = _description;
       fundrise.target = _target;
       fundrise.uni = _uni ;
       fundrise.amountCollected = 0;
       fundrise.deadline = _dealine;
       fundrise.image = _image;


       numOfFundRises++;
       return numOfFundRises - 1 ;

    }

    function makeDonation(uint256 _id) public payable{

        uint256 amount = msg.value;
        FundRise storage fundrise = fundRises[_id];
        fundrise.donators.push(msg.sender);
        fundrise.donations.push(amount);


        (bool sent , ) = payable(fundrise.owner).call{value:amount}("");

        if(sent){
           fundrise.amountCollected = fundrise.amountCollected + amount;
       }
    }


    function getDonators(uint256 _id) view public returns (address[] memory , uint256[] memory){

         return (fundRises[_id].donators , fundRises[_id].donations);


    }

    function getAllFundRises() view public returns (FundRise[] memory){

        FundRise[] memory allFundRise = new FundRise[](numOfFundRises);


        for(uint i = 0 ; i < numOfFundRises ; i++){

            FundRise storage item = fundRises[i];

            allFundRise[i] = item;



        }

    }

}
