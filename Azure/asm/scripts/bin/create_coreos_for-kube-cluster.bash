#!/bin/bash

for i in {1..3}
do

azure vm create --custom-data=/opt/cgi/cloud-config/cloud-config-kube.yaml  --ssh=4100$i --ssh-cert=/opt/cgi/cert/key/myCert.pem --no-ssh-password --vm-name=coseukubenode$i --availability-set eastuscsib --connect=cosneumgmtcs01 --virtual-network-name cosneuvnet010 --subnet-names puppetvlan010,dockers 2b171e93f07c4903bcad35bda10acf22__CoreOS-Alpha-709.0.0 core

done
