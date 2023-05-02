# 0. je prends l'identité de postgres
export PGUSER=postgres

# 1. Création d'un utilisateur en BDD ocolis_admin (with login)
createuser rpgproject --login --password

# 2. Création d'une BDD ocolis dont le propriétaire est ocolis_admin
createdb rpgproject --owner rpgproject

# 3. Initialiser Sqitch
sqitch init rpgproject_sqitch --engine pg # on indique qu'on travaille avec postgres (pg)

# 4. Je crèe une version 1 pour ma BDD
sqitch add rpgproject_v1 -n "Create DB"
