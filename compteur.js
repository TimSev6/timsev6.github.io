// voir tuto ytb de Hardcodeur

const counter = document.getElementById('counter');

const updateCounter = async () => {  // async permet de mettre les "await", await dis au programme d'attendre la réponse de la requête avant de continuer sa progression (pour éviter les erreurs)
    const data = await fetch('https://api.countapi.xyz/hit/timsev/visits') // lien qui vient du site counterapi.com
    const count = await data.json() // converti en javascript
    counter.innerHTML = count.value.toLocaleString("fr-FR")
    counter.style.filter = 'blur(0)' // supprime l'effet blur ajouté dans le css. Effet permettant de cacher le visuel moche du changement de chiffre.
}

updateCounter();
