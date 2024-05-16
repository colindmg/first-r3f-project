#!/bin/bash

# Convertir chaque fichier PNG en WebP et supprimer l'original
for file in *.png; do
    # Créer le nom du nouveau fichier WebP
    webp_file="${file%.*}.webp"

    # Convertir PNG en WebP
    cwebp "$file" -o "$webp_file" -q 100

    # Si la conversion réussit, supprimer le fichier PNG d'origine
    if [ $? -eq 0 ]; then
        rm "$file"
    fi
done