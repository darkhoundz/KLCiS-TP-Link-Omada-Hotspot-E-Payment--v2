# KLCiS TP Link Omada Hotspot Minimalist E-Payment V3 (Gcash | Maya | ShopeePay)

## REQUIRED BEFORE THE SETUP:

    ENABLE the HTTPS Redirection on your Omada Portal, Login to your Omada Cloud/hardware controller, select your Site, go to Settings > Portal > Edit  > CHECK the HTTPS Redirection. This is to prevent slow KLCiS Voucher System payment method loading time.

## USE WINRAR TO ZIP THE index.html and the resources folder ONLY. DO NOT USE WINZIP TO PREVENT UNSUPPORTED BROWSER ERROR.

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

### SCREENSHOTS:
![4](https://github.com/user-attachments/assets/2c354e3c-2b54-4949-9fec-5f8d572e657f)
![3](https://github.com/user-attachments/assets/901c802e-4227-4d9b-8652-74211f278b60)
![2](https://github.com/user-attachments/assets/d0464b91-adc1-46c6-a4b5-473cb083f625)
![1](https://github.com/user-attachments/assets/ae5226d5-0065-40d5-bea0-ffa99fce6ad3)
