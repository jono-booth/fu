const walletData = {
    "wallets": {
        "0x12312312312312312312": 5,
        "0x12312312312312312454": 3
    }
};

$(document).ready(function() {
    $('#checkButton').click(function() {
        const wallet = $('#walletInput').val().trim();
        if (walletData.wallets.hasOwnProperty(wallet)) {
            $('#result').text(`Congrats! Your wallet will receive ${walletData.wallets[wallet]} FU airdropped.`);
        } else {
            $('#result').text("Sorry, your wallet is not eligible.");
        }
    });
});