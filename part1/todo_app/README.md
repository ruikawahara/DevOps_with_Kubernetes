# DevOps with K8s - Part 1
## *Table of Contents*
---
1. [Exercise 1.02: Project v0.1](#102-project-v01)

## 1.02: Project v0.1
---

### **Objective**:
---

Using any language(s)/framework(s), create a web server that will:
- Output `Server started in port <####>` when it starts 
- Deploy it into Kubernetes cluster

*Note: Later exercises will be built off of this exercise.*

### **Solution**
---

Using `node` + `express`, I made [this](https://hub.docker.com/r/ruikawahara/web_server) Docker image.

Use following command to deploy into K8s cluster:

``` bash
# Start k3d... assuming you created cluster
k3d cluster start

# Deploy Docker image
kubectl create deployment web-server-dep --image=ruikawahara/web_server

# (optional) Check result
kubectl get deployments
kubectl logs -f <pod_name>
```