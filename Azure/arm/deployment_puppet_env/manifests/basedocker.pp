


#class {'docker':
#  dns => '168.63.129.16, --insecure-registry cosneuqanode03:5000' ,
#  insecure_registry => 'cosneuqanode03:5000'
#}

## I have modify the docker Module to add the insecure_registry attribute.

class {'docker':
  dns => '168.63.129.16',
  insecure_registry => 'cosneuqanode03:5000'
}

