export PGDATABASE=rpgproject
export PGUSER=rpgproject
export PGPASSWORD=rpgproject

# je déploie la version rpgproject sur rpgproject

sqitch deploy db:pg:rpgproject rpgproject_V3

# sqitch deploy db:pg:rpgproject rpgproject_v1
# sqitch deploy db:pg:rpgproject rpgproject_V2
# sqitch deploy db:pg:rpgproject rpgproject_V3
