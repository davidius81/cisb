#!/bin/bash

for i in {26..30}
do

echo azure vm create --custom-data=/opt/cgi/cloud-config.yaml  --ssh=400$i --ssh-cert=/opt/cgi/cert/key/myCert.pem --no-ssh-password --vm-name=coseudnode-$i --connect=cosneumgmtcs01 2b171e93f07c4903bcad35bda10acf22__CoreOS-Alpha-709.0.0 core

done
