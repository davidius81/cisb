#!/bin/bash

CLOUDSERVICE=cosneumgmtcs01
MACHINE_NAME=csib-snappy
CLOUD_CONFIG=/opt/cgi/cloud-config/cloud-snappy.cfg
SSH_CERT=/opt/cgi/cert/key/myCert.pem
VM_IMAGE=`azure vm image list | grep -i _Ubuntu-rolling-Snappy | tail -1| awk '{print $2}'`
USERNAME=dlalonde
AVAILABILITY_SET=eastuscsib
VNET=cosneuvnet010
SUBNET=puppetvlan010

for INSTANCE in {1..3}
do

azure vm create --custom-data=${CLOUD_CONFIG} \
    --ssh=32`printf "%03d" ${INSTANCE}` \
    --ssh-cert=${SSH_CERT} --no-ssh-password \
    --vm-name=${MACHINE_NAME}`printf "%04d" ${INSTANCE}` \
    --connect=${CLOUDSERVICE} \
    --availability-set ${AVAILABILITY_SET} \
    --virtual-network-name ${VNET} \
    --subnet-names ${SUBNET} \
    ${VM_IMAGE} \
    ${USERNAME}

done

