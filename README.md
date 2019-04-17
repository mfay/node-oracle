# node-oracle
Simple node express application talking to oracle

## nodejs 10_x
`curl -sL https://rpm.nodesource.com/setup_10.x | bash -`  
`yum install -y nodejs`  

## phusion
`yum install -y mod_passenger`

# apache conf
```apache
<Directory /www/gvsu/Node>  
        PassengerBaseURI /Node  
        PassengerAppRoot /www/gvsu/Node  
        PassengerAppType node  
        PassengerStartupFile bin/www 
</Directory>
```
