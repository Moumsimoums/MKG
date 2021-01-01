# MKG

**Travailler sur un projet sur deux ordis différents :**

1 Initialiser un repo de code sur Ordi 1

2 Dans git, lancer les instructions suivantes : git init, git add ., git commit -am "init" puis créer un repo à la main sur github

3 Pour faire en sorte que ce soit défini comme l'origine du projet : git remote add origin lien_git

4 Pousser sur le git : git push -u origin --all

5 Editer un fichier, puis : git commit -am "Update 1", git push origin master

6 Vérifier que la modif est bien passée

7 Sur l'ordi 2 : git clone https://<accesstoken_stocké_sur_mac>@github.com/moumsimoums/project.git

8 Editer un fichier, puis : git commit -am "Update 2", git push origin master

9 Vérifier que c'est bien passé

**Pousser un changement :**

1 git pull origin master

2 Faire le changement

3 git add . (seulement s'il y a des nouveaux fichiers)

4 git commit -am "Mon changement"

5 git push origin master

# Update :
## KHOUKHOU

git commit -a (le -a sert à add tous les fichiers modifiés donc il y a une redondance dans ton process)

git commit -m "toto" suffit si tu as fait git add *normalement*, ou alors git commit -am et pas besoin de faire git add .

## par contre..

s'agirait de faire des branches si je fais des corrections ahah:

git checkout -b MaNouvelleBranche

ou git branch MaNouvelleBranche puis git checkout MaNouvelleBranche

git push origin MaNouvelleBranche

==> PullRequest sur github pour merge sur master