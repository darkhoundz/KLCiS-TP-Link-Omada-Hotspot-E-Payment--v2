# KLCiS TP Link Omada Hotspot Minimalist E-Payment V3 (Gcash | Maya | ShopeePay)

## REQUIRED BEFORE THE SETUP:
    DISABLE the HTTPS Redirection on your Omada Portal, Login to your Omada Cloud/hardware controller, select your Site, go to Settings > Portal > Edit  > UNCHECK/DISABLE the HTTPS Redirection. This is to prevent slow KLCiS Voucher System payment method loading time.
## USE WINRAR TO ZIP THE index.html and the resources folder. DO NOT USE WINZIP TO PREVENT UNSUPPORTED BROWSER ERROR.

### Edit the index.html find this line and replace the value with your KLCiS API KEY:
    <input type="hidden" class="form-control" id="tokenInput" name="token" value="PUT_YOUR_KLCIS_API_KEY_HERE">

### Edit also the the amount/price value depending on the voucher amount that you have uploaded on your KLCiS Admin Dashboard

    <option value="5">₱5.00 - 3 HOURS (no exp.|unli pause)</option>
    <option value="10">₱10.00 - 7 HOURS (no exp.|unli pause)</option>
    <option value="20">₱20.00 - 1 day (no exp.|unli pause)</option>
    <option value="50">₱50.00 - 3 DAYS INTERNET</option>
    <option value="100">₱100.00 - 7 DAYS INTERNET</option>
    <option value="180">₱180.00 - 15 DAYS INTERNET</option>
    <option value="300">₱300.00 - 30 DAYS INTERNET</option>

### In your Omada controller go to Settings > Portal > Access Control and enable the Pre-Authentication. Finally, add the pre-authentication access hosts URL and IP in the PRE-AUTHENTICATION.txt file.
