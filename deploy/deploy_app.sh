#!/bin/bash
kubectl apply -f deploy/deployment.yaml
kubectl apply -f deploy/service.yaml

minikube service app-service