// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract PenyimpanTugas {
    string public tugasTerakhir;
    address public pemilik;

    constructor() {
        pemilik = msg.sender;
    }

    function simpanTugas(string memory _judul) public {
        tugasTerakhir = _judul;
    }

    function ambilTugas() public view returns (string memory) {
        return tugasTerakhir;
    }
}
