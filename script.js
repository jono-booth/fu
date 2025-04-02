$(document).ready(function() {
    $('#checkButton').click(function() {
        const wallet = $('#walletInput').val().trim().toLowerCase();
        if (window.walletData.wallets.hasOwnProperty(wallet)) {
            $('#result').text(`Congrats! Your wallet will receive ${walletData.wallets[wallet]} FU airdropped.`);
        } else {
            $('#result').text("Sorry, your wallet is not eligible.");
        }
    });
});
