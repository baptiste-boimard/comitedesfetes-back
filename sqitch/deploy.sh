export PGDATABASE=comitedesfetes
export PGUSER=comitedesfetes
export PGPASSWORD=comitedesfetes

# je déploie la version rpgproject sur rpgproject

sqitch deploy db:pg:comitedesfetes 2_ajout_table_admin

# sqitch deploy db:pg:rpgproject rpgproject_v1

