import os
import subprocess

# Définir le répertoire racine comme celui où se trouve le script
root_directory = './'

# Fonction pour chercher les lignes et ouvrir les fichiers concernés
def search_and_open_files(root_dir):
    found_lines = 0  # Compteur pour limiter à 10 résultats
    for subdir, _, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".js"):  # Vérifie les fichiers .js uniquement
                file_path = os.path.join(subdir, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        lines = f.readlines()
                        for line_number, line in enumerate(lines, start=1):
                            if 'handleAnswers(' in line  and 'compare:' not in line and 'formatInteractif' not in line and 'fonctionComparaison' not in line:
                                # Afficher le résultat
                                print(f"{found_lines} : Found in {file_path}, line {line_number}: {line.strip()}")
                                
                                # Ouvrir le fichier dans VSC à la ligne concernée
                                subprocess.run(["code", "-g", f"{file_path}:{line_number}"])
                                
                                # Incrémenter le compteur
                                found_lines += 1
                                # if found_lines >= 10:  # Limite à 10 résultats
                                #    return
                except Exception as e:
                    print(f"Erreur lors de la lecture de {file_path}: {e}")

# Exécuter la recherche
search_and_open_files(root_directory)
