

#Redis:
Redis does not support encryption. In order to implement setups where trusted parties can access a Redis instance over the internet or other untrusted networks, an additional layer of protection should be implemented, such as an SSL proxy.

## Configure an stunnel to wrap redis connection:

http://bencane.com/2014/02/18/sending-redis-traffic-through-an-ssl-tunnel-with-stunnel/
