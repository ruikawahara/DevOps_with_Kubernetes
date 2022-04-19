# DevOps with K8s - Part 1
## Ex 1.01: Getting started
---

### **Objective**:
---

Using any language(s)/framework(s), create an app that will:
 - Generates random strings on startup
 - Stores the string into memory
 - Output every 5 sec. with timestamp

Once the app is done, deploy it into K8s cluster and confirm its results.

*Note: This exercise will be used again in future exercise.*


### **Solution**
---

There are two parts to this solution.

*Part 1 - Docker Image*
Using Docker and JavaScript, I've made an [image](https://hub.docker.com/r/ruikawahara/log_output) that can output timestamp and random hash values.

*Part 2 - Deploy to K8s*

Following are the commands I've used to deploy:

``` bash
# start your k3d cluster
k3d cluster start

# create deployment... MUST BE LOWERCASE
kubectl create deployment stringtimestamp-dep --image=ruikawahara/log_output

# check your pod name 
kubectl get pods

# see output
kubectl logs -f stringtimestamp-dep-<result_of_get_pods>

# (optional) stop your k3d cluster
k3d cluster stop
```
