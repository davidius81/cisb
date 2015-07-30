




SUBSCRIPTION_ID=c93a74b7-f399-405c-a8ae-6dc259fe7430
MGMT_CERT=/opt/cgi/cert/cert.pfx
IMAGE=5112500ae3b842c8b9c604889f8753c3__OpenLogic-CentOS-65-20150128

puppet $@ --azure-subscription-id=$SUBSCRIPTION_ID --management-certificate $MGMT_CERT

#puppet azure_vm create --azure-subscription-id=c93a74b7-f399-405c-a8ae-6dc259fe7430 --management-certificate /opt/cgi/cert/cert.pfx  --image=5112500ae3b842c8b9c604889f8753c3__OpenLogic-CentOS-65-20150128 --affinity-group-name=dl-affinity-test1 --location='South Central US' --vm-name=dl-node2 --vm-user=dlalonde --password='Mut3ro5)!' --puppet-master-ip=172.16.0.4 --cloud-service-name=dl-scus-cs-test1 --virtual-network-name="dlscus-ns-test1" --virtual-network-subnet="Subnet-1"
