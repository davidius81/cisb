#!/bin/bash

CLOUDSERVICE=cosneumgmtcs01
MACHINE_NAME=csib-node
CLOUD_CONFIG=/opt/cgi/cloud-config/cloud-config-csib1.yaml
SSH_CERT=/opt/cgi/cert/key/myCert.pem
VM_IMAGE=2b171e93f07c4903bcad35bda10acf22__CoreOS-Stable-681.0.0
USERNAME=core
AVAILABILITY_SET=eastuscsib
VNET=cosneuvnet010
SUBNET=puppetvlan010

for INSTANCE in {1..3}
do

azure vm create --custom-data=${CLOUD_CONFIG} \
    --ssh=42`printf "%03d" ${INSTANCE}` \
    --ssh-cert=${SSH_CERT} --no-ssh-password \
    --vm-name=${MACHINE_NAME}`printf "%04d" ${INSTANCE}` \
    --connect=${CLOUDSERVICE} \
    --availability-set ${AVAILABILITY_SET} \
    --virtual-network-name ${VNET} \
    --subnet-names ${SUBNET} \
    ${VM_IMAGE} \
    ${USERNAME}

done
