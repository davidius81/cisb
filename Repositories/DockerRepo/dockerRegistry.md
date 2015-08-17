# Docker Registry



###Populate a private registry:

Pull the original
```
# docker tag sameersbn/postgresql:9.4-3 cosneuqanode03:5000/csib/gitlab-postgresql:9.4-3
```
Push your local image to your Registry:

```
# docker push  cosneuqanode03:5000/csib/gitlab-postgresql:9.4-3
The push refers to a repository [cosneuqanode03:5000/csib/gitlab-postgresql] (len: 1)
6fc4cce07194: Image already exists
4d6c625030fc: Image successfully pushed
995897cb2176: Image successfully pushed
19e88aeeb960: Image successfully pushed
11af4467b0be: Image successfully pushed
52a03596f7b5: Image successfully pushed
6e5716c5d534: Image successfully pushed
20cb7d551e14: Image successfully pushed
d795420dcd5b: Image successfully pushed
1a097b8248bf: Image successfully pushed
33ab46909076: Image successfully pushed
63e3c10217b8: Image already exists
389028aa9e91: Image successfully pushed
dac7bccb8ac3: Image successfully pushed
2eaf0096818b: Image successfully pushed
Digest: sha256:f86216d40d872844811270c51eadf5dcb9600a3d060d79f264792eb5b06ca135
```
List your Docker registry

```
# docker images | grep csib
cosneuqanode03:5000/csib/gitlab-postgresql   9.4-3               6fc4cce07194        3 days ago          231.5 MB
```

Pull the new image:
```
# docker pull  cosneuqanode03:5000/csib/gitlab-postgresql:9.4-3

```

