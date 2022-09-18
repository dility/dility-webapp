# dility frontend application

dility.io frontend webapplication

## Independent deployment of frontend

> using tools like `docker` and `k8`

- bounded context
- avoid distributed monolith
- dropping bombs on ants - Is it over-engineered ?

### Frontend challenges

- cross-component communication
- visual consistency
- static build tools
  - bundlers expect everything to be avilable @buildtime
- single deployment bottleneck
- reliable E2E test on the top of pyramid is hard and maintenance nightmare
  - microfrontends
  - build time integration in monorepos, links 
