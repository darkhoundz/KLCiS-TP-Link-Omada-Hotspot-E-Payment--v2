# KLCiS-TP-Link-Omada-Hotspot-E-Payment-V3 (Express Checkout Store - Gcash | Maya)

![2024-03-20 21_56_26-Control Panel](https://github.com/darkhoundz/KLCiS-TP-Link-Omada-Hotspot-E-Payment--v2/assets/28075740/9686792a-5faf-4af7-ac6d-da5151f6223f)
![2024-03-20 21_56_38-Control Panel](https://github.com/darkhoundz/KLCiS-TP-Link-Omada-Hotspot-E-Payment--v2/assets/28075740/1fea744b-616d-4f01-ada0-f975c345b546)

### Edit the index.html find this line and replace the value with your KLCiS API KEY:
    <input type="hidden" class="form-control" id="tokenInput" name="token" value="PUT_YOUR_KLCIS_API_KEY_HERE">

### Edit also the the amount/price value depending on the voucher amount that you have uploaded on your KLCiS Admin Dashboard

    <option value="11">₱11.00 - PROMO! 1 DAY UNLI (no pause)</option>
    <option value="5">₱5.00 - 3 HOURS (no exp.|unli pause)</option>
    <option value="10">₱10.00 - 7 HOURS (no exp.|unli pause)</option>
    <option value="20">₱20.00 - 1 day (no exp.|unli pause)</option>
    <option value="50">₱50.00 - 3 DAYS INTERNET</option>
    <option value="100">₱100.00 - 7 DAYS INTERNET</option>
    <option value="180">₱180.00 - 15 DAYS INTERNET</option>
    <option value="300">₱300.00 - 30 DAYS INTERNET</option>

### Finally, add the pre-authentication access hosts and IP. Use the /24 IP block for IP addresses and 8080 for domains.
