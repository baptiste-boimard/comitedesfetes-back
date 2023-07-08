export PGDATABASE=comitedesfetes
export PGUSER=comitedesfetes
export PGPASSWORD=comitedesfetes

# Revert version

sqitch revert db:pg:comitedesfetes 1_create-DB
