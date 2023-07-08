export PGDATABASE=comitedesfetes
export PGUSER=comitedesfetes
export PGPASSWORD=comitedesfetes

# je déploie

sqitch deploy db:pg:comitedesfetes 2_Ajouttables
