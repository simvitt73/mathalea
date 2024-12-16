import re

# Lire le fichier d'entrée
with open('dictionnaireDNB.js', 'r', encoding='utf-8') as f:
    data = f.read()

# Fonction pour traiter chaque bloc et supprimer les entrées `png` et `pngCor`
def supprimer_urls(match):
    bloc = match.group(0)  # Le contenu complet du bloc entre accolades
    # Supprimer toutes les occurrences de `png` et `pngCor`
    bloc = re.sub(r"png(?:Cor)?: '([^']+)',?\s*", '', bloc)
    return bloc

# Expression régulière pour trouver chaque bloc (entre accolades)
pattern = re.compile(r"{[^{}]*}")

# Appliquer la suppression sur chaque bloc
data_modifie = pattern.sub(supprimer_urls, data)

# Sauvegarder le fichier modifié
with open('dictionnaireDNB2.js', 'w', encoding='utf-8') as f:
    f.write(data_modifie)

print("Les entrées `png` et `pngCor` ont été supprimées avec succès.")
