# θ (Theta)

This project was created to wrap around Lambdas created using or for use with AWS SAM.  It operates by reading their 
template.yaml files and creating virtual routes to access them.  In this way you are able to live-debug their code!

## Setup

There are only a few steps necessary to setup your Lambda project(s).

1. Create a lambda project within the proper directory.
2. Setup configuration files.

### Create New Lambda
To create a new Lambda run the following

```shell script
sam init -r nodejs -o lambdas -n {lambda name}
```

### Setup Stage Variables

This is as simple as creating a `.env` file

## Future State

* Possibly move `.env` to another folder should it become needed to have the same variable with different values.
* Add configuration folder to each lambda or add a config folder that mimics the directory structure.