export PGDATABASE=rpgproject
export PGUSER=rpgproject
export PGPASSWORD=rpgproject

# Revert version

# v1
# No revert possible

# V2
# sqitch revert db:pg:rpgproject rpgproject_v1

# V3
sqitch revert db:pg:rpgproject rpgproject_V2
