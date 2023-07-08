export PGDATABASE=comitedesfetes
export PGUSER=comitedesfetes
export PGPASSWORD=comitedesfetes

# je déploie la version rpgproject sur rpgproject

sqitch deploy db:pg:comitedesfetes 1_create-DB

# sqitch deploy db:pg:rpgproject rpgproject_v1