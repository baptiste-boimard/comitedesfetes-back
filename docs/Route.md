# Route

## Route Front

|Route|URL|Page|
|:-----------:|:--------------:|:-------:|
|GET|/|Page d'accueil|
|-|/faq_contact|Page FAQ / Contact|
|-|/play/|Page d'accueil de sélection du niveau|
|-|/play/:level|Page du niveau choisi|
|-|/member/:player_id|Page d'accueil membre|
|-|/member/:player_id/profil|Page profil du membre|
|-|/member/:player_id/edit|Page d'édition d'un niveau|
|-|/member/:player_id/edit/:level_id|Page d'édition d'un niveau précis|
||||
|POST|/|/member/:player_id|
|-|/|/member/:player_id|
|-|/play/|/play/:level|
||||
|PUT|/member/:player_id/profil|/member/:player_id/profil|
|-|/member/:player_id/edit/:level_id|/member/:player_id/edit/:level_id|
|DELETE|/member/:player_id/profil|/member/:player_id/profil/:level_id|
||||

Pour la validation du niveau en cours d'édition cad sa publication
pe effectuer la validation au niveau du profil et non pas au niveau
de l'édition. Dans tous les cas --> Route PUT avec level_id qui
modifie dans la BDD la colonne publication TRUE/FALSE